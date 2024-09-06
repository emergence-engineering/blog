export const scrollToServices = () => {
  const target = document.getElementById("our-services-section");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};
