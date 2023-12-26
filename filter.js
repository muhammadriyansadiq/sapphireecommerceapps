var boxnavvv = document.querySelector(".boxnavvv")
var newinbox = document.querySelector(".newinbox")
var womanbox = document.querySelector(".womanbox")
var manbox = document.querySelector(".manbox")
var boxnav = document.querySelector(".boxnav")
// var boxnavv = document.querySelector(".boxnavv")

var kidsbox = document.querySelector(".kidsbox")
var beautybox = document.querySelector(".beautybox")
var accessoriesbox = document.querySelector(".accessoriesbox")
var homebox = document.querySelector(".homebox")
let localvalue;

boxnavvv.addEventListener("click",function(e){

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
   updatedbagsqty()

  };
  


  newinbox.addEventListener("click",function(e){
      localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);


    // e.preventDefault();


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
    





  let g = [

    {name:"women unstitched festive II",
    price:"Rs. 1980.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/0SF1ELX23V91_2.jpg?v=1702532817&width=600",
    description:"festive II"},

    {name:"women unstitched festive II",
    price:"Rs. 1980.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/0SF1ELX23V91_2.jpg?v=1702532817&width=600",
    description:"Ready To Wear"},

    {name:"women unstitched Winter '23",
    price:"Rs. 2980.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0348.jpg?v=1699448374&width=600",
    description:"Winter '23 unstitched" },
    
    {name:"women unstitched Day to Day Winter colllection",
    price:"Rs. 3280.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0862.jpg?v=1699610528&width=600",description:"unstitched"},
    
    {name:"women Unstitched Bottoms",
    price:"Rs. 3980.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0190_1dc2452e-578f-44ef-80a8-4a9a32955d86.jpg?v=1699448194&width=600",description:"Bottoms"},
    
    {name:"women 1 piece Unstitched Bottoms",
    price:"Rs. 2680.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/00SPBDY23V83_1.jpg?v=1699448135&width=600",description:"1 piece"},
    
    {name : "women 2 piece Unstitched Bottoms", price:"Rs. 3280.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0820.jpg?v=1699447933&width=600",description:"2 piece"},
    
    {name:"women 3 piece Unstitched Bottoms",
    price:"Rs. 7280.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0620.jpg?v=1699448049&width=600",description:"3 piece"},
    
    {name:"women 3 piece Fabric Glossary Unstitched Bottoms",
    price:"Rs. 1580.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/0SFTELX23V82_1_de202762-4296-43dd-9211-17e4c8eefb4b.jpg?v=1702533315&width=1024",description:""},
    
    {name:"women man 3 piece Fabric Glossary Unstitched Bottoms",
    price:"Rs. 3280.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A1383.jpg?v=1699508995&width=1024",description:"Fabric Glossary man"},
    
    {name:"man Bottoms unstitched",
    price:"Rs. 5680.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0285.jpg?v=1699448321&width=1024",description:"Bottoms man"},
    {name:"man Kurtas",
    price:"Rs. 1980.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0285.jpg?v=1699448321&width=1024",description:"Kurtas"},

    {name:"man shawls",
    price:"Rs. 3080.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/ST3PCBLKPR3W.jpg?v=1702533733&width=1024",description:"shawls man"},
    
    {name:"man Fall/Winter '23 shawls",
    price:"Rs. 3180.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0698.jpg?v=1699446879&width=400",description:"shawls man"},
    
    {name:"ready to wear Festive II",
    price:"Rs. 3880.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0207.jpg?v=1699446539&width=1024",description:"Festive II"},
    
    {
      name:"ready to wear Winter '23",
    price:"Rs. 2380.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0403.jpg?v=1699446656&width=1024"
    ,description:"Winter '23"},
    {name:"ready to wear Solids",
    price:"Rs. 2880.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0343.jpg?v=1699448374&width=1024",description:"Solids"}
    ,
    {name:"ready to wear Printed",
    price:"Rs. 2380.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/047A0867.jpg?v=1699610528&width=1024",description:"Printed"}
    
    ,
    {name:"ready to wear Embroidered",
    price:"Rs. 2080.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/0S2DESG23V93_4.jpg?v=1701929191&width=1024",description:"Embroidered"}
    ,
    {name:"ready to wear Silk",
    price:"Rs. 2780.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/0S2DESG23V95_3.jpg?v=1701851463&width=400",description:"Silk"}
    ,
    {name:"ready to wear Luxury",
    price:"Rs. 2280.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/0S2DESG23V95_3.jpg?v=1701851463&width=400",description:"Luxury"}
    ,
    {name:"ready to wear Matching separates",
    price:"Rs. 2080.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/00S3PST23V92_1.jpg?v=1701854472&width=1024",description:"Matching separates"}
    ,
    {name:"man Waistcoats Bottoms ready to wear outfits Prince Coats & Sherwanis Waistcoats & Sherwanis",
    price:"Rs. 2980.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/RTW_afef3cfa-ca7d-4bbc-9e7c-bc021b29c778.jpg?v=1701940861&width=400",description:"Waistcoats & Sherwanis man"}
    
    ,
    {name:"girls kids Kurtas",
    
    price:"Rs. 6980.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/023102GKSC14_2.jpg?v=1699436493&width=400",description:"Kurtas"}
    
    ,
    {name:"girls kids outfits",
    
    price:"Rs. 6980.00"
    ,
    img:"https://pk.sapphireonline.pk/cdn/shop/files/023102GKSC13_1.jpg?v=1699424554&width=1024",description:"outfits"}
    ,
    {name:"girls kids fusion",
    
    price:"Rs. 6980.00"
    ,
    img:"https://pk.sapphireonline.pk/cdn/shop/files/023102GKSC12_1.jpg?v=1699424461&width=1024",description:"fusion"}
    
    
    ,
    {name:"girls kids Mummy & Me",
    
    price:"Rs. 6980.00"
    ,
    img:"https://pk.sapphireonline.pk/cdn/shop/files/023102GKSC11_5.jpg?v=1699424358&width=1024",description:"Mummy and Me"}
    
    
    ,
    {name:"girls kids bottoms",
    price:"Rs. 6980.00"
    ,
    img:"https://pk.sapphireonline.pk/cdn/shop/files/023102GKSC10_5.jpg?v=1699436676&width=1024",description:"bottoms"}
    ,
    {name:"ready to wear fusion",
    price:"Rs. 4080.00"
    ,
    img:"https://pk.sapphireonline.pk/cdn/shop/files/0S2DEST23V92_7.jpg?v=1701929163&width=400",description:"fusion"}
    ,
    {name:"ready to wear sustainable",
    price:"Rs. 3180.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/0S2DESG23V94_2.jpg?v=1701929226&width=400",description:"sustainable"}
    ,
    {name:"ready to wear dupattas & shawls",
    price:"Rs. 2180.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/designer_s-corner-thumbnail.jpg?v=1698916202",description:"dupattas & shawls mummy and me jackets"}
    ,
    {name:"ready to wear bottoms",
    price:"Rs. 2980.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/STITCHED-THUMBNAIL.jpg?v=1699610602",description:"bottoms"},
    {name:"home bed sheets",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/HTBLBS313127_6.jpg?v=1698863896&width=400",description:"bed sheets"}
    ,
    {name:"home bed sheets",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/HTBLBS313127_6.jpg?v=1698863896&width=400",description:"clutches jackets"}
    ,
    {name:"home quilt covers",
    price:"Rs. 1180.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/HTBLQC313126_2.jpg?v=1698864698&width=1024",description:"quilt covers velvet"}
    ,
    {name:"home bed sheets",
    price:"Rs. 1480.00",
    img:"",description:"bed sheets home"}
    ,
    {name:"home bed spreads",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/HTBLBT313121_4.jpg?v=1698864010&width=1024",description:" bed spreads"}
    ,
    {name:"bed in a bag",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/bed-in-a-bag-Thumbnails.jpg?v=1692270412",description:"bed in a bag velvet jackets home"}
    ,
    {name:"home pillowcases",
    price:"Rs. 880.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/HTBLBB313132.jpg?v=1698861620&width=600",description:"pillowcases"}
    ,
    {name:"home kids bedding",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/kids-bedding-thumbnail.jpg?v=1698916202",description:"kids bedding"}
    ,
    {name:"home fillings",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/products/2U0A0711_large.jpg?v=1664529630",description:"fillings"}
    ,
    {name:"home bath towels",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTTWBT219045_1_large.jpg?v=1697522846",description:"bath towels home"}
    ,
    {name:"home bathrobe sets",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTTWFS219045_2_large.jpg?v=1697523066",description:"bathrobe sets"}
    ,
    {name:"home winter volume",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/00U2TDY23V95_1_large.jpg?v=1698931217",description:"winter volume"}
    ,
    {name:"home cushion covers",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTCUDP400348_3_large.jpg?v=1698927080",description:"cushion covers"}
    ,
    {name:"home fillings",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTTLNP222037_2_large.jpg?v=1698846859",description:"fillings"}
    ,
    {name:"home table runner",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTTLPM222033_2_large.jpg?v=1698847072",description:"table runner"}
    ,
    {name:"home  table cloth",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTTLPM222037_4_large.jpg?v=1698847107",description:"table cloth"}
    ,
    {name:"home placemats",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313116_1_large.jpg?v=1698908195",description:"placemats"}
    ,
    {name:"home napkins",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313116_3_large.jpg?v=1698908195",description:"napkins"}
    ,
    {name:"home aprons",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313119_2_large.jpg?v=1698908286",description:"aprons"}
    ,
    {name:"home printed",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313120_2_large.jpg?v=1698908308",description:"printed"}
    ,
    {name:"home solid",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313120_1_large.jpg?v=1698908308",description:"solid"}
    ,
    {name:"home Luxury Embroidered",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313121_3_large.jpg?v=1698908343",description:"Luxury Embroidered"}
    ,
    {name:"home ridal colllection",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313125_large.jpg?v=1698864402",description:"ridal colllection"}
    ,
    {name:" hotel collection",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313126_1_large.jpg?v=1698864418",description:"hotel collection"}
    ,
    {name:" designers corner",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313128_3_large.jpg?v=1698862050",description:"designers corner"}
    ,
    {name:"home artistic florals",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313129_1_large.jpg?v=1698862161",description:"artistic florals"}
    ,
    {name:"home amplified nature",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313130_1_a5e5ed60-21a9-4970-98e2-d5ec05a9a4a2_large.jpg?v=1698908483",description:"amplified nature"}
    ,
    {name:"home block printed",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313131_2_large.jpg?v=1698862219",description:"block printed"}
    ,
    {name:"west Fall/Winter '23",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313131_3_large.jpg?v=1698862218https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313132_3_large.jpg?v=1698862286",description:"Fall/Winter '23 west"}
    ,
    {name:"west Outerwear",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/HTBLFS313132_1_large.jpg?v=1698862286",description:"Outerwear west"}
    ,
    {name:"west Tops",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/WESTTOP02679_1.jpg?v=1696501380&width=1024",description:"Tops west"}
    ,
    {name:"west Dresses",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/WESTTOP02677_2.jpg?v=1696571596&width=400",description:"Dresses west"}
    ,
    {name:"west T-Shirts",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/WESTTOP02679_1.jpg?v=1696501380&width=1024",description:"T-Shirts west"}
    ,
    {name:"west Essentials",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/WESTTOP02677_2.jpg?v=1696571596&width=400",description:"Essentials west"}
    ,
    {name:"west Co-ord Sets",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/WESTTOP02679_1.jpg?v=1696501380&width=1024",description:"Co-ord Sets west"}
    ,
    {name:"west Jeans",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/WESTSCF01565_1.jpg?v=1696504917&width=1024",description:"Jeans"}
    ,
    {name:"west sjirts",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/WESTSCF01567_3.jpg?v=1696504930&width=400",description:"sjirts"}
    ,
    {name:"west bottoms",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/WESTSCF01565_1.jpg?v=1696504917&width=1024",description:"bottoms"}
    ,
    {name:"west Accessories",
    price:"Rs. 1480.00",
    img:"",description:"Accessories"}
    ,
    {name:"Accessories flats",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/000000SL2320.1.jpg?v=1696491659&width=400",description:"flats"}
    ,
    {name:"Accessories Traditional Flats",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/000000SL2348_5.jpg?v=1699272366&width=400",description:"Traditional Flats Accessories"}
    ,
    {name:"Accessories Heels",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/000000SL2339.5.jpg?v=1699272609&width=400",description:"Heels"}
    ,
    {name:"Accessories loafers & mules",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/000000SL2321.1.jpg?v=1696491746&width=400",description:"loafers & mules"}
    ,
    {name:"Accessories Clutches",
    price:"Rs. 1480.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/000000SL2306.3.jpg?v=1696417954&width=1024",description:"Clutches"}
    ,
    {name:"Accessories Tote Bags",
    price:"Rs. 1488.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/000000HB1294.3_large.jpg?v=1696490454",description:"Tote Bags Accessories"}
    ,
    {name:"Accessories Cross Body Bags",
    price:"Rs. 1410.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/000000HB1294.3_large.jpg?v=1696490454",description:"Cross Body Bags"}
    ,
    {name:"Accessories Top handle bags",
    price:"Rs. 1410.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/000000HB1311.1_large.jpg?v=1696418604",description:"Top handle bags"}
    ,
    {name:"Accessories Mini Bags",
    price:"Rs. 1488.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/000000HB1317.4_large.jpg?v=1696490622",description:"Mini Bags"}
    ,
    {name:"Accessories Shoulder Bags",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/000000HB1321.1_large.jpg?v=1696418470",description:"Shoulder Bags"}
    ,
    {name:"Accessories wallet",
    price:"Rs. 1480.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/000000HB1300.1_large.jpg?v=1696418411",description:"wallet Accessories"}
    ,
    {name:"Accessories scarves",
    price:"Rs. 1880.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/WESTSCF01422_2_large.jpg?v=1696416635",description:"scarves Accessories"}
    ,
    {name:"Accessories caps",
    price:"Rs. 1470.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/ST2PCBLKPR2T_1_large.jpg?v=1698753897",description:"caps"}
    ,
    {name:"Accessories Beanies",
    price:"Rs. 1280.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/WESTSCF01422_2_large.jpg?v=1696416635",description:"Beanies"}
    ,
    {name:"Accessories capes",
    price:"Rs. 1880.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/ST2PCBLKPR2T_1_large.jpg?v=1698753897",description:"capes"}
    
    ,
    {name:"face",
    price:"Rs. 1880.00",
    img:"https://pk.sapphireonline.pk/cdn/shop/files/000000CMF025_1_cca16f64-e578-45ed-88f9-a220f29ee914.jpg?v=1689314630&width=1024",description:"face Accessories"}
    ,
    {name:"lips",
    price:"Rs. 1880.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/products/000000CML002_2_large.jpg?v=1596880909",description:"lips"}
    
    ,
    {name:"eyes",
    price:"Rs. 1880.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/products/000000CME012_2_large.jpg?v=1595568959",description:"eyes"}
    
    ,
    {name:"nails",
    price:"Rs. 1880.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/BAYBREEZE_1_large.jpg?v=1687352360",description:"nails"}
    
    ,
    {name:"makeup tools Women's Fragrances Men’s Body Mists",
    price:"Rs. 1880.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/SummerBloom_large.jpg?v=1701860491",description:"Body Mists"}
    
    ,
    {name:"Women's Fragrances Women's Body Mists Men’s Body Mists",
    price:"Rs. 1880.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/SummerBloom_large.jpg?v=1701860491",description:"Fragrances"}
    
    ,
    {name:"Women's Fragrances Women's Body Mists Men’s Body Mists",
    price:"Rs. 1880.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/SummerBloom_large.jpg?v=1701860491",description:"Mists"}
    ,
    {name:"Women's Fragrances Men's Fragrances Women's Body Mists Men’s Body Mists",
    price:"Rs. 1880.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/SummerBloom_large.jpg?v=1701860491",description:"Fragrances"}
    ,
    {name:"Women's Fragrances Men's Fragrances Women's Body Mists Men’s Body Mists",
    price:"Rs. 1880.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/SummerBloom_large.jpg?v=1701860491",description:"Fragrances"}
    ,
    {name:"Women's Fragrances Men's Fragrances Women's Body Mists Men’s Body Mists",
    price:"Rs. 1880.00",
    img:"https://cdn.shopify.com/s/files/1/1592/0041/files/SummerBloom_large.jpg?v=1701860491",description:"Body Mists"}
    ];

    var storedUsername = localStorage.getItem('username').toLowerCase();
    console.log('Stored Username:', storedUsername)

  let svgg = document.querySelector(".svgg")
  let productsbox = document.querySelector(".productscardbox")
  let productscardsdata = "";
  let storedValue;
  let selectedproductinbag = document.querySelector(".selectedproductinbag")
  let checking;
  let productimg;
  let productName;

  let productprice;

  let finalvalue;
let count =1


// =========filter functonality yeh search bar par lagani hai==================


let search = document.querySelector(".search")
search.addEventListener("click",function(){
  
let searchbarindex = document.querySelector(".searchbarindex")
let localvalue = searchbarindex.value
console.log(localvalue)

localStorage.setItem('username', localvalue);
     storedUsername = localStorage.getItem('username').toLowerCase();
    console.log('Stored Username:', storedUsername)

})


  g.forEach((data)=>{
    if(data.description.toLowerCase().includes(storedUsername)){
      storedValue = +localStorage.getItem('key') || 0;

      finalvalue = localStorage.setItem('key', storedValue+1);
   
productscardsdata += `<div id="${storedValue}" class="productscard">
<img class="productimage" src="${data.img}" alt="">
<div class="detailsaboutproducts">
<div>
<p class="productname">${data.description}</p>
<p class="productprice">${data.price}</p>
</div>
<button class="buttonn">Add To Bags</button>
</div>
</div>`
}
})

  productsbox.innerHTML = productscardsdata;
  productsbox.addEventListener("click",function(e){

     storedValue = +localStorage.getItem('key') || 0;

    finalvalue = localStorage.setItem('key', storedValue+1);
    // console.log(storedValue);
   

if (e.target.classList.contains('svgg')) {
//update kar yha par bags


  // e.preventDefault()

  let productCard = e.target.closest('.productscard');

  console.log(productCard);

   productName = productCard.querySelector('.productname').innerText;
  
  console.log('Product Name:', productName);
  
   productprice = productCard.querySelector('.productprice').innerText;
  
  console.log('productprice', productprice);
  
   productimg = productCard.querySelector('.productimage').getAttribute('src');
  
  console.log('productimg', productimg);

location.reload()
}


const saveditems = JSON.parse(localStorage.getItem('savedproductitems')) || [];

const buyitems = { 

name: productName,
img:productimg,
price:productprice,
id:storedValue,
value:count

};

saveditems.push(buyitems);

      localStorage.setItem('savedproductitems', JSON.stringify(saveditems));
//     let buyitemqty =   saveditems.length

// selectedproductinbag.innerHTML = buyitemqty;

})


  var svg = `<i class="fa-solid fa-bag-shopping svgg"></i>`

document.querySelectorAll('.productscard').forEach(cards => {

  cards.addEventListener('mouseenter', () => {

      cards.querySelector('.buttonn').style.display = 'block';
  });
  cards.addEventListener('mouseleave', () => {
      cards.querySelector('.buttonn').style.display = 'none';
  });
});

document.querySelectorAll('.buttonn').forEach(car => {
  car.addEventListener('mouseenter', () => {
    car.innerHTML = svg
  });

  car.addEventListener('mouseleave', () => {
      car.innerHTML = "ADD TO BAG"

  });
});


// svgg.addEventListener("click",function(){
//   selectedproductinbag.innerHTML = storedValue;


// })

let saveditems = JSON.parse(localStorage.getItem('savedproductitems')) || [];
function updatedbagsqty(){
let itemsqty =0
saveditems.forEach((element)=>{
itemsqty +=element.value
})
console.log(itemsqty);
selectedproductinbag.innerHTML = itemsqty

}
updatedbagsqty()