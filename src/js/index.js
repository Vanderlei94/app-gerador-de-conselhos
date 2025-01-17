const adviceUpdateButton = document.querySelector(".novo-conselho");
const adviceNumber = document.querySelector(".numero-conselho");
const adviceDescription = document.querySelector(".conselho");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok){
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
    }

    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerText = adviceId;
    adviceDescription.innerText = adviceText;

  } catch (error) {
    console.error("Erro ao tentar buscar as informações da API", error);
  }
  
}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();