const btn = document.querySelector("[data-btn-share]");
const shareGroup = document.querySelector("[data-share-group]");

btn.addEventListener('click', function (){
    this.classList.toggle("active");
    shareGroup.classList.toggle("active");
});
