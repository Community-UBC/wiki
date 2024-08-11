#

<p align="center" style="font-size:60px;">⚙️</p>
<p align="center" style="font-size:36px;">UBCWiki Project</p>

The UBCWiki was initially started by moderators of the /r/UBC subreddit. It has since been moved to GitHub to allow for easier collaboration and contribution.

This page is for those who want to contribute to the website directly, and it requires some technical background. You can also [contribute](../index.md#contributing) in other ways!

## Technical Details

This wiki is powered by mkDocs-Material, a free and open source project. The wiki is hosted on GitHub Pages, and is automatically built and deployed using GitHub Actions.

You can use [this Documentation](https://squidfunk.github.io/mkdocs-material/getting-started/) for information about what is possible with mkDocs-Material, and how to further extend functionality.

!!! note
    We were previously using mdBook, but we found that the functionality was too limited for what we needed in this project. You can still find the old setup and configuration notes [on the old config page](./mdBook-config.md).

### Installation

This guide assumes you know how to use the command line and git. If you don't, please see the [contributing](../index.md#contributing) section on other ways to help or make changes.

1. Clone this repository: [https://github.com/CommunityUBC/ubcwiki](https://github.com/CommunityUBC/ubcwiki)
2. Install with pip with the command below, or refer to the [official instructions](https://squidfunk.github.io/mkdocs-material/getting-started/).


    ``` bash
    pip install mkdocs-material
    ```

3. Install the other plugins with the following commands. We use these plugins for things like zooming on images.

    ``` bash
    pip install mkdocs-glightbox
    pip install "mkdocs-material[imaging]"
    pip install mkdocs-git-revision-date-localized-plugin
    pip install mkdocs-redirects
    ```

    <!-- NOTE:  mkdocs-git-revision-date-localized-plugin is a third party plugin from https://github.com/timvink/mkdocs-git-revision-date-localized-plugin -->

### Run the site locally

When you are making edits, it is helpful to spin up a local webserver so that you can see your changes live. You can do that by running `mkdocs serve` once everything is installed.

## Want to add a new page?

1. Create a new markdown file somewhere in the `~/docs` directory. The file name and location will become the URL slug, so make it something short and descriptive. For example, `~/docs/campus/ubc-sights.md` will be available at `https://ubcwiki.ca/campus/ubc-sights`.

2. Add content to the page. You can use this [website for guides on how to do things](https://squidfunk.github.io/mkdocs-material/reference/). Remember, the entire project is open source, so you can always take a peek at the source of other pages to see how they were formatted!

3. Add the page to the `./mkdocs.yml` file in the `nav:` section. This file is used to generate links and structure for the wiki, and your page will not show up unless it is added here.

You can copy this boilerplate into your file:

```
# 

<p align="center" style="font-size:60px;">😃</p>
<p align="center" style="font-size:36px;">Title goes here</p>


Content goes here
```

Please note that we may not merge in all requests, so don't get started on a huge project without checking in with us first! To make things easier, please select the "Allow edits from maintainers" option when submitting a pull request so we can make minor changes if needed.


### Don't know where to make the page?

If you want to create a page but you don't know where to put it, or if you want to restructure some content without messing with the main directory, you can create files and folders in the `~/drafts` directory or [you can reach out to us for help](../index.md#contributing). 