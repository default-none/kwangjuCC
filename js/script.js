const headerBar = document.querySelector('.headerbar');
const wLogoImg = document.querySelector('.w');
headerBar.addEventListener('mouseenter', function(){
    wLogoImg.classList.add('o');
})
headerBar.addEventListener('mouseleave', function(){
    wLogoImg.classList.remove('o');
})

const gnbBtn = document.querySelector('.gnb_btn');
let gnbWrap = gnbBtn.nextElementSibling;
gnbBtn.addEventListener('click', function(){
    gnbWrap.classList.toggle('gnb_active');
})
const noneItem = document.querySelector('.none_item');
noneItem.addEventListener('click', function(){
    let p =this.parentNode;
    p.classList.remove('gnb_active');
})


const courseImgBox = document.querySelectorAll('.course_img');
let cImgArray = ['dong.jpg', 'sum.jpg', 'sir.jpg'];
IMG(courseImgBox,cImgArray)


const eventImgBox = document.querySelectorAll('.event_img');
let eImgArray = ['event1.jpg', 'event2.jpg', 'event3.jpg']
IMG(eventImgBox,eImgArray )

const additionalImg = document.querySelectorAll('.additional_img');
let addImgArray = ['add1.jpg', 'add2.jpg', 'add3.jpg'];
IMG(additionalImg,addImgArray);

function IMG(B, N){
    for(i=0; i<B.length; i++){
        B[i].style.background = `url(./img/${N[i]}) center no-repeat`;
        B[i].style.backgroundSize = "cover";
    }
}
const courseBtnBox = document.querySelectorAll('.course_btn');
courseBtnBox.forEach(function(courseBtn){
    courseBtn.addEventListener('mouseenter', function(){
        let p = this.parentNode;
        p.classList.add('filter_2_none');
    })
    courseBtn.addEventListener('mouseleave', function(){
        let p = this.parentNode;
        p.classList.remove('filter_2_none');
    })
})
const addBoxs = document.querySelectorAll('.additional');
addBoxs.forEach(function(addBox){
    addBox.addEventListener('mouseenter', function(){
        this.classList.add('active');
        addBox.children[0].classList.add('filter_2_none');
    })
    addBox.addEventListener('mouseleave', function(){
        this.classList.remove('active');
        addBox.children[0].classList.remove('filter_2_none');
    })
})

if(matchMedia("screen and (min-width: 999px)").matches) {
    const courseBtnBox = document.querySelectorAll('.course_btn');
    courseBtnBox.forEach(function(courseBtn){
        courseBtn.addEventListener('mouseenter', function(){
            let p = this.parentNode;
            p.classList.add('filter_2_none');
        })
        courseBtn.addEventListener('mouseleave', function(){
            let p = this.parentNode;
            p.classList.remove('filter_2_none');
        })
    })
};



// lnb.forEach(function(BTN, i){
//     BTN.addEventListener('mouseenter', function(){
//         for(a in menuList){
//             menuList[i].classList.add('displayB');
//             menuList[i].classList.remove('displayN');
//         }
//     })
//     BTN.addEventListener('mouseleave', function(){
//         for(a in menuList){
//             menuList[i].classList.add('displayN');
//             menuList[i].classList.remove('displayB');
//         }
//     })
// });