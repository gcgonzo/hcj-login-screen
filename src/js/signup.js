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

let validNome = false
let validUsuario = false
let validSenha = false
let validConfirmaSenha = false

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

/** Validação dos campos */

// Validação de nome
nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    nomeLabel.setAttribute("style", "color: red")
    nomeLabel.innerHTML = "Nome *Insira no mínimo 3 caracteres"
    nome.setAttribute("style", "border-color: red")
    validNome = false
  } else {
    nomeLabel.setAttribute("style", "color: green")
    nomeLabel.innerHTML = "Nome"
    nome.setAttribute("style", "border-color: green")
    validNome = true
  }
})
// Validação de usuário
user.addEventListener("keyup", () => {
  if (user.value.length <= 4) {
    labelUser.setAttribute("style", "color: red")
    labelUser.innerHTML = "Usuário *Insira no mínimo 5 caracteres"
    user.setAttribute("style", "border-color: red")
    validUsuario = false
  } else {
    labelUser.setAttribute("style", "color: green")
    labelUser.innerHTML = "Usuário"
    user.setAttribute("style", "border-color: green")
    validUsuario = true
  }
})
// Validação de senha
pin.addEventListener("keyup", () => {
  if (pin.value.length <= 5) {
    pinLabel.setAttribute("style", "color: red")
    pinLabel.innerHTML = "Senha *Insira no mínimo 6 caracteres"
    pin.setAttribute("style", "border-color: red")
    validSenha = false
  } else {
    pinLabel.setAttribute("style", "color: green")
    pinLabel.innerHTML = "Senha"
    pin.setAttribute("style", "border-color: green")
    validSenha = true
  }
})
// Validação de confirme senha
confSenha.addEventListener("keyup", () => {
  if (pin.value !== confSenha.value) {
    confSenhaLabel.setAttribute("style", "color: red")
    confSenhaLabel.innerHTML = "Confirme a senha *As senhas não coincidem"
    confSenha.setAttribute("style", "border-color: red")
    validConfirmaSenha = false
  } else {
    confSenhaLabel.setAttribute("style", "color: green")
    confSenhaLabel.innerHTML = "Confirme a senha"
    confSenha.setAttribute("style", "border-color: green")
    validConfirmaSenha = true
  }
})

/** === Função Cadastrar === **/

function cadastrar() {
  if (validNome && validUsuario && validSenha && validConfirmaSenha) {
    //pega a informação armazenadas no localStorage
    let listUser = JSON.parse(localStorage.getItem("listUser")) || []
    listUser.push({
      nomeCad: nome.value,
      usuarioCad: user.value,
      senhaCad: pin.value,
    })
    //joga as informações no localStorage pelo listUser.push
    localStorage.setItem("listUser", JSON.stringify(listUser))

    //informa se que o cadastro foi realizado com sucesso
    msgSuccess.setAttribute("style", "display: block")
    msgSuccess.innerHTML = "<strong>Cadastro realizado com sucesso!</strong>"
    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""

    setTimeout(() => {
      //window.location.href = "../html/signin.html"
      let signup = document.querySelector("#signup")
      signup.style.display = "none"

      cad.forEach((input) => {
        input.value = ""
      })
    }, 3000)
  } else {
    //informa que o cadastro não foi realizado
    msgError.setAttribute("style", "display: block")
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente!</strong>"
    msgSuccess.setAttribute("style", "display: none")
    msgSuccess.innerHTML = ""
  }
}
