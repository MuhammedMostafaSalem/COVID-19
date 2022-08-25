// change backgroundColor in navbar-section
window.addEventListener("scroll" , () => {
    let navbar = this.document.querySelector(".navbar");
    navbar.classList.toggle("change" , window.scrollY > 25);
});


// section btn up
window.addEventListener("scroll" , () => {
    let upBtn = document.getElementById('upBtn');
    upBtn.classList.toggle("show" , window.scrollY > 300);
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


//  event click(remove & add) on icon bar and xmark
let bar = document.querySelector('.fa-bars');
let circleXmark = document.querySelector('.fa-circle-xmark');
bar.addEventListener("click" , () => {
    circleXmark.classList.remove('hide')
    bar.classList.toggle('remove')
});
circleXmark.addEventListener("click" , () => {
    bar.classList.toggle('remove')
    circleXmark.classList.add('hide')
});



// select class active in navbar
let li = document.querySelectorAll(".navbar .nav-link");
let focusDiv = document.querySelectorAll(".section1");
function activeMenu() {
    let len = focusDiv.length;
    while(--len && window.scrollY + 97 < focusDiv[len].offsetTop){}
    li.forEach(ele => ele.classList.remove("active"));
    li[len].classList.add("active");
}activeMenu();
window.addEventListener("scroll" , activeMenu);





// select tabs-section
let tabs = document.querySelectorAll(".tabs p");
let tabsArray = Array.from(tabs);

let tabsContent = document.querySelectorAll(".tabs-content > .accordion");
let tabsContentArray = Array.from(tabsContent);


tabsArray.forEach((element) => {
    element.addEventListener("click" , (e) => {
        tabsArray.forEach((element) => {
            element.classList.remove('active');
        });
        e.currentTarget.classList.add('active');

        tabsContentArray.forEach((content) => {
            content.style.display = 'none';
        });

        // console.log(e.currentTarget.dataset.content);
        document.querySelector(e.currentTarget.dataset.content).style.display = "block";
    });
});