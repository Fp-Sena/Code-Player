var tela = document.getElementById('tela');

var botoes = document.getElementsByClassName('botoes');

var editorHTML0 = document.getElementById('editorHTML');
var editorCSS0 = document.getElementById('editorCSS');
var editorJS0 = document.getElementById('editorJS');
var output = document.getElementById('output');

var nomePastaHTML = document.getElementById('nomePastaHTML');
var nomePastaCSS = document.getElementById('nomePastaCSS');
var nomePastaJS = document.getElementById('nomePastaJS');
var nomePastaOutput = document.getElementById("nomePastaOutput");

var contHTML = true;
var contCSS = true;
var contJS = true;
var contOutput = true;

var textoHtml;
var textoCss;
var textoJs;

function adicionaERemove(nomePasta, editor, contador){
    if(contador==true){
        nomePasta.style.display = "none";
        editor.style.display = "none";
        contador=false;
    }
    else{
        nomePasta.style.display = "inline-flex";
        editor.style.display = "inline-flex";
        contador=true;
    }
    return contador;
}

botoes[0].addEventListener('click', function(){ contHTML = adicionaERemove(nomePastaHTML, editorHTML0, contHTML)});
botoes[1].addEventListener('click', function(){ contCSS = adicionaERemove(nomePastaCSS, editorCSS0, contCSS)});
botoes[2].addEventListener('click', function(){ contJS = adicionaERemove(nomePastaJS, editorJS0, contJS)});
botoes[3].addEventListener('click', function(){ contOutput = adicionaERemove(nomePastaOutput, output, contOutput)});

var iframe = document.getElementById('iframe');

textoHtml = editorHtml.getValue();
textoCss = editorCss.getValue();
textoJs = editorJs.getValue();

iframe.srcdoc = '<head><style>'+textoCss+'</style></head>'+'<body>'+textoHtml+'</body>'+'<script>'+textoJs+'</script>';

function saidaParaOutput(){
    textoHtml = editorHtml.getValue();
    textoCss = editorCss.getValue();
    textoJs = editorJs.getValue();
    iframe.srcdoc = '<head><style>'+textoCss+'</style></head>'+'<body>'+textoHtml+'</body>'+'<script>'+textoJs+'</script>';
}

editorHTML0.addEventListener('keyup', saidaParaOutput);
editorCSS0.addEventListener('keyup', saidaParaOutput);
editorJS0.addEventListener('keyup', saidaParaOutput);