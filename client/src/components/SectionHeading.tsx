import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export function SectionHeading({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  className = "",
  dark = false
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${dark ? "text-white" : "text-foreground"}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg md:text-xl leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
