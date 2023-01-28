function total(){
    var days = document.getElementById("days").value;

    
   var total = days * 300;

    document.getElementById("Total").innerHTML = " Your Total is "+total+"R";
    
}