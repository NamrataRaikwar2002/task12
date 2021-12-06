const inputs=document.querySelectorAll(".angles");
const checkbutton=document.querySelector("#check-btn")
const output=document.querySelector("#out-put")



function calculateAngleSum(angle1,angle2,angle3){
    const sumofAngles=angle1+angle2+angle3;
    return sumofAngles;
}

function isTriangle(){
    const sumofAngles=calculateAngleSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    console.log(sumofAngles)
    if (sumofAngles===180){
        output.innerText="This is triangle!"
    }
    else{
        output.innerText="this is not a triangle"
}
}


checkbutton.addEventListener("click",isTriangle)
