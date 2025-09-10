

document.addEventListener("DOMContentLoaded", () => {
  const projectTitles = document.querySelectorAll(".project-title");

  projectTitles.forEach(title => {
    title.addEventListener("click", () => {
      const details = title.nextElementSibling;
      details.classList.toggle("hidden");

      // Change arrow icon
      if (details.classList.contains("hidden")) {
        title.textContent = "➤ " + title.textContent.replace("➤ ", "").replace("▼ ", "");
      } else {
        title.textContent = "▼ " + title.textContent.replace("➤ ", "").replace("▼ ", "");
      }
    });
  });
});
