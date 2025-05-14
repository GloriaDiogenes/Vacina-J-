document.getElementById("cpf").addEventListener("input", function (e) {
    let cpf = e.target.value.replace(/\D/g, ""); 
    cpf = cpf.replace(/^(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
    e.target.value = cpf;
  });

  document.querySelector(".eye-svg").addEventListener("click", function() {
    const senhaInput = document.getElementById("senha");
    const type = senhaInput.type === "password" ? "text" : "password";
    senhaInput.type = type;
});



