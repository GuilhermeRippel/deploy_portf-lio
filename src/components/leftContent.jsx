import FotoLinkedIn from '../assets/Foto_Perfil_LinkedIn.png'
import LogoInstagram from '../assets/logoInstagram.png'
import LogoLinkedIn from '../assets/logoLinkedIn.png'
import '../App.css'

function LeftContent() {
    return (
        <div className='w-full text-white flex flex-row items-center sm:gap-6 justify-around md:justify-center lg:flex-col lg:justify-center lg:gap-4 gap-2 p-3 sm:p-0 overflow-hidden'>
            <div className='lg:h-1/2 flex items-center justify-center lg:pt-10 lg:flex-grow'>
                <div className="border-gradient w-24 h-24 sm:w-28 sm:h-28 lg:w-48 lg:h-48 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 p-1 rounded-full">
                    <img className="w-full h-full rounded-full object-cover" src={FotoLinkedIn} alt="Foto de perfil Guilherme Rippel" />
                </div>
            </div>
            <div className='h-1/2 pb-14 flex flex-col sm:pb-10 sm:flex-row gap-2 sm:gap-6 lg:flex-col lg:items-center lg:justify-center lg:flex-grow mt-5'>
                <div className='h-full flex flex-col gap-2 text-center justify-center lg:h-1/4'>
                    <div className='h-full text-center flex flex-col justify-center sm:justify-start'>
                        <h1 className='font-bold sm:text-2xl lg:text-xl xl:text-2xl'>Guilherme Rippel Moraes</h1>
                        <h2 className='font-bold text-base sm:text-xl lg:text-base xl:text-xl text-gray-400'>Desenvolvedor Front-End</h2>
                    </div>
                </div>
                <div className='mt-3 sm:mt-0 lg:mt-4 flex flex-col'>
                    <div className='h-full flex flex-col lg:flex-row gap-2'>
                        <div className='flex gap-1'>
                            <img className='w-6 h-6 xl:w-8 xl:h-8' src={LogoInstagram} alt="Logo Instagram" />
                            <a href="https://www.instagram.com/guilherme_rippel/" target='blank' className='hover:underline text-base md:text-lg hover:text-gray-300'>Instagram</a>
                        </div>
                        <div className='flex gap-1'>
                            <img className='w-6 h-6 xl:w-8 xl:h-8' src={LogoLinkedIn} alt="Logo LinkedIn" />
                            <a href="https://www.linkedin.com/in/guilherme-rippel-moraes-1a3571287" target='blank' className='hover:underline text-base md:text-lg hover:text-gray-300'>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default LeftContent


