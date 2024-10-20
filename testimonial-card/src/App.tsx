import "./App.css";
import TestimonialCard from "./TestimonialCard";
import profileImg from './assets/profile-thumbnail.png'

function App() {
  const testimonial = {
    description:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    name: "Sarah Dole",
    username: "sarahdole",
    image: profileImg,
  };

  return (
    <div className="relative">
      <div className="h-screen w-full flex justify-center items-center">
        <TestimonialCard {...testimonial} />
      </div>

      <footer
        aria-label="credits"
        className="absolute bottom-4 text-center text-xs inset-x-0"
        data-gfe-screenshot-exclude="true"
      >
        A challenge by{" "}
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          className="text-indigo-500 font-semibold"
          rel="noopener noreferrer"
        >
          GreatFrontEnd Projects
        </a>
        . Built by{" "}
        <a
          href="https://www.greatfrontend.com/projects/u/nerometa"
          target="_blank"
          className="text-indigo-500 font-semibold"
          rel="noopener noreferrer"
        >
          nerometa
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
