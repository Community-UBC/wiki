# ⚙️ UBCWiki Project

The UBCWiki was initially started by moderators of the /r/UBC subreddit. It has since been moved to GitHub to allow for easier collaboration and contribution.

## Technical Details

This wiki is powered by mdBook, a free and open source project written in Rust. It is hosted on GitHub Pages, and is automatically built and deployed using GitHub Actions.

You can use [this mdBook Documentation](https://rust-lang.github.io/mdBook/index.html) to contribute to the wiki. It has information about what is possible with mdBook, and how to further extend functionality.

Here is the guide for [Automated Deployment of mdBook](https://github.com/rust-lang/mdBook/wiki/Automated-Deployment%3A-GitHub-Actions).

### Setup

This guide assumes you know how to use the command line and git.

1. Clone this repository: https://github.com/CommunityUBC/ubcwiki
2. Install Rust if you don't have it already: [rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)
3. Build from source using Rust with `cargo install mdbook` (for help [see docs](https://rust-lang.github.io/mdBook/guide/installation.html))
4. install the `mdbook-toc` tool with `cargo install mdbook-toc`
5. `cd` into the `./ubcwiki/ubcwiki` directory

To build the book and start a local webserver to view it: `mdbook serve --open`

To simply build the book: `mdbook build`. This can be useful if you added pages to the list in `SUMMARY.md` and want to automatically create them in the proper locations 

## Custom Changes

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