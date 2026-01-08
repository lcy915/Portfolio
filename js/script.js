window.addEventListener("scroll", function() {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// Skill level animation
document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill-level');
  skills.forEach(skill => {
    const width = skill.style.width;
    skill.style.width = '0';
    setTimeout(() => {
      skill.style.width = width;
    }, 500);
  });
});


