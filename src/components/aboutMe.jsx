import imagem_estagio from '../assets/imagem_estagio.jpeg'
import imagem_volei from '../assets/imagem_volei.jpeg'

function AboutMe() {
    return (
      <div className="w-full h-full text-white flex flex-col items-center sm:mt-4 lg:mt-10 gap-7 sm:px-4 xl:px-9 overflow-y-scroll">
        <h1 className="font-bold text-3xl  bg-gray-900 p-2 rounded-md">Sobre Mim</h1>
        <div className="border border-blue-600 w-full py-2 px-5 bg-gray-900">
          <p className="text-center text-gray-300 sm:text-sm lg:text-sm 2xl:text-base">Tenho 21 anos e estou me formando em Ciência da Computação no 6º semestre. Atualmente, sou estagiário na equipe de sistemas da Inbetta, onde aplico e expando meus conhecimentos e habilidades. Além dos estudos e do trabalho, sou apaixonado por esportes e jogo vôlei em um time que participa de campeonatos locais. No meu tempo livre, também sou fã de jogos eletrônicos e tenho a meta de me tornar um desenvolvedor fullstack. Estou sempre em busca de aprender e crescer na área de tecnologia, explorando novas ferramentas e técnicas para aprimorar minhas habilidades.</p>
        </div>
        <div className='w-full flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-around bg-gray-900 p-3 rounded-md'>
            <img className='xl:w-72 md:w-56 border-2 border-blue-600' src={imagem_volei} alt="Imagem Vôlei" />
            <img className='xl:w-60 md:w-44 object-cover border-2 border-blue-600' src={imagem_estagio} alt="Imagem Estágio" />
        </div>
      </div>
    );
  }
  
export default AboutMe;