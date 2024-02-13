// function fetchData(){
//     let inputBox=document.getElementById("inputBox")
//     let button=document.getElementById("button")
//     main=document.querySelector("main")
//     try {
//         const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputBox}`);
//         const data = await response.json();
//         console.log(data);

//         main.innerHTML =`
//             <h2>Word: <span>${data[0].word}</span></h2>
//             <p>Meaning: <span>${data[0].meanings[0].definitions[0].definition}</span></p>
//             <p>PartsOfSpeech: <span>${data[0].meanings[0].partOfSpeech}</span></p>
//             <p>Synonyms: <span>${data[0].meanings[0].synonyms}</span></p>
//         `;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

async function fetchData() {
    let inputBox = document.getElementById("inputBox").value;
    let button=document.getElementById("button");
    let main = document.querySelector(".main");
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputBox}`);
        const data = await response.json();
        console.log(data);

        main.innerHTML = `
            <h2>Word: <span>${data[0].word}</span></h2>
            <p>Meaning: <span>${data[0].meanings[0].definitions[0].definition}</span></p>
            <p>PartsOfSpeech: <span>${data[0].meanings[0].partOfSpeech}</span></p>
            <p>Synonyms: <span>${data[0].meanings[0].synonyms}</span></p>
        `;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
