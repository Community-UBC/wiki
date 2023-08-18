# UBCWiki Project

The UBCWiki was initially started by moderators of the /r/UBC subreddit. It has since been moved to GitHub to allow for easier collaboration and contribution.

## Technical Details

This wiki is powered by mdBook, a free and open source project written in Rust. 

It is hosted on GitHub Pages, and is automatically built and deployed using GitHub Actions.

**Links:**
* [mdBook Documentation](https://rust-lang.github.io/mdBook/index.html)
* [Automated Deployment of mdBook](https://github.com/rust-lang/mdBook/wiki/Automated-Deployment%3A-GitHub-Actions)
* [mdbook-toc](https://github.com/badboy/mdbook-toc): This mdBook is using the `mdbook-toc` preprocessor to generate table of contents sections

You can use this documentation to contribute to the wiki. It has information about what is possible with mdBook, and how to further extend functionality.

### Setup

This guide assumes you know how to use the command line and git.

1. Clone this repository
2. Install Rust if you don't have it already: [rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)
3. Build from source using Rust with `cargo install mdbook` (for help [see docs](https://rust-lang.github.io/mdBook/guide/installation.html))
4. install the `mdbook-toc` tool with `cargo install mdbook-toc`
5. `cd` into the `./ubcwiki/ubcwiki` directory

To build the book and start a local webserver to view it: `mdbook serve --open`

To simply build the book `mdbook build`
- This can be useful if you added pages to the list in `SUMMARY.md` and want to automatically create them in the proper locations 

---

Do you see something that is incorrect/out of date/needs improvement? See how you can [contribute here](https://communityubc.github.io/ubcwiki/index.html#contributing)