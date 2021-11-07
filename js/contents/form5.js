const question4 = 'Why do you play games?'

document.write(
  `
  <form id="survey-form5" onkeydown="return (event.keyCode!=9)">
    <div class="group">
      <h2 style="text-align: center; margin-bottom: 50px; font-weight: 400;">${question4}</h2>
      ${radioAndLabel('rbOne','Because I enjoy it','question4')}
      ${radioAndLabel('rbTwo','Because of my friends','question4')}
      ${radioAndLabel('rbThree',"I play when I'm bored",'question4')}
      ${radioAndLabel('rbFour',"I play games when I'm lonely",'question4')}
      ${radioAndLabel('rbFive','Games are better than real life','question4')}
      ${radioAndLabel('rbSive','None of the above','question4')}
    </div>
    <div class="btn-box">
      <button type="button" id="back4">Back</button>
      <button type="button" id="next5">Next</button>
    </div>
  </form>
  `
);