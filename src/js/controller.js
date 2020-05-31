console.log(`hello world`);

//-------------------------------------------

//Popup when subscribe submit is pressed

$("#thankSubmit").submit(function(e){
  alert(`Test`)
  e.preventDefault();
});

//flips protfolio section content when in view
isScrolledIntoView = function(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
  $('.flip-container').each(function () {
      if (isScrolledIntoView(this) === true) {
          $(this).addClass('flip')
      }
  });

});


//fades in return-top button at carousel position
$('#return-top').hide();

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 910) {
        $('#return-top').fadeIn();
    } else {
        $('#return-top').fadeOut();
    }
});


//DEBUG - Show scroll position
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  console.log(scroll);
});



//DOM elements we wish to manipulate in the services page
var serviceElements = {
  privForm: document.getElementById('privForm'),
  privEmail: document.getElementById('privEmail'),
  privTel: document.getElementById('privTel'),

  callForm: document.getElementById('callForm'),
  callEmail: document.getElementById('callEmail'),
  callTel: document.getElementById('callTel'),

  contactForm: document.getElementById('contactForm'),
  contactEmail: document.getElementById('contactEmail'),
  contactTel: document.getElementById('contactTel'),
};


//random confirm code generator for testing purposes
function randomConfirmCode() {
  return Math.round(Math.random() * 100000)
}



//changes DOM to form submission html
privSubmit = function () {
  serviceElements.privForm.addEventListener('submit', (e) =>{
    const privForm = serviceElements.privForm
    privForm.innerHTML = `
    <h3>
                    Thank you for submitting your request!
                </h3>
                <h3>
                    Your confirmation number is: ${randomConfirmCode()}.
                </h3>
                <form action="">
                 <button type="submit" id="privRevert()" onclick="privRevert();">
                    Fill out another request.
                </button>   
                </form>   

    `;
    e.preventDefault()
  })
  console.log(`you pressed the submit button`)
}


//reverts back to previous private chef page. TBA on making this DIY.
privRevert = function () {
  serviceElements.privForm.addEventListener('submit', (e) =>{
    const privForm = serviceElements.privForm
    privForm.innerHTML = `
    <h3>In need of a private chef for a simple meal or larger event? Let us know what you need and get a free quote!</h3>
                <p>Estimates are not exact amounts and subject to change based on needs/alterations</p>
                <form action="" class="privChef">
                    <select>
                        <option value="breakfast">breakfast</option>
                        <option value="brunch">brunch</option>
                        <option value="lunch">lunch</option>
                        <option value="dinner">dinner</option>
                        <option value="event">event</option>
                    </select>
                    <label for=""> What type of meal? 
                    </label>
                    <div class="tooltip"><i class="far fa-question-circle"></i>
                        <span class="tooltiptext">*Events are: corporate, catering, gatherings with greater than 4 adults | 6 children / 8 adults.</span>
                      </div>
                    
                    <br>
                    <p>Person(s) we will serve?</p>
                    <input type="number" min="0" max="99" value="1" >
                    <label for="">Adults </label>
                    <input type="number" min="0" max="99" value="0">
                    <label for="">Children</label>
                    <p>Please specify the type of entrees you need</p>
                    <input type="checkbox">
                    <label for="">Appetizer</label>
                    <input type="checkbox">
                    <label for="">Salad / Soup</label>
                    <input type="checkbox">
                    <label for="">Specialty Sides</label>
                    <input type="checkbox">
                    <label for="">Main Entre</label>
                    <input type="checkbox">
                    <label for="">Desert</label>

                    <p>What date and time do you require? Times must be at least a week in advance!</p>
                    <input type="date" value="">
                    <input type="time">

                    <p>Please let us know more about the cooking services our chef can provide</p>
                    <textarea name="" id="" cols="75" rows="10" placeholder="Please enter the specifics here..."></textarea>
                    <br>
                    <p>Please enter your email and/or phone number.</p>
                    <input type="email" placeholder="janedoe@email.com" id="privEmail" required>
                    <input type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="privTel">
                    <br>
                    <p>Please be sure to have at least 1 adult/child selected, an entre and your email before sumbitting!</p>
                    <button type="submit" onclick="privSubmit()" id="privChefSubmit">
                        Submit
                    </button>
                </form>   

    `;
    e.preventDefault()
  })
  console.log(`you pressed the revert button`)
}

//changes DOM to form submission html
callSubmit = function () {
  serviceElements.callForm.addEventListener('submit', (e) =>{
    const callForm = serviceElements.callForm
    callForm.innerHTML = `
    <h3>
                    Thank you for submitting your request!
                </h3>
                <h3>
                    Your confirmation number is: ${randomConfirmCode()}.
                </h3>
                <form action="">
                 <button type="submit" id="privRevert()" onclick="callRevert();">
                    Fill out another request.
                </button>   
                </form>   

    `;
    e.preventDefault()
  })
  console.log(`you pressed the submit button`)
}


//reverts back to previous private chef page. TBA on making this DIY.
callRevert = function () {
  serviceElements.callForm.addEventListener('submit', (e) =>{
    const callForm = serviceElements.callForm
    callForm.innerHTML = `
    <h3>In need of direct help and don't have an account? Schedule a private chat with our chef!</h3>
                <p>Please let us know how our chef can fulfill your needs.</p>
                <form action="" class="privCall">
                    <input type="checkbox">
                    <label for="">Meal with what's in the fridge</label>
                    <br>
                    <input type="checkbox">
                    <label for="">"I'm out of ideas!"</label>
                    <br>
                    <input type="checkbox">
                    <label for="">Video Step-By-Step Guidence</label>
                    <br>
                    <input type="checkbox">
                    <label for="">"Why isn't it turning out like the recipe?"</label>
                    <br>
                    <input type="checkbox">
                    <label for="">"I want to impress them!"</label>
                    <p>Please let us know more about your needs.</p>
                    <textarea name="" id="" cols="75" rows="10" placeholder="Please enter the specifics here..."></textarea>
                    <p>Please specify the type of entrees the chef will focus on.</p>
                    <input type="checkbox">
                    <label for="">Appetizer</label>
                    <input type="checkbox">
                    <label for="">Salad / Soup</label>
                    <input type="checkbox">
                    <label for="">Specialty Sides</label>
                    <input type="checkbox">
                    <label for="">Main Entre</label>
                    <input type="checkbox">
                    <label for="">Desert</label>

                    <p>What times are you available to be contacted?</p>
                    <input type="time" size="8"> <label for=""> to </label>
                    <input type="time" size="8">
                    <br>
                    <input type="text" placeholder="Monday" size="8"> to <input type="text" placeholder="Friday" size="8">
                    <p>Please enter your email and/or phone number.</p>
                    <input type="email" placeholder="janedoe@email.com" id="privChefEmail" required>
                    <input type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                    <br>
                    <br>
                    <button type="submit" value="Submit" onclick="callSubmit()" id="privChefSubmit">Submit
                    </button>
                </form>   

    `;
    e.preventDefault()
  })
  console.log(`you pressed the revert button`)
}





//Debug & test of buttons. No real purpose yet.
serviceSubmit = function (privChef){
  // alert(`Thank you for submitting! Your code is 7472747. You'll get an email to confirm`)

  const email = document.getElementById("privChefEmail")

  if (email == "") {
    alert(`Oops! Don't forget to enter your email!`)
  } else{
    document.getElementById("privChefSubmit")

    console.log(`private chef submit button pressed`)
  }
  
}

//changes DOM to form submission html
contactSubmit = function() {
  serviceElements.contactForm.addEventListener('submit', (e) =>{
    const contactForm = serviceElements.contactForm
    contactForm.innerHTML = `
    <h3>
                    Thank you for submitting your inquiry!
                </h3>
                <h3>
                    Your confirmation number is: ${randomConfirmCode()}.
                </h3>
                <form action="">
                 <button type="submit" id="privRevert()" onclick="contactRevert();">
                    Fill out another inquiry.
                </button>   
                </form>   

    `;
    e.preventDefault()
  })
  console.log(`you pressed the submit button`)
}


//reverts back to previous private chef page. TBA on making this DIY.
contactRevert = function() {
  serviceElements.contactForm.addEventListener('submit', (e) =>{
    const contactForm = serviceElements.contactForm
    contactForm.innerHTML = `
    <h3>If there is anything else you'd like to inquire or wished to contact us about, please enter away!</h3>
                <form action="" class="privContact">
                    <p>Please enter contact info</p>
                    <input type="text" placeholder="First Name">
                    <input type="text" placeholder="Last Name">
                    <p></p>
                    <input type="email" placeholder="janedoe@email.com" id="privChefEmail" required>
                    <input type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                    <p></p>
                    <textarea name="" id="" cols="75" rows="10" placeholder="Please enter the specifics here..."></textarea>
                    <br>
                    <p><p>
                    <button type="submit" value="Submit" onclick="contactSubmit()" id="privChefSubmit">Submit
                    </button>
                </form>   

    `;
    e.preventDefault()
  })
  console.log(`you pressed the revert button`)
}




openPage = function(pageName,elmnt,color) {
  var i, serviceContent, tabBar;
  serviceContent = document.getElementsByClassName("serviceContent");
  for (i = 0; i < serviceContent.length; i++) {
    serviceContent[i].style.display = "none";
  }
  tabBar = document.getElementsByClassName("tabBar");
  for (i = 0; i < tabBar.length; i++) {
    tabBar[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it

 checkService = function(){
  if (document.getElementById("defaultService").click() === true) {
    document.getElementById("defaultService").click();
  } else
  return false
}


openTab = function(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click()

//Slider controller
const slider = document.querySelector('#slider');

if(slider) {
	let sliderSlides = slider.querySelectorAll('.slider-item');
	let sliderSwitcher = slider.querySelector('.switch');
    const sliderCount = sliderSlides.length;
    let imageSlideShow;
	let i = 0;
	while(sliderSwitcher.querySelectorAll('i').length != sliderCount) {
		let i = document.createElement('i');
        sliderSwitcher.appendChild(i);
	}
	sliderSwitcher = sliderSwitcher.querySelectorAll('i');
    const forwardSliderImage = i => {
        if(i==0) {
            sliderSlides[sliderCount - 1].classList.remove('show');
			sliderSlides[sliderCount - 1].classList.add('close');
			sliderSwitcher[sliderCount - 1].classList.remove('active');
        } else {
            sliderSlides[i-1].classList.remove('show');
			sliderSlides[i-1].classList.add('close');
			sliderSwitcher[i-1].classList.remove('active');
        }
        if(i==(sliderCount - 1)) {
            sliderSlides[0].classList.remove('close');
        } else {
            sliderSlides[i+1].classList.remove('close');
		}
		sliderSwitcher[i].classList.add('active');
        sliderSlides[i].classList.add('show');
    }

    const backwardSliderImage = i => {

        if(i==0) {
            sliderSlides[sliderCount - 1].classList.remove('show');
			sliderSlides[sliderCount - 1].classList.add('close');
			sliderSwitcher[sliderCount - 1].classList.remove('active');
        } else {
            sliderSlides[i-1].classList.remove('show');
			sliderSlides[i-1].classList.add('close');
			sliderSwitcher[i-1].classList.remove('active');
        }
        if(i==(sliderCount - 1)) {
            sliderSlides[0].classList.remove('close');
        } else {
            sliderSlides[i+1].classList.remove('close');
		}

        if(i < sliderCount-1) {
            sliderSlides[i + 1].classList.remove('show');
			sliderSwitcher[i + 1].classList.remove('active');
        } else {
            sliderSlides[0].classList.remove('show');
			sliderSwitcher[0].classList.remove('active');
        }
		sliderSwitcher[i].classList.add('active');
        sliderSlides[i].classList.add('show');
    }
    
    startSlideShow = function() {
        imageSlideShow = setInterval(()=> {
            nextSliderImage();
        }, 5000);
    }

    nextSliderImage = function() {
        i++;
        if(i == sliderCount) {
            i = 0;
        }
        forwardSliderImage(i);
        clearInterval(imageSlideShow);
        startSlideShow();
    }

    previousSliderImage = function() {
        i--;
        if(i == -1) {
            i = sliderCount - 1;
        }
        backwardSliderImage(i);
        clearInterval(imageSlideShow);
        startSlideShow();
    }    

    // initializing slider buttons
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');

    // adding event listener to next and prev buttons
    nextBtn.addEventListener('click', nextSliderImage);
    prevBtn.addEventListener('click', previousSliderImage)
    
    // showing 1st slide
    forwardSliderImage(i);
    startSlideShow();
}




var drawer = function () {

    /**
    * Element.closest() polyfill
    * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
    */
    if (!Element.prototype.closest) {
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }
      Element.prototype.closest = function (s) {
        var el = this;
        var ancestor = this;
        if (!document.documentElement.contains(el)) return null;
        do {
          if (ancestor.matches(s)) return ancestor;
          ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
      };
    }


    //
    // Settings
    //
    var settings = {
      speedOpen: 50,
      speedClose: 350,
      activeClass: 'is-active',
      visibleClass: 'is-visible',
      selectorTarget: '[data-drawer-target]',
      selectorTrigger: '[data-drawer-trigger]',
      selectorClose: '[data-drawer-close]',

    };


    //
    // Methods
    //

    // Toggle accessibility
    var toggleccessibility = function (event) {
      if (event.getAttribute('aria-expanded') === 'true') {
        event.setAttribute('aria-expanded', false);
      } else {
        event.setAttribute('aria-expanded', true);
      }
    };

    // Open Drawer
    var openDrawer = function (trigger) {

      // Find target
      var target = document.getElementById(trigger.getAttribute('aria-controls'));

      // Make it active
      target.classList.add(settings.activeClass);

      // Make body overflow hidden so it's not scrollable
      document.documentElement.style.overflow = 'hidden';

      // Toggle accessibility
      toggleccessibility(trigger);

      // Make it visible
      setTimeout(function () {
        target.classList.add(settings.visibleClass);
      }, settings.speedOpen);

    };

    // Close Drawer
    var closeDrawer = function (event) {

      // Find target
      var closestParent = event.closest(settings.selectorTarget),
        childrenTrigger = document.querySelector('[aria-controls="' + closestParent.id + '"');

      // Make it not visible
      closestParent.classList.remove(settings.visibleClass);

      // Remove body overflow hidden
      document.documentElement.style.overflow = '';

      // Toggle accessibility
      toggleccessibility(childrenTrigger);

      // Make it not active
      setTimeout(function () {
        closestParent.classList.remove(settings.activeClass);
      }, settings.speedClose);

    };

    // Click Handler
    var clickHandler = function (event) {

      // Find elements
      var toggle = event.target,
        open = toggle.closest(settings.selectorTrigger),
        close = toggle.closest(settings.selectorClose);

      // Open drawer when the open button is clicked
      if (open) {
        openDrawer(open);
      }

      // Close drawer when the close button (or overlay area) is clicked
      if (close) {
        closeDrawer(close);
      }

      // Prevent default link behavior
      if (open || close) {
        event.preventDefault();
      }

    };

    // Keydown Handler, handle Escape button
    var keydownHandler = function (event) {

      if (event.key === 'Escape' || event.keyCode === 27) {

        // Find all possible drawers
        var drawers = document.querySelectorAll(settings.selectorTarget),
          i;

        // Find active drawers and close them when escape is clicked
        for (i = 0; i < drawers.length; ++i) {
          if (drawers[i].classList.contains(settings.activeClass)) {
            closeDrawer(drawers[i]);
          }
        }

      }

    };


    //
    // Inits & Event Listeners
    //
    document.addEventListener('click', clickHandler, false);
    document.addEventListener('keydown', keydownHandler, false);


};

drawer();

console.log(`goodbye world`);