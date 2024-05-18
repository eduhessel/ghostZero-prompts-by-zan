document.addEventListener("DOMContentLoaded", function () {
  function showLoader() {
    document.querySelector(".loader-wrapper").style.display = "flex";
  }

  function hideLoader() {
    document.querySelector(".loader-wrapper").style.display = "none";
  }

  setTimeout(function () {
    hideLoader();
  }, 1000);
});
