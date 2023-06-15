export const generateHTMLPageTemplate = ({
	parsedMarkdown
}: {
	parsedMarkdown: string;
}): string => {
	const HTMLPageTemplate = `
		<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>markdown preview</title>
    <meta name="description" content="Your markdown preview">
    <link rel="stylesheet" type="text/css" href="md-theme.css">
		<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="HandheldFriendly" content="true">
<link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/base16/solarized-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
  </head>
  <body>
		${parsedMarkdown}
  </body>
</html>`;

	return HTMLPageTemplate;
};
