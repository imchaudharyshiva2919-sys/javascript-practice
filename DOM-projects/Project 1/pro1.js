const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

const canvas = document.querySelector(".canvas");

const texts = document.querySelector(".texts")

buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        
        if(e.target.id == "red"){
            body.style.backgroundColor = e.target.id;
            canvas.style.backgroundColor = e.target.id;
            texts.style.backgroundColor = e.target.id;
        }
        if(e.target.id == "blue"){
            body.style.backgroundColor = e.target.id;
            canvas.style.backgroundColor = e.target.id;
            texts.style.backgroundColor = e.target.id;
        }
        
        if(e.target.id == "yellow"){
            body.style.backgroundColor = e.target.id;
            canvas.style.backgroundColor = e.target.id;
            texts.style.backgroundColor = e.target.id;
        }
        
        if(e.target.id == "green"){
            body.style.backgroundColor = e.target.id;
            canvas.style.backgroundColor = e.target.id;
            texts.style.backgroundColor = e.target.id;
        }
    
        if(e.target.id == "skyblue"){
            body.style.backgroundColor = e.target.id;
            canvas.style.backgroundColor = e.target.id;
            texts.style.backgroundColor = e.target.id;
        }
        
    })
});