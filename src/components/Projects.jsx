import '../css/Projects.css'
import ProjectCard from './ProjectCard.jsx';


const projects = [
  { id: 1, title: 'Discord Bot', description: 'A simple discord bot that will return a reaction image based on the slash command made by the user.' },
  { id: 2, title: 'Movie Streaming App', description: 'My first project working with React. Displays movies from an API from themoviedb.org. User can view a list of popular movies, curate a "favorites" list, and search for a movie.' },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__heading">~ My Projects ❁❁</div>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;