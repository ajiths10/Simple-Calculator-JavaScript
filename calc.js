function BtnClick(PassValue){
    console.log(PassValue);
document.getElementById('display').value+=PassValue;
}


function ClrScreen(){
    var val= document.getElementById('display').value;
    console.log(`Value ="${val}"  // Deleted`)
    document.getElementById('display').value='';
   
}

function calcu(){
    var Screentext=document.getElementById('display').value;
    var result = eval(Screentext);
    document.getElementById('display').value=result; 
    console .log('Code Developed by Ajith');
}


function BtnBack(){
    var text = document.getElementById('display').value.slice(0, -1);
    console.log(text);
    document.getElementById('display').value=text;  
}

