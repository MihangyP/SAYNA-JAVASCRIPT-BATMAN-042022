

const ratio = .4;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio // dès que 40% du titre est visible, on déclenche l'animation fade in
  }
  
  const fadeIn = function (entries, observer) {
      entries.forEach(function (entry) {
          if(entry.intersectionRatio > ratio) {
                entry.target.classList.add('h1-reveal');
                observer.unobserve(entry.target);
          } 
      }) 
  }

  const observer = new IntersectionObserver(fadeIn, options);
  document.querySelectorAll('h1').forEach(function(r) {
    observer.observe(r);
  });
