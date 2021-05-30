// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



var modal = document.getElementById('simpleModal');
var modalBtnArray = document.getElementsByClassName('modalBtn');
var closeBtn = document.getElementById('closeBtn');


var projects = readJSONFile("projects.json");

modalBtnArray[0].addEventListener('click', function(){openModal(projects[0])});
modalBtnArray[1].addEventListener('click', function(){openModal(projects[1])});
modalBtnArray[2].addEventListener('click', function(){openModal(projects[2])});
modalBtnArray[3].addEventListener('click', function(){openModal(projects[3])});

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function setModalFields(project){

}

function readJSONFile(file)
{
    fetch(file)
        .then(response => response.json())
        .then(data => {
            projects = data;
        })  
}

function openModal(project){
    console.log(project);
    document.getElementById('modalHeader').innerHTML = project.title;
    document.getElementById('modalP1').innerHTML = project.header;
    document.getElementById('modalP1').innerHTML += project.image;
    document.getElementById('modalP2').innerHTML = project.desc;
    document.getElementById("modalFooter").innerHTML = project.link;
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

function getQuoteFetch(){
    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]='+(Math.floor(Math.random() * 30) + 1)+ '&callback=')
    .then(response => response.json())
    .then(data => { 
        quoteText.innerHTML =  data[0].content;
        quoteAuth.innerHTML = "– " + data[0].title;
    })
    .catch(err => console.log(err));
}
getQuoteFetch();