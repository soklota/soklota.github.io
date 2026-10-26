import '../css/Projects.css'
import ProjectCard from './ProjectCard.jsx';


const projects = [
  { id: 1, title: 'ReactionPic', description: ' A Discord bot in Python that returns a random reaction image from a curated array in response to a user-initiated slash command. Deployed and hosted the bot on Railway, implementing CI/CD with auto-deploys triggered on every push to GitHub' },
  { id: 2, title: 'Movie Streaming App', description: 'My first project working with React. Displays movies from an API from themoviedb.org. User can view a list of popular movies, curate a "favorites" list, and search for a movie.' },
  { id: 3, title: 'ASCII Dungeon Crawler', description: ' A terminal-based dungeon crawler in C++. Move around the board with “w/a/s/d” keys and defeat all enemies to win.' },
  { id: 4, title: 'My Little Library', description: 'A RESTful API for tracking a collection of books and their authors with layered architecture (controller/service/repository), DTObased request/response contracts, and centralized error handling.' },
  { id: 5, title: 'WrongLane', description: 'A 2D side-scroller game where the player must switch lanes with arrow keys to avoid obstacles on the road.' },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__heading">\projects</div>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;