function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString("pt-BR", {
      hour10: false,
      timeZone: "UTC",
    })
  }
  const iniciar = document.querySelector(".iniciar")
  const pausar = document.querySelector(".pausar")
  const parar = document.querySelector(".parar")
  const relogio = document.querySelector(".relogio")
  let segundos = 0
  let timer
  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++
      relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
  }
  document.addEventListener("click", function (e) {
    const el = e.target
    if (el.classList.contains("iniciar")) {
      clearInterval(timer)
      iniciaRelogio()
      relogio.style.color = "black"
    }
    if (el.classList.contains("pausar")) {
      clearInterval(timer)
      relogio.style.color = "red"
    }
    if (el.classList.contains("parar")) {
      clearInterval(timer)
      relogio.innerHTML = "00:00:00"
      relogio.style.color = "black"
      segundos = 0
    }
  })
}
relogio()
