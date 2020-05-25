//DOM elements we wish to manipulate in the services page
serviceElements = {
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
  
  drawerElements = {
  
  }
  
  function addFavRecipe() {
    //event listener for button click
  
    //records divID 
  
    //insertHTML's divcontents into other fav bar in a toggle. When it's selected it's present.
  
    //store the selection across the different pages
  
  
  }
  
  
  //random confirm code generator for testing purposes
  function randomConfirmCode() {
    return Math.round(Math.random() * 100000)
  }
  
  
  
  //changes DOM to form submission html
  function privSubmit() {
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
  function privRevert() {
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
  function callSubmit() {
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
  function callRevert() {
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
  function serviceSubmit(privChef){
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
  function contactSubmit() {
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
  function contactRevert() {
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
  