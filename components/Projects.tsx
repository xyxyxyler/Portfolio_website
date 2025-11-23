import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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

                    {/* Placeholder for Project Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-fintech-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-64 flex items-center justify-center">
                                <p className="text-gray-500">Project {item} Coming Soon</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
