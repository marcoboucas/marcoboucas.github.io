import Image from "next/image"

interface AboutSectionProps {
  aboutMe: {
    p1: string
    p2: string
  }
}

export function AboutSection({ aboutMe }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-foreground">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div
                className="text-lg leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: aboutMe.p1 }}
              />
              <div
                className="text-lg leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: aboutMe.p2 }}
              />
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/personal.jpg"
                  alt="Marco Boucas"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
                AI Engineering Manager
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}