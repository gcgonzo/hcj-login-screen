// Configurações da tela principal de Login

const input = document.querySelectorAll("input")
const usuario = document.getElementById("usuario")
const senha = document.getElementById("senha")
const userLabel = document.getElementById("userLabel")
const senhaLabel = document.getElementById("senhaLabel")

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
