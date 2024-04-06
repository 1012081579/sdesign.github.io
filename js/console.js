const body = document.querySelector("body");
const element1 = document.getElementById("g-pointer-1");
const element2 = document.getElementById("g-pointer-2");

function setPosition(x, y) {
  const halfElementWidth1 = element1.offsetWidth / 2;
  const halfElementWidth2 = element2.offsetWidth / 2;
  
  element1.style.transform = `translate(${x - halfElementWidth1}px, ${y - halfElementWidth1}px)`;
  element2.style.transform = `translate(${x - halfElementWidth2}px, ${y - halfElementWidth2}px)`;
}

// 检查是否存在存储的位置
const storedX = sessionStorage.getItem('mouseX');
const storedY = sessionStorage.getItem('mouseY');

if (storedX !== null && storedY !== null) {
  setPosition(parseFloat(storedX), parseFloat(storedY));
}

let isScrolling = false;

body.addEventListener('mousemove', (e) => {
  window.requestAnimationFrame(function() {
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;
    setPosition(x, y);

    // 存储鼠标位置
    sessionStorage.setItem('mouseX', x);
    sessionStorage.setItem('mouseY', y);
  });
});

// 处理滚动事件
body.addEventListener('scroll', () => {
  isScrolling = true;
  // 在滚动事件中添加你希望执行的代码
  // 在这里可以调用函数或执行其他操作
});

// 检测鼠标是否在原位置上不移动
setInterval(() => {
  if (isScrolling) {
    isScrolling = false;
    // 在这里可以再次调用你的函数或执行其他操作
  }
}, 1000); // 检测间隔，可以根据需要调整
