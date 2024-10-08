# Outdated Installation Guides


```
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
```



```
!!! Warning

    This information is outdated and it is provided here for archival purposes only. This site no longer uses mdBook and it has switched over to using mkDocs-Material. For correct setup, config, and contribution information, [see the main project page](./project.md).

## Technical Details

This wiki is powered by mdBook, a free and open source project written in Rust. It is hosted on GitHub Pages, and is automatically built and deployed using GitHub Actions.

You can use [this mdBook Documentation](https://rust-lang.github.io/mdBook/index) to contribute to the wiki. It has information about what is possible with mdBook, and how to further extend functionality.

Here is the guide for [Automated Deployment of mdBook](https://github.com/rust-lang/mdBook/wiki/Automated-Deployment%3A-GitHub-Actions).

### Setup

This guide assumes you know how to use the command line and git. If you don't, please see the [contributing](https://ubcwiki.ca/index#contributing) section on other ways to help or make changes.

1. Clone this repository: https://github.com/CommunityUBC/ubcwiki
2. Install Rust if you don't have it already: [rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)
    - for example, if you are using WSL, you can run `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh` and follow the default instructions
    - TIP: reboot your terminal after installing in order to use the following commands
3. Build from source using Rust with `cargo install mdbook` (for help [see docs](https://rust-lang.github.io/mdBook/guide/installation))
4. install the **mdbook-toc** tool with `cargo install mdbook-toc`
5. Go into the `./ubcwiki` directory with `cd ubcwiki`

To build the book and start a local webserver to view it: `mdbook serve --open`

To simply build the book: `mdbook build`. This can be useful if you added pages to the list in `SUMMARY.md` and want to automatically create them in the proper locations 

## Custom Changes from default mdBook template

The following changes have been made to the default mdBook template.

### Added preprocessor to generate table of contents sections

We are using the [mdbook-toc](https://github.com/badboy/mdbook-toc) preprocessor. If you want to add a table of contents to a page, add `<!-- toc -->` to the spot where you want the table of contents to appear. For consistency, it is recommended to add to the top of the page, like so:

```
# Page Title
---
<!-- toc -->
---
```

### Added a custom footer with contribution information
Following the instructions [here](https://rust-lang.github.io/mdBook/format/theme/index), the `./ubcwiki/theme` directory was added and default `index.hbs` copied in. The footer code was then added to the `index.hbs` file, and you can find it by searching for `<!-- CUSTOM UBCWIKI FOOTER -->`.

This change may cause issues when mdbook is updated. We may need to keep `index.hbs` up to date with the default template, or find a better way to add a custom footer.

## Want to add a new page?

1. Create a new markdown file somewhere in the `~/ubcwiki/src` directory. The file name and location will become the URL slug, so make it something short and descriptive. For example, `~/ubcwiki/src/campus/ubc-sights.md` will be available at `https://ubcwiki.ca/campus/ubc-sights`.

2. Add content to the page. You can use the [Markdown Guide](https://rust-lang.github.io/mdBook/format/markdown) to learn how to format your page. Remember, the entire project is open source, so you can always take a peek at the source of other pages to see how they are formatted!

3. Add the page to the `SUMMARY.md` file, which is located in `~/ubcwiki/src/SUMMARY.md`. This file is used to generate the table of contents for the wiki, and your page will not show up in the sidebar unless it is added here.

You can copy this boilerplate into your file:

```
# Page Title

---
<!-- toc -->
---

Page Content Goes Here
```

Please note that we may not merge in all requests, so don't get started on a huge project without checking in with us first! To make things easier, please select the "Allow edits from maintainers" option when submitting a pull request so we can make minor changes if needed.
```