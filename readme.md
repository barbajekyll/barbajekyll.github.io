# To do

- [ ] implementare documentazione
- [ ] implementare blog
- [ ] implementa ecommerce
- [ ] implementa wordpress in background su jekyll

# Useful resources

- https://jekyllrb.com/docs/configuration/default/
- https://github.com/jekyllresources/webpack-require-from
- https://webpack.js.org/guides/public-path/
- https://github.com/webpack/docs/wiki/configuration#outputpublicpath
- https://michaelmovsesov.com/articles/jekyll-es6-workflow

# Jekyll docs site

This directory contains the code for the Jekyll docs site, [jekyllrb.com](https://jekyllrb.com/).

## Contributing

For information about contributing, see the [Contributing page](https://jekyllrb.com/docs/contributing/).

## Running locally

You can preview your contributions before opening a pull request by running from within the directory:

1. `bundle install --without test test_legacy benchmark`
2. `bundle exec rake site:preview`

It's just a jekyll site, afterall! :wink:

## Updating Font Awesome

1. Go to <https://icomoon.io/app/>
2. Choose Import Icons and load `icomoon-selection.json`
3. Choose Generate Font → Download
4. Copy the font files and adapt the CSS to the paths we use in Jekyll
