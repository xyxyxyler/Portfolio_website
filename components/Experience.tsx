import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Professional Journey</h2>
          <div className="w-24 h-1 bg-fintech-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-gray-700"></div>

          {EXPERIENCE_DATA.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 md:mb-24 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center w-full group`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-4 h-4 bg-fintech-accent rounded-full border-4 border-fintech-900 z-10 group-hover:scale-125 transition-transform"></div>

              {/* Spacer for layout */}
              <div className="hidden md:block w-1/2"></div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-fintech-800/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-fintech-accent/50 transition-colors shadow-lg hover:shadow-fintech-accent/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  </div>

                  <h4 className="text-fintech-400 font-medium mb-4 flex items-center gap-2">
                    {job.company}
                    {job.link && (
                      <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </h4>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-fintech-accent mt-1.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {job.techStack && (
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-fintech-900 border border-gray-700 rounded-full text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
