# Link utili

- Jekyll Liquid Cheatsheet https://gist.github.com/antoniotrento/9a78b69c727e8c63498508098ec736b7
- https://jekyllrb.com/docs/configuration/front-matter-defaults/
- https://jekyllrb.com/docs/collections/
- https://learn-the-web.algonquindesign.ca/topics/jekyll/
- https://github.com/jekyll/jekyll/issues/881
- https://stackoverflow.com/questions/53923035/jekyll-check-if-page-belongs-to-a-collection

# TO DO

- [ ] in _scss/main.scss -> .transition { position: fixed; /* crea il problema della scrollbar in homepage quando faccio mousover da una lettera all'altra del logo barbajs */
- [ ] controllo dinamico documentazione dell'albero dei docs
  1. https://stackoverflow.com/questions/33613712/how-may-i-manually-sort-jekyll-pages-using-yaml
  2. impostare menu ed elenchi da https://github.com/barbajekyll/barbajekyll.github.io/tree/master/_data
- [ ] Modificare il destinatarion del form di inserimento nella pagina /showcase/
  1. il file js è in /theme/barba/components/showcase/Form.js e anche in file simili allinterno della cartella
- [X] Capire come modificare la label della la transizione basica (mostra sempre il testo home dovunque si navighi)
  1. https://www.google.com/search?sxsrf=ALeKk00xVUojTXeCuqN9b3ngzR_Sdwv4wg%3A1594490987838&ei=awAKX7nuMvLKrgSC_L-QBQ&q=javascript+ehide+scroll+bar&oq=javascript+ehide+scroll+bar&gs_lcp=CgZwc3ktYWIQAzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIICAAQDRAeEBMyCAgAEA0QHhATMgoIABANEAUQHhATMgoIABAIEA0QHhATMgoIABAIEA0QHhATMgoIABAIEA0QHhATOgcIABBHELADUMEZWM4cYIkeaAFwAHgAgAF5iAG4A5IBAzAuNJgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwj5z7Xn5cXqAhVypYsKHQL-D1IQ4dUDCAw&uact=5
  2. https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
  3. In /theme/barba/source/_js/transitions/default.js viene applicata la label per il _layouts/default.html .transition sotto il footer, altri js in causa: route.js e ../app.js potrebbe anche derivare dal _layouts/jsbarbahead.html
    - Attributi chiamati in causa
    - container.dataset.barbaNamespace
    - document.querySelector('.transition__title')
    - querySelector
    - transitionTitle.innerHTML = next.container.dataset.barbaNamespace
    - https://github.com/barbajs/barba/issues/515
    - https://www.youtube.com/watch?v=ZPzFxm7DA7A&feature=youtu.be
- [ ] implementare documentazione
- [ ] implementare blog
- [ ] implementa ecommerce
- [ ] implementa wordpress in background su jekyll


# Errori

## Google chrome developer tools

- https://www.google.com/search?q=chrome+web+developer+show+the+attributes+of+a+javascript+class&oq=chrome+web+developer+show+the+attributes+of+a+javascript+class&aqs=chrome..69i57.21595j0j7&sourceid=chrome&ie=UTF-8
- https://www.google.com/search?q=javascript+chrome+consol+show+list+of+objects&oq=javascript+chrome+consol+show+list+of+objects&aqs=chrome..69i57.13302j0j7&sourceid=chrome&ie=UTF-8
- https://developers.google.com/web/tools/chrome-devtools/dom
- https://developers.google.com/web/tools/chrome-devtools/javascript
- https://stackoverflow.com/questions/2934787/view-list-of-all-javascript-variables-in-google-chrome-console#:~:text=In%20Firebug%2C%20the%20DOM%20tab,object%20you%20want%20to%20explore.
- https://www.google.com/search?sxsrf=ALeKk014b6F2Pb_SfUXZhXZZosMwKnDzwQ%3A1594495979827&ei=6xMKX9-NMr2BhbIPrc66sAY&q=show+address+where+javascript+take+a+vaue&oq=show+address+where+javascript+take+a+vaue&gs_lcp=CgZwc3ktYWIQAzIHCCEQChCgATIECCEQFToHCAAQRxCwAzoLCC4QsQMQgwEQkwI6CAgAELEDEIMBOggILhCxAxCDAToFCAAQsQM6BAgAEEM6AggAOgQIIxAnOgcILhAUEIcCOgUILhCxAzoHCAAQsQMQQzoCCC46BwgAEBQQhwI6BwguEAoQywE6BQgAEMsBOgUILhDLAToICC4QywEQkwI6BggAEBYQHjoICAAQFhAKEB46CAghEBYQHRAeOgUIIRCgAVD7iS5Y3tEvYPzTL2gCcAB4BoAB2xSIAbuNAZIBEDEuMjcuMy40LjIuMy45LTSYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwifr-Sz-MXqAhW9QEEAHS2nDmYQ4dUDCAw&uact=5
- https://javascript.info/keys-values-entries
-

## gsap

- https://greensock.com/forums/topic/22491-gsap3-target-object-not-found/

## webpack undertanding

- https://www.google.com/search?q=show+address+where+webpack+take+data&oq=show+address+where+webpack+take+data&aqs=chrome..69i57j33.24133j0j7&sourceid=chrome&ie=UTF-8
- https://webpack.js.org/concepts/entry-points/
- https://stackoverflow.com/questions/28846814/what-does-publicpath-in-webpack-do
- https://webpack.js.org/guides/public-path/
-

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
