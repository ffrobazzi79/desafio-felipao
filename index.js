let herois = ["Chapolin:7500", "Zoro:3000", "Capitão cueca:9000"];
let arrayMensagemFinal = [];

// Função para coletar o nível de experiência e classificar por nome do nível
function heroiNivel(item) {
    let [heroi, xp] = item.split(":");
    xp = parseInt(xp);
    let nivel = "";

    switch (true) {
        case (xp < 1000):
            nivel = "Ferro";
            break;

        case (xp >= 1001 && xp <= 2000):
            nivel = "Bronze";
            break;

        case (xp >= 2001 && xp <= 5000):
            nivel = "Prata";
            break;

        case (xp >= 5001 && xp <= 7000):
            nivel = "Ouro";
            break;

        case (xp >= 7001 && xp <= 8000):
            nivel = "Platina";
            break;

        case (xp >= 8001 && xp <= 9000):
            nivel = "Ascendente";
            break;

        case (xp >= 9001 && xp <= 10000):
            nivel = "Imortal";
            break;

        case (xp >= 10001):
            nivel = "Radiante";
            break;
            
        default:
            nivel = "Indefinido";
    }
    console.log(item)
    console.log(heroi);
    console.log(xp)
    console.log(nivel)
    

    arrayMensagemFinal.push(`O Herói de nome ${heroi} está no nível de ${nivel}`);
}

// Repetição que chama a "função heroiNivel" para processar cada herói do array "herois"
herois.forEach(i => {
    heroiNivel(i);
    console.log(arrayMensagemFinal)
});

console.log(herois);

// Repetição para mostrar cada item "mensagem" do array "arrayMensagemFinal"
arrayMensagemFinal.forEach(msg => console.log(msg));
