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
mp.parse(); // => <h1>Hello</h1>

// if you want to use custom parsing value
mp.parse('## Hello, World !'); // => <h2>Hello, World !</h2>
```

<h1>For future</h1>

-   Adaptive library for react
-   Write library for other programming languages

---

<h1 id='feedback'>
Feedback
</h1>

You can write me to pyto015@ya.ru or open issue at [Github repo](https://github.com/nitono/aeromd)

Links

-   Github: https://github.com/nitono/aeromd
-   npm: https://www.npmjs.com/package/@nitonodev/aeromd
