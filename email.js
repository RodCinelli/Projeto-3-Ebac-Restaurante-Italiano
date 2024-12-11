document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#fale-conosco form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o comportamento padrão de enviar o formulário.

        // Captura os valores dos campos.
        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const telefone = document.querySelector('#telefone').value || 'Não informado';
        const mensagem = document.querySelector('#mensagem').value;

        // Monta o corpo do email.
        const subject = `Mensagem de ${nome}`;
        const body = `
            Nome: ${nome}%0D%0A
            E-mail: ${email}%0D%0A
            Telefone: ${telefone}%0D%0A
            Mensagem:%0D%0A
            ${mensagem}
        `;

        // Cria o link mailto.
        const mailtoLink = `mailto:andre@engparente.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;

        // Exibe uma mensagem de sucesso ao usuário.
        const successMessage = document.createElement('div');
        successMessage.textContent = 'E-mail enviado com sucesso!';
        successMessage.style.color = 'green';
        successMessage.style.marginTop = '20px';
        successMessage.style.fontWeight = 'bold';

        // Adiciona a mensagem abaixo do formulário.
        form.appendChild(successMessage);

        // Limpa os campos do formulário.
        form.reset();

        // Remove a mensagem após 5 segundos.
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
});
