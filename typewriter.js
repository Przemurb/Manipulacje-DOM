function addCharToText(char) {
    let word = document.getElementById("greating");
    word.innerText += char;
}

function typewriter(string, lentancy) {
    let chars = string.split("");
    for (let i = 0; i < chars.length; i++) {
        setTimeout(() => addCharToText(chars[i]), (i * lentancy))
    }
}

typewriter("Hello my friend!", 200);