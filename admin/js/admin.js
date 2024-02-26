
const onCategory = () => {
            document.querySelector('.navbar').innerHTML = `<ul class="nav">
                    <li><a href="./admin.html">Home</a></li>
                    <li><a href="./admin.html">User</a></li>
                    <li><a href="./fullsanpham.html">Product</a></li>
                    <li><a href="./quantriloai.html">Category</a></li>
                    <li><a href="./bill.html">Bill</a></li>
                </ul>` 
}


class Products {
    constructor (
        name,
        price,
        img,
        id
    ) {
        this.name = name,
        this.price = price,
        this.img = img,
        this.id = id
    }

    nameString() { 
        return this.name.toUpperCase() 
    }
}


const onAllProduct = () => {
    fetch('http://localhost:3000/product')
        .then((res) => res.json())
        .then((products) => {
            let productHTML = ``;
            products.forEach((product) => {
                let {name, price, img, id} = product;
                let obj = new Products(name, price, img, id)
                productHTML += fullProduct(obj);
                document.querySelector(".on-product").innerHTML = `  
                <table class="table"> 
                <thead>
                  <tr>
                    <th>hinh</th>
                    <th>ten sp</th>
                    <th>gia</th>
                    <th>sua</th>
                    <th>xoa</th>
                  </tr>
                <thead> ${productHTML}</table>`;
            })
        })
}

const fullProduct = (product) => {
    return `
        <tbody>
            <tr>
                <td class="img-width"><img class="img-table" src="../${product.img}"></td>
                <td><span class="namePro">${product.nameString()}</span></td>
                <td><span class="pricePro">${product.price}</span></td>
                <td><span><a href='editsanpham.html?id=${
                product.id
                }' class='btn btn-warning'>Sửa</a></span></td>
                <td><span><button onclick='return xoasp(${
                product.id
                })' class='btn btn-danger'>Xóa</button></span></td>
            </tr>
        </tbody> 
    `
}

// xoa san pham

const xoasp = (product) => {
    fetch(`http://localhost:3000/product/${product}`, {method: 'DELETE'})
       .then((response) => response.json())
       .then((d) => d);
}

// bill 

const Bill =  () => {
        fetch(`http://localhost:3000/bill`)
            .then((response) => response.json())
            .then((bills) => {
                bills.forEach((bill) => {
                    let str = ``
                    fetch(`http://localhost:3000/detailBill`)
                        .then((response) => response.json())
                        .then((details) => {
                            details.forEach(detail => {
                                return str += `
                                    <tr>
                                        <td>${detail.id}</td>
                                        <td>${detail.name}</td>
                                        <td>${detail.price}</td>
                                        <td>${bill.nameUser}</td>
                                        <td>${bill.phone}</td>
                                        <td>${bill.city}</td>
                                        <td>${bill.district}</td>
                                        <td>${bill.ward}</td>
                                        <td>${bill.road}</td>
                                        <td>${bill.decs}</td>
                                        <td><a onclick="delBill('${detail.id}')"><button>del</button></a></td>
                                    </tr>
                                `
                        })
                        
                        document.querySelector('.on-bill').innerHTML = `
                            <div class="bill-table">
                                <table class="table-bill">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>NameProduct</th>
                                            <th>price</th>
                                            <th>nameUser</th>
                                            <th>phone</th>
                                            <th>city</th>
                                            <th>district</th>
                                            <th>ward</th>
                                            <th>road</th>
                                            <th>decs</th>
                                            <th>del</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${str}
                                    </tbody>    
                                </table>
                            </div>
                        `
                    });
                })
            });
}




const delBill = (id) => {
    fetch(`http://localhost:3000/detailBill/${id}`, {method: 'DELETE'})
    .then((response) => response.json())
    .then((d) => d);
}
