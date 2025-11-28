import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-fintech-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-fintech-accent/50 transition-colors"
        >
            <div className="aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fintech-900 via-fintech-900/40 to-transparent opacity-60" />
            </div>

            <div className="p-6 relative">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-fintech-accent/10 text-fintech-accent rounded-full border border-fintech-accent/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fintech-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-6">
                    {project.description}
                </p>

                <div className="flex items-center gap-4">
                    {project.links.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-fintech-accent transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                        </a>
                    )}
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    return (
        <section className="min-h-screen pt-32 pb-24 px-6 relative">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-fintech-accent transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Featured <span className="text-fintech-accent">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mb-16">
                        A showcase of my work in Digital Transformation, Innovation, and Data Analysis.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS_DATA.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
