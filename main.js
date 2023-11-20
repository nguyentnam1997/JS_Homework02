let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
//1. In ra thông tin các sản phẩm trong giỏ hàng
function printProduct(products) {
    products.forEach(element => {
        console.log(`${element.name} - ${element.price} - ${element.brand} - ${element.count}`);
    });
}
printProduct(products);

for (const key in products) {
    console.log(user[key]);
}

//2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
function sumProducts(products) {
    let total = 0;
    products.forEach(element => {
        total += element.price * element.count;
    });
    return total; 
}
console.log(sumProducts(products));

//3. Tìm các sản phẩm của thuơng hiệu "Apple"