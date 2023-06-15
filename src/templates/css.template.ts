export 	const CSSTemplate = `
    @import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;700;800&family=MuseoModerno:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Code+Pro&display=swap");

* {
  margin: 0;
  padding: 0;
}
html {
  width: 100%;
  height: 100%;
  display: flex;
}
body {
  font-family: "MuseoModerno", cursive;
  margin: auto;
}
h1 {
  font-weight: 900;
  font-size: 3em;
  border-bottom: 3px solid #e3e3e3;
  padding-top: 0.5em;
}
h2 {
  font-weight: 800;
  font-size: 2.8em;
}
h3 {
  font-weight: 700;
  font-size: 2.6em;
}
h4 {
  font-weight: 600;
  font-size: 2.4em;
}
h5 {
  font-weight: 500;
  font-size: 2.2em;
}
h6 {
  font-weight: 400;
  font-size: 2em;
}

hr {
  height: 3px;
  background: #e3e3e3;
  border: 0;
  outline: none;
  margin-top: 10px;
}
p[style="text-decoration:line-through"] {
  color: #dedede;
}
blockquote {
  border-left: 3px solid #e3e3e3;
  padding-left: 10px;
  padding: 15px;
}
pre.inline-code {
  margin: 1em 0;
  font-size: 0.8em;
  background-color: #dedede;
  border: 1px solid #eee;
  padding: 5px;
  line-height: 1.5em;
  color: #010101;
  overflow: auto;
  display: inline;
  border-radius: 4px;
  font-family: "Source Code Pro", monospace;
}
.code {
  background: transparent;
  display: inline-block;
}
.hljs {
  display: inline-block;
  white-space: pre-wrap;
  margin: 1em 0;
  font-size: 0.8em;
  background-color: #002b36 !important;
  padding: 5px;
  line-height: 1.5em;
  overflow: auto;
  border-radius: 8px;
  font-family: "Source Code Pro", monospace;
}
ul, ol {
  margin: 1em;
}
ul li, ol li {
  margin-top: 1em;
  margin-bottom: 1em;
}

table thead th {
  border-bottom: 2px solid #dedede;
  border-radius: 4px;
    background: #dedede;
}
table {
  padding: 10px;
  border: 2px solid #dedede;
  border-radius: 10px;
  text-align: center;
}

th:empty,tr:empty,td:empty {
  display: none;
}


table tbody td {
  background: #a8a8a8;
  padding: 2px;
  border: none;
  border-radius: 4px;
}
tr td:nth-child(1) {
  background: #a8a8a8;
  padding: 2px;
  border: none;
  border-radius: 4px;
}
a {
  color: #002b36;
}
img {
  aspect-ratio: 1/1;
  width: 33%;
  display: inline-block;
}
.warning {
 
  background: rgb(231, 231, 25);

}
.block {
   display: block;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-direction: column;
  border-radius: 10px;
}
mark {
  display: block;
  width: max-content;
  padding: 1px;
  color: #000;
}
.hello {
  background: #dedede;
    }`;