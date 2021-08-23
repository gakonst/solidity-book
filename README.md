# The Senior Solidity Engineer's Book

*Still in early development*

Available live at: https://solidity-book.netlify.app/

The Senior Solidity Engineer's Book is a resource meant to transform you into a
Senior Solidity Engineer.

To view the book locally: `mdbook serve` and navigate to `http://localhost:3000`

## Requirements

_This section is copied from the [rust-lang](https://github.com/rust-lang/book/blob/main/README.md#requirements) book_

Building the book requires [mdBook], ideally the same version that
rust-lang/rust uses in [this file][rust-mdbook]. To get it:

[mdBook]: https://github.com/rust-lang-nursery/mdBook
[rust-mdbook]: https://github.com/rust-lang/rust/blob/master/src/tools/rustbook/Cargo.toml

```bash
$ cargo install mdbook --vers [version-num]
```

## Building

_This section is copied from the [rust-lang](https://github.com/rust-lang/book/blob/main/README.md#building) book_

To build the book, type:

```bash
$ mdbook build
```

The output will be in the `book` subdirectory. To check it out, open it in
your web browser.

_Firefox:_
```bash
$ firefox book/index.html                       # Linux
$ open -a "Firefox" book/index.html             # OS X
$ Start-Process "firefox.exe" .\book\index.html # Windows (PowerShell)
$ start firefox.exe .\book\index.html           # Windows (Cmd)
```

_Chrome:_
```bash
$ google-chrome book/index.html                 # Linux
$ open -a "Google Chrome" book/index.html       # OS X
$ Start-Process "chrome.exe" .\book\index.html  # Windows (PowerShell)
$ start chrome.exe .\book\index.html            # Windows (Cmd)
```

To run the tests:

```bash
$ mdbook test
```

## Deploying to Netlify

```
npm i -g netlify
netlify deploy
```
