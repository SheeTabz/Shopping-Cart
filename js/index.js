const itemList = document.querySelector('#item-list')
console.log(store)


store.forEach((item, index) =>{
const imageContainer = document.createElement('div')
imageContainer.setAttribute('class', 'col')
imageContainer.innerHTML = `<img src="${item.image}"/>
                             <h3>${item.item}</h3>
                              <p>${item.description}</p>`
                        

const qty = document.createElement('input')
qty.setAttribute('value', 0)
qty.setAttribute('id', index)
qty.setAttribute('type', 'number')
qty.setAttribute('placeholder', 'Quantity')

const addToCartBtn = document.createElement('button') 
addToCartBtn.setAttribute('class', 'btn btn-warning btn-sm m-4') 
addToCartBtn.textContent = 'Add to Cart' 


itemList.appendChild(imageContainer)
imageContainer.appendChild(qty)
imageContainer.appendChild(addToCartBtn)
  
}) 

























// function clickMe(){
//   alert("Click me!");
// }
// const btn = document.querySelectorAll("button");
// const clicks = (btn) => {
//     for(item of btn){
//         return item
//     }
// }
// const myClick = clicks(btn)

// myClick.addEventListener("click", clickMe);