const sides=document.querySelectorAll(".side-input");
const areaBtn=document.querySelector("#area-btn");
const output=document.querySelector("#out-put");

function sidesproduct(Base,Height){
    const product=Base*Height
    return product;
}


function findarea(){
    const product=sidesproduct(Number(sides[0].value),Number(sides[1].value));
    const area=product/2;
    output.innerText="The area of triangle "+area +" cm²"
}


areaBtn.addEventListener("click",findarea);

