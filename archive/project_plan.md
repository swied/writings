# Website Plan: Organizing and Sharing Writing Projects (GitHub Pages)



This document outlines the step-by-step plan for designing and building a static website to showcase and organize your writing projects, hosted on GitHub Pages.



---



### Part 1: Content Structure



* **Main Page:** A primary page will list all your writing projects.

* **Project Articles:** Each project will consist of a few individual short articles.

* **Easy Content Addition:** The structure will be designed to make it easy to add new project pages and articles.

* **Markdown for Articles:** All written articles will be saved as Markdown files for easy rendering and management.



### Part 2: Technology Choice and Content Organization



* **Static Site Generator:** We will use **Jekyll** for generating the website, leveraging its native Markdown processing and GitHub Pages integration.  I like the Hyde theme.  Use it if possible.

* **Content Storage:**

    * All your written articles will be saved as individual Markdown files (`.md`).

    * These Markdown files will include "front matter" (a block of YAML at the top of the file) for metadata like title, author, date, and importantly, which project they belong to.  Projects and articles will always be sorted by default in descending chronological order.

* **Site Structure (Jekyll Specific):**

    * The main page (`index.html` or `index.md`) will list all your writing projects.

    * We will use a Jekyll "Collection" for your projects (e.g., a `_projects` folder), allowing for structured organization of project-related content.

    * Individual articles within each project can be stored in a way that Jekyll can easily process them, potentially within subfolders or by using consistent tagging/categorization in their front matter to link them to their parent project.

    * Assets, like images, should be stored under `_assets` and will be organized into subfolders pertaining to each project and article. 



### Part 3: Sample Content and Initial Setup



* **Sample Content Generation:** Generate sample Markdown files for:

    * A primary `index.md` (or equivalent) for the main page that will list projects.

    * **At least three sample projects**, including one specifically titled "A deep dive into the homeless crisis," each containing a few individual Markdown articles.  Generate names for the other projects, and articles contained within them.

    * These sample articles will demonstrate the required Jekyll front matter (e.g., title, date, categories/tags to link to the project).

* **Initial Jekyll Setup:** We'll outline the basic Jekyll file structure needed to get started with GitHub Pages. This will include:

    * `_config.yml` for basic site configuration.

    * A simple layout file (`_layouts/default.html` and potentially specific layouts for projects and articles) to define the overall page structure.

    * The necessary folders for your content (e.g., `_posts` or a custom collection like `_projects` and its articles).



### Part 4: Visual Design and Media Integration



* **Visually Engaging Aesthetic:** The design will aim for a more visually rich experience rather than a minimalist one.

* **Project Thumbnails:** On the main project listing page, each project heading will be accompanied by a small, relevant image (a "thumbnail" or "featured image").

    * This will be implemented by adding a new field (e.g., `thumbnail: /path/to/image.jpg`) to the front matter of each project's associated Markdown file.

    * The main page's Jekyll template will then display this image next to the project title.

* **In-Article Images:** You will be able to easily include images within the content of your articles using standard Markdown syntax (e.g., `![Alt text](/path/to/image.jpg "Optional Title")`).

    * Images will typically be stored in an `assets/images` or similar folder within your site's repository.



### Part 5: Navigation and Interaction Features



* **Primary Navigation:**

    * A **simple top menu bar** will provide primary navigation links (e.g., "Home," "Projects," "About Me").

    * A **left sidebar** will list all projects. This sidebar will feature **expanding and collapsing list items** to organize projects, allowing users to easily browse and select specific articles within a project without cluttering the view.

* **Responsiveness:** The website will be designed to be fully **responsive**, ensuring an optimal viewing and interaction experience across various devices, including mobile phones, tablets, laptops, and larger desktop screens. This will involve using modern CSS techniques and flexible layouts.

* **"About Me" Page:** A dedicated "About Me" page will be included, allowing you to share information about yourself as a writer.

* **Social Media Links:** Prominently placed links to your social media profiles (e.g., Twitter, LinkedIn, Goodreads) will be included on the site, likely in the footer or a dedicated section.



### Part 6: Hosting and Deployment (GitHub Pages)



* **GitHub Repository Setup:**

    * Your website project will reside in a dedicated GitHub repository.

    * For a user or organization page (e.g., `yourusername.github.io`), the repository name must be `yourusername.github.io`. For a project page (e.g., `yourusername.github.io/my-writing-site`), the repository can be any name, but GitHub Pages will be configured from its settings. We'll likely aim for the user/organization page if this is your primary writing portfolio.

* **Jekyll Integration:** GitHub Pages has native support for Jekyll. When you push your Jekyll site's files to your repository, GitHub's servers will automatically build the site.

* **Deployment Workflow:**

    * You will push your Jekyll project files (including Markdown content, layouts, CSS, assets, and `_config.yml`) to the `main` branch (or `gh-pages` branch for project sites).

    * GitHub Pages will automatically detect the Jekyll setup and build your static HTML, CSS, and JavaScript files.

    * The built site will then be published and accessible via a URL like `https://yourusername.github.io` (for a user/organization page) or `https://yourusername.github.io/your-repo-name` (for a project page).

* **Custom Domain (Optional):** While not part of the initial core build, the plan notes that GitHub Pages also allows for the use of a custom domain (e.g., `www.yourwritingsite.com`) if you choose to set one up in the future.