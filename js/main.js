// Home Nav
const headerNavToggle = document.querySelector('.trigger');
const headerNav = document.querySelector('.header_bottom_menu');
headerNavToggle.addEventListener('click', headerNavFunc);
function headerNavFunc() {
    headerNav.classList.toggle('active');
}
// header
try {
    // Home Page Header
    document.addEventListener("scroll", () => {
        if (scrollY > 100) {
            document.querySelector("header").classList.add("header_shadow");

        }
        else {
            document.querySelector("header").classList.remove("header_shadow");
        }
    })

} catch (err) {
    console.log(err);
}
// header Search Bar
try {
    const searchBarToggle = document.querySelector('.search_bar_toggle');
    const searchBarMain = document.querySelector('.header_content');
    searchBarToggle.addEventListener('click', searchBarFunc);
    function searchBarFunc() {
        searchBarMain.classList.toggle('active');
    }

} catch (err) {
    console.log(err);
}
// deactivate menu effect
// try {
//     var headerListLinks = document.querySelectorAll('.header_list_2_link');
//     headerListLinks.forEach(item => { item.addEventListener('click',headerNavFunc) });
// } catch (err) {
//     console.log(err);
// }
try {
  
   
} catch (err) {
    console.log(err);
}


const slides = document.querySelector('.slider').children;
const indicator = document.querySelector('.indicator');
let index = 0;

// Now Create Circle Indicators
function circleIndicator(){
  for(let i=0; i<slides.length; i++){
    const div = document.createElement('div');
          // div.innerHTML = i+1;
          div.setAttribute('onclick', 'indicateSlide(this)');
          div.id = i;
          if(i==0){
            div.className='active';
          }
          indicator.appendChild(div);
    // i starting from 0
  }
}
// Call To circleIndicator() Func
circleIndicator();

// Click to Indicators indicatorSlide(this) Func
function indicateSlide(element){
  // Change Index Value to Actual Circle
  index = element.id;

  // Call Change Slide Func
  changeSlides();

  // Call updateincidatorcircle Func
  updateCircleIndicator();

  // Call Reset Timer Func
  resetTimer();
}

// Update Circle Indicator func
function updateCircleIndicator(){

  for(let i=0; i<indicator.children.length; i++){
    // remove Class From All Circle Indicators
    indicator.children[i].classList.remove("active");
  }

  indicator.children[index].classList.add("active");
}


// // Next Slide Func
function nextSlide(){
  if(index==slides.length-1){
    index = 0;
  }
  else{
    index++;
  }
 
  // Call changeSlide
  changeSlides();
}

function changeSlides(){
  // Remove Active Class From All Slides
  for(let i=0; i<slides.length; i++){
    slides[i].classList.remove('active');
  }

  slides[index].classList.add('active');
}

// Reset Time Func ( Whem click to indicators or controls button )
function resetTimer(){
  // Stop Timer
  clearInterval(timer);

  // then started again timer
  timer=setInterval(autoPlay, 5000);
}

// Auto Play Func
function autoPlay(){
  // Call NextSlide Func
  nextSlide();
  // Call updateindicator Func
  updateCircleIndicator();
}

let timer=setInterval(autoPlay, 5000);