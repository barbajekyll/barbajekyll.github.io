# To do

- [ ] Modificare il destinatarion del form di inserimento nella pagina /showcase/
- [ ] Capire come modificare la label della la transizione basica (mostra sempre il testo home dovunque si navighi)
  1. https://www.google.com/search?sxsrf=ALeKk00xVUojTXeCuqN9b3ngzR_Sdwv4wg%3A1594490987838&ei=awAKX7nuMvLKrgSC_L-QBQ&q=javascript+ehide+scroll+bar&oq=javascript+ehide+scroll+bar&gs_lcp=CgZwc3ktYWIQAzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIICAAQDRAeEBMyCAgAEA0QHhATMgoIABANEAUQHhATMgoIABAIEA0QHhATMgoIABAIEA0QHhATMgoIABAIEA0QHhATOgcIABBHELADUMEZWM4cYIkeaAFwAHgAgAF5iAG4A5IBAzAuNJgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwj5z7Xn5cXqAhVypYsKHQL-D1IQ4dUDCAw&uact=5
  2. https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
- [ ] implementare documentazione
- [ ] implementare blog
- [ ] implementa ecommerce
- [ ] implementa wordpress in background su jekyll

# Errori

## gsap

- https://greensock.com/forums/topic/22491-gsap3-target-object-not-found/

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
