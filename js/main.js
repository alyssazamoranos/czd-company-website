(function () {
  var TAB_TITLE = "CZDevelopment Corp.";
  function lockDocumentTitle() {
    document.title = TAB_TITLE;
  }
  lockDocumentTitle();
  document.addEventListener("DOMContentLoaded", lockDocumentTitle);
  window.addEventListener("load", lockDocumentTitle);
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      lockDocumentTitle();
    }
  });

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var binshiTrigger = document.getElementById("open-binshi-partnership-modal");
  var binshiDialog = document.getElementById("binshi-partnership-dialog");
  if (binshiTrigger && binshiDialog && typeof binshiDialog.showModal === "function") {
    var closeBinshiDialog = function () {
      binshiDialog.close();
    };

    binshiTrigger.addEventListener("click", function () {
      binshiDialog.showModal();
    });

    var closeBtn = binshiDialog.querySelector(".partnership-dialog__close");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeBinshiDialog);
    }

    binshiDialog.addEventListener("click", function (event) {
      if (event.target === binshiDialog) {
        closeBinshiDialog();
      }
    });
  }
})();
