export async function getItems(){
    const response = await fetch('https://fakestoreapi.com/products?limit=3');

    let items = await response.json();
    
    return items;
}

export async function getLatestItems(){
    const items = await getItems();

    return items.slice(0, 3);
}