// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const filterSelect = document.getElementById("filterSelect");
  const templateImages = document.querySelectorAll(".template-gallery img");

  // Search functionality
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    templateImages.forEach(img => {
      const altText = img.alt.toLowerCase();
      const fileName = img.src.toLowerCase();
      if (altText.includes(query) || fileName.includes(query)) {
        img.style.display = "";
      } else {
        img.style.display = "none";
      }
    });
  });

  // Placeholder filter functionality (customize as needed)
  filterSelect.addEventListener("change", function () {
    const selected = this.value;
    templateImages.forEach(img => {
      // You can tag images using data attributes like:
      // <img src="..." data-category="modern" />
      if (selected === "all" || img.dataset.category === selected) {
        img.style.display = "";
      } else {
        img.style.display = "none";
      }
    });
  });

  // Optional: Add click event to preview or select a template
  templateImages.forEach(img => {
    img.addEventListener("click", function () {
      alert(`You clicked on template: ${img.alt || img.src}`);
      // Optional: implement preview or selection behavior
    });
  });
});
function selectTemplate(templateFile) {
  // Redirect to preview page with selected template
  window.location.href = `preview.html?template=${encodeURIComponent(templateFile)}`;
}