import PropTypes from 'prop-types';

function ProjectsCard({ image, title, description, projectLink }) {
  return (
    <div className="w-full bg-gray-900 flex flex-col p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 gap-4">

      <div className="w-full flex flex-col md:flex-row gap-3 h-auto overflow-hidden rounded-md">
        <img
          className="max-w-full md:w-1/3 h-48 object-cover rounded-md"
          src={image}
          alt={title}
        />
        <div className="flex flex-col">
          <h3 className="text-white font-bold xl:text-2xl lg:text-lg mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="w-full flex justify-start">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-block bg-blue-600 text-white text-center font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          View Project 🔗
        </a>
      </div>

    </div>
  );
}

ProjectsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectsCard;
