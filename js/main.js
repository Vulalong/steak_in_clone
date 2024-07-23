// The debounce function receives our function as a parameter
const debounce = (fn) => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;
  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
     if (frame) { 
        cancelAnimationFrame(frame);
     }
    // Queue our function call for the next frame
     frame = requestAnimationFrame(() => {
        // Call our function and pass any params we received
        fn(...params);
     });
  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
document.documentElement.dataset.sticky = 0;
const storeScroll = () => {
  if (window.scrollY > 45) {
     document.documentElement.dataset.sticky = 1;
  } else {
     document.documentElement.dataset.sticky = 0;
  }
}

// Listen for new scroll events, here we debounce our storeScroll function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// toggler 
function toggler() {
  const nav = document.querySelector('.mobile-nav');
  nav.classList.toggle("show");
}

$(document).ready(function(){
  $(".carousel-1").owlCarousel({

        items: 3,
    loop: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
    }
  });
});

$(document).ready(function(){
  $(".carousel-2").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    dot: true,
  });
});

$(document).ready(function(){
  const plateViews = document.querySelectorAll('.plate_view');
  plateViews.forEach((plateView) => {
    plateView.addEventListener('click', (evt) => {
      evt.stopPropagation();
      const modal = plateView.querySelector('div.popup_cont');
      modal.classList.remove('d-none');
      const closeBtn = modal.querySelector('button.close');
      const backdrop = modal.querySelector('div.overlay_dark');
      closeBtn.addEventListener('click', (evt) => {
        evt.stopPropagation();
        modal.classList.add('d-none');
      });
      backdrop.addEventListener('click', (evt) => {
        evt.stopPropagation();
        modal.classList.add('d-none');
      });
    });
  });
});