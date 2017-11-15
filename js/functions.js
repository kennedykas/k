      document.addEventListener("DOMContentLoaded", function(event) { 
        // inicialize the particles
        Particles.init({
          responsive: [
            { breakpoint: 1250, options: { maxParticles: 40, speed: .3 }},
            { breakpoint: 900,  options: { maxParticles: 30, speed: .1 }},
            { breakpoint: 600,  options: { maxParticles: 20, speed: .1 }},            
            { breakpoint: 480,  options: { maxParticles: 15, speed: .1 }} 
          ],
	  selector: '.background',
          color: '#ffffff',
          connectParticles: true,
          maxParticles: 70,
          speed: .5,
          sizeVariations: 4
        });


        // haburguer menu trigger
        document.getElementById('menuToggler').addEventListener('click', function(event){
          toggleClass(this, 'oppenned');
          event.stopPropagation();
        });
        // on body click close the menu
        document.body.addEventListener('click', function(event) {
          removeClass(document.getElementById('menuToggler'), 'oppenned');
        })

        // inicialize the image viewer trigger
        var imgs = document.getElementsByClassName('image');

        for(var i = 0; i < imgs.length; i++) {
          imgs[i].addEventListener('click', function(event) {
            toggleClass(this, 'imgViewer');
            event.stopPropagation();
          });
        }
      });

      // toggle class
      function toggleClass(element, _class) {
        element.classList.toggle(_class);
      }
      // remove class
      function removeClass(element, _class) { 
        element.classList.remove(_class);
      }