!!! Warning

    This information is outdated and it is provided here for archival purposes only. This site no longer uses mdBook and it has switched over to using mkDocs-Material. For correct setup, config, and contribution information, [see the main project page](./project.md).

## Technical Details

This wiki is powered by mdBook, a free and open source project written in Rust. It is hosted on GitHub Pages, and is automatically built and deployed using GitHub Actions.

You can use [this mdBook Documentation](https://rust-lang.github.io/mdBook/index.html) to contribute to the wiki. It has information about what is possible with mdBook, and how to further extend functionality.

Here is the guide for [Automated Deployment of mdBook](https://github.com/rust-lang/mdBook/wiki/Automated-Deployment%3A-GitHub-Actions).

### Setup

This guide assumes you know how to use the command line and git. If you don't, please see the [contributing](https://ubcwiki.ca/index.html#contributing) section on other ways to help or make changes.

1. Clone this repository: https://github.com/CommunityUBC/ubcwiki
2. Install Rust if you don't have it already: [rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)
    - for example, if you are using WSL, you can run `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh` and follow the default instructions
    - TIP: reboot your terminal after installing in order to use the following commands
3. Build from source using Rust with `cargo install mdbook` (for help [see docs](https://rust-lang.github.io/mdBook/guide/installation.html))
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
Following the instructions [here](https://rust-lang.github.io/mdBook/format/theme/index.html), the `./ubcwiki/theme` directory was added and default `index.hbs` copied in. The footer code was then added to the `index.hbs` file, and you can find it by searching for `<!-- CUSTOM UBCWIKI FOOTER -->`.

This change may cause issues when mdbook is updated. We may need to keep `index.hbs` up to date with the default template, or find a better way to add a custom footer.

## Want to add a new page?

1. Create a new markdown file somewhere in the `~/ubcwiki/src` directory. The file name and location will become the URL slug, so make it something short and descriptive. For example, `~/ubcwiki/src/campus/ubc-sights.md` will be available at `https://ubcwiki.ca/campus/ubc-sights`.

2. Add content to the page. You can use the [Markdown Guide](https://rust-lang.github.io/mdBook/format/markdown.html) to learn how to format your page. Remember, the entire project is open source, so you can always take a peek at the source of other pages to see how they are formatted!

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