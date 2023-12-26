let buyeditems = "";
let rightt = document.querySelector(".rightt")
let submitbutton = document.querySelector(".submitbutton")
saveditems = JSON.parse(localStorage.getItem('savedproductitems')) || [];
console.log(saveditems);
let totalqty;
let submitbtn = document.querySelector(".submitbtn")

let h = saveditems.filter((data)=>{
    return data.value > 0
})

let finaltotalvalue=0
let purevalue = document.querySelector(".purevalue")



document.getElementById("form1").addEventListener('submit', functSubmit(event));

function functSubmit(event) {
//   var msg = document.getElementById("input1").value;
  alert("thanks forshopping");
}
// submitbutton.addEventListener("submit",function(){
//     alert("thanks for shopping")
// })
h.forEach(element => {
 
    let inputStringg = element.price;
    let matchh = inputStringg.match(/\d+/);
    let numberOnlyy = matchh ? parseInt(matchh[0], 10) : null;
    finaltotalvalue +=numberOnlyy
    totalqty = element.value
    buyeditems += `<div class="inserdata"><div class="imgandqty"><img src="${element.img}" alt=""><span class="quantitypayments">${element.value}</span></div>
    <div class="name">${element.name}</div>
    <div class="price">Rs. ${finaltotalvalue*element.value}</div></div>`

  



});


rightt.innerHTML = buyeditems;

purevalue.innerHTML = finaltotalvalue*totalqty;
// console.log(finaltotalva/lue);
// console.log(h);
submitbtn.addEventListener("click",function(){

   alert("Thanks for Shopping")

})