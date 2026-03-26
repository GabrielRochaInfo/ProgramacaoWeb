function mostrar(pagina) {
  const paginas = document.querySelectorAll(".pagina");
  paginas.forEach(p => p.style.display = "none");

  document.getElementById(pagina).style.display = "block";
}

// PRODUTOS
const produtos = [
  {
    nome: "PlayStation 5 825GB",
    preco: "R$ 2950,00",
    imagem: "ps5.jpeg"
  },
  {
    nome: "RX 5700XT 8GB",
    preco: "R$ 1100,00",
    imagem: "gpu.jpeg"
  },
  {
    nome: "Mouse Logitech G pro",
    preco: "R$ 450,00",
    imagem: "mouse.jpeg"
  }, 
  {
    nome: "PlayStaion 4 500gb",
    preco: "R$ 1250,00",
    imagem: "ps4.jpeg"
  }, 
  {
    nome: "PS Portal ",
    preco: "R$ 1100,00",
    imagem: "psp.jpeg"
  },  
  {
    nome: "Nintendo Switch  ",
    preco: "R$ 1100,00",
    imagem: "switch.jpeg"
  }, 
  {
    nome: "Xbox Series X ",
    preco: "R$ 3900,00",
    imagem: "xbox1.jpeg"
  },  
  {
    nome: "Controle PS5 São Paulo ",
    preco: "R$ 390,00",
    imagem: "sp.jpeg"
  },  
  {
    nome: "Monitor AOC 144Hz 24Pol ",
    preco: "R$ 650,00",
    imagem: "monitor.jpeg"
  },
];
const lista = document.getElementById("lista-produtos");

produtos.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("produto");

  div.innerHTML = `
  <img src="${p.imagem}" alt="${p.nome}">
  <h3>${p.nome}</h3>
  <p>${p.preco}</p>
`;

  lista.appendChild(div);
});
