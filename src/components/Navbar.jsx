import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="m-8 flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/alaa-abderrahim-aa6b58263/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/lolyx0?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="tel:+962796817071"
          className="flex items-center gap-2 text-sm"
          aria-label="Phone"
        >
          <FaPhone />
          <span>+962 796817071</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
