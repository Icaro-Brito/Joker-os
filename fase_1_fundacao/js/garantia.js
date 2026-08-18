/**
 * Joker O.S. - Módulo de Equipamentos em Garantia
 * Função: Exibir popup de confirmação antes de redirecionar para a reabertura de garantia sem custo.
 */

function confirmarRetornoGarantia(os, cliente, equipamento) {
    const mensagem =
        "⚠️ CONFIRMAÇÃO DE RETORNO DE GARANTIA ⚠️\n\n" +
        "Atenção! Você está prestes a abrir uma garantia SEM CUSTO para:\n\n" +
        "• Nº O.S. Origem: " + os + "\n" +
        "• Cliente: " + cliente + "\n" +
        "• Equipamento: " + equipamento + "\n\n" +
        "Confirma o retorno deste equipamento para a bancada?";

    if (confirm(mensagem)) {
        // Redireciona para o formulário de reentrada de garantia
        window.location.href = "retorno-garantia.html";
    }
}