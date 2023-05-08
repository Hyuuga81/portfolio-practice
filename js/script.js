const projects = document.querySelectorAll(".project");

for (const project of projects) {
  project.addEventListener("mouseover", function() {
    const glide = project.querySelector(".glide");
    if (glide.classList.contains("hide")) {
      glide.classList.remove("hide");
    }
  });

  project.addEventListener("mouseout", function() {
    const glide = project.querySelector(".glide");
    if (!glide.classList.contains("hide")) {
      glide.classList.add("hide");
    }
  });
}