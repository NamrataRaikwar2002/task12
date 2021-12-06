const sides=document.querySelectorAll(".side-input")
const hypotenuseBtn=document.querySelector("#find-hypotenuse");
const output=document.querySelector("#out-put");



function findSquaresSum(a,b){
    const SquaresSum=a*a + b*b;
    return SquaresSum;
}


function  findHypotenuse(){
    const SquaresSum=findSquaresSum(Number(sides[0].value),Number(sides[1].value));
    const hypotenuseLength=Math.sqrt(SquaresSum);
    output.innerText="The length of hypotenuse is " + hypotenuseLength +" units"

}

hypotenuseBtn.addEventListener("click",findHypotenuse)