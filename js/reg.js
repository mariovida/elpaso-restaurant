document.getElementById("prijava").onclick = function(event) {
  var slanjeForme = true;

  var poljeName = document.getElementById("name");
  var name = document.getElementById("name").value;
  if (name.length == 0) {
    slanjeForme = false;
    poljeName.style.border="1.5px dashed #E76F51";
  }

  // Korisničko ime mora biti uneseno
  var poljeUsername = document.getElementById("username");
  var username = document.getElementById("username").value;
  if (username.length == 0) {
    slanjeForme = false;
    poljeUsername.style.border="1.5px dashed #E76F51";
  }

  // Provjera podudaranja lozinki
  var poljePass = document.getElementById("password");
  var pass = document.getElementById("password").value;
  var poljePassRep = document.getElementById("passwordRep");
  var passRep = document.getElementById("passwordRep").value;
  if (pass.length == 0 || passRep.length == 0 || pass != passRep) {
    slanjeForme = false;
    poljePass.style.border="1px dashed red";
    poljePassRep.style.border="1px dashed red";
    document.getElementById("porukaPass").innerHTML="<br>Lozinke nisu iste!<br>";
  }

  if (slanjeForme != true) {
    event.preventDefault();
  }
};

function myFunction1() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunction2() {
  var x = document.getElementById("passwordRep");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
