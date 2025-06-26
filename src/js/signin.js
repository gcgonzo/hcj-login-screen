// Configurações da tela principal de Login

const input = document.querySelectorAll("input")
const usuario = document.getElementById("usuario")
const senha = document.getElementById("senha")
const userLabel = document.getElementById("userLabel")
const senhaLabel = document.getElementById("senhaLabel")
const btn = document.querySelector(".btn")

// Fazendo efeito de apertar o botão
btn.addEventListener("click", () => {
  btn.classList.add("aperte")
  setInterval(() => {
    btn.classList.remove("aperte")
  }, 1000)
})

// Configuração que desloca o label para cima do input

input.forEach(() => {
  usuario.addEventListener("input", (e) => {
    let valor = e.target.value
    // console.log(valor)
    if (valor.length > 0) {
      userLabel.classList.add("active")
    } else {
      userLabel.classList.remove("active")
    }
  })
  senha.addEventListener("input", (e) => {
    let val = e.target.value
    // console.log(valor)
    if (val.length > 0) {
      senhaLabel.classList.add("active")
    } else {
      senhaLabel.classList.remove("active")
    }
  })
})

// Limpar o input nome após atualizar a página

window.addEventListener("unload", () => {
  input.forEach((e) => {
    e.value = ""
  })
})

// Configuração para mostrar a senha digitada pelo usuário

const eye = document.querySelector(".fa-eye")
// console.log(eye)

eye.addEventListener("click", () => {
  //console.log(senha.type)
  if (senha.getAttribute("type") === "password") {
    senha.setAttribute("type", "text")
  } else {
    senha.setAttribute("type", "password")
  }
})

/** Autenticação de usuário */

function entrar() {
  const usuario = document.getElementById("usuario")
  const senha = document.getElementById("senha")
  const userLabel = document.getElementById("userLabel")
  const senhaLabel = document.getElementById("senhaLabel")

  let msgError = document.querySelector("#msgError")
  let listaUser = []

  let userValid = {
    nome: null,
    user: null,
    senha: null,
  }

  listaUser = JSON.parse(localStorage.getItem("listUser"))
  console.log(listaUser)

  listaUser?.forEach((item) => {
    if (usuario.value == item.usuarioCad && senha.value == item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        user: item.usuarioCad,
        senha: item.senhaCad,
      }
    }
  })
  if (usuario.value == userValid.user && senha.value == userValid.senha) {
    window.location.href = "/src/html/home.html"
    let mathRandom = Math.random().toString(16).substring(2)
    let token = mathRandom + mathRandom
    // console.log(token)
    localStorage.setItem("token", token)
    localStorage.setItem("userLogado", JSON.stringify(userValid))
  } else {
    usuario.setAttribute("style", "border-color: red")
    senha.setAttribute("style", "border-color: red")
    userLabel.setAttribute("style", "color: red")
    senhaLabel.setAttribute("style", "color: red")
    msgError.setAttribute("style", "opacity: 1")
    msgError.innerHTML = "Usuário ou senha inválidos"
    usuario.focus()

    // setTimeout(() => {
    //   msgError.setAttribute("style", "opacity: 0")
    //   usuario.removeAttribute("style")
    //   senha.removeAttribute("style")
    //   userLabel.removeAttribute("style")
    //   senhaLabel.removeAttribute("style")
    //   // location.reload()
    //   usuario.value = ""
    //   senha.value = ""
    // }, 3000)
  }
}
