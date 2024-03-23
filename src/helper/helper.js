const shortTitle = (title)=>{
const short = title.trim().split(" ").slice(0,3).join(" ");
return short;
}

const sumProducts = (products) =>{
    const itemsCounter = products.reduce((acc, cur) => acc+ cur.quantity,0);
    const total = products.reduce((acc, cur) => acc + cur.price * cur.quantity,0).toFixed(2);
    return{itemsCounter, total};
}

const productQuantity = (state, id)=>{
const index = state.selectedItems.findIndex(item=> item.id === id);
if(index === -1){
    return 0;
}else{
    return state.selectedItems[index].quantity;
}
}
export { shortTitle, sumProducts, productQuantity };