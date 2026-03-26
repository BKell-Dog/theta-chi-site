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

function undergradBtnMobile() {
  const UGsection = document.getElementById("undergrads-section");
  const alumSection = document.getElementById("alumni-section");

  UGsection.classList.toggle("hidden");
  alumSection.classList.add("hidden");
}

function alumniBtnMobile() {
  const alumSection = document.getElementById("alumni-section");
  const UGsection = document.getElementById("undergrads-section");

  alumSection.classList.toggle("hidden");
  UGsection.classList.add("hidden");
}