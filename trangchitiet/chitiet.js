const arrSP = [];
let sl = ''
arrSP.themSP = function (hinhAnh, tenSP, gia, mau) {
    sl++;
    document.querySelector('.sl').innerHTML = sl;
    const sp = {
        hinhAnh: hinhAnh,
        tenSP: tenSP,
        gia: gia, 
        mau: mau
    }
    arrSP.push(sp)
    console.log(arrSP)
    // set cho đối tượng thành chuỗi
    let xoa = localStorage.setItem('menu-homepage',JSON.stringify(arrSP));
}
//  chỉnh ảnh dưới ảnh lớn của trang chi tiết
var doi = function () {
    document.querySelector('.a').src = `/img/img-iphone/iphone14/iphone-14-pro-max-1tb-tim.webp`
}
var doi0 = function () {
    document.querySelector('.a').src = `/img/img-anhchitiet/ct1.webp`
}
var doi1 = function () {
    document.querySelector('.a').src = `/img/img-anhchitiet/ct2.webp`
}
var doi2 = function () {
    document.querySelector('.a').src = `/img/img-anhchitiet/ct3.webp`
}
var doi3 = function () {
    document.querySelector('.a').src = `/img/img-anhchitiet/ct4.webp`
}
var doi4 = function () {
    document.querySelector('.a').src = `/img/img-anhchitiet/ct5.webp`
}
var doi5 = function () {
    document.querySelector('.a').src = `/img/img-anhchitiet/ct6.webp`
}
