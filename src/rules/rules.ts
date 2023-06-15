export const rules: Array<[RegExp, string]> = [
	[/\<td><\/td\>/gm, ''],
	[/\<th><\/th\>/gm, ''],
	/**
	 * This parse images
	 */
	[/!\[([^\]]+)]+\(([^\)]+)\)/gim, "<img src='$2' alt='$1'/><br/>"],
	/** This parse headings */
	[/^#{1}\s+([^\n]+)$/gm, '<h1>$1</h1>\n'],
	[/^#{2}\s+([^\n]+)$/gm, '<h2>$1</h2>\n'],
	[/^#{3}\s+([^\n]+)$/gm, '<h3>$1</h3>\n'],
	[/^#{4}\s+([^\n]+)$/gm, '<h4>$1</h4>\n'],
	[/^#{5}\s+([^\n]+)$/gm, '<h5>$1</h5>\n'],
	[/^#{6}\s+([^\n]+)$/gm, '<h6>$1</h6>\n'],
	/**
	 * This parse horizontal rules
	 */
	[/^(\---)/gm, '	<hr>'],
	[/^(\*\*\*)/gm, '	<hr>'],
	[/^(\___)/gm, '	<hr>'],
	/**
	 * This parse typography symbols
	 */
	[/\(c\)/gm, '<span>&#169;</span>'],
	[/\(C\)/gm, '<span>&#169;</span>'],
	[/\(r\)/gm, '<span>&#174;</span>'],
	[/\(R\)/gm, '<span>&#174;</span>'],
	[/\(tm\)/gm, '<span>&#8482;</span>'],
	[/\(TM\)/gm, '<span>&#8482;</span>'],
	[/(\(p\))/gm, '<span>$1</span>'],
	[/(\(P\))/gm, '<span>$1</span>'],
	[/\s\+-/gm, '<span>&#177;</span>'],
	[/\s\+\s-/gm, '<span>&#177;</span>'],

	/**
	 * This parse styling text
	 */
	[/\*\*\s?([^\n]+)\*\*/g, '<b>$1</b>\n'],
	[/__([^_]+)__/g, '<b>$1</b>\n'],
	[/\*\s?([^\n]+)\*/g, '<i>$1</i>\n'],
	[/_([^\n]+)_/g, '<i>$1</i>\n'],
	[/~~\s?([^_]+)~~/g, "<p style='text-decoration:line-through'>$1</p>"],

	/**
	 * This parse links
	 */
	[/\[([^\]]+)\]\(([^\"|\)]+)\"+([^\"]+)+\"\)/gm, '<a href="$2">$3</a>'],
	[/\[([^\]]+)\]\(([^)]+)\)/gm, "<a href='$2'>$1</a>"],

	/**
	 * This parse lists
	 */
	[/^\+\s+([^\n]+)/gim, '<ul><li>$1</li></ul>'],
	[/^\-\s+([^\n]+)/gim, '<ul><li>$1</li></ul>'],
	[/^\*\s+([^\n]+)/gim, '<ul><li>$1</li></ul>'],
	[/^\d+.\s+(.*)$/gm, '<ul><li>$1</li></ul>'],
	[/^\d+.\s+(.*)$/gm, '<ul><li>$1</li></ul>'],

	/**
	 * This parse code blocks
	 */
	[
		/```+\s+([\w]+)+\n([\s\S]+?)```/gim,
		"<br/><pre class='code'><code>$2</code></pre><br/>"
	],
	[
		/```+([\w]+)+\n([\s\S]+?)```/gim,
		"<br/><pre class='code'><code>$2</code></pre><br/>"
	],
	[
		/```+\n([\s\S]+?)```/gim,
		"<br/><pre class='language-plaintext'><code >$1</code></pre><br/>"
	],
	/**
	 * This parse a inline code
	 */
	[/(`)(.*?)\1/gim, "\n<pre class='inline-code'>$2</pre>\n"],
	/**
	 * This parse marked text
	 */
	[/==+([^\==]+)+==/gim, '<mark>$1</mark>'],
	/**
	 * This parse custom blocks
	 */
	[/\:::+([^\n]+)+\n+([^\:::]+)\:::/gim, "<div class='block $1'>$2</div>"]
];
