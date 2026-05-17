/* BOTÕES COPIAR */
const copyButtons =
    document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {

    button.addEventListener('click', () => {

        const code =
            button.parentElement.nextElementSibling.innerText;

        navigator.clipboard.writeText(code);

        button.innerText = 'Copiado!';

        setTimeout(() => {

            button.innerText = 'Copiar';

        }, 2000);

    });

});