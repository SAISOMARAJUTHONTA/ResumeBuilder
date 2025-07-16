function selectTemplate(templateFile) {
  // Redirect to preview page with selected template
  window.location.href = `preview.html?template=${encodeURIComponent(templateFile)}`;
}