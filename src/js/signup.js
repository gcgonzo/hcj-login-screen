const user = document.getElementById("user")
const nome = document.getElementById("nome")
const pin = document.getElementById("pin")
const confSenha = document.getElementById("confSenha")
const nomeLabel = document.getElementById("nomeLabel")
const labelUser = document.getElementById("labelUser")
const pinLabel = document.getElementById("pinLabel")
const confSenhaLabel = document.getElementById("confSenhaLabel")
const cad = document.querySelectorAll(".cad")
console.log(cad)

// configuração que desloca o label para cima do input
input.forEach(() => {
  nome.addEventListener("input", (e) => {
    let valor = e.target.value
    console.log(valor)
    if (valor.length > 0) {
      nomeLabel.classList.add("active")
    } else {
      nomeLabel.classList.remove("active")
    }
  })
  user.addEventListener("input", (e) => {
    let val = e.target.value
    // console.log(valor)
    if (val.length > 0) {
      labelUser.classList.add("active")
    } else {
      labelUser.classList.remove("active")
    }
  })
  pin.addEventListener("input", (e) => {
    let val = e.target.value
    // console.log(valor)
    if (val.length > 0) {
      pinLabel.classList.add("active")
    } else {
      pinLabel.classList.remove("active")
    }
  })
  confSenha.addEventListener("input", (e) => {
    let val = e.target.value
    // console.log(valor)
    if (val.length > 0) {
      confSenhaLabel.classList.add("active")
    } else {
      confSenhaLabel.classList.remove("active")
    }
  })
})

// Amostrar senha dos inputs de senha e confirmação de senha

const eyeSignup = document.querySelector(".signupPin")
const eyeConfSignup = document.querySelector(".sigConfPin")
// console.log(eyeSignup)
// console.log(eyeConfSignup)

eyeSignup.addEventListener("click", () => {
  //console.log(senha.type)
  if (pin.getAttribute("type") === "password") {
    pin.setAttribute("type", "text")
  } else {
    pin.setAttribute("type", "password")
  }
})
eyeConfSignup.addEventListener("click", () => {
  //console.log(senha.type)
  if (confSenha.getAttribute("type") === "password") {
    confSenha.setAttribute("type", "text")
  } else {
    confSenha.setAttribute("type", "password")
  }
})

// fechar e abrir o modal de cadastro
function abrirModal() {
  let signup = document.getElementById("signup")
  signup.style.display = "block"
}
function fecharModal() {
  let signup = document.getElementById("signup")
  signup.style.display = "none"
}
