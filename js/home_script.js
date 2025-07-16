document.addEventListener('DOMContentLoaded', () => {
  const buildBtn = document.getElementById('build-resume-btn');
  if (buildBtn) {
    buildBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Stop default <a> behavior
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        window.location.href = 'dashboard.html';
      } else {
        window.location.href = 'login.html';
      }
    });
  }
});