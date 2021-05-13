'use strict'
let userName = prompt('what is your name ?');
alert('Hi ' + userName + ' !, welcome for you in my page .')

function style() {
    let styleType = prompt('do you prefer Sporty or Casual fashion style ?, please answer with "sporty" or "casual".');
    styleType = styleType.toLocaleLowerCase();
    if (styleType === 'sporty') {
        alert('If you like sporty clothing, chances are you are a big proponent of physical activity.Personality traits: Confidence, easy-going, optimistic, focused, leadership.');
    }
    else if (styleType === 'casual') {
        alert('you are classic and have a no-frills approach to both your clothing and your life.Personality traits: Kind, earnest, dependable, fun.');
    }
    else {
        alert('please enter "sporty" or "casual".');
    }
}
style();


function colors() {
    let color = prompt('Do you prefer dark or colored clothes?, please answer with "dark" or "colored".');
    color = color.toLocaleLowerCase();
    if (color === 'dark') {
        alert(' If you are someone who loves wearing classic shades such as black, shades of grey and even navy blue, you are well groomed. You have a sharp personality and often come across as someone who is sophisticated, mannered and very well organized in life.');
    }
    else if (color === 'colored') {
        alert('Those vibrant blues and bold prints reflect the inner confidence you have . You are bold, confident, and don’t mind being the center of attention.');
    }
    else {
        alert('please enter "dark" or "colored".');
    }
}
colors();

let theAnswer = false;
const foundedYear = 1964;
let year = prompt('What year was Nike founded?, please type number only.');
for (let i = 5; i > 0; i--) {

    if (year >= 0 && year <= 1963) {
        year = prompt('wrong answer, Nike was founded before that, try again.')
    }
    else if (year > 1964) {
        year = prompt('Nope , Oldar than this, tyr again.')
    }
    else if (number(year) === foundedYear) {
        alert('that is right');
        theAnswer = true;
        break;
    }
}
if (theAnswer == false) {
    alert('the right answer is 1964')
}   
// while(year < 1964 || year >1964){
//     year = prompt('wrong answer , try again')
// }




