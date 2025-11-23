import React from 'react';
import { motion } from 'framer-motion';

const companies = [
    "OmniBSIC Bank",
    "Parliament of Ghana",
    "SBP Africa",
    "Star Micro Insurance",
    "OmniBSIC Bank",
    "Parliament of Ghana",
    "SBP Africa",
    "Star Micro Insurance",
];

const LogoTicker: React.FC = () => {
    return (
        <section className="py-10 bg-fintech-950/50 border-y border-fintech-800/50 overflow-hidden">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm text-gray-500 mb-8 font-medium tracking-widest uppercase">
                    Trusted by Industry Leaders
                </p>

                <div className="flex overflow-hidden mask-linear-gradient">
                    <motion.div
                        className="flex gap-16 items-center flex-nowrap"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        {/* Duplicate list to create seamless loop */}
                        {[...companies, ...companies].map((company, index) => (
                            <div
                                key={index}
                                className="text-xl md:text-2xl font-display font-bold text-gray-600 whitespace-nowrap hover:text-fintech-accent transition-colors cursor-default"
                            >
                                {company}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LogoTicker;
