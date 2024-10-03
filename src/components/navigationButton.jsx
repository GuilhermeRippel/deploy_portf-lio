import PropTypes from 'prop-types';

function NavigationButton({onClick, children}){
    return(
        <button onClick={onClick} className='text-white font-bold p-2 sm:p-0 sm:text-base md:text-lg border-blue-700 border-2 md:w-36 sm:w-28 h-11 rounded-full transition duration-500 ease-in-out hover:bg-blue-500 hover:border-blue-950 hover:text-gray-950'>{children}</button>
    )
}

NavigationButton.propTypes = {
    children: PropTypes.node.isRequired
}

NavigationButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default NavigationButton