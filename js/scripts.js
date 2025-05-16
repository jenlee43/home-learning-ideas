/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};





document.addEventListener('DOMContentLoaded', function() {
  const cuteImages = document.querySelectorAll('.cute-img');
  
  function checkScroll() {
    cuteImages.forEach(img => {
      const imgPosition = img.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (imgPosition < screenPosition) {
        img.classList.add('animate');
      }
    });
  }
  
  // Check on load
  checkScroll();
  
  // Check on scroll
  window.addEventListener('scroll', checkScroll);
});



document.addEventListener('DOMContentLoaded', function() {
  const cuteImages = document.querySelectorAll('.cute-img');
  let mouseX = 0;
  let mouseY = 0;
  
  // Store original positions
  const originalPositions = [];
  cuteImages.forEach((img, index) => {
    const rect = img.getBoundingClientRect();
    originalPositions[index] = {
      x: rect.left,
      y: rect.top
    };
  });
  
  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    moveImages();
  });
  
  // Reset on mouse leave
  document.querySelector('.masthead').addEventListener('mouseleave', () => {
    cuteImages.forEach((img, index) => {
      img.style.transform = `translate(0, 0)`;
    });
  });
  
  function moveImages() {
    cuteImages.forEach((img, index) => {
      const speed = parseFloat(img.getAttribute('data-speed'));
      const imgRect = img.getBoundingClientRect();
      const imgCenterX = imgRect.left + imgRect.width / 2;
      const imgCenterY = imgRect.top + imgRect.height / 2;
      
      // Calculate distance to mouse
      const distanceX = mouseX - imgCenterX;
      const distanceY = mouseY - imgCenterY;
      
      // Move image proportionally to its speed
      const moveX = distanceX * speed;
      const moveY = distanceY * speed;
      
      // Apply movement
      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
      
      // Add rotation effect based on movement
      const rotation = moveX * 0.1;
      img.style.transform += ` rotate(${rotation}deg)`;
    });
  }
});



