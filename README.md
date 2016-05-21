# Smooch Languages

Small package to provide translations for [Smooch](https://github.com/smooch/smooch-js)

## Supported Languages

* English (en)
* Dutch (nl)

## Installation

Install using npm

`npm install --save smooch-languages`

Use

```Javascript
var SmoochLanguages = require('smooch-languages')

Smooch.init({
    appToken: 'apitoken',
    customText: SmoochLanguages('en')
})
```

Install using bower

`bower install --save smooch-languages`

Use

```Javascript
// Include bower_components/smooch-languages/bower.js (will expose SmoochLanguages as global)
Smooch.init({
    appToken: 'apitoken',
    customText: SmoochLanguages('en')
})
```
