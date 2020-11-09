function fun(param){
    alert("hello and welcome to mypage")
}

 function handleSearch (param){
     var output= document.getElementById("search_box_one").value;
     document.getElementById("first_output").innerHTML= output;
 
    }
    function timeOut(){ 
        var output= document.getElementById("search_box_two").value;
    setTimeout(function() {document.getElementById("second_output").innerHTML=output  ;
    }, 2000)    ;
   
}    
function edit(){
    document.getElementById("second_output").innerHTML= "enter your text again";

}
