import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "VS Code"] },
  { category: "Soft Skills", items: ["Problem Solving", "Communication", "Team Leadership", "Agile"] },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="bg-card p-8 rounded-2xl card-elevated"
            >
              <h3 className="text-xl font-serif font-medium mb-6 text-gradient">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-muted-foreground flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
