// hien menu
const menu = () => {
  const apiMenus = "http://localhost:3000/category";
  fetch(apiMenus)
    .then((res) => res.json())
    .then((category) => {
      let str = "";

      category.forEach((menu) => {
        str += `
        
                            <li class="title-son">
                                <a class="son-title" href="/Topzone-con/category.html?id=${menu.id}">
                                    ${menu.name}
                                </a>
                            </li>
                        
        `;
      });

      const menuHtml = `
            <div class="homepage__menu">
                <div class="menu">
                    <div class="logo">
                        <a href="/index.html">
                            <img class="logo-image" width="150" src="/img/logo-topzone-1-removebg-preview.png" alt="logo">
                        </a>
                    </div>
                    
                    <div class="title">
                        <ul class="title-con">
                            ${str}
                        </ul>
                        </div>
                        <div class="cart">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <div class="cart-shopping">
                                <a href="/trangchitiet/giohang.html">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <span class="sl">0</span>
                                </a>
                            </div>
                            <a href="/form/dangnhap.html">
                                <i class="fa-solid fa-user cart-icon icon"></i>
                            </a>
                        </div>
                    </div>
                </div>   
    `;
      document.querySelector("header").innerHTML = menuHtml;
    });
};
// category
const category = () => {
  let apiCategories = `http://localhost:3000/category`;
  fetch(apiCategories)
    .then((a) => a.json())
    .then((b) => {
      let str = ``;

      b.forEach((category) => {
        str += `
                <div class="homepage__product-cart">
                    <a href="/Topzone-con/category.html?id=${category.id}" class="iphone-item">
                        <div class="iphone">
                            <img class="iphone-img" src="${category.img}" alt="">
                        </div>
                            <p>${category.name}</p> 
                    </a>
                </div>
    `;
      });
      const category = `<div class="cart-product"> ${str} </div>`;
      document.querySelector(".homeage__product").innerHTML = category;
    });
};
// product
const product = () => {
  const apiCate = "http://localhost:3000/category";
  fetch(apiCate)
    .then((res) => res.json())
    .then((categories) => {
      categories.forEach((category) => {
        let proHTML = "";
        fetch(`http://localhost:3000/product?idLoai=${category.id}&_limit=4`)
          .then((res) => res.json())
          .then((products) => {
            products.forEach((product) => {
              return (proHTML += renderProduct(product));
            });
            const categoryHTML = `
                <div class="homepage__product-item">
                <div class="title-phone">
                    <span>${category.name}</span>
                </div>
                <div class="flex-box phone">${proHTML}</div>
                </div>
                `;
            document.querySelector(".product-main").innerHTML += categoryHTML;
          });
      });
    });
};
// IN sarn pham
const renderProduct = (sp) => {
  let { id, idLoai, img, name, price } = sp;

  return `    
                <div class="product__iphone-item">
                <a href="/trangchitiet/index.html?id=${id}">
                    <div class="phone-cart">
                        <img width="300" height="300" src="${img}" alt=""> 
                        <h3>${name}</h3>
                        <span>${price}</span>
                    </div>
                </a>
                </div>`;
};

const detailProducts = async () => {
  const params = new URLSearchParams(location.search);
  let id = Number(params.get("id"));
  const products = await fetch(`http://localhost:3000/product?id=${id}`)
    .then((response) => response.json())
    .then((sp) => sp[0]);
  const properties = await fetch(`http://localhost:3000/properties?id=${id}`)
    .then((response) => response.json())
    .then((pp) => pp[0]);

  let input = { ...products, ...properties };
  const str = `
            <div class="navbar">
            <div class="navbar-plus">
                <div  class="navbar-img">
                    <img onclick="doi()" class="a" src="${input.img}" alt="">
                    <div class="img-detail">
                        <img onclick="doi0()" width="96" src="/img/img-anhchitiet/ct1.webp" alt="">
                        <img onclick="doi1()" width="96" src="/img/img-anhchitiet/ct2.webp" alt="">
                        <img onclick="doi2()" width="96" src="/img/img-anhchitiet/ct3.webp" alt="">
                        <img onclick="doi3()" width="96" src="/img/img-anhchitiet/ct4.webp" alt="">
                        <img onclick="doi4()" width="96" src="/img/img-anhchitiet/ct5.webp" alt="">
                        <img onclick="doi5()" width="96" src="/img/img-anhchitiet/ct6.webp" alt="">
                    </div>
                </div>
                
                <div class="gach">
                    
                </div>
                
                <div class="text">
                    <h3>${input.name}</h3>
                    <p>giá và khuyến mãi</p>
                    <strong class="price">
                        <p>${input.price}</p>
                        <del>34.490.000₫</del>                  
                    </strong>
                    <p>Dung lượng</p>
                    <div class="btn">
                        <button>${input.memorys}</button>
                    </div>
                    <p>Màu</p>
                    <div class="round">
                        <div class="purple round-color"></div>
                        <div class="white round-color"></div>
                        <div class="red round-color"></div>
                        <div class="black round-color"></div>
                    </div>
                    
                    <div class="navbar-btn">
                        <button>Mua ngay</button>
                    </div>
                    
                    <div class="btn-chil">
                        <button class="btn-item">Trả góp</button>
                        <button class="btn-icon" onclick="addToCart(${input.id})">
                            Thêm vào giỏ hàng 
                            <i class="fa-regular fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    `;
  document.querySelector(".outputProduct").innerHTML = str;
};

// add to cart

const addToCart = async (id, quantity = 1) => {
  console.log(id);
  const sp = await fetch(`http://localhost:3000/product?id=${id}`)
    .then((response) => response.json())
    .then((cart) => cart[0]);
  if (sp == 0) {
    alert("test");
    const str = `
        <nav>
          <div class="empty">
            <div class="img_empty">
              <img src="/img/empty_cart" alt="">
              <p>Giỏ hàng của bạn chưa có sản phẩm nào!</p>
              <span class="contact">Liên hệ: <a href="">0822930906</a>(08h00 - 21h30)</span>
            </div>
          </div>
        </nav>
      `;
    document.querySelector(".main_home").innerHTML = str;
    return;
  }

  sp["quantity"] = quantity;
  cart_local = localStorage.getItem("cart");
  let cart = cart_local == null ? [] : JSON.parse(cart_local);
  let index = cart.findIndex((sp) => sp.id == id);
  if (index >= 0) {
    cart[index]["quantity"] += quantity;
  } else {
    cart.push(sp);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

const showCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null)
    return `
     <nav>
        <div class="empty">
            <div class="img_empty">
                <img src="/img/empty_cart" alt="">
                <p>Giỏ hàng của bạn chưa có sản phẩm nào!</p>
                <span class="contact">Liên hệ: <a href="">0822930906</a>(08h00 - 21h30)</span>
            </div>
        </div>
    </nav>
    `;
  document.querySelector(".main_home").innerHTML = `${cart_body(cart)}`;
};

const cart_body = (cart) => {
  let str = "";
  cart
    .map((sp, index) => {
      console.log(index);
      str += `
        <div class="cart-header">
          <div class="cart-left">
            <div class="img-cart">
              <img src="${sp.img}" alt="">
              <p onclick="removeCart(${index})"><i class="fa-solid fa-xmark"></i> Xóa</p>
            </div>
            <div class="head">
              <div class="cart-name">
                <strong>${sp.name}</strong>
              </div>
              <div class="sale">
                  <span>4 khuyến mãi <i class="fa-sharp fa-solid fa-caret-down"></i></span>
              </div>
            </div>
          </div>
          <div class="cart-right">
            <p>${sp.price}</p>
          </div>
        </div>
         <div class="quantity">
            <span>Màu: den <i class="fa-sharp fa-solid fa-caret-down"></i></span>
            <div id="btn" class="btn">
                <button >-</button>
                <p class="themsl">1</p>
                <button class="btn-plus">+</button>
            </div>
        </div>
          <div class="home-pice">
              <span>Tạm tính:</span>
              <p>${sp.price}</p>
          </div>
        <div class="line"></div>
      `;
      return str;
    })
    .join("");

  return `
  <div class="menu-homepage"><nav class="home">${str}</nav></div>
      <div class="homepage-info">
  <div class="info">
      <strong strong><h2>Thông tin khách hàng</h2></strong>
    <div class="info-box">
        <input type="radio" name="gioitinh"> Anh
        <input type="radio" name="gioitinh"> Chị
    </div>
      
    <div class="homepage-ip">
      <input style="margin-right: 5px;" type="text" placeholder="Họ và Tên" >
      <input type="text" placeholder="Số điện thoại">
    </div>
  </div>
</div>
      
<div class="homepage-address">
  <div class="address">
      <strong><h2>Chọn hình thức giao hàng</h2></strong>
      
      <div class="add-info-box">
        <input style="margin-right: 5px;" type="radio" name="address"> Giao tận nơi
        <input type="radio" name="address"> Nhận tại cửa hàng
      </div>
      
      <div class="homepage-ip-box">
      <div class="homepage-ip-box">
          <input type="text" placeholder="Hồ Chí Minh" ><i class="fa-solid fa-chevron-down"></i>
      </div>
      <div class="homepage-ip-box">
          <input type="text" placeholder="Chọn Quận/Huyện"><i class="fa-solid fa-chevron-down"></i>
      </div>
        <div class="homepage-ip-box">
          <input type="text" placeholder="Chọn Phường/Xã"><i class="fa-solid fa-chevron-down"></i>
        </div>
      <input type="text" placeholder="Số nhà, tên đường">
      
      <input type="text" class="note" placeholder="Nhập ghi chú (nếu có)">
      
      <div class="check people">
          <input type="checkbox"> <p>Gọi người khác nhận hàng</p>
      </div>
      <div class="check number">
        <input type="checkbox"> <p>Chuyển danh ba, qua dữ liệu máy mới</p>
      </div>
      <div class="check cty">
        <input type="checkbox"> <p>Xuất hóa đơn công ty</p>
      </div>
    </div>
  </div>
</div>
<div class="buy">
  <div class="buy-footer">
    <div class="footer-home">
      <i class="fa-regular fa-file-invoice"></i>
      <a href="">Sử dụng mã giảm giá</a>
    <div class="order">
      <p>Tổng tiền: </p> 
      <span span>1đ</span>
    </div>
      <button>Đặt hàng</button>
      <p>Bạn có thể lựa chọn các hình thức thanh toán ở bước sau</p>
    </div>
  </div>
</div>
      
<div class="footer">
  <p>Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng của TopZone</p>
</div>`;
};

// trang categories

const categories = () => {
  const params = new URLSearchParams(location.search);
  let id = Number(params.get("id"));
  console.log(id);
  let str = "";
  fetch(`http://localhost:3000/product?idLoai=${id}`)
    .then((response) => response.json())
    .then((categorys) => {
      console.log(categorys);
      categorys.forEach((category) => {
        return (str += categoriesHTML(category));
      });
      document.querySelector(
        ".narbar-item"
      ).innerHTML += `<div class="homepage__product-item">${str}</div>`;
    });
};

const categoriesHTML = (sp) => {
  console.log(sp);
  let { id, img, name, price } = sp;
  console.log(name);
  return `
         <div class="product__iphone-item">
             <a href="/trangchitiet/index.html?id=${id}">
                 <div class="phone-cart">
                     <img width="300" height="300" src="${img}" alt=""> 
                     <h3>${name}}</h3>
                     <div class="btn">
                         <button>128GB</button>
                         <button>256GB</button>
                         <button>512GB</button>
                     </div>
                     <span>${price}</span>
                 </div>
             </a>
         </div>
  `;
};

const removeCart = (index) => {
  let cartString = localStorage.getItem("cart");

  let cartArr = JSON.parse(cartString) || [];

  if (confirm("Are you sure you want to remove")) {
    cartArr.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cartArr));
  showCart();
  window.location.reload();
};
