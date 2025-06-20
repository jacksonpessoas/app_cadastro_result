document.getElementById('formLogin').addEventListener('submit', async function (e) {
  e.preventDefault();

  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ login, senha })
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login bem-sucedido!");
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("usuarioLogin", login); // opcional, para identificar usuário
      localStorage.setItem("tipoUsuario", data.tipo); // se quiser diferenciar admin

      // Redireciona conforme o tipo
      if (data.tipo === "admin") {
        window.location.href = "/cadastro";
      } else {
        window.location.href = "/home2";
      }

    }
    else {
      alert(data.msg || "Usuário ou senha inválidos");
    }

  } catch (err) {
    console.error("Erro no login:", err);
    alert("Erro de conexão com o servidor.");
  }
});
