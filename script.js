const button = document.querySelector("button");
const textInput = document.getElementById("text-input");
const resultBox = document.querySelector(".evaluation_result");

button.addEventListener("click", async () => {
    const text = textInput.value.trim();
    if(text === ""){
        resultBox.innerHTML = "<p>Please enter some news text.</p>";
        return;
    }
    resultBox.innerHTML = "<p>Analyzing...</p>";
    try{
        const response = await fetch(
            "http://127.0.0.1:5000/predict",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text })
            }
        );
        const data = await response.json();

        resultBox.innerHTML = `
            <h2>${data.prediction}</h2>
            <p>Confidence: ${data.confidence}%</p>
        `;
        if(data.prediction === "REAL NEWS"){
            resultBox.style.color = "green";
        }
        else{
            resultBox.style.color = "red";
        }
    } 
    catch(e){
        resultBox.innerHTML = `
            <p>Error connecting to server.</p>
        `;
        console.error(e);
    }
});