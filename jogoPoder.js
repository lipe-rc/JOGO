const nomePersonagem = prompt('Nome Do Seu Personagem: ');
const poderAtaque = prompt('Insira Seu Poder De Ataque: ');

const ataque = parseFloat(poderAtaque);


const nomePersonagem2 = prompt('Nome Do Personagem 2: ');
const escudo = confirm('deseja escudo ?')
const pontosDeVida = prompt('insira pontos de vida: ');
const pontosDeDefesa = prompt('insira um valor de defesa: ');

const defesa = parseFloat(pontosDeDefesa);
const vida = parseFloat(pontosDeVida);


if (ataque > defesa && escudo === false) {
    const defesaVsAtaque = ataque - defesa;
    const dano = vida - defesaVsAtaque;
    alert(
        nomePersonagem + ':' + ' deu dano de:' + ' ' + defesaVsAtaque + '\n' +
        nomePersonagem2 + ':' + ' ficou com a vida de: ' + dano
    )
} else if (ataque > defesa && escudo === true) {
    const defesaVsAtaque = (ataque / 2) - defesa;
    if (defesaVsAtaque <= defesa) {
        alert('dano causado foi 0')
    } else {
        const dano = vida - defesaVsAtaque;
        if (dano <= 0) {
            alert(
                nomePersonagem + ':' + ' deu um ataque de: ' + defesaVsAtaque + '\n' +
                nomePersonagem2 + ':' + ' ficou com vida de: ' + dano + '\n' +
                nomePersonagem2 + ':' + ' morreu'
            )
        } else {
            alert(
                nomePersonagem + ':' + ' deu um ataque de: ' + defesaVsAtaque + '\n' +
                nomePersonagem2 + ':' + ' ficou com vida de: ' + dano
            )
        }
    }

} else if (ataque === defesa) {
    alert('dano foi 0');
}