function undergradBtn() {
  const UGsection = document.getElementById("undergrads-section");
  const btn = document.getElementById("undergrads-button");

  UGsection.classList.remove("hidden");
  btn.classList.add("hidden");
}

function alumniBtn() {
  const alumSection = document.getElementById("alumni-section");
  const btn = document.getElementById("alumni-button");

  alumSection.classList.remove("hidden");
  btn.classList.add("hidden");
}