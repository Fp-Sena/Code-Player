var editorHtml = ace.edit("editorHTML");
var editorCss = ace.edit("editorCSS");
var editorJs = ace.edit("editorJS");

editorHtml.setTheme("ace/theme/monokai");
editorCss.setTheme("ace/theme/monokai");
editorJs.setTheme("ace/theme/monokai");

editorHtml.session.setMode("ace/mode/html");
editorCss.session.setMode("ace/mode/css");
editorJs.session.setMode("ace/mode/javascript");
