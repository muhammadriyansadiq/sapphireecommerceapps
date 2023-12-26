var newinbox = document.querySelector(".newinbox")
var womanbox = document.querySelector(".womanbox")
var manbox = document.querySelector(".manbox")
var boxnax = document.querySelector(".boxnax")
var insidesapnqty;
var kidsbox = document.querySelector(".kidsbox")
var beautybox = document.querySelector(".beautybox")
var accessoriesbox = document.querySelector(".accessoriesbox")
var homebox = document.querySelector(".homebox")
let localvalue;
let finaltotalvalue = 0;
let datas=""
var count=1
let totalvalue = document.querySelector(".totalvalue")
let productimganddescriptioncheckoutsbox = document.querySelector(".productimganddescriptioncheckoutsbox")
let incr = document.querySelector(".incr")
// let finding = productimganddescriptioncheckoutsbox.querySelector(".qty")
let finding = productimganddescriptioncheckoutsbox.querySelectorAll(".qty")
console.log(finding);

let saveditems = JSON.parse(localStorage.getItem('savedproductitems')) || [];
  let finalvaluecheckout;

  function updateitemsqtyinbag(){
    let itemsqty =0
    saveditems.forEach((element)=>{
    itemsqty +=element.value
    
    })
    console.log(itemsqty);
    let selectedproductinbag = document.querySelector(".selectedproductinbag")
    selectedproductinbag.innerHTML = itemsqty
  }
  updateitemsqtyinbag()


newinbox.addEventListener("click",function(e){
  localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
console.log(e.target.innerText);
})

womanbox.addEventListener("click",function(e){
  localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
  console.log(e.target.innerText);
  })

  manbox.addEventListener("click",function(e){
      localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
    console.log(e.target.innerText);
    })


    kidsbox.addEventListener("click",function(e){
        localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
      console.log(e.target.innerText);
      })


      beautybox.addEventListener("click",function(e){
          localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
        console.log(e.target.innerText);
        })


        accessoriesbox.addEventListener("click",function(e){
            localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
          console.log(e.target.innerText);
          })


          homebox.addEventListener("click",function(e){
            localvalue = e.target.innerText;
            localStorage.setItem('username', localvalue);
            console.log(e.target.innerText);
            })


            boxnax.addEventListener("click",function(e){

  console.log(e.target.classList[0]);
  if(e.target.classList[0] === "newin"){
    newinbox.style.display = "block";
    newinbox.style.display = "flex";
    womanbox.style.display = "none";
    manbox.style.display = "none";
    kidsbox.style.display = "none";
    beautybox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";
  }

  else if(e.target.classList[0] === "woman"){
    womanbox.style.display = "block";
    womanbox.style.display = "flex";
    newinbox.style.display = "none";
   manbox.style.display = "none";
   kidsbox.style.display = "none";
   beautybox.style.display = "none";
   accessoriesbox.style.display = "none";
   homebox.style.display = "none";
   accessoriesbox.style.display = "none";

  }

  else if(e.target.classList[0] === "man"){
    manbox.style.display = "block";
    manbox.style.display = "flex";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    kidsbox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";
    beautybox.style.display = "none";
  }
  else if(e.target.classList[0] === "kids"){
    kidsbox.style.display = "block";
    kidsbox.style.display = "flex";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    beautybox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";

  }

  else if(e.target.classList[0] === "beauty"){
    beautybox.style.display = "block";
    beautybox.style.display = "flex";
    kidsbox.style.display = "none";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";

  }
  else if(e.target.classList[0] === "accessories"){
    accessoriesbox.style.display = "block";
    accessoriesbox.style.display = "flex";
    beautybox.style.display = "none";
    kidsbox.style.display = "none";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    homebox.style.display = "none";

  }
  else if(e.target.classList[0] === "home"){
    homebox.style.display = "block";
    homebox.style.display = "flex";
    accessoriesbox.style.display = "none";
    beautybox.style.display = "none";
    kidsbox.style.display = "none";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";

  }

  else{
    newinbox.style.display = "none";
    womanbox.style.display = "none";
    kidsbox.style.display = "none";
   manbox.style.display = "none";
   beautybox.style.display = "none";
   accessoriesbox.style.display = "none";
   homebox.style.display = "none";

  }
})



window.onload = function() {

  newinbox.style.display = "none";
  womanbox.style.display = "none";
  kidsbox.style.display = "none";
 manbox.style.display = "none";
 beautybox.style.display = "none";
 accessoriesbox.style.display = "none";
 homebox.style.display = "none";
 


 saveditems = JSON.parse(localStorage.getItem('savedproductitems')) || [];
datas = "";
saveditems.forEach(element => {    
  datas += ` <div class="productimganddescriptioncheckouts">
<div class="imgbutydel">
  <img src="${element.img}" alt="">
  <div class="nameanddelete"> <p class="nameofproduct">${element.name}</p><button class="delbtn"><i class="fa-solid fa-trash delete"></i></button></div>
</div>
 <p>${element.price}</p>
 <p><button class="subb"><i class="fa-solid fa-minus sub"></i></button><span id="${element.id}" class="quantity">${element.value}</span> <button class="incrr"><i class="fa-solid fa-plus incr"></i></button> </p>
 <div class="qty">${element.price}</div>
 </div>`
});
productimganddescriptioncheckoutsbox.innerHTML = datas

updateitemsqtyinbag()
increasetotalamount()
}; 

// ===============extra==============



// finding.forEach((data)=>{
//   console.log(data);

//   let inputStringg = data.innerText;
//   let matchh = inputStringg.match(/\d+/);
//   let numberOnlyy = matchh ? parseInt(matchh[0], 10) : null;
//   finaltotalvalue +=numberOnlyy

// })

function increasetotalamount(){

  finaltotalvalue = 0
  let finding = productimganddescriptioncheckoutsbox.querySelectorAll(".qty")

finding.forEach((data)=>{
  console.log(data);

  let inputStringg = data.innerText;
  let matchh = inputStringg.match(/\d+/);
  let numberOnlyy = matchh ? parseInt(matchh[0], 10) : null;
  finaltotalvalue +=numberOnlyy

})
console.log(`total amount`,finaltotalvalue);
totalvalue.innerHTML =finaltotalvalue
}



saveditems.forEach(element => {  

    datas += ` <div class="productimganddescriptioncheckouts">
<div class="imgbutydel">
    <img src="${element.img}" alt="">
    <div class="nameanddelete"><p class="nameofproduct">${element.name}</p>
    <button class="delbtn"><i class="fa-solid fa-trash delete"></i></button>
    </div>
</div>
<p>${element.price}</p>
<p><button class="subb"><i class="fa-solid fa-minus sub"></i></button><span id="${element.id}" class="quantity">${count}</span> <button class="incrr"><i class="fa-solid fa-plus incr"></i></button> </p>
<div class="qty">${element.price}</div>
</div>`

});

productimganddescriptioncheckoutsbox.innerHTML = datas;

productimganddescriptioncheckoutsbox.addEventListener("click",function(e){

e.preventDefault()


if(e.target.classList[2] === "delete"){
  let parentdiv = e.target.parentNode.parentNode.parentNode.parentNode;


let g = parentdiv.getElementsByTagName("span")[0]

let f = +g.getAttribute("id")


saveditems = saveditems.filter(item => item.id !==f);

localStorage.setItem('savedproductitems', JSON.stringify(saveditems));

saveditems = JSON.parse(localStorage.getItem('savedproductitems')) || [];



datas = "";

saveditems.forEach(element => {  

  datas += ` <div class="productimganddescriptioncheckouts">
<div class="imgbutydel">
  <img src="${element.img}" alt="">
  <div class="nameanddelete"> <p class="nameofproduct">${element.name}</p><button class="delbtn"><i class="fa-solid fa-trash delete"></i></button></div>
</div>
 <p>${element.price}</p>
 <p><button class="subb"><i class="fa-solid fa-minus sub"></i></button><span id="${element.id}" class="quantity">${element.value}</span> <button class="incrr"><i class="fa-solid fa-plus incr"></i></button> </p>
 <div class="qty">${element.price}</div>
 </div>`

});

productimganddescriptioncheckoutsbox.innerHTML = datas;

updateitemsqtyinbag()
increasetotalamount()

}






if(e.target.classList[2] === "incr" ){

let updatingqty = e.target.parentNode.parentNode

console.log(updatingqty); 
let r = updatingqty.getElementsByTagName("span")[0];
let f = +r.getAttribute("id")
let gg = +r.innerText + 1

for (let i = 0; i < saveditems.length; i++) {
  if (saveditems[i].id === f) {
    saveditems[i].value = gg;
    break; // Stop the loop after updating the value
  }
}

r.innerText = gg;
let totaldata = saveditems

saveditems.splice(0,saveditems.length,...totaldata)

localStorage.setItem('savedproductitems', JSON.stringify(saveditems));

saveditems = JSON.parse(localStorage.getItem('savedproductitems')) || [];

datas = "";
saveditems.forEach(element => { 


let inputString = element.price ;
let match = inputString.match(/\d+/);

let numberOnly = match ? parseInt(match[0], 10) : null;
console.log(numberOnly);

  datas += ` <div class="productimganddescriptioncheckouts">
<div class="imgbutydel">
  <img src="${element.img}" alt="">
  <div class="nameanddelete"> <p class="nameofproduct">${element.name}</p><button class="delbtn"><i class="fa-solid fa-trash delete"></i></button></div>
</div>
 <p>${element.price}</p>
 <p><button class="subb"><i class="fa-solid fa-minus sub"></i></button><span id="${element.id}" class="quantity">${element.value}</span> <button class="incrr"><i class="fa-solid fa-plus incr"></i></button> </p>
 <div class="qty">Rs. ${numberOnly*element.value}</div>
 </div>`
});
productimganddescriptioncheckoutsbox.innerHTML = datas;

updateitemsqtyinbag()

increasetotalamount()
}




if(e.target.classList[2] === "sub" ){

  let updatingqty = e.target.parentNode.parentNode
   r = updatingqty.getElementsByTagName("span")[0];
   insidesapnqty = +r.innerText
  console.log(`insidespan`,insidesapnqty);
  let f = +r.getAttribute("id")
  let gg = +r.innerText - 1
  
  if( insidesapnqty > 0){
  for (let i = 0; i < saveditems.length; i++) {
    if (saveditems[i].id === f) {
      saveditems[i].value = gg;
      break; // Stop the loop after updating the value
    }
  }
 
  r.innerText = gg;
  let totaldata = saveditems
  
  saveditems.splice(0,saveditems.length,...totaldata)
  console.log(`updatedlocalstorage`,saveditems);
  localStorage.setItem('savedproductitems', JSON.stringify(saveditems));
  
  saveditems = JSON.parse(localStorage.getItem('savedproductitems')) || [];
  
  datas = "";
  saveditems.forEach(element => {  
    let inputStringg = element.price ;
    let matchh = inputStringg.match(/\d+/);
    
    let numberOnlyy = matchh ? parseInt(matchh[0], 10) : null;
    
    datas += ` <div class="productimganddescriptioncheckouts">
  <div class="imgbutydel">
    <img src="${element.img}" alt="">
    <div class="nameanddelete"> <p class="nameofproduct">${element.name}</p><button class="delbtn"><i class="fa-solid fa-trash delete"></i></button></div>
  </div>
   <p>${element.price}</p>
   <p><button class="subb"><i class="fa-solid fa-minus sub"></i></button><span id="${element.id}" class="quantity">${element.value}</span> <button class="incrr"><i class="fa-solid fa-plus incr"></i></button> </p>
   <div class="qty">Rs. ${numberOnlyy*element.value}</div>
   </div>`
  });
  productimganddescriptioncheckoutsbox.innerHTML = datas
  }
  updateitemsqtyinbag()
  increasetotalamount()
}
})

let productscardsdata = "";
let search = document.querySelector(".search")
search.addEventListener("click",function(){
  
let searchbarindex = document.querySelector(".searchbarindex")
let localvalue = searchbarindex.value
console.log(localvalue)

localStorage.setItem('username', localvalue);
    var storedUsername = localStorage.getItem('username').toLowerCase();
    console.log('Stored Username:', storedUsername)
    window.location.href = "filter.html";

})