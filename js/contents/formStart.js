const description = `
97% of gamers say playing games benefits their mental health, 
according to survey. Video games are being used as a benefit to personal wellbeing, 
as well as being useful to combat loneliness during the COVID-19 lockdown, 
new research shows.`;

document.write(
  `
  <form id="start-form">
    <h2 style="text-align: center; margin-bottom: 60px; font-weight: 400;">Why do we ask?</h2>
    <p id="description" style="text-align: center;">${description}</p>
    <div class="btn-box" style="margin-top: 65px;">
      <button type="button" id="start">Begin</button>
    </div>
  </form>
  `
);