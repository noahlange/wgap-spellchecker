# Write Good (as Promised) - Spellchecker
[![Build Status](https://travis-ci.org/noahlange/wgap-spellchecker.svg?branch=master)](https://travis-ci.org/noahlange/wgap-spellchecker)
[![Coverage Status](https://coveralls.io/repos/noahlange/wgap-spellchecker/badge.svg?branch=master&service=github)](https://coveralls.io/github/noahlange/wgap-spellchecker?branch=master)

Module to check for misspelled words in your writing, written for
[Prosely](https://github.com/noahlange/prosely) by way of the
[Write-Good (as Promised)](https://github.com/noahlange/write-good-as-promised)
library. It won't work for the vanilla write-good library.

## Installation
Not on NPM as of yet. Just clone it.

```shell
git clone https://github.com/noahlange/wgap-spelling.git
```

## Use

```javascript
var spelling = require('wgap-spellchecker');
console.log(spelling('There are som werds spellt incorrectly heer.'))

/* yields:
[
  { reason: 'som (some, son, tom)', index: 10, offset: 3 },
  { reason: 'werds (words, weeds, nerds)', index: 14, offset: 5 },
  { reason: 'spellt (spells, spell, spelt)', index: 20, offset: 6 },
  { reason: 'heer (here, hear, her)', index: 39, offset: 4 }
]);
*/

```
