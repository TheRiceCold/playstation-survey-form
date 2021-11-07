const question3 = `How often you play games?`;

function radioAndLabel(id, content, group = 'question3') {
  return `<input type="radio" name="${group}" id="${id}" />
      <label for="${id}">${content}</label>`;
}

document.write(
  `
  <form id="survey-form4" onkeydown="return (event.keyCode!=9)">
    <div class="group">
      <h2 style="text-align: center; margin-bottom: 50px; font-weight: 400;">${question}</h2>
      ${radioAndLabel('rb1', 'I play games everytime')}
      ${radioAndLabel('rb2', 'I play games at least 2 a week')}
      ${radioAndLabel('rb3', 'I play games sometimes')}
      ${radioAndLabel('rb4', 'Not very often')}
      ${radioAndLabel('rb5', 'Not Anymore')}
      ${radioAndLabel('rb6', "I don't a waste my time")}
    </div>
    <div class="btn-box">
      <button type="button" id="back3">Back</button>
      <button type="button" id="next4">Next</button>
    </div>
  </form>
  `
);