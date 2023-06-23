const singin = function () {
    let name = document.querySelector('.Username');
    let pass = document.querySelector('.Password');
    if (name.value==''){
        document.querySelector('.errName').innerHTML = 'Bạn chưa nhập UserName của mình vui lòng nhập lại!';
        name.focus();
        name.style.borderColor = ' red';
        return false;
    } else {
        document.querySelector('.errName').innerHTML = '';
        name.style.borderColor = 'white';
    }
    if (pass.value==''){
        document.querySelector('.errpass').innerHTML = 'Bạn chưa nhập PassWord vui lòng nhập lại!';
        pass.focus();
        pass.style.borderColor = ' red';
        return false;
    } else if (pass.value.length < 8) {
        document.querySelector('.errpass').innerHTML = 'PassWord không được dưới 8 ký tự vui lòng nhập lại!';
        pass.focus();
        pass.style.borderColor = ' red';
        return false
    } else {
        document.querySelector('.errpass').innerHTML = '';
        pass.style.borderColor = 'white';
    }
    return true;
}