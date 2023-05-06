

// decalre variables
let nameInput=document.getElementById("nameInput");
let proPrice=document.getElementById("proPrice");
let proTaxes=document.getElementById("proTaxes");
let proAds=document.getElementById("proAds");
let proDiscount=document.getElementById("proDiscount");
let total=document.getElementById("total");
let CouInp=document.getElementById("CountInput");
let CategoryInput=document.getElementById("CategoryInput");
let createBtn=document.getElementById("createBtn");
let searchInput=document.getElementById("searchInput");
// let searchbtn=document.getElementById("searchbtn");
// let searchCategory=document.getElementById("searchCategory");
let deleAllBtn=document.getElementById("deleteAllBtn");

let mood="create";
let temp;


// add product

var productListContainer;
if (localStorage.getItem("productItemList")==null)
{
    productListContainer=[];
}
else
{
    productListContainer=JSON.parse( localStorage.getItem("productItemList"))
    displayData();
}
function addproduct(){
    var prouctlist=
    {
        name:nameInput.value,
        price:proPrice.value,
        taxs:proTaxes.value,
        ads:proAds.value,
        discount:proDiscount.value,
        count:CouInp.value,
        category:CategoryInput.value,
        total:total.innerHTML
    }
    if(nameInput.value!=""  && proPrice.value!="")
    {
        
    if(mood==="create")
    {
    if(prouctlist.count > 1)
    {
        for(let i=0;i<productlist.count;i++)
        {
            productListContainer.push(productlist)
        }
    }
    else
    {
    productListContainer.push(prouctlist);
    }
}
else{
    productListContainer[temp]=prouctlist
    mood="create"
    createBtn.innerHTML="create"
    CouInp.style.display="block"

}
    }

    

    localStorage.setItem("productItemList",JSON.stringify(productListContainer))
    displayData() // to run without reload the browser
}
//setItem ==>take string

createBtn.addEventListener("click",addproduct);

// get price


function getTotal(){

    if(proPrice.value!=""){
        let result=(+proPrice.value +  +proAds.value +  +proTaxes.value) -   +proDiscount.value
        total.innerHTML=result

        total.style.backgroundColor="#040"
    }
    else{
        total.innerHTML="";
        total.style.backgroundColor="red"

    }
}

// clear data from inputs 

function clearData()
{
    nameInput.value="",
    proPrice.value=""
    proTaxes.value="",
    proAds.value="",
    proDiscount.value="",
    total.innerHTML="",
    CouInp.value="",
    CategoryInput.value=""
}
createBtn.addEventListener("click",clearData)

// var tableBody=document.getElementById("tableBody");
// display data

function displayData()
{
    let cartonna="";

    for(let i=0;i<productListContainer.length;i++){
        cartonna+=`<tr>
        <td>${i}</td>
        <td>${productListContainer[i].name}</td>
        <td>${productListContainer[i].price}</td>
        <td>${productListContainer[i].taxs}</td>
        <td>${productListContainer[i].ads}</td>
        <td>${productListContainer[i].total}</td>
        <td>${productListContainer[i].discount}</td>
        <td>${productListContainer[i].category}</td>
        <td><button  class="btn btn-primary" onclick="updateDate(`+i+`)" id="updateBtn">Update</button></td>
        <td><button class="btn btn-danger" onclick="deleteItem(`+i+`)" id="deleteBtn">Delete</button></td>
        </tr>`
    }
    getTotal()
    document.getElementById("tableBody").innerHTML=cartonna;
}

    // delete all
function deleteItem(i)
{
    productListContainer.splice(i,1); // keda hyfdl magood fel localStorage

    localStorage.setItem("productItemList",JSON.stringify(productListContainer));//hyfdl mogood fel table 
    displayData();
}

function deleteAllItem()
{
    localStorage.clear()
    productListContainer.splice(0) // to clear from table
    displayData()
}
deleAllBtn.addEventListener("click",deleteAllItem)


// count


// update data

function updateDate(i)
{
    nameInput.value=productListContainer[i].name
    proPrice.value=productListContainer[i].price
    proTaxes.value=productListContainer[i].price
    proAds.value=productListContainer[i].ads
    proDiscount.value=productListContainer[i].discount
    CategoryInput.value=productListContainer[i].category  
    getTotal()
    CouInp.style.display="none"
    createBtn.innerHTML="Update"
    mood='update'
    temp=i;
    scroll({
        top: 100,
        behavior: "smooth",
      });
}


// search

function searchProduct(term){

    var cartonna='';
    var cartonna2='';
    for(var i=0;i<productListContainer.length;i++){
      if(productListContainer[i].name.includes(term.trim())==true){
        cartonna+=`<tr>
        <td>${i}</td>
        <td>${productListContainer[i].name}</td>
        <td>${productListContainer[i].price}</td>
        <td>${productListContainer[i].taxs}</td>
        <td>${productListContainer[i].ads}</td>
        <td>${productListContainer[i].total}</td>
        <td>${productListContainer[i].discount}</td>
        <td>${productListContainer[i].category}</td>
        <td><button  class="btn btn-info" onclick="updateDate(`+i+`)" id="updateBtn">Update</button></td>
        <td><button class="btn btn-info" onclick="deleteItem(`+i+`)" id="deleteBtn">Delete</button></td>
        </tr>`
    }
    }
    document.getElementById("tableBody").innerHTML=cartonna;
    searchInput.innerHTML=cartonna2;
  }


  // regualar experssions

  var regex=/^[1-9]/;

proPrice.addEventListener("keyup",function(){
    if(regex.test(proPrice.value)==false){
        proPrice.classList.remove("is-valid")
        proPrice.classList.add("is-invalid")
    }
    else{
        proPrice.classList.add("is-valid")
        proPrice.classList.remove("is-invalid")
    }
})
var regex=/^[1-9]/;

proAds.addEventListener("keyup",function(){
    if(regex.test(proAds.value)==false){
        proAds.classList.remove("is-valid")
        proAds.classList.add("is-invalid")
    }
    else{
        proAds.classList.add("is-valid")
        proAds.classList.remove("is-invalid")
    }
})
proTaxes.addEventListener("keyup",function(){
    if(regex.test(proTaxes.value)==false){
        proTaxes.classList.remove("is-valid")
        proTaxes.classList.add("is-invalid")
    }
    else{
        proTaxes.classList.add("is-valid")
        proTaxes.classList.remove("is-invalid")
    }
})
proDiscount.addEventListener("keyup",function(){
    if(regex.test(proDiscount.value)==false){
        proDiscount.classList.remove("is-valid")
        proDiscount.classList.add("is-invalid")
    }
    else{
        proDiscount.classList.add("is-valid")
        proDiscount.classList.remove("is-invalid")
    }
})

