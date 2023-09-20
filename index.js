function myFun(){
    var a = document.myForm.Email.value;

    if (a.indexOf('@')<=0){
        document.getElementById("message").innerHTML="**Invalid @ Position";
        return false;
    }
    if((a.charAt(a.length-4)!='.') && (a.charAt(a.length-3)!=='.'))
    {
        document.getElementById("message").innerHTML="**Inavalid . position ";
        return false;
    }
    
}