const slider = document.querySelector(".image-comparison .slider");
const beforeImage = document.querySelector(".image-comparison .before-image");
const sliderLine = document.querySelector(".image-comparison .slider-line");
const sliderIcon = document.querySelector(".image-comparison .slider-icon");

slider.addEventListener("input", (e) => {
  let sliderValue = e.target.value + "%";

  beforeImage.style.width = sliderValue;
  sliderLine.style.left = sliderValue;
  sliderIcon.style.left = sliderValue;
});
//choose the image 

document.getElementById('dieu-khac').addEventListener('click',function(){
    document.getElementById('image_before').src='https://www.emcas.vn/upload/images/home/after.jpg'
    document.getElementById('image_after').src='https://www.emcas.vn/upload/images/home/before.jpg'
});

document.getElementById('cay-moi').addEventListener('click',function(){
    document.getElementById('before-image').src=''
    document.getElementById('after-image').src=''
});

document.getElementById('cay-mi').addEventListener('click', function(){
    document.getElementById('before-image').src=''
    document.getElementById('after-image').src=''
});
