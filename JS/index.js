// effet hover et click sur le menu du nav
const menus = document.querySelectorAll('.menus a'); // on récupère dans un tableau les deux liens
for(let i = 0; i < menus.length; i++) { // on parcours ce tableau pour récupérer les liens un par un
    menus[i].addEventListener('mouseover', function () { // l'orsq'on survole un lien, elle devient gras et souligné
       let active = document.querySelector('.menus .active');

        if(menus[i].classList.contains('active')) { // si le lien contient déjà la class active, on ne fait rien
            return false;
        }
       //on retire la class active sur le lien actif
        active.classList.remove('active');
        //on ajoute la class active sur le lien survolé
        menus[i].classList.add('active');
    })

    menus[i].addEventListener('click', function () { // l'orsq'on clique sur un lien, elle devient gras et souligné
        let active = document.querySelector('.menus .active');
 
         if(menus[i].classList.contains('active')) { // si le lien contient déjà la class active, on ne fait rien
             return false;
         }
        //on retire la class active sur le lien actif
         active.classList.remove('active');
         //on ajoute la class active sur le lien survolé
         menus[i].classList.add('active');
     })
 
}

//effet défillement du menus réseaux sociaux à droite
const menuSocial = document.querySelector('.social-right');
window.addEventListener('scroll', function (e) {
  
  if(window.scrollY == "300") { // lorsque l'élément est à peu près au milieu, on la rend fixe
        menuSocial.style.position = 'fixed';
        menuSocial.style.right = '3.6%'
        menuSocial.style.bottom = '4%'
  } 
})

//effet fade in sur les h1

//on utilise l'API Intersection Observer
const ratio = .4;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio // dès que 10% du titre est visible, on déclenche l'animation fade in
  }
  
  const fadeIn = function (entries, observer) {
      entries.forEach(function (entry) {
          if(entry.intersectionRatio > ratio) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
          } 
      }) 
  }

  const observer = new IntersectionObserver(fadeIn, options);
  document.querySelectorAll('h1').forEach(function(r) {
    observer.observe(r);
  });

