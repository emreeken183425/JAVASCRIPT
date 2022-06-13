let randomNumber=Math.floor(Math.random()*100)+1;
const randomNumberWrapper=document.querySelector('.randomNumberWrapper');
const gueses=document.querySelector('.gueses');
const lastResult=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const guessInput=document.querySelector('.guessInput');
const submitGuess=document.querySelector('.submitGuess');

let guessCount=1;
let resetButton;

function checkGuess(){
    const userGuess=Number(guessInput.value);
    if(guessCount===1){
        guesses.textContent = 'ÖNCEKİ SONUÇLAR';
        // const text = node.textContent;
    }
    gueses.textContent +=userGuess+ ' ';
    if(userGuess===randomNumber){
        lastResult.textContent=' TEBRİKLER';
        lastResult.style.backgoundColor='red';
        lowOrHi.textContent='';
        setGameOver();
    }else if(guessCount===4){
        lastResult.textContent=' TEBRİKLER';
        lastResult.style.backgoundColor='red';
        lowOrHi.textContent='';
        setGameOver();
    }else{
        lastResult.textContent='yanlış tahmin';
        lastResult.style.backgoundColor='black';
        if(userGuess<randomNumber ){
            lowOrHi.textContent='artır';
        }else if(userGuess>randomNumber ){
            lowOrHi.textContent='azalt'
        }
        }
        guessCount++;
    guessInput.value='';
    guessInput.focus();

 }
 submitGuess.addEventListener('click',checkGuess );
 function setGameOver(){
    guessInput.disabled=true;
    submitGuess.disabled=true;
    randomNumberShow.textContent=randomNumber;
    resetButton=document.createElement('button');
    resetButton.classList.add('resetButton');
    resetButton.textContent='yeniden oyuna başla!'
    document.querySelector('.buttonWrapper').appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}
function resetGame(){
    guessInput.disabled=false;
    submitGuess.disabled=false;
    guessInput.value='';
    guessInput.focus();
    lastResult.style.backgoundColor='transparent';

    const resultElements=document.querySelectorAll('.resultElements p ');
    for(const i of resultElements )
        randomNumber=Math.floor(Math.random()*100)+1;
    }

}

