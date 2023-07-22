import { rules } from './rules';

export class MarkdownParser {
	constructor(public markdown: string) {}
	parse(m: string = this.markdown): string {
		m = m.replace(/^(\>+)\s*([^\n]+)/gim, (_match, arrows, content) => {
			console.log(content, arrows.length);
			const margin =
				arrows.length !== 1 ? arrows.length * 10 + 'px' : 0 + 'px';
			return `<blockquote style="margin-left:${margin} !important">${content}</blockquote>`;
		});
		m = m.replace(/^(```|~~~)(\s|)(\w+)\n([\s\S]+?)(```|~~~)/gm, (_match: string, _startCodeSym: string, _space: string, languageName: string, code: string, _endCodeSym) => {
			code = languageName !== 'mermaid' && code.replace(/\>/gm, "&gt;").replace(/\</gm, "&lt;")
			return `<pre class="code language-${languageName}"><code>${code}</code></pre>`
		})

		m = m.replace(/\|.*\|.*\|\n((\|.*\|.*\|\n)*)/gm, table => {
			return `<table>\n<thead>\n<tr>\n${
				'<th>' +
				table
					.trim()
					.split('\n')[0]
					.replace(/\s*\|\s*/g, '</th><th>') +
				'</th>'
			}\n</tr>\n</thead>\n<tbody>\n<tr>\n${
				'<td>' +
				table
					.trim()
					.split('\n')
					.slice(2)
					.map(row => row.replace(/\s*\|\s*/g, '</td><td>') + '</td>')
					.join('<tr></tr>')
			}\n</tr>\n</tbody>\n</table>`;
		});

		m = m.replace(/^( +)(\*\*\*|---|___)/gm, (match, spaces: string) => {
			if (spaces.length <= 3) {
				return '<hr>';
			} else {
				return match;
			}
		});

		m = m.replace(
			/^(#{1,6})\s([^\n]+)/gm,
			(_, hashes: string, data: string) => {
				return `<h${hashes.length}>${data}</h${hashes.length}>`;
			}
		);

		m = m.replace(
			/^([ ]+)(#{1,6})\s([^\n]+)/gm,
			(match, spaces: string, hashes: string, data: string) => {
				if (spaces.length <= 3) {
					return `<h${hashes.length}>${data}</h${hashes.length}>`;
				} else {
					return match;
				}
			}
		);

		m = m.replace(/^```(\s|)(mermaid)\n+(flowchart)\s(TB|TD|RL|LR|BT)\n(\s+|)([^```]+)```/gm, () => '')
		rules.forEach(([regexp, replaced]) => {
			m = m.replace(regexp, replaced);
		});

		m = m.replace(
			/\[(.*?)]:(\s|)(.*?)(\s|)("|')(.*?)("|')/gm,
			(
				_match,
				text: string,
				_spaceBeforeURL: ' ' | '',
				url: string,
				_spaceAfterURL: ' ' | '',
				_openQuote: '"' | "'",
				title: string,
				_closeQuote: '"' | "'"
			) => {
				return `<a href="${url}" tittle='${title}'>${text}</a>`;
			}
		);

		m = m.replace(
			/\[(.*?)]:+(\s|)+(\/[^(\s|)]+)/gm,
			(
				_match: string,
				text: string,
				_spaceBeforeURL: '' | ' ',
				url: string
			) => {
				return `<a href="${url}">${text}</a>`;
			}
		);

		m = m.replace(
			/^([\d]+).\s([^\n]+)/gm,
			(_matches, number: string, content: string) => {
				return `<ol start="${number}"><li>${content}</li></ol>`;
			}
		);
		m = m.replace(
			/^([\s]+)([\d.\d]+)+(\)|)+\s([^\n]+)/gm,
			(
				_match: string,
				tabs: string,
				number: string,
				_: string,
				content: string
			): string => {
				return `<ol style='margin-left:${tabs.length * 10}px'>
				<li style="list-style-type: '${number}';">${content}</li>
			</ol>`;
			}
		);
		m = m.replace(
			/(\n\s+)+(\-|\+|\*)+\s+([^\n]+)/gim,
			(
				_matches: string,
				tabs: string,
				_listSymbol: string,
				content: string
			) => {
				return `<ul><li style="margin-left:${
					tabs.length * 5
				}px">${content}</li></ul>`;
			}
		);
		m = m.replace(/^([ ]+)(<i>\*<\/i>)/gm, (_match, spaces: string) => {
			return `${spaces}***`;
		});
		m = m.replace(
			/<(mailto:([^\>]+))>/gim,
			(match: string, href: string, email: string): string => {
				if (
					/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/gim.test(email)
				) {
					return `<a href="${href}">${email}</a>`;
				}

				return (
					'<p>' +
					match.replace(/\>/, '&gt;').replace(/\</, '&lt;') +
					'</p>'
				);
			}
		);
		m = m.replace(/\>\[(\s|x)\]/gim, (_match, checked: string): string => {
			let c: boolean = false;

			if (checked === 'X' || checked === 'x') c = true;
			return `><input type="checkbox" ${
				c ? "checked=''" : ''
			} disabled=""/>`;
		});
		
		return `<div id="html">\n<div id='body'>\n${m}\n</div>\n</div>`;
	}
}

