const quizform=document.querySelector(".quiz-Form")
const submitAnswerbtn=document.querySelector("#submit")
const output=document.querySelector("#out-put")

const rightanswer=["one right angle","Isosceles triangle","60°","three","Scalene triangle","Acute","an altitude","perimeter","an obtuse triangle","12, 16, 20"]

function totalscore(){
    let score=0;
    let index=0;
    const formresult=new FormData(quizform)
    console.log(formresult)
    for(var value of formresult.values()){
      if (value===rightanswer[index]){
          score=score+1;
      }
      index=index+1;
    }
    // console.log(score)
    output.innerText="Your score is "+score;

}


submitAnswerbtn.addEventListener("click",totalscore);