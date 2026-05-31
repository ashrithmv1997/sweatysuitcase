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
