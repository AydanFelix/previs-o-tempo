

const key = "fe4a57c21b52505aac87f13f24ff3e07"

function colocarDadosNaTela(dados) {
    console.log(dados)
 document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
document.querySelector(".icone-info-tempo"). src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}



async function BuscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    
    BuscarCidade(cidade)
} 