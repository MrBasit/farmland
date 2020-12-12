


const prodSlides = document.querySelector('.content_slider').children;
const contentControls = document.querySelector('.content_controls');
let prodIndex = 0;

// Now Create Circle Indicators
function prodControlsMake(){
  for(let i=0; i<prodSlides.length; i++){
    const div = document.createElement('div');
          div.setAttribute('onclick', 'prodIndicateSlide(this)');
          div.id = i;
          if(i==0){
            div.className='active';
            div.innerHTML = '0'+ (i + 1);
          }
          contentControls.appendChild(div);
  }
}
// Call To circleIndicator() Func
prodControlsMake();
function prodIndicateSlide(element){
  // Change Index Value to Actual Circle
  prodIndex = parseInt(element.id);
  console.log(prodIndex);
  // Call Change Slide Func
  prodChangeSlides();

  // Call updateincidatorcircle Func
  prodControlsUpdate();
}

// Update Circle Indicator func
function prodControlsUpdate(){

  for(let i=0; i<contentControls.children.length; i++){
    // remove Class From All Circle Indicators
    contentControls.children[i].classList.remove("active");
    console.log('Adil');
    // ad
    contentControls.children[i].innerHTML = '';
  }

  contentControls.children[prodIndex].innerHTML = '0'+(prodIndex + 1);
  contentControls.children[prodIndex].classList.add("active");
}


// // Next Slide Func
function prodNextSlide(){
  if(prodIndex==prodSlides.length-1){
    prodIndex = 0;
  }
  else{
    prodIndex++;
  }
 
  // Call changeSlide
  prodChangeSlides();
}

function prodChangeSlides(){
  // Remove Active Class From All Slides
  for(let i=0; i<prodSlides.length; i++){
    prodSlides[i].classList.remove('active');
  }

  prodSlides[prodIndex].classList.add('active');
}

// Reset Time Func ( Whem click to indicators or controls button )
function prodResetTimer(){
  // Stop Timer
  clearInterval(prodTimer);

  // then started again timer
  prodTimer=setInterval(prodAutoPlay, 5000);
}

// Auto Play Func
function prodAutoPlay(){
  // Call NextSlide Func
  prodNextSlide();
  // Call updateindicator Func
  prodControlsUpdate();
}

// let prodTimer=setInterval(prodAutoPlay, 5000);

// categories

try{
    var prdCategoriesBtn = document.querySelectorAll('.product_categories_btn');
    var categoriesTabs = document.querySelectorAll('.categories_tabs');
    var controlsMain = document.querySelector('.content_controls');

    prdCategoriesBtn.forEach(item => { item.addEventListener('click', changeCategoriesTabs) });

    function changeCategoriesTabs(e){

      var targatedItem = document.querySelector(`#${this.id}_tab`);
      console.log(targatedItem);
      
      if(this.classList.contains('active')){
        this.classList.toggle('active');
        targatedItem.classList.toggle('active');
        controlsMain.classList.toggle('active');
      }else{
            
        // deactivate active from all productCategoriesButtons
        prdCategoriesBtn.forEach( item => { item.classList.remove('active') });
        // deactivate active from all productCategoriesTabs
        categoriesTabs.forEach( item => { item.classList.remove('active') });

        this.classList.add('active');
        targatedItem.classList.add('active');
        controlsMain.classList.add('active');
      }



    }

}catch (err){
    console.log(err);
}