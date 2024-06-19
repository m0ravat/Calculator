var answer = 0;
var statement = "";
var output = statement + " = " + answer.toString();
var num = "";
var op = " * ";
var sum = 1 ;
var count = 0;
var val = 1;
var c = 0;

function getAnswer(){
    switch (op) {
        case " * ":
            sum = val * parseFloat(num);
            break;
    
        case " + ":
            sum = val + parseFloat(num);
            break;
        case " - ":
            sum = val - parseFloat(num);
            break;
        case " / ":
            sum = val / parseFloat(num);
            break;
    }
    return sum;
}




function myFunc(x){
    if(typeof x == "number"){
        count=0;
        c=0;
        statement=statement+x;
        num= num + x.toString();
        answer= getAnswer();
        output = statement + " = " + answer.toString();
        document.getElementById("statement").innerHTML=output;
    }
    else if (x == "."){
        if(num.includes(".")){
            alert("This number already has a decimal point, choose an operator or number please.");
        }
        else if(count==1){
            alert("You can't place a decimal point after an operator, sorry")
        }
        else if (num == ""){
            alert("Put a number first before the decimal point");
        }
        else{
            statement=statement+x;
            num=num+x;
            answer=num;
            output = statement + " = " + answer.toString();
            document.getElementById("statement").innerHTML=output;
            count=0;
            c=0;
        }
    }
    
    else{
        if (num==""){
            alert("Please enter a number first");
        }
        else if (num.endsWith(".")){
            alert("You can't put an operator after a decimal point")
        }
        else{
            if(c==1){
                alert("You have already chosen an operator, please choose a number");
            }
            else{
                switch (x) {
                    case " + ":
                        op = " + ";
                        break;
                    
                    case " - ":
                        op = " - ";
                        break;
                    case " * ":
                        op = " * ";
                        break;
                    case " / ":
                        op = " / ";
                        break;
                }
                val=answer;
                num = "";
                statement=statement+x;
                output = statement + " = " + answer.toString();
                document.getElementById("statement").innerHTML=output;
            }
        }
        count=1;
        c=1;
    }
}

function reset(){
    answer = 0;
    statement = "";
    output = statement + " = " + answer.toString();
    num = "";
    op = " * ";
    sum = 1 ;
    count = 0;
    val = 1;
    c = 0;
    document.getElementById("statement").innerHTML=output;
}



var count = 0;
var sum = 0;
var average = 0;
const marks = [];



function input(){
    if(document.getElementById("numm").value>100 || document.getElementById("numm").value<0){
        alert("Invalid value");
    }
    else if(count >= 8){ 
        alert("This calculator can only find the average for one years worth of 8 modules.")
    }
    else{
        count++;
        sum = sum + parseFloat(document.getElementById("numm").value);
        marks.push(document.getElementById("numm").value);
        document.getElementById("markss").innerHTML=marks.toString();
        average = sum/count;
        document.getElementById("resultingNum").innerHTML=average;
        if (average < 40){
            document.getElementById("resultingDegree").innerHTML="Fail";
        }
        else if (average>=40 && average<50){
            document.getElementById("resultingDegree").innerHTML="Third Class honours";
        }
        else if(average>=50 && average<60){
            document.getElementById("resultingDegree").innerHTML="Lower second class honours 2:2";
        }
        else if(average>=60 && average<70){
            document.getElementById("resultingDegree").innerHTML="Upper second class honours 2:1";
        }
        else{
            document.getElementById("resultingDegree").innerHTML="First class honours";
        }
        document.getElementById("numm").value="";
    }
}

function resetDeg(){
    count=0;
    sum=0;
    average=0;
    degree="";
    for(var x =0; x < 7; x++){
        marks.pop();
    }
    document.getElementById("resultingDegree").innerHTML="";
    document.getElementById("resultingNum").innerHTML="";
    document.getElementById("markss").innerHTML="";
    document.getElementById("numm").value="";
}


var final = 0;
var y1 = 0;
var y2 = 0;
var finalStatement = "";
function calc(){
    if(parseFloat(document.getElementById("y1").value) <0 || parseFloat(document.getElementById("y2").value) <0){
        alert("Cant put negative values");
    }
    else if(parseFloat(document.getElementById("y1").value) + parseFloat(document.getElementById("y2").value) != 100){
        alert("Weighting doesn't add up to 100/incomplete");
    }
    else if(parseFloat(document.getElementById("Y1").value) <0 || parseFloat(document.getElementById("Y2").value) <0){
        alert("Average mark can't be negative");
    }
    else if(parseFloat(document.getElementById("Y1").value) >100 || parseFloat(document.getElementById("Y2").value) > 100){
        alert("Average mark can't be above 100");
    }
    else if (document.getElementById("Y1").value=="" || document.getElementById("Y2").value==""){
        alert("Average marks incomplete");
    }
    else{
        y1 = parseFloat(document.getElementById("y1").value) * parseFloat(document.getElementById("Y1").value);
        y2 = parseFloat(document.getElementById("y2").value) * parseFloat(document.getElementById("Y2").value);
        final = parseFloat(y1 + y2);
        final = parseFloat(final / 100);
        finalStatement=final;
        if (final < 40){
            finalStatement = finalStatement + "% -  Fail ";
        }
        else if (final<50 && final>=40){
            finalStatement = finalStatement + "% -  Third class Honours ";
        }
        else if (final<60 && final>=50){
            finalStatement = finalStatement + "% -  Lower Second Class Honours 2:2 ";
        }
        else if (final<70 && final>=60){
            finalStatement = finalStatement + "% -  Upper Second Class Honours 2:1 ";
        }
        else{
            finalStatement = finalStatement + "% -  First Class Honours";
        }
        document.getElementById("degree").innerHTML = finalStatement;
    }
}