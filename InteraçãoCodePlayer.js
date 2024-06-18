var botoes = document.getElementsByClassName('botoes');
var editorHTML0 = document.getElementById('editorHTML');
var nomePasta = document.getElementsByClassName('nomePasta');

botoes[0].addEventListener('click', function(){
    editorHTML0.remove();
    nomePasta[0].remove();
})

var editorCSS0 = document.getElementById('editorCSS');

botoes[1].addEventListener('click', function(){
    editorCSS0.remove();
    nomePasta[1].remove();
});

var editorJS0 = document.getElementById('editorJS');

botoes[2].addEventListener('click', function(){
    editorJS0.remove();
    nomePasta[2].remove();
});

var output = document.getElementById('output');

botoes[3].addEventListener('click', function(){
    output.remove();
    nomePasta[3].remove();
})