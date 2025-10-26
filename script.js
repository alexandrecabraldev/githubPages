// Script JS básico para interatividade
(function () {
  const btn = document.getElementById('btnCumprimentar');
  const saida = document.getElementById('mensagem');

  function formatarHora(d) {
    return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  btn?.addEventListener('click', () => {
    const agora = new Date();
    const mensagens = [
      'Olá! 👋',
      'Bem-vindo ao CI/CD com GitHub Actions!',
      'Desenvolva, faça push e veja o deploy automático! 🚀',
      'Feliz hacking! 🧑‍💻',
    ];
    const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
    saida.textContent = `${msg} — ${formatarHora(agora)}`;
  });
})();
