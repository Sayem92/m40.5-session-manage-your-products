const inputValue = (id) => {
    const input = document.getElementById(id);
    const value = input.value;
    input.value = "";
    return value;
}

const addProduct = () => {
    const product_name = inputValue("product-name");
    const product_quantity = inputValue("product-quantity");

    // console.log(product_name, product_quantity);
    // console.log(typeof product_name, typeof product_quantity);

    // console.log(isNaN(product_name))

    const number = Number(product_quantity)

    // console.log(Number.isInteger(number))

    if (!isNaN(product_name) || !Number.isInteger(number)) {
        console.warn("vul input diso");
        return;
    }

    // console.log(product_name, product_quantity);
    setProductInLocalStorage(product_name, product_quantity);

    display();
    // window.location.reload();
    // console.table(getLocalStorageData())
}

const getLocalStorageData = () => {
    const products = localStorage.getItem("all_products");
    const parseProducts = JSON.parse(products);
    return parseProducts;
}

const setProductInLocalStorage = (name, quantity) => {
    // console.log(name, quantity);

    let products = getLocalStorageData();
    // console.log(products);

    if (!products) {
        products = {};
    }

    if(products[name])
    {
        products[name] = parseInt(products[name]) + parseInt(quantity)
    }
    else
    {
        products[name] = quantity;
    }

    localStorage.setItem("all_products", JSON.stringify(products))

}


const display = () => {
    const products = getLocalStorageData();
    // console.table(products);

    const section = document.getElementById("all-products");
    section.textContent = "";

    for (const product in products) {
        // console.log(product, products[product])

        const name = product;
        const quantity = products[product];

        const div = document.createElement("div");
        div.innerHTML = `<div class="shadow-sm p-3 mb-2 bg-body rounded">
            <span class="fs-4">${name}</span>
            Quantity:<small class="fw-bold">
                ${quantity}
            </small>
        </div>`;

        section.appendChild(div);
    }
}

display();