function scrollToSection(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default scrollToSection;
