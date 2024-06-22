const mensagens = [
    "A vida é como uma bicicleta. Para ter equilíbrio, você tem que se manter em movimento. - Albert Einstein",
    "Nada é impossível, a palavra mesmo diz 'eu sou possível'! - Audrey Hepburn",
    "O sucesso é ir de fracasso em fracasso sem perder entusiasmo. - Winston Churchill",
    "Acredite que você pode, assim você já está no meio do caminho. - Theodore Roosevelt",
    "O segredo para ficar à frente é começar. - Mark Twain",
    "Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos. - James Cameron"
  ];
  
  const mensagemElemento = document.getElementById('mensagem');
  const btnGerar = document.getElementById('btn-gerar');
  
  btnGerar.addEventListener('click', () => {
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    mensagemElemento.textContent = mensagemAleatoria;
  });
  