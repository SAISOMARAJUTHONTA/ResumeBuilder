const data = JSON.parse(localStorage.getItem('resumeData'));

if (data) {
  document.getElementById('name').textContent = data.name || '';
  document.getElementById('email').textContent = data.email || '';
  document.getElementById('phone').textContent = data.phone || '';
  document.getElementById('education').textContent = data.education || '';
  document.getElementById('degree').textContent = data.degree || '';
  document.getElementById('year').textContent = data.year || '';

  const listItems = (arr) => (arr || []).map(item => `<li>${item}</li>`).join('');

  document.getElementById('skillsList').innerHTML = listItems(data.skills);
  document.getElementById('projectsList').innerHTML = listItems(data.projects);
  document.getElementById('achievementsList').innerHTML = listItems(data.achievements);
}

function downloadPDF() {
  const resume = document.getElementById('resumePreview');
  html2pdf().from(resume).save(`${data.name}_Resume.pdf`);
}