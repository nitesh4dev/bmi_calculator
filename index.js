
const button = document.querySelector('button');

button.addEventListener("click", () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const bmi = (parseInt(weight)/Math.pow(parseInt(height),2)).toFixed(2);

    const  showBmi = document.getElementById("bmi").innerText=bmi;
    if (height>=147&&height<=160){

    }

})

