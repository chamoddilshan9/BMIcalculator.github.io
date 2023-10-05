function calculateBMI(){
    let weight = parseInt(document.getElementById('Weight').value);
    let height = parseFloat(document.getElementById('Height').value);
    

    let BMI = weight / (height *height);
    document.getElementById("displayBMI").innerHTML = BMI.toFixed(2);

    if (BMI<18.5){
        document.getElementById("message").innerHTML = "Low weight";
    }
    else if (18.5<BMI<24.9)
    {
        document.getElementById("message").innerHTML = "Healthy weight";
    }   
    else  {
        document.getElementById("message").innerHTML = "Over weight";
    }
}