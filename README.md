Fight Club Starter Kit
====================

Code interacting with browser extensions can live in four places:

0. Background scripts
0. Content scripts
0. Injected scripts
0. Your web app

This [Stack Overflow answer](http://stackoverflow.com/a/9916089/4700328) has a great shorthand explanation for each. It also might help to start by taking a look at the [minimum viable Chrome Extension](https://github.com/cmrnh/extension-starter/tree/82bf00934c5e07f0e2c154e0af1f2b4a714d99bb).

This repo demonstrates how to use a content script to enable your web app to talk to the extension's background script, which has full access to the `chrome.*` APIs.

## Next-level $#!t

Learn how to create a build process and the basics of mapping Chrome resources to Safari and Firefox in [Developing Cross Browser Extensions](http://frontendbabel.info/articles/developing-cross-browser-extensions/) by [@alexbeletsky](https://github.com/alexbeletsky).
