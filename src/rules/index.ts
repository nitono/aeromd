export const rules: Array<[RegExp, string]> = [
	[/\<td><\/td\>/gm, ''],
	[/\<th><\/th\>/gm, ''],
	[
		/~~~+\s+([\w]+)+\n([\s\S]+?)~~~/gim,
		"<pre class='code language-$1'><code>$2</code></pre>"
	],
	[
		/~~~+([\w]+)+\n([\s\S]+?)~~~/gim,
		"<pre class='code language-$1'><code>$2</code></pre>"
	],
	[
		/~~~+\n([\s\S]+?)~~~/gim,
		"<pre class='language-plaintext'><code>$1</code></pre>"
	],
	[/!\[([^\]]+|)\]\(([^!("|')(\s)]+)(\s("|')([^("|')]+)("|')|)\)/gim, '<img src="$2" tittle="$5" alt="$1"/>'],

	[/^(---)/gm, '	<hr>'],
	[/^(\*\*\*)/gm, '	<hr>'],
	[/^(___)/gm, '	<hr>'],

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

	[/\*\*\s?([^\n]+)\*\*/g, '<b>$1</b>\n'],
	[/__([^_]+)__/g, '<b>$1</b>\n'],
	[/\*\s?([^\n]+)\*/g, '<i>$1</i>\n'],
	[/_([^\n]+)_/g, '<i>$1</i>\n'],
	[/~~\s?([^_]+)~~/g, '<s>$1</s>'],

	[/\[([^\]]+)\]\(([^\"|\)]+)\s\"+([^\"]+)+\"\)/gm, '<a href="$2">$3</a>'],
	[/\[([^\]]+|)]\(([^\)]+|)\)/gm, '<a href="$2">$1</a>'],

	[/^\+\s+([^\n]+)/gim, '<ul><li>$1</li></ul>'],
	[/^\-\s+([^\n]+)/gim, '<ul><li>$1</li></ul>'],
	[/^\*\s+([^\n]+)/gim, '<ul><li>$1</li></ul>'],

	[
		/```+\s+([\w]+)+\n([\s\S]+?)```/gim,
		"<pre class='code language-$1'><code>$2</code></pre>"
	],
	[
		/```+([\w]+)+\n([\s\S]+?)```/gim,
		"<pre class='code language-$1'><code>$2</code></pre>"
	],
	[
		/```+\n([\s\S]+?)```/gim,
		"<pre class='language-plaintext'><code>$1</code></pre>"
	],

	[/(`)(.*?)\1/gim, "\n<pre class='inline-code'>$2</pre>\n"],

	[/==+([^\n]+)+==/gim, '<mark>$1</mark>'],
	[/<([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/gmi, "<p>$1</p>"],
	[/<(https?[^>]+)>/gim, '<a href="$1">$1</a>'],
	// [/<mailto:(\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+)>/gim, "<a href='$1'>$2</a>"],
	[/\:::+([^\n]+)+\n+([^\:::]+)\:::/gim, "<div class='block $1'>$2</div>"]
];
