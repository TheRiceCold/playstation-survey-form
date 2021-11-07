const question2 = 'What genre of games do you play?';

function checkboxAndLabel(id, content) {
  return `<input type="checkbox" name="cb" id="${id}" />
      <label for="${id}">${content}</label>`
}

document.write(
  `
  <form id="survey-form3" onkeydown="return (event.keyCode!=9)">
    <div class="group">
      <h2 style="text-align: center; margin-bottom: 35px; font-weight: 400;">${question2}</h2>
      ${checkboxAndLabel('cb1', 'Role Playing (RPG and more)')}
      ${checkboxAndLabel('cb2', 'Shooters (FPS and TPS)')}
      ${checkboxAndLabel('cb3', 'Simulation and Sports')}
      ${checkboxAndLabel('cb4', 'Action-Adventure')}
      ${checkboxAndLabel('cb5', 'Survival and Horror')}
      ${checkboxAndLabel('cb6', 'Platformer')}
      ${checkboxAndLabel('cb7', 'Other Game Genres')}
    </div>
    <div class="btn-box">
      <button type="button" id="back2">Back</button>
      <button type="button" id="next3">Next</button>
    </div>
  </form>
  `
);
