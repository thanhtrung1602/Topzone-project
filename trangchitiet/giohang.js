var hienthi = function (x) {
  // chuyển đổi chuỗi thành đối tượng
  var cart = JSON.parse(localStorage.getItem("menu-homepage"));
  // var cart = '';
  var str = "";
  let nameSP = document.querySelector(".nameSP").innerText;
  let them = "";
  if (cart && cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].tenSP == nameSP) {
        cart[i].sl++;
      }
      str += 0;
    }
    document.querySelector(".main_home").innerHTML = str;
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
        `;
  }
  document.querySelector(".main_home").innerHTML = str;
};

var xoa = function (p) {
  // chuyển đổi chuỗi thành một đối tượng
  let arr = JSON.parse(localStorage.getItem("menu-homepage"));
  // xóa p ở vị trí số 1
  arr.splice(p, 1);
  // lưu lại vào local
  localStorage.setItem("menu-homepage", JSON.stringify(arr));
  // tạo biến và lưu thẻ chín
  var row = p.parentNode.parentNode.parentNode.parentNode;
  // contains có phải thẻ thẻ con k
  if (document.querySelector(".main_home").contains(row)) {
    row.parentNode.removeChild(row);
  }
};

hienthi();
