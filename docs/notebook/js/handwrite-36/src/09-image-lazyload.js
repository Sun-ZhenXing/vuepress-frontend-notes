let imgList = [...document.querySelectorAll('img')];
let length = imgList.length;

const imgLazyLoad = (() => {
  let count = 0;

  return () => {
    const deleteIndexList = [];
    imgList.forEach((img, index) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src;
        deleteIndexList.push(index);
        count++;
        if (count === length) {
          document.removeEventListener('scroll', imgLazyLoad);
        }
      }
    });
    imgList = imgList.filter((img, index) => !deleteIndexList.includes(index));
  }
})();

// 这里最好加上防抖处理
document.addEventListener('scroll', imgLazyLoad);
