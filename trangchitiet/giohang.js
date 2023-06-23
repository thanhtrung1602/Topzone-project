var hienthi = function (x) {
    // chuyển đổi chuỗi thành đối tượng
    var cart = JSON.parse(localStorage.getItem('menu-homepage'));
    // var cart = '';
    var str = '';
    let nameSP = document.querySelector('.nameSP').innerText
    let them = '';
    if (cart && cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if(cart[i].tenSP == nameSP) {
                cart[i].sl ++
            }
            str += `<div class="menu-homepage"><nav class="home">
            <div class="img-cart">
            <img width="80" src="${cart[i].hinhAnh}" alt="">
            <p onclick="xoa(this)"><i class="fa-solid fa-xmark"></i> Xóa</p>
            </div>
            <div class="head">
            <strong>${cart[i].tenSP}</strong>
                </div>
                <div class="price">
                    <p>${cart[i].gia}</p>
                    </div>
                    <div class="sale">
                    <span>4 khuyến mãi <i class="fa-sharp fa-solid fa-caret-down"></i></span>
                    <p>Màu: ${cart[i].mau} <i class="fa-sharp fa-solid fa-caret-down"></i></p>
                    </div>
                    <div id="btn" class="btn">
                    <button >-</button>
                    <p class="themsl">1</p>
                    <button class="btn-plus">+</button>
                </div>
                <div class="home-pice">
                    <span>Tạm tính:</span>
                </div>
                <p>${cart[i].gia}</p>
            </nav> </div><br>
            <div class="homepage-info">
            <div class="info">
            <strong><h2>Thông tin khách hàng</h2></strong>
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
            <span>1đ</span>
            </div>
            <button>Đặt hàng</button>
            <p>Bạn có thể lựa chọn các hình thức thanh toán ở bước sau</p>
            </div>
            </div>
            </div>
            
            <div class="footer">
            <p>Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng của TopZone</p>
            </div>
            `;
        }
        document.querySelector('.main_home').innerHTML = str;
    } else {
        str += `
            <nav>
                <div class="empty">
                <div class="img_empty">
                        <img src="/img/empty_cart" alt="">
                        <p>Giỏ hàng của bạn chưa có sản phẩm nào!</p>
                        <span class="contact">Liên hệ: <a href="">0822930906</a>(08h00 - 21h30)</span>
                    </div>
                </div>
            </nav>
        `
    }
    document.querySelector('.main_home').innerHTML = str;
}

var xoa = function (p) {
    // chuyển đổi chuỗi thành một đối tượng
    let arr = JSON.parse(localStorage.getItem('menu-homepage'));
    // xóa p ở vị trí số 1
    arr.splice(p, 1);
    // lưu lại vào local
    localStorage.setItem('menu-homepage', JSON.stringify(arr));
    // tạo biến và lưu thẻ chín
    var row = p.parentNode.parentNode.parentNode.parentNode;
    // contains có phải thẻ thẻ con k
    if (document.querySelector('.main_home').contains(row)) {
        row.parentNode.removeChild(row);
      }
}

hienthi();
