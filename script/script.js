$(document).ready(show_cupcakes);

var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];

var tbody1 = document.getElementById("cupcake-table")
function show_cupcakes() {
  //write code that shows the cupcakes in the table as per the instructions
  for (i=0;i<=4;i++){
    var trElement = document.createElement("tr")
    tbody1.appendChild(trElement)
    var tdElement1 = document.createElement("td")
    trElement.appendChild(tdElement1)
    tdElement1.innerText=cup_cakes[i].name
    var tdElement2 = document.createElement("td")
    trElement.appendChild(tdElement2)
    tdElement2.innerText=cup_cakes[i].calories
    var tdElement3 = document.createElement("td")
    trElement.appendChild(tdElement3)
    tdElement3.innerText=cup_cakes[i].weight
    if (cup_cakes[i].calories=="high"){tdElement2.style.backgroundColor="red"}
    if (cup_cakes[i].calories=="medium"){tdElement2.style.backgroundColor="orange"}
    if (cup_cakes[i].calories=="low"){tdElement2.style.backgroundColor="green"}
  }
}
let submitBtn=document.getElementById('submitBtn')
let cusName=document.getElementById('cusName')
let countCake=document.getElementById('countCake')
console.log(cusName.value)
//////select /////////////
let typeCake=document.getElementById('typeCake')
let allergies=document.getElementById('allergies')
let delivery_Time=document.getElementById('delivery_Time')
///////select//////////

let selectType=document.querySelectorAll('select')
let check_Name=/^[a-zA-Z0-9_$\.]{5,16}$/;
submitBtn.addEventListener('click',validate)

function validate(e){
    //write code that validates the form
    if(cusName.value.match(check_Name)){
        cusName.style.border="3px solid #3ff312"
        localStorage.setItem('Customer_Nmae',cusName.value)

    }
    else{
        cusName.style.border="3px solid red"
        console.log('at least 5 characters long and at most 16 characters long')
    }
////////count validtion/////
if(countCake.value>=1 &&countCake.value<15){
    countCake.style.border="3px solid #3ff312"
}
else{
   countCake.style.border="3px solid red" 
   console.log('count from 1 to 15 cubcake only')
}

selectType.forEach(x=>{
    if(x.value !="None"){
        x.style.border="3px solid #3ff312"
    }
    else{
        x.style.border="3px solid red" 
        console.log('must choose a type')
    }
})

if(typeCake.value=="Chocolate" && allergies.value=="Dairy Free"){
console.log('type of cake is not dairy free')

}
if(typeCake.value=="Pecan" && allergies.value=="Nut Free"){
    console.log('type of cake is not dairy free')

}
if(delivery_Time.value=="4:00 PM" && typeCake.value=="Chocolate"){
console.log("that this type of cake cannot be delivered at 4 PM.")
}







    e.preventDefault()
}











function show_storage(){

   
    var showUser=localStorage.getItem( 'Customer_Nmae')
    document.getElementById("welcome").innerHTML=`Welcome ${showUser}`

}