import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-12">
            Crafting digital products with purpose
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I specialize in 
              building responsive, accessible, and performant applications that 
              deliver exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean code, thoughtful design, and 
              continuous learning. Every project is an opportunity to push 
              boundaries and create something meaningful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-serif text-gradient mb-2">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-gradient mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-gradient mb-2">30+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-gradient mb-2">∞</h3>
                <p className="text-muted-foreground">Cups of Coffee</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
