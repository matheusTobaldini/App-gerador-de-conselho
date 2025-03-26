const titleAdvice = document.querySelector('#advice');
const conselho = document.querySelector('#conselho');
const botaoAdvice = document.querySelector('#button-dice');

async function apiRandom() {
    try {
        const url = await fetch("https://api.adviceslip.com/advice");

        if(!Response.ok) {
            throw new Error ("Ocorreu um erro ao tentar buscar informações na API")
        }

        const adviceContent = await url.json();
        const adviceTitle = adviceContent.slip.id;
        const adviceConselho = adviceContent.slip.advice;

        titleAdvice.innerHTML = `advice #${adviceTitle}`;
        conselho.innerHTML = adviceConselho;

    } catch (error) {
        console.error("Erro ao tentar buscar informação na API", error)
    }

}
    


botaoAdvice.addEventListener('click', apiRandom)