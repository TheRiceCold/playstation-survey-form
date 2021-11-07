const question = 'What device you use to play games?';
const handheldIconUrl = '../../img/handheld.svg';
const consoleIconUrl = '../../img/console.svg';
const mobileIconUrl = '../../img/mobile.svg';
const pcIconUrl = '../../img/pc.svg';

document.write(
  `
  <form id="survey-form2" onkeydown="return (event.keyCode!=9)"> 
    <h2 style="text-align: center; margin-bottom: 50px; font-weight: 400;">${question}</h2>
    <div class="group-console">
      <div class="input-container">
        <input id="handheld" class="radio-button" type="radio" name="radio" required/>
        <div class="radio-tile">
          <label for="handheld" class="radio-tile-label">
            <i style="mask-image: url(${handheldIconUrl})" id="handheld-icon"></i> Handheld
          </label>
        </div>
      </div>
      <div class="input-container">
        <input id="console" class="radio-button" type="radio" name="radio" />
        <div class="radio-tile">
          <label for="console" class="radio-tile-label" id="console-icon">
            <i style="mask-image: url(${consoleIconUrl})"></i> Console
          </label>
        </div>
      </div>
    </div>
    <div class="group-console">
      <div class="input-container">
        <input id="mobile" class="radio-button" type="radio" name="radio" />
        <div class="radio-tile">
          <label for="mobile" class="radio-tile-label">
            <i style="mask-image: url(${mobileIconUrl})"></i> Mobile
          </label>
        </div>
      </div>
      <div class="input-container">
        <input id="pc" class="radio-button" type="radio" name="radio" />
        <div class="radio-tile">
          <label for="pc" class="radio-tile-label">
            <i style="mask-image: url(${pcIconUrl})"></i> PC
          </label>
        </div>
      </div>
    </div>
    <div class="btn-box">
      <button type="button" id="back1">Back</button>
      <button type="button" id="next2">Next</button>
    </div>
  </form> 
  `
);