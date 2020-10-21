let projects = document.getElementById("portfolio-content").children;
let projects_filter = [];
let projects_tech = [];
let projects_tag = [];

let all_techs = [];
let all_tags = [];
function get_all_filter_boutons() {
  let lis_techs = document
    .getElementById("filter-box")
    .getElementsByTagName("ul")[0].children;
  for (let li of lis_techs) {
    all_techs.push(li.children[0].innerText.toLowerCase());
  }
  let lis_tags = document
    .getElementById("filter-box")
    .getElementsByTagName("ul")[1].children;
  for (let li of lis_tags) {
    all_tags.push(li.children[0].innerText.toLowerCase());
  }
}
get_all_filter_boutons();
//console.log(all_tags, all_techs);

function generate_info() {
  for (let project of projects) {
    //tech
    techs = project.getElementsByClassName("techs");
    if (techs.length > 0) {
      techs = Array.prototype.map.call(techs[0].children, (x) => {
        return x.innerText.toLowerCase();
      });
    } else {
      techs = [];
    }

    projects_tech.push(techs);

    // tag
    tags = project.getElementsByClassName("tags");
    if (tags.length > 0) {
      tags = Array.prototype.map.call(tags[0].children, (x) => {
        return x.innerText.toLowerCase();
      });
    } else {
      tags = [];
    }
    projects_tag.push(tags);
  }
}
generate_info();
//console.log(projects_tag, projects_tech);

function filter_projects() {
  for (let i = 0; i < projects.length; i++) {
    project = projects[i];
    techs = projects_tech[i];
    tags = projects_tag[i];

    // Display if
    // Has one tag or no tag filter
    tags_filt = projects_filter.filter((x) => all_tags.includes(x));
    techs_filt = projects_filter.filter((x) => all_techs.includes(x));

    //console.log(projects_filter, tags_filt, techs_filt);
    //console.log(techs.filter((x) => techs_filt.includes(x)));
    test_filter = false;
    if (
      techs_filt.length == 0 ||
      techs.filter((x) => techs_filt.includes(x)).length != 0
    ) {
      if (
        tags_filt.length == 0 ||
        tags.filter((x) => tags_filt.includes(x)).length != 0
      ) {
        test_filter = true;
      }
    }
    project.hidden = !test_filter;
  }
}

function updateFilter(ele) {
  let name = ele.innerText.toLowerCase();
  if (!ele.classList.contains("filter-active")) {
    projects_filter.push(name);
    ele.classList.add("filter-active");
  } else {
    projects_filter.splice(projects_filter.indexOf(name), 1);
    ele.classList.remove("filter-active");
  }
  filter_projects();
}
