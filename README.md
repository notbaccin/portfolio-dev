# 👨‍💻 Meu Portfólio de Desenvolvedor

Um portfólio pessoal moderno, focado em performance, design limpo e consumo de APIs reais no frontend e backend.

🔗 **[Acesse o site ao vivo aqui](https://portfolio-dev-amber-nu.vercel.app/)**

## 🚀 Tecnologias Utilizadas
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Backend:** Node.js (via Vercel Serverless Functions)
* **Integrações:** Spotify Web API, GitHub API
* **Hospedagem & CI/CD:** Vercel

## ✨ Destaques do Projeto
O maior desafio e diferencial deste projeto foi a construção de um ecossistema vivo que se atualiza sozinho:

* **Integração em Tempo Real com Spotify:** Criação de rotas Serverless (`/api`) para consumir a API do Spotify via OAuth2. O site exibe a música que estou escutando *neste exato segundo* de forma dinâmica no canto da tela, além das minhas faixas e álbuns mais tocados. As credenciais (`Tokens`) foram protegidas usando variáveis de ambiente na Vercel.
* **Consumo da GitHub API:** Os cards de projetos e estatísticas de seguidores não são estáticos; eles são puxados em tempo real diretamente do meu perfil.
* **UI/UX:** Design no estilo "terminal/hacker", com animações suaves de *fade-in* via Intersection Observer, totalmente responsivo (Mobile First) e usando CSS Grid/Flexbox.

## 🛠️ Como rodar o projeto localmente
Caso queira clonar o repositório para ver o código funcionando:
1. Clone o projeto: `git clone https://github.com/notbaccin/portfolio-dev.git`
2. Crie um projeto na Vercel e adicione suas próprias `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET` e `SPOTIFY_REFRESH_TOKEN`.
3. Utilize o Vercel CLI (`vercel dev`) para rodar o ambiente local com suporte às Serverless Functions.
