import { writeFileSync } from 'fs';
import { rules } from './rules/rules';
import { cwd } from 'process';
import { CSSTemplate } from './templates/css.template';
import { generateHTMLPageTemplate } from './templates/html_page.template';
export class MarkdownParser {
	constructor(public markdown: string) {}

	parse(m: string = this.markdown): string {
		m = m.replace(/(\>+)\s*([^\n]+)/gim, (_match, arrows, content) => {
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
			}\n</tr>\n</tbody>\n</table><br/>`;
		});

		rules.forEach(([regexp, replaced]) => {
			m = m.replace(regexp, replaced);
		});
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

		return m;
	}
	/**
	 * This function generate a styles
	 */
	generateStyles = () => {
		writeFileSync(cwd() + '\\md-theme.css', CSSTemplate);
	};

	generateHTMLPage = () => {
		this.generateStyles();
		const parsedMarkdown = this.parse(this.markdown);
		const HTMLPage = generateHTMLPageTemplate({
			parsedMarkdown: parsedMarkdown
		});
		writeFileSync(cwd() + '\\md.html', HTMLPage);
	};
}
