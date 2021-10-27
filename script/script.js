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
let smallContainer=document.querySelectorAll('small')
// smallContainer.style.color="red"
console.log(smallContainer[0].innerText)
console.log(cusName.value)
//////select /////////////
let typeCake=document.getElementById('typeCake')
let allergies=document.getElementById('allergies')
let delivery_Time=document.getElementById('delivery_Time')
//icon Dom//
let correctGreen=document.querySelectorAll('i.fa-check')
let wrongRed=document.querySelectorAll('i.fa-exclamation-circle')
let iconInput=document.querySelectorAll('.iconInput')



///////select//////////

let selectType=document.querySelectorAll('select')
let check_Name=/^[a-zA-Z0-9_$\.]{5,16}$/;
submitBtn.addEventListener('click',validate)

function validate(e){
    //write code that validates the form
    if(cusName.value.match(check_Name)){
        iconInput[0].style.border="1px solid #3ff312"
        localStorage.setItem('Customer_Nmae',cusName.value)
        smallContainer[0].style.color="#3ff312"
        smallContainer[0].innerText="Okay"
        wrongRed[0].style.display="none"
        correctGreen[0].style.display="block"

    }
    else{
        wrongRed[0].style.display="block"
        correctGreen[0].style.display="none"
        iconInput[0].style.border="1px solid red"
        console.log('at least 5 characters long and at most 16 characters long')
        smallContainer[0].style.color="red"
        smallContainer[0].innerText="The name must be between 5 and 16 characters long"
    }



////////count validtion/////
if(countCake.value>=1 &&countCake.value<15){
    iconInput[1].style.border="1px solid #3ff312"
    smallContainer[1].style.color="#3ff312"
    smallContainer[1].innerText="Okay"
    correctGreen[1].style.display="block"
    wrongRed[1].style.display="none"
}
else{
    wrongRed[1].style.display="block"
    correctGreen[1].style.display="none"
    iconInput[1].style.border="1px solid red"
   console.log('count from 1 to 15 cubcake only')
   smallContainer[1].style.color="red"
   smallContainer[1].innerText="The count must be between 1 and 15"


}

selectType.forEach(x=>{
    if(x.value =="None" &&x.id=="typeCake"){
        typeCake.style.border="1px solid red" 
        smallContainer[2].style.color="red"
        smallContainer[2].innerText="Please Fill out the CupCake type"
      
       
    }else if(x.value !="None" &&x.id=="typeCake"){
        typeCake.style.border="1px solid #3ff312"
        smallContainer[2].style.color="#3ff312"
        smallContainer[2].innerText="Okey"

    }
    if(x.value =="None" &&x.id=="delivery_Time"){
delivery_Time.style.border="1px solid red" 
        smallContainer[3].style.color="red"
        smallContainer[3].innerText="Please Fill out the Delivery Time"
    }
    else if(x.value !="None" &&x.id=="delivery_Time"){
        delivery_Time.style.border="1px solid #3ff312"
        smallContainer[3].style.color="#3ff312"
        smallContainer[3].innerText="Okey"

    }
  
    if(x.id=="allergies"){
        allergies.style.border="1px solid #3ff312"
                smallContainer[4].style.color="#3ff312"
                smallContainer[4].innerText="Okey"
            }
           
   

})

if(typeCake.value=="Chocolate" && allergies.value=="Dairy Free"){
    allergies.style.border="1px solid red"
    smallContainer[4].style.color="red"
    smallContainer[4].innerText='type of cake is not dairy free'

}
if(typeCake.value=="Pecan" && allergies.value=="Nut Free"){
    allergies.style.border="1px solid red"
    smallContainer[4].style.color="red"
    smallContainer[4].innerText='type of cake is not Nut Fre'
 

}
if(delivery_Time.value=="4:00 PM" && typeCake.value=="Chocolate"){
    delivery_Time.style.border="1px solid red"
    smallContainer[3].style.color="red"
    smallContainer[3].innerText="that this type of cake cannot be delivered at 4 PM."

}


    e.preventDefault()
}











function show_storage(){

   
    var showUser=localStorage.getItem( 'Customer_Nmae')
    document.getElementById("welcome").innerHTML=`Welcome ${showUser}`

}