const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continuebtn = document.querySelector('.continue-btn');
const quizsection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');

startBtn.onclick=()=>{
popupInfo.classList.add('active')
main.classList.add('active')
}
exitBtn.onclick=()=>{
popupInfo.classList.remove('active')
main.classList.remove('active')
}

continuebtn.onclick=()=>{
    quizsection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    }


    

    showQuestions(0);
    questionCounter(1);
    


    let questionCount = 0;
    let questionNumb = 1;
    let userScore = 0;

    const nextBtn =document.querySelector('.next-btn');

    nextBtn.onclick=()=>{
        if(questionCount < questions.length-1){
            questionCount++;
            showQuestions(questionCount);

            questionNumb++;
            questionCounter(questionNumb)
        }
        else{

        }
      
        }


        



   function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}.${questions[index].question}`;

    const optionList = document.querySelector('.option-list')
    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
                     <div class="option"><span>${questions[index].options[1]}</span></div>
                     <div class="option"><span>${questions[index].options[2]}</span></div>
                     <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML = optionTag;

    const option= document.querySelectorAll('.option');
    for(let i =0;i<option.length; i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }
   }

   function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
   

    

    if(userAnswer==correctAnswer){
        
        answer.classList.add('correct')
    }
    else{
        answer.classList.add('incorrect')

        for(let i=0; i < allOptions; i++){
         if(optionList.children[i].textContent == correctAnswer){
            optionList.children[i].setAttribute('class','option correct');
         }
        }
    }
    
        
    for(let i=0; i < allOptions; i++){
        let allOptions = optionList.childern.length
        
        optionList.childern[i].classList.add('disabled')
    }
   }

   function questionCounter(index){
    const questionTotal = document.querySelector('.question-total')
    questionTotal.textContent = `${index} of ${questions.length}Questions`
   }

    
   function headerScore(){
    userScore += 1
    headerScore()
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score:${userScore} / ${questions.length}`
   }



    