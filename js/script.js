const openButtons = document.querySelectorAll(".open-modal"); //variavel que armazena todas as tags (nesse caso, button) que possuirem a classe .open-modal, criando uma NodeList

openButtons.forEach((button) => {
  //para cada botão na NodeList
  button.addEventListener("click", () => {
    //Adcionou um evento de clicar que ao clicar
    const modalId = button.getAttribute("data-modal"); // cria uma variavel que armazena o valor do atributo do botao clicado, foi especificado que o atrib que ele quer o valor é o data-modal
    const modal = document.getElementById(modalId); // cria outra variavel que armazena a tag que tiver o ID com o mesmo nome do atributo que foi armazenado na const anterior

    modal.showModal(); //mostra a o que variavel modal pegou, como se fosse um modal
  });
});

const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.close();
  });
});
