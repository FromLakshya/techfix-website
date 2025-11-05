function showContact() {
  const contactSection = document.getElementById("contact");

  if (contactSection.style.display === "block") {
    contactSection.style.display = "none";
  } else {
    contactSection.style.display = "block";
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}
