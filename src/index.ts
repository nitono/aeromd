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
				return `<h${hashes.length}>${data}</h$>`;
			}
		);

		m = m.replace(
			/^([ ]+)(#{1,6})\s([^\n]+)/gm,
			(match, spaces: string, hashes: string, data: string) => {
				if (spaces.length <= 3) {
					return `<h${hashes.length}>${data}</h$>`;
				} else {
					return match;
				}
			}
		);
		rules.forEach(([regexp, replaced]) => {
			m = m.replace(regexp, replaced);
		});

		m = m.replace(
			/(^\d+).\s*([^\n]+)+\n+/gm,
			(matches, number, content) => {
				return `<div><span>${number}</span>. ${content}</div>`;
			}
		);
		m = m.replace(/(\n\s+)+\-+\s+([^\n]+)/gim, (matches, tabs, content) => {
			return `<ul><li style="margin-left:${
				tabs.length * 5
			}px">${content}</li></ul>`;
		});
		m = m.replace(/(\n\s+)+\++\s+([^\n]+)/gim, (matches, tabs, content) => {
			return `<ul><li style="margin-left:${
				tabs.length * 5
			}px">${content}</li></ul>`;
		});
		m = m.replace(/(\n\s+)+\*+\s+([^\n]+)/gim, (matches, tabs, content) => {
			return `<ul><li style="margin-left:${
				tabs.length * 5
			}px">${content}</li></ul>`;
		});

		m = m.replace(/^([ ]+)(<i>\*<\/i>)/gm, (match, spaces: string) => {
			if (spaces.length > 3) {
				return `${spaces}***`;
			}
		});

		return `<div id="html">\n<div id='body'>\n${m}\n</div>\n</div>`;
	}
}
