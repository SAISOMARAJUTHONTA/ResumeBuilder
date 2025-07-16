function addSkill() {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'skills[]';
  input.placeholder = 'Skill';
  document.getElementById('skillsContainer').appendChild(input);
}

function addProject() {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'projects[]';
  input.placeholder = 'Project Title';
  document.getElementById('projectsContainer').appendChild(input);
}

function addAchievement() {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'achievements[]';
  input.placeholder = 'Achievement';
  document.getElementById('achievementsContainer').appendChild(input);
}

document.getElementById('resumeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    if (key.endsWith('[]')) {
      const k = key.slice(0, -2);
      data[k] = data[k] || [];
      data[k].push(value);
    } else {
      data[key] = value;
    }
  });
  localStorage.setItem('resumeData', JSON.stringify(data));
  window.location.href = 'preview.html';
});