//author: Jack Winford
//date: 8/19/2021
//purpose: implementing a meme generator

let first;
let second;
function createMeme(url) {
    store.dispatch({type: "INSERT"},url);
    //creating the div that will be top text
    let top = document.createElement("div");
    top.innerText = document.getElementById("top").value;
    top.className = "topText";
    top.style.position = "absolute";
    top.style.top = "0px";
    top.style.textAlign = "center";
    top.style.fontWeight = "bold";
    top.style.fontSize = "1em";
    top.style.color = "white";
    
    //creating the div that will be bottom text
    let bottom = document.createElement("div");
    bottom.innerText = document.getElementById("bottom").value;
    bottom.className = "bottomText";
    bottom.style.position = "absolute";
    bottom.style.bottom = "0px";
    bottom.style.textAlign = "center";
    bottom.style.fontWeight = "bold";
    bottom.style.fontSize = "1em";
    bottom.style.color = "white";

    //this is a div for the meme image to fill
    //as a background image
    let frame = document.createElement("div");
    frame.style.backgroundImage = `url("${document.getElementById("imageURL").value}")`;
    frame.className = "frame";
    frame.style.backgroundRepeat = "no-repeat"; 
    frame.style.position = "relative";
    frame.style.justifyContent = "center";

    //a new image object is needed to find the width and height of the background image
    let image = new Image();
    image.src = url;
    image.onload = function() {
        frame.style.height = image.height + "px";
        frame.style.width = image.width + "px";
        top.style.width = image.width + "px";
        bottom.style.width = image.width + "px";
    }

    frame.appendChild(top);
    frame.appendChild(bottom);
    document.getElementById("display").appendChild(frame);
}

window.onload = () => {
    const memeUrls = store.dispatch({type: ""});
    for (let i in memeUrls) {
        createMeme(memeUrls[i]);
    }
}

memeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    createMeme(document.getElementById("imageURL").value)

    memeForm.reset();
});

//remove a meme if it is clicked
document.addEventListener("click", function(event) {
    if (event.target.className === "frame") {
        event.target.remove();
    }
});

//darkens and displays an "X" over the meme
document.getElementById("display").addEventListener("mouseover", function(event) {
    if (event.target.className === "frame") {
        first = event.target.childNodes[0];
        second = event.target.childNodes[1];
        event.target.style.filter = "sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg)";
        event.target.innerText = "X";
        event.target.style.fontFamily = "monospace";
        event.target.style.color = "white";
        event.target.style.textAlign = "center";
        event.target.style.cursor = "default";
        event.target.style.fontSize = event.target.style.height;
    }
});

//undoes the previous function when the user moves their mouse off the meme
document.getElementById("display").addEventListener("mouseout", function(event) {
    if (event.target.className === "frame") {
        event.target.innerText = "";
        event.target.style.filter = "";
        event.target.style.fontFamily = "Times New Roman";
        event.target.style.color = "white";
        event.target.style.textAlign = "center";
        event.target.style.cursor = "default";
        event.target.style.fontSize = "1em";
        event.target.appendChild(first);
        event.target.appendChild(second);
    }
});