const form = document.querySelector("form");

form.addEventListener("submit" , function(e){
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);

    const weight = parseFloat(document.querySelector("#weight").value);
    
    const body = document.querySelector("body");

    const container = document.querySelector(".container");

    const result = document.querySelector("#result");

    const BMI = weight / (height*height)

    if(height == "" || height < 0 || isNaN(height)){

        body.style.color = "white";

        container.style.backgroundColor = "red";

        body.style.backgroundColor = "red";

        result.innerHTML = "ERROR!! <br>Please giva a valid height";

    }

    else if(weight == "" || weight < 0 || isNaN(weight)){

        body.style.color = "white";

        container.style.backgroundColor = "red";

        body.style.backgroundColor = "red";

        result.innerHTML = "ERROR!! <br> Please giva a valid weight";

    }
    else{

        if(BMI <= 18.6){

            body.style.color = "white";

            container.style.backgroundColor = "red";


            body.style.backgroundColor = "red";
            result.innerHTML = `Underwight , Your BMI is ${BMI.toFixed(2)}`;

        }

        else if(BMI >= 24.9){

            body.style.color = "white";

            container.style.backgroundColor = "red";

            result.innerHTML = `Overweight , Your BMI is ${BMI.toFixed(2)}`;

        }

        else{
            body.style.color = "black";

            container.style.backgroundColor = "chartreuse";

            body.style.backgroundColor = "chartreuse";

            result.innerHTML = `Normal , Your BMI is ${BMI.toFixed(2)}`;

        }
    }
});