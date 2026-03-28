import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDir = path.join(process.cwd(), 'content');
const projectsDir = path.join(contentDir, 'projects');

export interface ProjectFrontmatter {
  id: string;
  title: string;
  company: string;
  company_url: string;
  company_description: string;
  image: string;
  tags: string[];
  links?: { text: string; url: string }[];
  date: string;
  featured: boolean;
}

export interface ProjectData extends ProjectFrontmatter {
  slug: string;
  contentHtml: string;
  excerpt: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  github: string;
  linkedin: string;
  email: string;
  contentHtml: string;
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

function extractExcerpt(content: string, maxLength = 200): string {
  const text = content
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\n+/g, ' ')
    .trim();
  return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + '…' : text;
}

export async function getAllProjects(): Promise<ProjectData[]> {
  const filenames = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.md'));

  const projects = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '');
      const filePath = path.join(projectsDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const contentHtml = await markdownToHtml(content);
      const excerpt = extractExcerpt(content);

      return {
        ...(data as ProjectFrontmatter),
        slug,
        contentHtml,
        excerpt,
      };
    })
  );

  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  const filePath = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const contentHtml = await markdownToHtml(content);
  const excerpt = extractExcerpt(content);

  return {
    ...(data as ProjectFrontmatter),
    slug,
    contentHtml,
    excerpt,
  };
}

export async function getAboutData(): Promise<AboutData> {
  const filePath = path.join(contentDir, 'about.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const contentHtml = await markdownToHtml(content);

  return {
    ...(data as Omit<AboutData, 'contentHtml'>),
    contentHtml,
  };
}

export function getAllProjectSlugs(): string[] {
  return fs
    .readdirSync(projectsDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}
