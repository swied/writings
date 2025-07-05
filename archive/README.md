# writings

```
.
├── _config.yml
├── index.md                  <-- Main page listing all projects
├── about.md                  <-- "About Me" page
├── _layouts/
│   ├── default.html          <-- Base layout for all pages
│   ├── project.html          <-- Layout for individual project overview pages
│   └── article.html          <-- Layout for individual articles
├── _includes/
│   ├── header.html           <-- Top navigation menu
│   ├── sidebar.html          <-- Left sidebar with project list and expand/collapse
│   └── footer.html           <-- Footer with social media links
├── _sass/                    <-- SASS files for styling (will compile to CSS)
│   └── main.scss             <-- Main SASS file, imports partials
├── assets/
│   ├── css/                  <-- Compiled CSS (GitHub Pages handles this automatically)
│   │   └── style.css
│   └── images/               <-- All site images (thumbnails, in-article images)
│       ├── homeless-crisis-thumbnail.jpg
│       ├── nature-photography-thumbnail.jpg
│       ├── historical-fiction-thumbnail.jpg
│       ├── in-article-image-1.jpg
│       └── in-article-image-2.png
├── _projects/                <-- Custom Jekyll Collection for Projects
│   ├── homeless-crisis.md    <-- Markdown file for "A deep dive into the homeless crisis" project overview
│   ├── nature-photography.md <-- Markdown file for "Exploring Nature Through Photography" project overview
│   └── historical-fiction.md <-- Markdown file for "Echoes of the Past: Historical Fiction" project overview
├── _posts/                   <-- Standard Jekyll Posts (for individual articles)
│   ├── 2023-10-26-root-causes.md     <-- Article for "Homeless Crisis" project
│   ├── 2023-10-28-solutions.md       <-- Article for "Homeless Crisis" project
│   ├── 2023-11-05-urban-wildlife.md  <-- Article for "Nature Photography" project
│   ├── 2023-11-10-landscape-shots.md <-- Article for "Nature Photography" project
│   ├── 2023-12-01-medieval-era.md    <-- Article for "Historical Fiction" project
│   └── 2023-12-08-victorian-life.md  <-- Article for "Historical Fiction" project
└── .gitignore                <-- Git ignore file to exclude generated files (_site, .jekyll-cache)
```