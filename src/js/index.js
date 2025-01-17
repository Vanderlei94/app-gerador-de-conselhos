let conselho = null;
let idConselho = null;

document.querySelector('.novo-conselho').addEventListener('click', getConselhos);

    async function getConselhos() {
        try{
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        conselho = data.slip.advice;
        idConselho = data.slip.id;
        document.querySelector('.conselho').innerText = conselho;
        document.querySelector('.numero-conselho').innerText = `advice #${idConselho}`;
    } catch (error) {
        console.log(error); 
    }
}