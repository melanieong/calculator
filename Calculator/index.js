


function getMilk(cost){
    var money=prompt("how much money u have?");
    var affordBottle = Math.trunc(money/cost);
    window.alert("buy "+ affordBottle+" amt of bottle");
}


function lifeInWeeks() {
    var age=prompt("How old are you?")
    var yearsLeft=90-age;
    var daysLeft=yearsLeft*365;
    var weeksLeft=yearsLeft*52;
    var monthsLeft=yearsLeft*12;
    document.querySelector("h1").textContent="You have "+ daysLeft +" days, "+ weeksLeft +" weeks, and "+monthsLeft+" months left if you live until 90.";
}

function bmiCalculator(){
    var height=prompt("what your height in inches?")
    var weight=prompt("how much you weigh in pounds?")
    var bmi=(weight*703/height)/height;
    console.log(bmi)
    var roundedBmi=(Math.floor(bmi))
    if(roundedBmi>=40){
        var status="overweight";
    }
    else if(roundedBmi<39.9&&roundedBmi>25){
        status="overweight";
    }
    else if(roundedBmi<24.9&&roundedBmi>18.5){
        status="normal";
    }
    else if(roundedBmi<=18.4){
        status="underweight"
    }
    else{
        status="putting in invalid values";
    }
    document.querySelector("h1").textContent="Your BMI is "+roundedBmi+". You are "+status+".";
}

function loveCalculator(){
    prompt("What is your name?");
    prompt("What is your crush's name?");
    n=Math.random();
    var percent= Math.floor(n*100+1)
    if(percent>80){
        var loveMessage="Y'all should get married.";
    }
    else if(percent>40 && percent<=80){
        var loveMessage="The friendship is mutual.";
    }
    else{
        var loveMessage="Idk about this one boss."
    }
    document.querySelector("h1").textContent="Your love score is: "+percent+"%. "+ loveMessage;
    
}

function leapYear(){
    year=prompt("What year is it?");
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                var yearStatus="It is leap year.";
            }
            else{
                var yearStatus="It is not leap year.";
            }
        }
        else{
            var yearStatus="It is leap year.";
        }
    }
    else{
        var yearStatus="It is not leap year.";
    }
    document.querySelector("h1").textContent=yearStatus
    
}


var n=1
var array=[];
function fizzBuzz(){
    var rounds=prompt("How many rounds should we play?");
    var people=prompt("How many people are playing?");
    var runs=people*rounds;
    let i=0
    while(i<runs){
        if(n%3===0&&n%5===0){
            array.push("fizzbuzz");
        }
        else if(n%3===0){
            array.push("fizz");
        }
        else if(n%5===0){
            array.push("buzz");
        }
        else{array.push(n)};
        n++;
        i++;
    }
    window.alert("This is the walkthrough: " +array);
}

function beerBottleSong(){
    let i=100;
    while(i>=0){
        if(i===0){
            console.log("No more bottles of beer on the wall. No more bottles of beer. Go to the store, buy some more. 100 bottles of beer on the wall.")
        }
        else{
        console.log(i+" bottles of beer on the wall. "+i+" bottles of beer. Take one down pass it around. "+ (i-1)+" bottles of beer on the wall.")
         }i--;
    }
}
function fibonacciGenerator(n){
    array=[];
    var num=0
    if(n>=1){
        array.push(0)
        if(n>=2){
            array.push(1)
            if(n>2){
                for(i=3;i<=n;i++){
                    num=Number(array[(i-2)])+Number(array[(i-3)]);
                    array.push(num);
                 };
            }
        }
    }
    else{
        console.log("please enter a positive integer.")
    }
    var output=0
    for(j=1;j<array.length;j++){
        output=output+", "+array[j]
    }
    console.log(array)
}

function fibonacci2(n){
    var output=0;
    let a=0;
    let b=0;
    if(n>=1){
        a=1;
        output=output+", "+a;
        if(n>1){
            while(n-2>0){
                a=a+b;   
                b=a-b;
                output=output+", "+a;
                n--;
            }
        }
    } else {
        console.log("sdfsdff");
    }
    
    console.log(output);
}

document.querySelector(".bmi-btn").addEventListener("click",bmiCalculator)
document.querySelector(".life-btn").addEventListener("click",lifeInWeeks)
document.querySelector(".love-btn").addEventListener("click",loveCalculator)
document.querySelector(".leap-btn").addEventListener("click",leapYear)