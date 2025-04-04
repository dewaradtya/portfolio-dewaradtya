import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  category,
  title,
  description,
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl h-96 bg-black"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute bottom-0 left-0 p-8 z-20  opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
        <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </span>
        <h3 className="text-white text-2xl font-bold mt-4">{title}</h3>
        <p className="text-gray-300 mt-2 max-w-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
