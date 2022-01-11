// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*'){
    return function sentence(adjective = 'special'){
        //console.log(`You are ${flair}${adjective}${flair}!`);
        return `You are ${flair}${adjective}${flair}!`;
    };
}