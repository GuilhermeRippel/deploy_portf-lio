import NavigationButton from './navigationButton';
import PropTypes from 'prop-types';

function NavBar({ setCurrentContent }) {
  return (
    <div className='w-full h-16 bg-gray-950 rounded-t-lg flex items-center justify-around pt-3'>
      <NavigationButton onClick={() => setCurrentContent('About Me')}>
        Sobre Mim
      </NavigationButton>
      <NavigationButton onClick={() => setCurrentContent('Tecnologies')}>
        Tecnologias
      </NavigationButton>
      <NavigationButton onClick={() => setCurrentContent('Projects')}>
        Projetos
      </NavigationButton>
    </div>
  );
}

NavBar.propTypes = {
  setCurrentContent: PropTypes.func.isRequired,
};

export default NavBar;
