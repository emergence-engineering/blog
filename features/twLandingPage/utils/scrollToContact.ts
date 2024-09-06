export const scrollToContact = () => {
  const target = document.getElementById("contact-us-section");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};
