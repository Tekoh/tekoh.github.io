function NavMode__Mobile() {
    var x = document.getElementById("MyNavBar-Container");
    if (x.className === "NavBar-Container") {
      x.className += " mobile";
    } else {
      x.className = "NavBar-Container";
    }
  }