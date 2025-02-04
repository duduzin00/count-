function iniciarContador(dataInicial) {
  const contadorElemento = document.getElementById("contador");

  setInterval(() => {
    const agora = new Date().getTime();
    const inicio = new Date(dataInicial).getTime();
    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    contadorElemento.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }, 1000);
}

iniciarContador("2024-11-02T00:00:00");
