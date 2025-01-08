import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "AI-HireHub: AI Driven Recruitment Platform",
      description: "AI-driven recruitment platform that leverages NLP and LLMs to analyze resumes, scrape LinkedIn jobs, and perform semantic matching, providing personalized job recommendations to candidates.",
      techStack: ["Pandas", "Streamlit", "LangChain","FAISS", "Selenium", "Google Gemini","PyPDF2"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com"
    },
    {
      title: "Product Search Engine and Recommendation System",
      description: "This project develops a product search engine utilizing NLP techniques, specifically TF-IDF Vectorization and Cosine Similarity, to effectively search and recommend products within the Amazon Product Dataset, enhancing search accuracy and relevance for users.",
      techStack: ["Pandas", "NumPy", "NLTK","Scikit-learn", "Streamlit"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com"
    },
    {
      title: "LexifyAI– AI-Powered Legal Assistant",
      description: "An AI-powered legal assistant chatbot that leverages NLP models and recent Indian legal updates (IPC to BNS) to provide users with real-time, informative responses to their legal queries.",
      techStack: ["Python", "PyPDF2", "Selenium", "ChromaDB", "Langchain", "Llama"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com"
    },
    // Add more projects as needed
  ];

  const certifications = [
    {
      name: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      verifyLink: "https://learn.microsoft.com/api/credentials/share/en-us/AnkitPatil-4690/2BE4DDFAE169752B?sharingId=6ADC780237438166"
    },
    {
      name: "Oracle Cloud Infrastructure: Generative Al Certified Professional",
      issuer: "Oracle",
      verifyLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=EDB57B6EC0DEC532ADAA6002763BADC6B5A4B03B4297353958CB3712CB3040EE"
    },
    {
      name: "Redhat Certified: Redhat Certified System Administrator",
      issuer: "RedHat",
      verifyLink: "https://www.credly.com/badges/1d5dd199-1cec-4457-aecd-fb5d37cade2d/public_url"
    },
    {
      name: "IBM DataScience Professional Certified",
      issuer: "IBM",
      verifyLink: "https://www.credly.com/badges/e9cdc7cc-3b12-45a8-b4b8-4fb8fa6ce84c/public_url"
    },
    {
      name: "NPTEL Certified: Data Analytics with Python",
      issuer: "NPTEL",
      verifyLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs20/Course/NPTEL24CS20S95140003530403210.pdf"
    },
    {
      name: "NPTEL Certified: Big Data Computing",
      issuer: "NPTEL",
      verifyLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs130/Course/NPTEL24CS130S35960001003926124.pdf"
    },
    // Add more certifications
  ];

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-secondary/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold gradient-text">Ankit</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#home" className="hover:text-accent transition-colors">Home</a>
                <a href="mailto:patilankit312@gmail.com" className="hover:text-accent transition-colors">Contact</a>
                <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
                <a href="https://www.linkedin.com/in/ankit-patil24" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                <a href="https://github.com/ankitpatil24" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
                <a href="https://huggingface.co/AnkitPatil" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Hugging Face</a>
                <a href="https://drive.google.com/your-resume-link" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Resume</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-accent hover:text-white hover:bg-secondary focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 hover:text-accent transition-colors">Home</a>
              <a href="mailto:patilankit312@gmail.com" className="block px-3 py-2 hover:text-accent transition-colors">Contact</a>
              <a href="#projects" className="block px-3 py-2 hover:text-accent transition-colors">Projects</a>
              <a href="https://www.linkedin.com/in/ankit-patil24" className="block px-3 py-2 hover:text-accent transition-colors">LinkedIn</a>
              <a href="https://github.com/ankitpatil24" className="block px-3 py-2 hover:text-accent transition-colors">GitHub</a>
              <a href="https://huggingface.co/AnkitPatil" className="block px-3 py-2 hover:text-accent transition-colors">Hugging Face</a>
              <a href="https://drive.google.com/your-resume-link" className="block px-3 py-2 hover:text-accent transition-colors">Resume</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
              Data Science & AI/ML Enthusiast
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transforming data into meaningful insights and building intelligent solutions
            </p>
            <p className="text-4xl font-bold gradient-text mb-8">
              About Me
            </p>
            <p className="text-xl font-bold text-gray-300 mb-8">
              Hey, I'm Ankit Patil 👋
            </p>
            <p className="text-xl text-gray-300 mb-8">
              I'm a passionate Data Science student with a strong foundation in AI/ML. I'm driven by the power of data to uncover insights, build intelligent systems, and solve real-world problems. I'm eager to contribute my skills in areas of  machine learning, deep learning, and data analysis to drive innovation and make a meaningful impact.
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#projects"
                className="bg-accent text-primary px-8 py-3 rounded-full font-medium"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="card-gradient rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="card-gradient rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-300 mb-4">Issued by {cert.issuer}</p>
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Verify Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ankitpatil24" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-6 w-6 text-gray-400 hover:text-accent" />
            </a>
            <a href="https://www.linkedin.com/in/ankit-patil24/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-6 w-6 text-gray-400 hover:text-accent" />
            </a>
            <a href="https://huggingface.co/AnkitPatil" target="_blank" rel="noopener noreferrer">
              <SiHuggingface className="h-6 w-6 text-gray-400 hover:text-accent" />
            </a>
            <a href="mailto:patilankit312@gmail.com">
              <FaEnvelope className="h-6 w-6 text-gray-400 hover:text-accent" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
// h