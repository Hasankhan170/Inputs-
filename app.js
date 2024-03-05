
function calculate(){
    var a=parseInt(document.getElementById('book1').value);
    var b=parseInt(document.getElementById('book2').value);
    var c=parseInt(document.getElementById('book3').value);
    var d=parseInt(document.getElementById('book4').value);
    var e=parseInt(document.getElementById('book5').value);

    if(a>100 || b>100 || c>100 || d>100 || e>100){
        alert(" PLEASE ENTER A CORRECT VALUE")
    }else{
        var obtained = a+b+c+d+e;
        document.getElementById('obtain').innerHTML=obtained;
        var per = obtained/500*100;
        document.getElementById('Percentage').innerHTML=per;
    }


        if(a>40 && b>37 && c>37 && d>40 && e>40){
            document.getElementById('remarks').innerHTML="Pass";
        }  
        else
        {
            document.getElementById('remarks').innerHTML="Fail";
        }
    
    

    if(per>=90){
        document.getElementById('grade').innerHTML="A+"
    }
    else if (per>=80){
        document.getElementById('grade').innerHTML="A"
    }
    else if (per>=60){
        document.getElementById('grade').innerHTML="B"
    }
    else if (per>=50){
        document.getElementById('grade').innerHTML="C"
    }
    else if (per>=40){
        document.getElementById('grade').innerHTML="D"
    }else{
        document.getElementById('grade').innerHTML="F"
    }

}
