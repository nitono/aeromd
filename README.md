# @nitonodev/aeromd

![cover](./assets/cover.png)

The lightweight markdown parser for `ts` or `js`

---

See changes at [CHANGELOG.md](./CHANGELOG.md)

---

-   [Installation](#installation)
-   [Usage](#usage)
    -   [Connecting](#connecting)
    -   [Quick start](#quick)
    -   [`parse` function](#parse-function)
    -   [`generateStyles` function](#generateStyles-function)
    -   [`generateHTMLPage` function](#generateHTMLpage-function)
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

---

<h3 id='generateStyles-function'>Generate styles for markdown</h3>
This function generate a md-theme.css file in you directory which contains my custom styles for parsed markdown

| name of function | return value                                    | params    |
| ---------------- | ----------------------------------------------- | --------- |
| generateStyles   | don't return anything but create a md-theme.css | no params |

Examples:

```ts
const mp = new MarkdownParser('# Hello');

mp.generateStyles(); // create md-theme.css
```

---

<h3 id="generateHTMLpage-function">Generate HTML page for markdown</h3>
This function contains all function declared at class MarkdownParser and parse markdown, generate styles and write html page for parsed markdown

| name of function | return value                                                                     | params    |
| ---------------- | -------------------------------------------------------------------------------- | --------- |
| generateHTMLPage | don't return anything but create a md-theme.css, md.html and parse markdown data | no params |

Example:

```ts
const mp = new MarkdownParser('# hello');

mp.generateHTMLPage(); // generate md-theme.css then parse '# hello' then generate md.html with parsed markdown
```

---

<h1>For future</h1>

-   <span style="color: red">IMPORTANT: Add parsing numeric list</span>
-   Adaptive library for react and html
-   Write library for other programming languages

---

<h1 id='feedback'>
Feedback
</h1>

You can write me to pyto015@ya.ru or open issue at [Github repo](https://github.com/nitono/aeromd)

Links

-   Github: https://github.com/nitono/aeromd
-   npm: https://www.npmjs.com/settings/nitonodev/aeromd
