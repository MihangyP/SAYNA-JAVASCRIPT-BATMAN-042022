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
    threshold: ratio // dès que 40% du titre est visible, on déclenche l'animation fade in
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


  //effet fondu sur tous les contenus du site
  
  const fonduOpacity = function (entries, observer2) {
      entries.forEach(function (entry) {
          if(entry.intersectionRatio > ratio) {
                entry.target.classList.add('fondu-visible');
                observer2.unobserve(entry.target);
          } 
      }) 
  }

  const observer2 = new IntersectionObserver(fonduOpacity, options);
  document.querySelectorAll('.fondu').forEach(function(r) {
    observer2.observe(r);
  });

  //effet zoom à l'aparition des images

  const zoomImage = function (entries, observer3) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
              entry.target.classList.add('zoom-visible');
              observer3.unobserve(entry.target);
        } 
    }) 
}

const observer3 = new IntersectionObserver(zoomImage, options);
document.querySelectorAll('.zoom').forEach(function(r) {
  observer3.observe(r);
});

//effet zoom sur les images au survole
// premiers cards
const imgActeurs = document.querySelectorAll('.one .zoom');
const imgActeur1 = imgActeurs[0];
const imgActeur2 = imgActeurs[1];
const imgActeur3 = imgActeurs[2];

const acteurs = document.querySelectorAll('.acteur');
const acteur1 = acteurs[0];
const acteur2 = acteurs[1];
const acteur3 = acteurs[2];

imgActeur1.addEventListener('mouseover', function (e) {
    acteur1.classList.add('acteur-visible');
})
imgActeur1.addEventListener('mouseout', function (e) {
    acteur1.classList.remove('acteur-visible');
})

imgActeur2.addEventListener('mouseover', function () {
    acteur2.classList.add('acteur-visible');
})
imgActeur2.addEventListener('mouseout', function () {
    acteur2.classList.remove('acteur-visible');
})

imgActeur3.addEventListener('mouseover', function () {
    acteur3.classList.add('acteur-visible');
})
imgActeur3.addEventListener('mouseout', function () {
    acteur3.classList.remove('acteur-visible');
})

//deuxième cards

const acts = document.querySelectorAll('.two .zoom');
const act1 = acts[0];
const act2 = acts[1];
const act3 = acts[2];

const perss = document.querySelectorAll('.two .acteur');
const pers1 = perss[0];
const pers2 = perss[1];
const pers3 = perss[2];

act1.addEventListener('mouseover', function (e) {
    pers1.classList.add('acteur-visible');
})
act1.addEventListener('mouseout', function (e) {
    pers1.classList.remove('acteur-visible');
})

act2.addEventListener('mouseover', function (e) {
    pers2.classList.add('acteur-visible');
})
act2.addEventListener('mouseout', function (e) {
    pers2.classList.remove('acteur-visible');
})

act3.addEventListener('mouseover', function (e) {
    pers3.classList.add('acteur-visible');
})
act3.addEventListener('mouseout', function (e) {
    pers3.classList.remove('acteur-visible');
})

//slider dans la partie nemesis
const bA = document.getElementsByTagName('iframe');

const imgSlide = document.querySelectorAll('.multimedia .none');
const nbSlide = imgSlide.length;
const precedent = document.querySelector('.précédent');
const suivant = document.querySelector('.suivant');
let count = 0;
let srcs = ["https://www.youtube.com/embed/jXrFsn9pcZY",
            "https://www.youtube.com/embed/UMgb3hQCb08", 
            "https://www.youtube.com/embed/OiqPQ7L_C00"
           ]

function slideSuivant () {
    imgSlide[count].classList.remove('none-active');

    if(count < nbSlide - 1) {
        count++;
    } else {
        count = 0
    }

    imgSlide[count].classList.add('none-active');
    bA[0].src = srcs[count];
}

suivant.addEventListener('click', slideSuivant);

function slidePrécédent () {
    imgSlide[count].classList.remove('none-active');

    if(count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    imgSlide[count].classList.add('none-active');
    bA[0].src = srcs[count];
}

precedent.addEventListener('click', slidePrécédent);

//affichage du pop up lorsque le formulaire a été envoyé

const confirm = document.querySelector('.confirm');
const popUp = document.querySelector('.pop-up');
const inputs = document.querySelectorAll('input.fondu, select.fondu');
const email = inputs[0];
const checkbox = inputs[1];
const select = inputs[2];
const news = inputs[3];
const message = inputs[4]; 

let erreur;
confirm.addEventListener('click', function (e) {
    e.preventDefault();

    if(!email.value) {
        erreur = 'Veuillez entrez votre mail';
    }
    if(!news.value) {
        erreur = 'Veuillez entrez votre votre choix';
    }
    if(!checkbox.checked) {
        erreur = 'Veillez cochez le checkbox';
    }
    if(!message.value) {
        erreur = 'Veuillez entrez un message';
    }
    if(erreur) {
        document.getElementById('erreur').innerHTML = erreur;
    } else {
        //on affiche le popUp

        popUp.classList.add('popUp-reveal');

    }
    
})

//changement automatique du citation


let citations = document.querySelectorAll('.reveal');
   let numberSlide = citations.length;
   let counter = 0;


function autoCit () {
   
   citations[counter].classList.remove('reveal-visible');
   if(counter < numberSlide - 1) {
       counter++;
   } else {
       counter = 0;
   }

   citations[counter].classList.add('reveal-visible');
}

const intervalID = setInterval(autoCit, 3000);