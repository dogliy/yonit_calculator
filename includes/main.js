document.getElementById("clickAction").onclick=function(){

    if(isNaN(document.getElementById("num1").value) || isNaN(document.getElementById("num2").value) || isNaN(document.getElementById("num3").value)){
        alert("Enter valid numbers");

    }else{
        if(radio==1 || radio==2 || radio==3){
                document.getElementById("result").innerHTML ="";
                nir();
        }else{
            alert("choose option");
        }
 
    }




   

}


var radio=0;


document.getElementById("radioBoxInSum").onclick=function(){

    if(radio!=0)
    {
            if(radio==1){
                document.getElementById("radioBoxInSum").style.backgroundColor="white";
            }else if(radio==2){
                document.getElementById("radioBoxInMulti").style.backgroundColor="white";
            }else if(radio==3){
                document.getElementById("radioBoxInAvg").style.backgroundColor="white";
            }
    }

    this.style.backgroundColor="#A9A9A9";
    radio=1;

}

document.getElementById("radioBoxInMulti").onclick=function(){

    if(radio!=0)
    {
            if(radio==1){
                document.getElementById("radioBoxInSum").style.backgroundColor="white";
            }else if(radio==2){
                document.getElementById("radioBoxInMulti").style.backgroundColor="white";
            }else if(radio==3){
                document.getElementById("radioBoxInAvg").style.backgroundColor="white";
            }
    }

    this.style.backgroundColor="#A9A9A9";
    radio=2;

}

document.getElementById("radioBoxInAvg").onclick=function(){

    if(radio!=0)
    {
            if(radio==1){
                document.getElementById("radioBoxInSum").style.backgroundColor="white";
            }else if(radio==2){
                document.getElementById("radioBoxInMulti").style.backgroundColor="white";
            }else if(radio==3){
                document.getElementById("radioBoxInAvg").style.backgroundColor="white";
            }
    }

    this.style.backgroundColor="#A9A9A9";
    radio=3;

}

function nir(){

    $.post("http://shenkar.html5-book.co.il/2018-2019/dcs/dev_30/service_calculator/calculator.php/",
    {func:radio,num1:document.getElementById("num1").value,num2:document.getElementById("num2").value,num3:document.getElementById("num3").value},
    function( data ) {

    $("#result").append(data);
    console.log( "Return data: " + data);
    });
}

