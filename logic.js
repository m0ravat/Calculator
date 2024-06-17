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