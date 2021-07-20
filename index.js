// Your code here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}saturdayFun("bathe my dog")

function mondayWork(act = 'go to the office') {
    return `This Monday, I will ${act}.`
}mondayWork()

function wrapAdjective() {
    return function (thing='special',){
        return `you are${flair}${thing}${flair}`
    }
}
wrapAdjective(Flair="*")