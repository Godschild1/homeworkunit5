//getting all required elements
const start_btn = documents.querySelector(".start_btn button");
const info_box = documents.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".button .restart");
const quiz_box = documents.querySelector("quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeline = quiz_box.querySelector(".header .timer_line");

const option_list = documents.querySelector(".option_list");
//If Start Quiz Button Clicked
start_btn.onclick =()=>{
    info_box.classlist.add("activeinfo"); //show the info box
}

// If Exit Button Clicked
exit_btn.onclick = ()=>{
    info_box.classlist.add("activeinfo"); //hide the info box 
}
//If Continue Button Clicked
continue_btn.onclick = ()=>{
    info_box.classlist.remove("activeinfo"); //hide the info box
    quiz.box.classlist.add("activeQuiz"); //show the quiz box
    showQuestions(0)
    que_Counter(1);
    startTimer(15);
    startTimerLine(0);
}




let que_count = 0;
let que_number = 1;
let counter;
let counterLine;
let timeValue =15;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = documents.querySelector(".buttons .restart");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quiz");

restart_quiz.onclick = ()=>{
    quiz_box.classlist.add("activeQuiz")
    result_box.classlist.remove("activeResult")
    window.location.reload();
    let que_count = 0;
    let que_numb = 1;
    let timeValue =15;
    let widthValue = 0;
    let userScore = 0;
   showQuestions(que_count);
   queCounter(que_numb);
   clearInterval(counter);
   startTimer(timeValue);
   clearInterval(counterLine);
   startTimerLine(widthValue);
   next_btn.style.display = "none";
}

quit_quiz.onclick = ()=>{
    window.location.reload();
}

// If Next Button clicked
next_button.onclick =()=>{
if(que_count >questions.length - 1){
    que_count ++;
    que_count ++;
    showQuestions(que_count)
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";

}else{

    console.log("Question completed");
    showResultsBox();
    
}



// getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ question[index].numb, numb, numb = questions + '</span>';
    let option_tag = '<div class="option">'+ question[index].options[0] +'<span></span></div>'
                     +'<div class="option">'+ question[index].options[1] +'<span></span></div>'
                     +'<div class="option">'+ question[index].options[2] +'<span></span></div>'
                     +'<div class="option">'+ question[index].options[3] +'<span></span></div>'
    que_text.innerHMTL = que_tag;
    option_list.innerHTML =option_tag;
    const option =option_list.querySelectorAll
    for (let i = 0; i < option.length; i++) {
        option[i].setAttritube("onclick","optionSelected(this)")
    } 
}

let tickIcon = '<div class = "icon tick"><i class = "fas fa-check"></i></div>';
let crossIcon = '<div class = "icon tick"><i class = "fas fa-check"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    startTimer(timeValue);
   let userAns = answer.textContent;
   let correctAns = questions[que_count].answer;
   let allOptions = option_list.children.length;
   if(userAns==correctAns){
       answer.classlist.add("correct");
   console.log("Answer is Correct");
}else{
    answer.classlist.add("incorrect");
    console.log("Answer is wrong");
}
// If answers is incorrect then automatically selected the correct answer
   for(let i=0; i < allOptions; i++){
       if(option_list.children[i].textContent == correctAns){
        option_list.children[i]. setAttritube("class", "option correct");
        option_list.children[i]. insertAdjacentHTML("beforeend",tickIcon);
       }
   }
}
// Once user selescted disabled all potions
for (let i = 0; i <allOptions; i++) {
    option_list.children[i].classlist.add("disabled");
    
}
next_btn.style.display = "block";


}
  
function showResultsBox();{
    info_box.classlist.remove("activeInfo"); //hide the info box
    quiz_box.classlist.remove("activeQuiz"); //hide the quiz box
    result_box.classlist.add("activeResult"); //show the result box
    const scoreText = result_box.querySelector("score_text");
    if (userScore > 3){
        let scoreTag = '<span>and congrats!, You got only<p>'+ userScore +'</p>out of<p>'+ questions.length + '</p></span>'
        scoreText.innerHMTL = scoreTag
    }
    else if (userScore > 3){
        let scoreTag = '<span>and nice, You got only<p>'+ userScore +'</p>out of<p>'+ questions.length + '</p></span>'
        scoreText.innerHMTL = scoreTag
}
else(userScore > 3){
    let scoreTag = '<span>and sorry, You got only<p>'+ userScore +'</p>out of<p>'+ questions.length + '</p></span>'
    scoreText.innerHMTL = scoreTag

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer (){
        time_count.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
           clearInterval(counter);
           time_count.textContent = "00";
        }
   }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer (){
        time += 1;
        timeline.style.width = time + "px";}
        if(time < 549){
            clearInterval(counterLine);
        
        }
    }    
}   