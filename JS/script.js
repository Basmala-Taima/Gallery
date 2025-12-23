//Get variable for element
let PrevBtn=document.getElementById("prev");
let NextBtn=document.getElementById("next");
let CloseBtn=document.getElementById("close");
let BoxContainer=document.getElementById("boxContainer");
let BoxItem=document.getElementById("boxItem");
let images=document.querySelectorAll(".images-gallery img");
//Get container for images
let imagesArr=[];
for (let i = 0; i < images.length; i++) {
    imagesArr.push(images[i]);
};
let currentIndex=0;
function showImage(index){
    BoxItem.style.backgroundImage=`url(${imagesArr[index].src})`
}
for (let j = 0; j < imagesArr.length; j++) {
    (function(j){
        imagesArr[j].addEventListener("click",function(){
            BoxContainer.style.display="flex";
            currentIndex=j;
            showImage(currentIndex);
        });
    })
    (j);
};

CloseBtn.addEventListener("click",function(){
    BoxContainer.style.display="none"
})
NextBtn.addEventListener("click",function(){
    currentIndex++
    if (currentIndex===imagesArr.length) {
        currentIndex=0;        
    };
    showImage(currentIndex);
});
PrevBtn.addEventListener("click",function(){
    currentIndex--
    if (currentIndex===-1) {
        currentIndex=imagesArr.length-1;
    };
    showImage(currentIndex);
});
BoxContainer.addEventListener("click",function(event){
    if (event.target===BoxContainer) {
        BoxContainer.style.display="none";
    };
});