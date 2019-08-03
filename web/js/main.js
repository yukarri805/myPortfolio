function clickTest() {
    target = document.getElementById("unko");
    if (target.className == null || target.className=="") {
      target.className = "active";
    } else {
      target.className = "";
    }
  }