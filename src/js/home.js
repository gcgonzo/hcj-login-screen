// if (localStorage.getItem("token") == null) {
//   alert("Você precisa estar logado para acessar essa página")
//   window.location.href = "src/html/index.html"
// }

let userLogado = JSON.parse(localStorage.getItem("userLogado"))

let logado = document.querySelector("#logado")
logado.innerHTML = `Olá ${userLogado.nome} !!!`

function sair() {
  localStorage.removeItem("token")
  localStorage.removeItem("userLogado")
  localStorage.removeItem("nome")
  window.location.href = "/index.html"
}
