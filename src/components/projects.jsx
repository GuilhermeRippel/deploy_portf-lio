import ProjectsCard from "./projectsCard";
import projeto_gestao_despesas from '../assets/projeto_gestao_despesas.png';
import projeto_cadastro_usuarios from '../assets/projeto_cadastro_usuarios.png'
import projeto_previsao_tempo from '../assets/Projeto_Previsao_Tempo.png'
import projeto_tradutor from '../assets/projeto_tradutor.png'
import projeto_hamburgueria from '../assets/projeto_hamburgueria.png'
import projeto_cadastro_typescript from '../assets/projeto_cadastro_typescript.png'
import projeto_academia_gymManager from '../assets/projeto_gym_manager.png'

function Projects() {
  return (
    <div className="mx-auto p-4 flex flex-col gap-6 sm:gap-4 overflow-y-scroll overflow-x-hidden">
    
    <ProjectsCard
    image={projeto_gestao_despesas}
    title="Projeto de Gestão de Despesas"
    description="Este projeto permite monitorar e gerenciar suas despesas mensais, com funcionalidades para adicionar, editar e excluir despesas. Ele utiliza tecnologias modernas como React e Node.js para garantir uma experiência de usuário agradável. Também inclui validação de token JWT, adicionando uma camada de segurança e dinamismo ao projeto."
    projectLink="https://gestaodedespesasrippel.netlify.app/"
    />

    <ProjectsCard
      image={projeto_hamburgueria}
      title="Projeto FrontEnd Para Hamburgueria"
      description="Este projeto consiste em um frontend destinado à uma hamburgueria fictícia, basicamente conta com tecnologias como Swiper para carrosel de imagens, e hookes e bibliotecas do React para um design interativo e responsivo."
      projectLink="https://hamburguerianoponto.netlify.app/"
    />

    <ProjectsCard
        image={projeto_cadastro_typescript}
        title="Projeto Cadastro Usuários (TypeScript)"
        description="Este projeto é basicamente uma releitura atualizada e adaptada do meu cadastro de usuários, dessa vez feito de forma totalmente independente e implementando a linguaguem TypeScript, trata-se de um CRUD para aprender a lidar com a linguagem, nesse projeto também aprendi a utilizar a biblioteca Toastify."
        projectLink="https://frontendtypescriptlogin.netlify.app"
      />

    <ProjectsCard
        image={projeto_cadastro_usuarios}
        title="Projeto de Cadastro de Usuários"
        description="Este projeto simula o cadastro de usuários e foi uma ótima experiência de aprendizado para solidificar o uso de requisições HTTP. Nele, você pode ver os usuários cadastrados em tempo real, além de validação de dados para evitar duplicações. Finalmente, você pode excluir qualquer usuário com apenas um clique."
        projectLink="https://cadastrousuariosrippel.netlify.app/"
      />

      <ProjectsCard
        image={projeto_previsao_tempo}
        title="Projeto Previsão do Tempo"
        description="Este projeto é uma pequena página que consome a API do OpenWeather para trazer dados sobre qualquer lugar do mundo referente à clima e tempo, também tráz dados dos próximos 5 dias do lugar escolhido."
        projectLink="https://previsaotemporippel.netlify.app"
      />

      <ProjectsCard
        image={projeto_tradutor}
        title="Projeto Tradutor de Texto"
        description="Este projeto é uma pequena página que consome a API do MyMemory para trazer a tradução em tempo real da linguagem que você escolher disponíveis."
        projectLink="https://tradutorguilhermerippel.netlify.app"
      />

      <ProjectsCard
        image={projeto_academia_gymManager}
        title="Gym Manager"
        description="Projeto em desenvolvimento! Este projeto será uma aplicação grande onde o objetivo é auxiliar na parte logística das academias, trazendo informações relevantes sobre alunos, funcionários, aparelhos, etc."
        projectLink="#"
      />
    </div>
  );
}

export default Projects;
