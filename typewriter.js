function addCharToText(char) {
    let word = document.getElementById("greating");
    word.innerHTML += char;
}

function typewriter(string, lentancy) {
    // let chars = string.split("");
    // for (let i = 0; i < chars.length; i++) {
    //     setTimeout(() => addCharToText(chars[i]), (i * lentancy))
    // }
    for(let i = 0; i < string.length; i++) {
        setTimeout(() => addCharToText(string.charAt(i)), ((i + 1) * lentancy));
    }

}

typewriter("Hello my friend!", 200);