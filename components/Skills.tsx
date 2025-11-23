import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { SKILLS_CHART_DATA, CERTIFICATIONS } from '../constants';
import { Award, CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-b from-fintech-accent/5 to-transparent blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Chart Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-white">Core Competencies</h2>
                <p className="text-gray-400 mt-2">Data-driven skills matrix</p>
              </div>

              <div className="h-[400px] w-full bg-fintech-800/50 backdrop-blur-md rounded-3xl border border-gray-800 p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS_CHART_DATA}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Skill Level"
                      dataKey="A"
                      stroke="#06b6d4"
                      strokeWidth={3}
                      fill="#06b6d4"
                      fillOpacity={0.4}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#374151', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Certifications & Tech Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-fintech-accent" /> Certifications
              </h2>

              <div className="grid gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="p-4 bg-fintech-800/80 backdrop-blur-sm border border-gray-700 rounded-lg flex items-start gap-4 hover:bg-gray-800 transition-colors"
                  >
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1 shrink-0" />
                    <span className="text-gray-200 font-medium">{cert.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-4">Software & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Excel (Advanced)', 'VBA', 'Power BI', 'Figma', 'Adobe Creative Suite', 'React', 'Project Management'].map((tool) => (
                    <span key={tool} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md text-sm border border-gray-700 hover:border-fintech-accent transition-colors cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
