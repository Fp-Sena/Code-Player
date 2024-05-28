var editorHTML = ace.edit("editorHTML");
var editorCSS = ace.edit("editorCSS");
var editorJS = ace.edit("editorJS");

editorHTML.setTheme("ace/theme/monokai");
editorCSS.setTheme("ace/theme/monokai");
editorJS.setTheme("ace/theme/monokai");

editorHTML.session.setMode("ace/mode/html");
editorCSS.session.setMode("ace/mode/css");
editorJS.session.setMode("ace/mode/javascript");
