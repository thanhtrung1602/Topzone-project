const arr = [];
var img = 0;
const listiPhone = [
    {hinhanh: '/img/iPhone-14-Pro-series- (1)-650x650 (1).webp', ten: 'iphone 14 Pro max 128GB', gia: '1đ'},
    {hinhanh: '/img/iPhone-14-Pro-series- (1)-650x650 (1).webp', ten: 'iphone 14 Pro max 256GB', gia: '1đ'},
    {hinhanh: '/img/iPhone-14-Pro-topzone (4)-650x650.webp', ten: 'iphone 14 Pro 128GB', gia: '1đ'},
    {hinhanh: '/img/iPhone-14-thumb-topzone (2)-650x650.webp', ten: 'iphone 14 14GB', gia: '1đ'}
];
const listiMac = [
    {hinhanh: '/img/macbook-air-m1-2020-silver-thumb-650x650.webp', ten: 'MacBook Air M1 2020 7-Core GPU', gia: '1đ'},
    {hinhanh: '/img/apple-macbook-air-m2-2022-16gb-xanh-650x650.webp', ten: 'MacBook Air M2 2022 10-core GPU', gia: '1đ'},
    {hinhanh: '/img/apple-macbook-pro-14-m1-pro-2021-xam-thumb-650x650.webp', ten: 'MacBook Pro 14 inch M1 Pro 2021', gia: '1đ'},
    {hinhanh: '/img/apple-mac-mini-m1-thumb-650x650.webp', ten: 'Mac mini M1 2020', gia: '1đ'}
];
const listiPad= [
    {hinhanh: '/img/ipad-gen-9-silver-1-2-650x650.webp', ten: 'iPad 9 WiFi', gia: '1đ'},
    {hinhanh: '/img/iPad-gen-10-sliver-thumb-650x650.webp', ten: 'iPad 10 WiFi 64GB', gia: '1đ'},
    {hinhanh: '/img/iPad-Pro-M2-11-sliver-thumb-1-650x650.webp', ten: 'iPad Pro M2 11 inch WiFi 128GB', gia: '1đ'},
    {hinhanh: '/img/ipad-air-5-wifi-startlight-650x650.webp', ten: 'iPad Air 5 WiFi', gia: '1đ'}
];
const listWatch = [
    {hinhanh: '/img/apple-watch-s8-41mm-den-xanh-thumbtz-650x650.webp', ten: 'Apple Watch Series 8 GPS', gia: '1đ'},
    {hinhanh: '/img/apple-watch-se-2022-44mm-vien-nhom-trang-thumbtz-650x650.webp', ten: 'Apple Watch SE 2022 GPS 44mm', gia: '1đ'},
    {hinhanh: '/img/apple-watch-s8-ultra-size-m-trang-kem-thumbtz-650x650.webp', ten: 'Apple Watch Ultra 49mm', gia: '1đ'},
    {hinhanh: '/img/apple-watch-s3-gps-38mm-den-650x650.webp', ten: 'Apple Watch Series 3 GPS', gia: '1đ'}
];
const listSound = [
    {hinhanh: '/img/airpods-pro-2-thumb-650x650.webp', ten: 'AirPods Pro (2nd Gen)', gia: '1đ'},
    {hinhanh: '/img/airpods-3-hop-sac-khong-day-thumb-650x650.webp', ten: 'AirPods 3 Sạc Lightning', gia: '1đ'},
    {hinhanh: '/img/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-261121-033421-650x650.webp', ten: 'AirPods Pro Hộp sạc Magsafe', gia: '1đ'},
    {hinhanh: '/img/airpods-3-thumb-650x650.webp', ten: 'AirPods 3', gia: '1đ'}
];
const loadimg = function () {
    // chuyển hình ảnh trong phần banner
    for (let i = 0; i < 2; i++) {
        arr[i]= new Image();
        arr[i].src = "/img/anh"+i+".webp"
    }
    // phần này chuyển từ dữ liệu js sang html 
    var kq_iPhone ='';
    var kq_iMac = '';
    var kq_iPad = '';
    var kq_watch = '';
    var kq_sound = '';
    // Phần của iPhone
    listiPhone.forEach(i => {
        kq_iPhone += `<div class="product__iphone-item"><a href="/trangchitiet/index.html"><div class="phone-cart"><img width="300" height="300" src="${i.hinhanh}" alt=""> <h3>${i.ten}</h3><span>${i.gia}</span></div></a></div>`
    });
    document.querySelector('.phone').innerHTML = kq_iPhone;
    // phần của iMac
    listiMac.forEach(i => {
        kq_iMac += `<div class="product__iphone-item"><a href=""><div class="phone-cart"><img width="300" height="300" src="${i.hinhanh}" alt=""> <h3>${i.ten}</h3><span>${i.gia}</span></div></a></div>`
    });
    document.querySelector('.mac').innerHTML = kq_iMac;
    // phần của ipad
    listiPad.forEach(i => {
        kq_iPad += `<div class="product__iphone-item"><a href=""><div class="phone-cart"><img width="300" height="300" src="${i.hinhanh}" alt=""> <h3>${i.ten}</h3><span>${i.gia}</span></div></a></div>`
    });
    document.querySelector('.pad').innerHTML = kq_iPad;
    // phần của watch
    listWatch.forEach(i => {
        kq_watch += `<div class="product__iphone-item"><a href=""><div class="phone-cart"><img width="300" height="300" src="${i.hinhanh}" alt=""> <h3>${i.ten}</h3><span>${i.gia}</span></div></a></div>`
    });
    document.querySelector('.watch').innerHTML = kq_watch;
    // phần của sound
    listSound.forEach(i => {
        kq_sound += `<div class="product__iphone-item"><a href=""><div class="phone-cart"><img width="300" height="300" src="${i.hinhanh}" alt=""> <h3>${i.ten}</h3><span>${i.gia}</span></div></a></div>`
    });
    document.querySelector('.sound').innerHTML = kq_sound;
}


// code đoạn hình ảnh 
let turnRight = function () {
    if (img < arr.length - 1) {
        img ++;
        document.querySelector('.banner__img').src = arr[img].src;
    }
}
let turnLeft = function () {
        img = 0 ;
        document.querySelector('.banner__img').src = arr[img].src;
} 

