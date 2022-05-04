function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});
;

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function btnEvent(btn, list) {
    let button = document.querySelector(btn)
    let menu = document.querySelector(list)
    button.addEventListener('click', function() {
        button.classList.toggle('active')
        menu.classList.toggle('active')
        if(menu.classList.contains('active')) {
            document.querySelector('body').style.overflowY = 'hidden'
        } else {
            document.querySelector('body').style.overflowY = 'auto'
        }
    })
}

btnEvent('.header__menu', '.card')
btnEvent('.header__burger', '.header__nav')

;