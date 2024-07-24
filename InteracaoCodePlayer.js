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
var contGeral = 4;

var textoHtml;
var textoCss;
var textoJs;

botoes[0].addEventListener('click', function(){
    if(contHTML==true){
        nomePastaHTML.style.display = "none";
        editorHTML0.style.display = "none" 
        contHTML=false;
        contGeral--;
    }
    else{
        nomePastaHTML.style.display = "inline-flex";
        editorHTML0.style.display = "inline-flex";
        contHTML=true;
        contGeral++;
    }
})
botoes[1].addEventListener('click', function(){
    if(contCSS==true){
        nomePastaCSS.style.display = "none";
        editorCSS0.style.display = "none";
        contCSS=false;
        contGeral--;
    }
    else{
        nomePastaCSS.style.display = "inline-flex";
        editorCSS0.style.display = "inline-flex";
        contCSS=true;
        contGeral++;
    }
});
botoes[2].addEventListener('click', function(){
    if(contJS==true){
        nomePastaJS.style.display = "none";
        editorJS0.style.display = "none";
        contJS=false;
        contGeral--;
    }
    else{
        nomePastaJS.style.display = "inline-flex";
        editorJS0.style.display = "inline-flex";
        contJS=true;
        contGeral++;
    }
});
botoes[3].addEventListener('click', function(){
    if(contOutput==true){
        nomePastaOutput.style.display = "none";
        output.style.display = "none";
        contOutput=false;
        contGeral--;
    }
    else{
        nomePastaOutput.style.display = "inline-flex";
        output.style.display = "inline-flex";
        contOutput=true;
        contGeral++;
    }
})
function PreenchendoEspacoEditores(){
    if(contGeral==4){
        editorHTML0.style.width = "25%";
        editorCSS0.style.width = "25%";
        editorJS0.style.width = "25%";
        output.style.width = "25%";

        nomePastaHTML.style.width = "25%";
        nomePastaCSS.style.width = "25%";
        nomePastaJS.style.width = "25%";
        nomePastaOutput.style.width = "25%";
    }
    else if(contGeral==3){
        editorHTML0.style.width = "33.33%";
        editorCSS0.style.width = "33.33%";
        editorJS0.style.width = "33.33%";
        output.style.width = "33.33%";

        nomePastaHTML.style.width = "33.33%";
        nomePastaCSS.style.width = "33.33%";
        nomePastaJS.style.width = "33.33%";
        nomePastaOutput.style.width = "33.33%";
    }
    else if(contGeral==2){
        editorHTML0.style.width = "50%";
        editorCSS0.style.width = "50%";
        editorJS0.style.width = "50%";
        output.style.width = "50%";

        nomePastaHTML.style.width = "50%";
        nomePastaCSS.style.width = "50%";
        nomePastaJS.style.width = "50%";
        nomePastaOutput.style.width = "50%";
    }
    else if(contGeral==1){
        editorHTML0.style.width = "100%";
        editorCSS0.style.width = "100%";
        editorJS0.style.width = "100%";
        output.style.width = "100%";

        nomePastaHTML.style.width = "100%";
        nomePastaCSS.style.width = "100%";
        nomePastaJS.style.width = "100%";
        nomePastaOutput.style.width = "100%";
    }
}
botoes[0].addEventListener('click', PreenchendoEspacoEditores);
botoes[1].addEventListener('click', PreenchendoEspacoEditores);
botoes[2].addEventListener('click', PreenchendoEspacoEditores);
botoes[3].addEventListener('click', PreenchendoEspacoEditores);

textoHtml = editorHtml.getValue();
textoCss = editorCss.getValue();
textoJs = editorJs.getValue();

editorHTML0.addEventListener('input', function(){
    textoHtml = editorHtml.getValue();
    iframe.srcdoc = textoHtml;
    console.log(textoHtml);
})
editorCSS0.addEventListener('input', function(){
    textoCss = editorCss.getValue();
    iframe.style = textoCss;
    console.log(textoCss);
})
editorJS0.addEventListener('input', function(){
    textoJs = editorJs.getValue();
    console.log(textoJs);
})


//----------------------------vvvvvvvvvvvvvvvvvv-----------------------------

var iframe = document.getElementById('iframe');

iframe.srcdoc = textoHtml;
iframe.srcdoc.style = textoCss;
//----------------------------^^^^^^^^^^^^^^^^^^-----------------------------