function total(){
    let days = document.getElementById("days").value;

  let myfunction = (a) => a*300;
  let total2 = myfunction(days);

    document.getElementById("Total").innerHTML = " Your Total is "+total2+"R";


 
    
}
