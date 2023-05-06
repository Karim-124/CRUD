

export function deleteItem(i)
{
    productListContainer.splice(i,1); // keda hyfdl magood fel localStorage

    localStorage.setItem("productItemList",JSON.stringify(productListContainer));//hyfdl mogood fel table 
    displayData()
}

export function deleteAllItem()
{
    localStorage.clear()
    productListContainer.splice(0)
    displayData()
}
deleAllBtn.addEventListener("click",deleteAllItem);
