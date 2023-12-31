# @nitonodev/aeromd

The lightweight markdown parser for `ts` or `js`

---

See changes at [CHANGELOG.md](./CHANGELOG.md)

---

-   [Installation](#installation)
-   [Usage](#usage)
    -   [Connecting](#connecting)
    -   [Quick start](#quick)
    -   [`parse` function](#parse-function)
    -   [Use styles](#styles)
-   [Feedback](#feedback)

---

<h1 id="installation">Installation</h1>
This package contains a built-in declaration for TypeScript, therefore you do not need to install types for this package separately.

```bash
npm i @nitonodev/aeromd
```

<h1 id="usage">Usage</h1>
<h3 id="connecting">
    Connecting
</h3>
To connect this library to you code you may to write next lines of code

```ts
// if you use a commonjs
const { MarkdownParser } = require('@nitonodev/aeromd');
// if you use a esm
import { MarkdownParser } from '@nitonodev/aeromd';
```

---

<h3 id="quick">Quick Start</h3>

To create a class you may to write next lines of code

```ts
// Instead of mp your variable name
// Instead of '# Hello' your markdown code
const mp = new MarkdownParser('# Hello');
```

---

<h3 id="parse-function">Parse markdown data</h3>
If you want to parse markdown data to html code you may to use a parse function

| name of function | return value       | params                                                                  |
| ---------------- | ------------------ | ----------------------------------------------------------------------- |
| parse            | string (html code) | optional m by default is markdown code who declared in class definition |

Example:

```ts
const mp = new MarkdownParser('# Hello');
// if you want to use default value from class definition
mp.parse(); // => <div id="html"><div id="body"><h1>Hello</h1></div></div>

// if you want to use custom parsing value
mp.parse('## Hello, World !'); // => <div id="html"><div id="body"><h2>Hello, World !</h2></div></div>
```

---

<h3 id="styles">Use styles</h3>
To use styles you may to write this lines

```diff
+ import '@nitonodev/aeromd/lib/styles/md-theme.css'
```

---

<h1>For future</h1>

-   Write library for other programming languages

---

<h1 id='feedback'>
Feedback
</h1>

You can write me to pyto015@ya.ru or open issue at [Github repo](https://github.com/nitono/aeromd)

Links

-   Github: https://github.com/nitono/aeromd
-   npm: https://www.npmjs.com/package/@nitonodev/aeromd
