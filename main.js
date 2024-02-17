const arr = [];
var img = 0;
// xử lý banner
const turnRight = () => {
  if (img < arr.length - 1) {
    img++;
    document.querySelector(".banner__img").src = arr[img].src;
  }
};
const turnLeft = () => {
  img = 0;
  document.querySelector(".banner__img").src = arr[img].src;
};

const test = () => {};
