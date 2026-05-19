/* =========================================
   FLOATING ICONS
========================================= */

const container =
    document.getElementById('floating-container');

if(container) {

    const symbols = ['♡', '✦'];

    for(let i = 0; i < 180; i++) {

        const floating =
            document.createElement('div');

        floating.classList.add('floating');

        floating.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        floating.style.top =
            Math.random() * 100 + '%';

        floating.style.left =
            Math.random() * 100 + '%';

        floating.style.fontSize =
            (1 + Math.random() * 2) + 'rem';

        floating.style.animationDuration =
            (4 + Math.random() * 6) + 's';

        floating.style.animationDelay =
            Math.random() * 5 + 's';

        container.appendChild(floating);

    }

}

/* =========================================
   BOTÕES COPIAR
========================================= */

const copyButtons =
    document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {

    button.addEventListener('click', () => {

        const code =
            button.closest('.snippet-card')
                  .querySelector('code')
                  .innerText;

        navigator.clipboard.writeText(code);

        button.innerText = 'Copiado!';

        setTimeout(() => {

            button.innerText = 'Copiar';

        }, 2000);

    });

});