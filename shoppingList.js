
let basket = [];

render();



//input shopping items
function toBasket() {
  //assign basket-title to variable
  let textbox = document.getElementById('basket-title');
  
 //Get the value of textbox
  let title = textbox.value;

  if(basket.includes(title)){alert("This item already exists")}

  else{
  basket.push(title);
  }
  render();
}


function render() {
//reset list
document.getElementById('basket-list').innerHTML = '';

//shopping list print
  basket.forEach(function (basketTitle) {
    let element = document.createElement ('div');
    element.innerText = basketTitle;
    let basketList = document.getElementById('basket-list')
    basketList.appendChild(element);
  });
}


