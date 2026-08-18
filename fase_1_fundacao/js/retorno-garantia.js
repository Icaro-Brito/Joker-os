/**
 * Joker O.S. - Módulo de Retorno de Garantia
 * Função: Exibir a confirmação de abertura de O.S. sem custo e submeter o formulário.
 */

function confirmarAberturaGarantia() {
    const mensagem =
        "⚠️ CONFIRMAÇÃO DE RETORNO DE GARANTIA ⚠️\n\n" +
        "Deseja abrir uma O.S. de Garantia (Sem Custo) para o equipamento abaixo?\n\n" +
        "• O.S. Origem: #003-ANTIGA\n" +
        "• Cliente: Fernanda Lima\n" +
        "• Equipamento: PlayStation 5\n\n" +
        "Clique em OK para confirmar e dar entrada na bancada.";

    if (confirm(mensagem)) {
        alert("O.S. de Retorno de Garantia aberta com sucesso!");
        const form = document.getElementById('form-garantia');
        if (form) {
            form.submit();
        }
    }
}