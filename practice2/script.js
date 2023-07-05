document.getElementById("authForm").addEventListener("submit", function(event) {
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Verificare credențiale
    if (username === "utilizator" && password === "parola") {
      alert("Aut. reusita~!");
     
    } else {
      alert("Esec!!");
    }
  });
  