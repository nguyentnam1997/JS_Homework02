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
//Cách 1
// function findAppleBrand(products) {
//     let arr = [];
//     products.forEach(element => {
//         if(element.brand =="Apple") {
//             arr.push(element);
//         }
//     });
//     return arr;
// }
// console.log(findAppleBrand(products));

//Cách 2
const findProductBrand = function(products, brandName) {
    return products.filter(product => product.brand == brandName);
}
console.log(findProductBrand(products, "Apple"));

//4. Tìm các sản phẩm có giá > 20.000.000
// function findPrice(products) {
//     let arr = [];
//     products.forEach(element => {
//         if(element.price > 20000000) {
//             arr.push(element);
//         }
//     });
//     return arr;
// }
// console.log(findPrice(products));

const findProductPrice = function(products, price) {
    return products.filter(product => product.price > price);
}
console.log(findProductPrice(products, 20000000));

//5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
// function findProductName(products) {
//     let arr = [];
//     products.forEach(element => {
//         if(element.name.toLowerCase().includes('pro')) {
//             arr.push(element);
//         }
//     });
//     return arr;
// }
// console.log(findProductName(products));
const findProductName = function (products, includeName) {
    return products.filter(product => product.name.toLowerCase().includes(includeName));
}
console.log(findProductName(products, 'pro'));

//6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
function addProduct(products, product) {
    products.push(product);
    return products;
}
console.log(addProduct(products, {
    name: "Iphone 15 Pro Max",
    price: 36000000,
    brand: "Apple",
    count: 3,
}));

//7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
const removeProduct = function(products, brand) {
    return products.filter(product => product.brand!= brand);
}
console.log(removeProduct(products, 'Samsung'));

//8. Sắp xếp giỏ hàng theo price tăng dần
function sortIncreasePrice(products) {
    return products.sort((a, b) => a.price - b.price);
}
console.log(sortIncreasePrice(products));

//9. Sắp xếp giỏ hàng theo count giảm dần
function sortDecreaseCount(products) {
    return products.sort((a, b) => b.count - a.count);
}
console.log(sortDecreaseCount(products));

//10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
function randomProduct(products) {
    let arr = [];
    while (arr.length < 2) {
        let index = parseInt(Math.random() * products.length);     
        if (!arr.includes(products[index])) {
            arr.push(products[index]);
        }
    }     
    return arr;
}
console.log(randomProduct(products));