import React from "react";
import { Github, ExternalLink, Code, Database, Smartphone, Brain, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
        {
          id: 7,
          title: "Stock Broker Client Web Dashboard",
          description:
            "A modern real-time stock trading platform for live stock price tracking, portfolio management, and interactive charts. Features secure authentication, responsive UI, and real-time WebSocket updates.",
          image: "https://github.com/yuvarajpanditrathod/Stock-Broker-Client-Web-Dashboard/blob/main/Frontend/public/Dashboard.png?raw=true",
          technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "WebSocket",
            "JWT Auth",
            "Material UI"
          ],
          githubUrl: "https://github.com/yuvarajpanditrathod/Stock-Broker-Client-Web-Dashboard",
          liveUrl: "https://stock-broker-frontend.onrender.com/",
          category: "Full Stack",
        },
        {
          id: 8,
          title: "LinkedIn Clone (MERN)",
          description:
            "A professional, full-stack LinkedIn clone built with the MERN stack. Implements social networking features: feed, profiles, connections, messaging, onboarding, notifications, and image uploads.",
          image: "https://github.com/yuvarajpanditrathod/LinkedIn-Clone-using-MERN-Stack/blob/main/uploads/dashboard.png?raw=true",
          technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "MERN",
            "JWT Auth",
            "Bootstrap"
          ],
          githubUrl: "https://github.com/yuvarajpanditrathod/LinkedIn-Clone-using-MERN-Stack",
          liveUrl: "https://linked-in-clone-using-mern-stack.vercel.app/",
          category: "Full Stack",
        },
        {
          id: 9,
          title: "5G Network Slicing Orchestration Platform",
          description:
            "A professional-grade 5G network slicing orchestration platform with dynamic resource allocation, adaptive QoS, and intelligent traffic handling for URLLC, eMBB, and mMTC. Integrates SDN, NFV, and NS3 simulation.",
          image: "https://media.assettype.com/outlookbusiness/import/uploadimage/library/16_9/16_9_5/IMAGE_1651584902.webp?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
          technologies: [
            "Python",
            "SDN",
            "NFV",
            "NS3",
            "Mininet",
            "Prometheus",
            "Grafana"
          ],
          githubUrl: "https://github.com/yuvarajpanditrathod/5G-Network-Slicing-using-SDN-NFV-and-NS3",
          category: "AI/ML",
        },
    {
      id: 1,
      title: "Intrusion Detection & Prevention System (IDPS) Network Dashboard",
      description:
        "A comprehensive network security dashboard for real-time monitoring and prevention of network intrusions with advanced threat detection capabilities.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO40O86U-Ffs7Xu4j0sHyY22sa3icHJ9FQRA&s",
      technologies: [
        "Python",
        "Machine Learning",
        "Network Security",
        "Dashboard",
        "Real-time Monitoring",
      ],
      githubUrl:
        "https://github.com/yuvarajpanditrathod/IDPS-Network-Dashboard",
      category: "Security",
    },
    {
      id: 2,
      title: "Real-Time Object Detection System using YOLO11",
      description:
        "Advanced real-time object detection system leveraging the latest YOLO11 architecture for accurate and fast object recognition in video streams.",
      image:"https://learn.g2.com/hubfs/G2CM_FI264_Learn_Article_Images_%5BObject_detection%5D_V1a.png",      
      technologies: [
        "Python",
        "YOLO11",
        "Computer Vision",
        "Deep Learning",
        "OpenCV",
      ],
      githubUrl:
        "https://github.com/yuvarajpanditrathod/Real-Time-Object-Detection-using-YOLO11",
      category: "AI/ML",
    },
    {
      id: 3,
      title: "KLE Tech Blog Platform",
      description:
        "A modern blog platform designed for technical content sharing, featuring user authentication, rich text editing, and responsive design.",
      image:"https://www.thoughtco.com/thmb/EILaVahb3PdeCwN75vqfKWELxts=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-974683580-da68f71779264a1ab93a91df63cc517c.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      githubUrl: "https://github.com/yuvarajpanditrathod/Blog-Platform",
      category: "Full Stack",
    },
    {
      id: 4,
      title: "NLP Part-of-Speech (POS) Tagging with Adversarial Training",
      description:
        "Advanced NLP system for part-of-speech tagging enhanced with adversarial training techniques to improve model robustness and accuracy.",
      image:"https://media.istockphoto.com/id/1367728606/vector/conversational-ai-concept-natural-language-processing-nlp-computational-linguistics-concept.jpg?s=612x612&w=0&k=20&c=YB1PDavNi9HCRnFlhb2g5y9lhOl3CIAxbSNvZifB_F0=",
      technologies: [
        "Python",
        "NLP",
        "Deep Learning",
        "Adversarial Training",
        "TensorFlow",
      ],
      githubUrl:
        "https://github.com/yuvarajpanditrathod/NLP-Part-of-Speech-POS-Tagging",
      category: "AI/ML",
    },
    {
      id: 5,
      title: "Hospital Readmission Prediction Using Ensemble Learning",
      description:
        "Machine learning system using ensemble methods to predict hospital readmission risk, helping healthcare providers improve patient outcomes.",
      image:"https://media.licdn.com/dms/image/v2/C5112AQEDuEi32vwsaw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1545233361061?e=2147483647&v=beta&t=j49KZlXDhqZJbF4s44UEdPPbsp-pSy3--sQewCUTtB0",
      technologies: [
        "Python",
        "Machine Learning",
        "Ensemble Learning",
        "Healthcare Analytics",
        "Scikit-learn",
      ],
      githubUrl:
        "https://github.com/yuvarajpanditrathod/Hospital-Readmission-Risk-Prediction",
      category: "AI/ML",
    },
    {
      id: 6,
      title: "KLE Course Registration Using MERN Stack",
      description:
        "A simple course registration and login system built with the MERN stack for KLE users, featuring registration, authentication, and basic course management.",
      image: "https://media.licdn.com/dms/image/v2/D5612AQF2yvodq77B8A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1693544532230?e=2147483647&v=beta&t=AikJngH-ljbS2pT-Z-YoSRuxIb0Tv9Ayp4tggJTne5M",
      technologies: ["React", "Node.js", "Express", "MongoDB", "MERN"],
      githubUrl:
        "https://github.com/yuvarajpanditrathod/Simple-Register-Login-Page",
      liveUrl: "",
      category: "Full Stack",
    },
  ];

  const categories = ["All", "Full Stack", "AI/ML", "Security"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack":
        return <Code className="w-4 h-4" />;
      case "Backend":
        return <Database className="w-4 h-4" />;
      case "Mobile":
        return <Smartphone className="w-4 h-4" />;
      case "AI/ML":
        return <Brain className="w-4 h-4" />;
      case "Security":
        return <Shield className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const getProjectBg = (category) => {
    switch (category) {
      case "Full Stack":
        return "bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20";
      case "AI/ML":
        return "bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20";
      case "Security":
        return "bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20";
      default:
        return "bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30";
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-transparent dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
              }`}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden h-48 ${getProjectBg(project.category)}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
