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

var contHTML = 0;
var contCSS = 0;
var contJS = 0;
var contOutput = 0;

//true false

botoes[0].addEventListener('click', function(){
    if(contHTML%2==0){
        editorHTML0.remove();
        nomePastaHTML.remove();
    }
    else{
        tela.appendChild(editorHTML0);
        tela.appendChild(nomePastaHTML);
    }
    contHTML++;
})
botoes[1].addEventListener('click', function(){
    if(contCSS%2==0){
        editorCSS0.remove();
        nomePastaCSS.remove();
    }
    else{
        tela.appendChild(editorCSS0);
        tela.appendChild(nomePastaCSS);
    }
    contCSS++;
});
botoes[2].addEventListener('click', function(){
    if(contJS%2==0){
        editorJS0.remove();
        nomePastaJS.remove();
    }
    else{
        tela.appendChild(editorJS0);
        tela.appendChild(nomePastaJS);
    }
    contJS++;
});
botoes[3].addEventListener('click', function(){
    if(contOutput%2==0){
        output.remove();
        nomePastaOutput.remove();
    }
    else{
        tela.appendChild(output);
        tela.appendChild(nomePastaOutput);
    }
    contOutput++;
})