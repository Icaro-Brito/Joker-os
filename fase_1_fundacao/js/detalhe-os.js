/**
 * Joker O.S. - Módulo de Detalhes da O.S.
 * Função: Recalcular em tempo real o Valor Total e o Lucro Líquido
 */

function calcularValores() {
    const elPeca = document.getElementById('custo-peca');
    const elMaoObra = document.getElementById('valor-mao-obra');
    const elServico = document.getElementById('valor-servico');
    const elLucro = document.getElementById('lucro-estimado');

    if (!elPeca || !elMaoObra || !elServico || !elLucro) return;

    const peca = parseFloat(elPeca.value) || 0;
    const maoObra = parseFloat(elMaoObra.value) || 0;

    const total = peca + maoObra;
    const lucro = total - peca;

    elServico.value = "R$ " + total.toFixed(2).replace('.', ',');
    elLucro.value = "R$ " + lucro.toFixed(2).replace('.', ',');
}