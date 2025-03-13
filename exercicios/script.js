const botao = documento.getELementById('botao');
const texto = documento.getELementById('texto');

botao.addEventlistener('click') , function(){
    texto.texContent = 'Oba! voce clicou no botao!';
     
    texto.style.color = 'red';
    TransformStreamDefaultController.style.fontSize = '24px';
    texto.style.fontWeight = 'bold';
});