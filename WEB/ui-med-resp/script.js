const medico = JSON.parse(sessionStorage.getItem("medico"));
const token = sessionStorage.getItem("token");

async function verificarToken() {
  if (!token) {
    window.location.href = "../login-med/index.html";
    return;
  }
  try {
    // Faz uma requisição protegida para testar o token
    const response = await fetch("http://localhost:3000/medicos", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    });
    if (response.status === 401 || response.status === 500) {
      // Token expirado ou inválido
      sessionStorage.removeItem("medico");
      sessionStorage.removeItem("token");
      window.location.href = "../home/index.html";
    }
  } catch (err) {
    // Se houver erro de conexão, não faz nada
  }
}

if (!medico || !token) {
  window.location.href = "../login-med/index.html";
} else {
  // Não exibir senha por segurança
  verificarToken(); // Verifica o token ao carregar
}

async function buscarMensagensDoMedico(medicoId) {
  try {
    const response = await fetch(`http://localhost:3000/funcui/medico/${medicoId}`, {
      headers: {
        ...(token ? { "Authorization": "Bearer " + token } : {})
      }
    });

    document.getElementById('loginError').textContent = '';

    if (!response.ok) {
      document.getElementById('loginError').style.color = 'black';
      document.getElementById('loginError').textContent = 'Você não possui mensagens ainda.';
    }

    const mensagens = await response.json();

    // salva globalmente
    mensagensGlobais = mensagens;

    // Salva a quantidade no sessionStorage para uso em outra página
    sessionStorage.setItem('quantidadeMensagens', mensagens.length);

    if (mensagens.length === 0) {
      alert("Nenhuma mensagem encontrada.");
      return;
    }

    let container = document.getElementById('cardsContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'cardsContainer';
      document.body.appendChild(container);
    }

    container.innerHTML = '';

    mensagens.forEach(mensagem => {
      const card = document.createElement('div');
      card.className = 'mensagem-card';

      card.innerHTML = `
        <h1>Mensagem #${mensagem.id}</h1>
        <p><strong>ID do Paciente:</strong> ${mensagem.pacienteId}</p>
        <p><strong>Mensagem:</strong> ${mensagem.mensagem}</p>

        <button type="button" class="blue-button" onclick="acaoAzul(${mensagem.id})">
          Responder
        </button>

        <button type="button" class="delete-button" onclick="deletar(${mensagem.id})">
          Excluir
        </button>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Erro ao buscar mensagens:", error);
    document.getElementById('loginError').style.color = 'red';
    document.getElementById('loginError').textContent = 'Erro ao buscar mensagens. Por favor, tente novamente mais tarde.';
  }
}

function deletar(id) {
  if (!id || isNaN(Number(id))) {
    alert("ID inválido ou ausente");
    return;
  }

  if (!confirm("Tem certeza que deseja excluir esta mensagem?")) {
    return;
  }

  fetch(`http://localhost:3000/funcui/${id}`, {
    method: "DELETE",
    headers: {
      ...(token ? { "Authorization": "Bearer " + token } : {})
     }
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Mensagem excluída com sucesso") {
        alert("Mensagem excluída com sucesso!");
        window.location.reload();
      } else {
        alert("Erro ao excluir mensagem: " + data.message);
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Erro ao conectar ao servidor.");
    });
}

async function enviarResposta(idMensagem) {
  document.getElementById("modalMsgId").textContent = idMensagem;
  const id_med = document.getElementById("id_med").textContent;
  const nome_pac = document.getElementById("nome_pac").textContent;
  const id_pac = document.getElementById("id_pac").textContent;
  const resposta = document.getElementById("campoResposta").value;

  if (!resposta.trim()) {
    alert("Digite uma resposta antes de enviar.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/mensmed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": "Bearer " + token } : {})
      },
      body: JSON.stringify({
        pacienteId: id_pac,
        medicoId: id_med,
        nome_pac: nome_pac,
        mensagem: resposta
      })
    });

    const data = await response.json();

    if (!response.ok) {
      alert("Erro ao enviar resposta: " + data.message);
      return;
    }

    alert("Resposta enviada com sucesso!");
    fecharModal();
  } catch (error) {
    console.error("Erro ao enviar resposta:", error);
    alert("Erro no servidor.");
  }
}

function acaoAzul(idMensagem) {
  const mensagem = mensagensGlobais.find(m => m.id === idMensagem);

  document.getElementById("modalMsgId").textContent = idMensagem;
  document.getElementById("id_med").textContent = mensagem.medicoId;
  document.getElementById("id_pac").textContent = mensagem.pacienteId;
  document.getElementById("nome_pac").textContent = mensagem.nome_pac;

  // Abre modal
  document.getElementById("modalResposta").style.display = "block";
}

function fecharModal() {
  document.getElementById("modalResposta").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
  buscarMensagensDoMedico(medico.id);
});

let refreshInterval = null;


function iniciarAutoRefresh() {
  if (!refreshInterval) {
    refreshInterval = setInterval(() => {
      location.reload();
    }, 20000); 
  }
}

function pararAutoRefresh() {
  if (refreshInterval) {
    clearInterval(refreshInterval);
    refreshInterval = null;
  }
}

document.addEventListener("DOMContentLoaded", iniciarAutoRefresh);