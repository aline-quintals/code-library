const container = document.getElementById('floating-container');

const symbols = ['♡', '✦'];

for(let i = 0; i < 180; i++) {

    const floating = document.createElement('div');

    floating.classList.add('floating');

    // símbolo aleatório
    floating.innerText =
        symbols[Math.floor(Math.random() * symbols.length)];

    // posição aleatória
    floating.style.top =
        Math.random() * 100 + '%';

    floating.style.left =
        Math.random() * 100 + '%';

    // tamanho aleatório
    floating.style.fontSize =
        (1 + Math.random() * 2) + 'rem';

    // duração aleatória
    floating.style.animationDuration =
        (4 + Math.random() * 6) + 's';

    // delay aleatório
    floating.style.animationDelay =
        Math.random() * 5 + 's';

    container.appendChild(floating);

}