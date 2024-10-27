import ProjectsCard from "./projectsCard";
import projeto_gestao_despesas from '../assets/projeto_gestao_despesas.png';
import projeto_cadastro_usuarios from '../assets/projeto_cadastro_usuarios.png'
import projeto_previsao_tempo from '../assets/Projeto_Previsao_Tempo.png'
import projeto_tradutor from '../assets/projeto_tradutor.png'
import em_breve from '../assets/local_para_foto.png'

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
        image={em_breve}
        title="Em breve!"
        description="Projeto em desenvolvimento!"
        projectLink="#"
      />
    </div>
  );
}

export default Projects;
