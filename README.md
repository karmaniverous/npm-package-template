# NPM Package Template

You wrote a sweet piece of code! Releasing it on [NPM](https://www.npmjs.com/)
seems like the obvious next step. Right?

_Try it!_ Not as easy to do as you might think. At high quality. From scratch.

So here's a plug-and-play NPM package template that offers the following
features:

- Tree-shakable support for the latest ES6 goodies with
  [`eslint`](https://www.npmjs.com/package/eslint) _uber alles_.

- CJS distributions targeting specific browser support scenarios.

- Command line interfaces for your widget with
  [`commander`](https://www.npmjs.com/package/commander).

- Automated [`lodash`](https://www.npmjs.com/package/lodash) cherry-picking with
  [`babel-plugin-lodash`](https://www.npmjs.com/package/babel-plugin-lodash).

- [`mocha`](https://www.npmjs.com/package/mocha) &
  [`chai`](https://www.npmjs.com/package/chai) for testing, with examples, and a
  sweet testing console.

- In-code access to
  [`package.json`](https://github.com/karmaniverous/npm-package-template/blob/main/package.json)
  data, with no warnings to ignore.

- Code formatting at every save & paste with
  [`prettier`](https://www.npmjs.com/package/prettier).

- Automated documentation of your API with
  [`jsdoc-to-markdown`](https://www.npmjs.com/package/jsdoc-to-markdown) and
  assembly of your README with
  [`concat-md`](https://www.npmjs.com/package/concat-md).

- One-button release to GitHub & publish to NPM with
  [`release-it`](https://www.npmjs.com/package/release-it).

**[Click here](https://karmanivero.us/blog/npm-package-template/) for full
documentation & instructions!**

_If you want to create a React component in an NPM package, use my
[React Component NPM Package Template](https://github.com/karmaniverous/react-component-npm-package-template)
instead!_

# Command Line Interface

```text
Usage: mycli [options]

Foos your bar.

Options:
  -b, --bar <string>  foo what?
  -v, --version       display package version
  -h, --help          display help for command
```

# API Documentation

```js
import { foo, PACKAGE_INFO } from '@karmaniverous/npm-package-template`;
```

## Constants

<dl>
<dt><a href="#PACKAGE_INFO">PACKAGE_INFO</a> : <code><a href="#PackageInfo">PackageInfo</a></code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#foo">foo(value)</a> ⇒ <code>any</code></dt>
<dd><p>Returns whatever value is passed.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PackageInfo">PackageInfo</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="PACKAGE_INFO"></a>

## PACKAGE\_INFO : [<code>PackageInfo</code>](#PackageInfo)
**Kind**: global constant  
<a name="foo"></a>

## foo(value) ⇒ <code>any</code>
Returns whatever value is passed.

**Kind**: global function  
**Returns**: <code>any</code> - Whatever value it was passed.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | Any value. |

<a name="PackageInfo"></a>

## PackageInfo : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| version | <code>string</code> | package version |


---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
