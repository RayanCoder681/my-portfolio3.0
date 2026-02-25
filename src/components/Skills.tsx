import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data';
import { fadeInUp, staggerContainer, itemVariants } from '../utils/animations';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const currentCategory = skillCategories[activeCategory];

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 w-96 h-96 -translate-y-1/2 rounded-full bg-neural-300/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <motion.span variants={fadeInUp} className="section-tag">02.</motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-white">
            Skills & Stack
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="flex-1 h-px bg-gradient-to-r from-neural-300/30 to-transparent"
          />
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(i)}
                className={`text-left px-4 py-3 rounded-lg border transition-all duration-200 ${activeCategory === i
                  ? 'bg-neural-300/10 border-neural-300/40 text-neural-300'
                  : 'border-transparent bg-void-600/30 text-void-200 hover:bg-void-600/50 hover:text-void-100'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="font-body text-sm font-medium">{cat.title}</span>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Skills display */}
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 neural-card rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{currentCategory.icon}</span>
              <h3 className="font-display text-2xl font-semibold text-white">
                {currentCategory.title}
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {currentCategory.skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-body text-sm text-void-100 font-medium">{skill.name}</span>
                    <span className="font-mono text-xs text-neural-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                    />
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-xs text-void-300">
                      {skill.category}
                    </span>
                    <span className="font-mono text-xs text-void-300">
                      {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 60 ? 'Proficient' : 'Familiar'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary badges */}
            <div className="mt-8 pt-6 border-t border-neural-300/10 flex flex-wrap gap-2">
              {currentCategory.skills.map((skill) => (
                <span
                  key={`badge-${skill.name}`}
                  className={`px-2.5 py-1 rounded font-mono text-xs border ${skill.level >= 90
                    ? 'border-neural-300/40 bg-neural-300/10 text-neural-300'
                    : skill.level >= 75
                      ? 'border-violet-500/40 bg-violet-500/10 text-violet-300'
                      : 'border-void-300/30 bg-void-600/30 text-void-100'
                    }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tool cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <p className="font-mono text-xs text-neural-400 tracking-widest text-center mb-6">
            ALSO FAMILIAR WITH
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {/* 
              [''Plotly','Streamlit','Ray','Opyuna','Hydra','ONNX','TensorRT','Triton','Feast','Evidently','dbt','Snowfake','Pinecone','weaviate']
            */}
            {[
              'NumPy', 'SciPy', 'Matplotlib', 'Seaborn', 'Scikit learn', 'Pandas', 'FastAPI',
              'Pytorch', 'Tensorflow', 'Keras', 'Kaggle', 'TensorRT', 'Evidently',
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-full text-xs font-mono border border-void-300/20 text-void-200 bg-void-600/20 hover:border-neural-300/30 hover:text-neural-300 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
