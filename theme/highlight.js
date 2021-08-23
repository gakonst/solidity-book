// Override mdBook's highlight.js in favour of the one from npm, imported in ../index.js.
// To avoid exceptions coming from ../build/html/book.js we declare a global `hljs` object with some no-op methods.
// This a workaround for https://github.com/rust-lang/mdBook/issues/657

// prettier-ignore
var hljs = {
  configure: function () {},
  highlightBlock: function () {}
};
