import react_logo from '../assets/react_logo.png';
import TypeScript_Logo from '../assets/TypeScript_logo.png';
import css_logo from '../assets/css_logo.png';
import figma_logo from '../assets/figma_logo.webp';
import node_logo from '../assets/node_logo.png';
import express_logo from '../assets/express_logo.webp';
import prisma_logo from '../assets/prisma_logo.png';
import axios_logo from '../assets/axios_logo.png';
import mysql_logo from '../assets/mysql_logo.png';
import mongodb_logo from '../assets/mongodb_logo.png';
import bootstrap_logo from '../assets/bootstrap_logo.svg';
import tailwind_logo from '../assets/tailwind_logo.png'

function Tecnologies() {
  return (
    <div className="text-white flex xl:flex-row flex-col w-full h-full overflow-y-scroll">
      <div className="xl:w-1/2 w-full py-2 px-4 mt-2 xl:border-r-2 xl:border-blue-600 flex flex-col justify-between gap-2">
        <div>
          <h2 className="text-center text-3xl font-bold mb-2">Front-End</h2>
          <p className="text-sm lg:text-base">
            Minha experiência em desenvolvimento frontend abrange uma ampla gama de tecnologias e ferramentas modernas que me permitem criar interfaces de usuário interativas e responsivas. Domino com fluência JavaScript e tenho boa experiência com TypeScript que atualmente é a linguagem de todos meu atuais projetos, também trabalho frequentemente com TailwindCSS e sua nova versão. Além disso, sou proficiente em React, uma das bibliotecas mais populares para a criação de interfaces dinâmicas e reativas, permitindo-me desenvolver componentes reutilizáveis e altamente performáticos. Também utilizo Figma para criar e interpretar protótipos de interfaces, e conheço bem o Bootstrap, embora tenha uma preferência por TailwindCSS devido à flexibilidade e simplicidade que ele proporciona. Sempre busco estar atualizado com as melhores práticas de desenvolvimento frontend para garantir uma ótima experiência ao usuário final.
          </p>
        </div>
        <div className="flex flex-col justify-end mt-auto">
          <div className="w-full flex justify-around bg-gray-900 p-3 rounded-t-md">
            <img className="w-10 xl:w-16 xl:h-15" src={react_logo} alt="Logo React" />
            <img className="w-10 xl:w-16 xl:h-15" src={TypeScript_Logo} alt="Logo JavaScript" />
            <img className="w-10 xl:w-16 xl:h-15" src={css_logo} alt="Logo CSS" />
          </div>
          <div className="w-full flex justify-around bg-gray-900 p-3 rounded-b-md">
            <img className="w-10 xl:w-16 xl:h-15" src={figma_logo} alt="Logo Figma" />
            <img className="w-12 xl:w-20 xl:h-15" src={bootstrap_logo} alt="Logo Bootstrap" />
            <img className="w-10 xl:w-16 xl:h-14" src={tailwind_logo} alt="Logo TailwindCSS" />
          </div>
        </div>
      </div>
      <div className="xl:w-1/2 w-full py-2 px-4 mt-2 xl:border-l-2 xl:border-blue-600 flex flex-col justify-between gap-2">
        <div>
          <h2 className="text-center text-3xl font-bold mb-2">Back-End</h2>
          <p className="text-sm lg:text-base">
            No lado backend, tenho um conhecimento sólido das tecnologias necessárias para desenvolver APIs e gerenciar a lógica de negócios de uma aplicação web. Tenho grande domínio em Node.js, o que me permite criar servidores eficientes e escaláveis. Juntamente com o Express, construo APIs robustas e seguras para atender às demandas de diferentes aplicações. Para interações com o banco de dados, utilizo Prisma, um ORM moderno que facilita muito o trabalho com bancos de dados relacionais como o PostgreSQL, MySQL, tecnologia que também domino. Além disso, trabalho com MongoDB para soluções baseadas em NoSQL, utilizando Axios para lidar com requisições HTTP e integrar serviços externos.
          </p>
        </div>
        <div className="flex flex-col justify-end mt-auto">
          <div className="w-full flex justify-around bg-gray-900 p-3 rounded-t-md">
            <img className="w-10 xl:w-16 xl:h-15" src={node_logo} alt="Logo Node" />
            <img className="w-10 xl:w-16 xl:h-15" src={express_logo} alt="Logo Express" />
            <img className="w-10 xl:w-16 xl:h-15" src={prisma_logo} alt="Logo Prisma" />
          </div>
          <div className="w-full flex justify-around bg-gray-900 p-3 rounded-b-md">
            <img className="w-10 xl:w-16 xl:h-14" src={axios_logo} alt="Logo Axios" />
            <img className="w-12 xl:w-16 xl:h-14" src={mysql_logo} alt="Logo MySQL" />
            <img className="w-10 xl:w-16 xl:h-14" src={mongodb_logo} alt="Logo MongoDB" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologies;
