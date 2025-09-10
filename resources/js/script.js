

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

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️ Light Mode";
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });
});

