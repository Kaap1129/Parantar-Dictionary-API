const API_KEY = "Xde1QFF+jci/DPB61QV0mg==fj63KqsKkXX2Y5cw";
const BASE_URL = "https://api.api-ninjas.com/v1/dictionary?word=";

function searchWord() {
  const word = document.getElementById("wordInput").value.trim();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!word) {
    resultDiv.innerHTML = "<p>Please enter a word.</p>";
    return;
  }

  fetch(`${BASE_URL}${word}`, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Word not found or error fetching data.");
      }
      return response.json();
    })
    .then(data => {
      if (!data.definition) {
        resultDiv.innerHTML = "<p>No definition found.</p>";
        return;
      }

      resultDiv.innerHTML = `
        <h2>${word}</h2>
        <p><strong>Definition:</strong> ${data.definition}</p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
