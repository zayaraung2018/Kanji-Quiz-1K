//THE AREA WHERE THE KANJI GOES
const kanji = document.querySelector('.kanji');


//THE AREA WHERE THE USER TYPES THE ROMAJI

const input = document.getElementById('input');


//THE BUTTON THE USER CLICKS TO CHECK THEIR ANSWER

const check = document.getElementById('check');

const kanjiObj = {jin: "人", shin: "新", eki: "駅", den: "電", uchi: "家",
sha: "車", ai:"愛"}

const kanjiValue = Object.values(kanjiObj);

const kanjiKey = Object.keys(kanjiObj);

let counter = 0;
let nowKanji = kanjiValue[counter];
let nowRomaji = kanjiKey[counter];

check.addEventListener('click',function(){
if(input.value === nowRomaji){displayCorrect();
sayCorrect();
}else{
    displayIncorrect();}
});

function sayCorrect(){
    if(counter <= kanjiValue.lenght){ 
kanji.innerHTML = 'Correct!'
setTimeout(function(){
kanji.innerHTML = nowKanji;}, 1000);
} else {
    kanji.innerHTML = "Good Luck with JLPT N1!"
}
}


function displayCorrect(){
    counter++ 
    nowKanji = kanjiValue[counter]
    nowRomaji = kanjiKey[counter]
    kanji.innerHTML = nowKanji;
    input.value = ''}

function displayIncorrect(){
    kanji.innerHTML = "Wrong!"
    kanji.style.color = "red";
    setTimeout(function(){
        kanji.style.color = "black"
        kanji.innerHTML = nowKanji;
    }, 1000)
}