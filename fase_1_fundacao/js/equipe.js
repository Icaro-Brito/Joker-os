/**
 * Joker O.S. - Módulo de Gestão de Equipe
 * Funções: Alternar exibição do painel de cadastro, gerenciar status e exclusão de colaboradores.
 */

// Exibe ou oculta o formulário de cadastro de colaboradores
function toggleFormCadastro() {
    const form = document.getElementById('painel-cadastro-usuario');
    if (!form) return;

    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

// Alerta de simulação para alteração de status
function alterarStatus(nome) {
    const novoStatus = prompt(`Alterar status de ${nome}:\n\nDigite:\n1 - Ativo\n2 - Em Férias\n3 - Inativo`);

    if (novoStatus === '1') {
        alert(`${nome} agora está ATIVO.`);
    } else if (novoStatus === '2') {
        alert(`${nome} agora está EM FÉRIAS.`);
    } else if (novoStatus === '3') {
        alert(`${nome} agora está INATIVO.`);
    }
}

// Confirmação para exclusão de perfil de colaborador
function excluirUsuario(nome) {
    if (confirm(`Tem certeza que deseja excluir permanentemente o perfil de ${nome}?`)) {
        alert(`Perfil de ${nome} removido com sucesso.`);
    }
}