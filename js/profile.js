const resumeList = document.getElementById('resumeList');
const resumes = JSON.parse(localStorage.getItem('savedResumes')) || [];

resumes.forEach((resume, index) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <div>
      <strong>${resume.name}</strong><br />
      <small>${resume.timestamp}</small>
    </div>
    <div>
      <button class="edit" onclick="editResume(${index})">Edit</button>
      <button class="delete" onclick="deleteResume(${index})">Delete</button>
    </div>
  `;
  resumeList.appendChild(li);
});

function editResume(index) {
  const resumes = JSON.parse(localStorage.getItem('savedResumes'));
  localStorage.setItem('resumeData', JSON.stringify(resumes[index]));
  window.location.href = 'form.html';
}

function deleteResume(index) {
  const resumes = JSON.parse(localStorage.getItem('savedResumes'));
  resumes.splice(index, 1);
  localStorage.setItem('savedResumes', JSON.stringify(resumes));
  location.reload();
}