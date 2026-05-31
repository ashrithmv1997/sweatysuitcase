function scrollToSection() {
  const section = document.getElementById('places');

  if (!section) {
    console.warn("Section #places not found");
    return;
  }

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("remaniWidgetButton");
  const widget = document.getElementById("remaniWidget");

  if (!btn || !widget) {
    console.error("Remani widget not found");
    return;
  }

  btn.addEventListener("click", () => {
    widget.classList.toggle("open");
  });

});
