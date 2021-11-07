const title = 'Personal Info';
const checkIcon = '<i class="fas fa-check-circle"></i>';
const exclamationIcon = '<i class="fas fa-exclamation-circle"></i>';

document.write(
  `
  <form id="survey-form">
    <h2 style="text-align: center; margin-bottom: 35px; font-weight: 400;">${title}</h2>
    
    <div class="form-control">
      <input type="text" placeholder="Name" id="name" />
      ${checkIcon} ${exclamationIcon}
    </div>
    
    <div class="form-control">
    <input type="email" placeholder="Email" id="email" />
      ${checkIcon} ${exclamationIcon}
    </div>
    
    <div class="form-control">
      <input type="number" placeholder="Age (12 to 75)" id="age" value="age" maxlength="2"/>
      ${checkIcon} ${exclamationIcon}
    </div>

    <div class="select-box" id="dropdown">
      <div class="options-container">
        <div class="option">
          <input type="radio" class="radio" id="male" name="category" />
          <label for="male">Male</label>
        </div>
        <div class="option">
          <input type="radio" name="category" id="female" class="radio">
          <label for="female">Female</label>
        </div>
        <div class="option">
          <input type="radio" name="category" id="other" class="radio">
          <label for="other">Other</label>
        </div>
      </div>
      <div class="selected">
        Gender (Optional)
      </div>
    </div>

    <input type="number" placeholder="Phone Number (optional)" id="phone" maxlength="11" onkeydown="return (event.keyCode!=9)"/>
    <div class="btn-box">
      <button type="submit" id="next1">Next</button>
    </div>
  </form>
  `
);