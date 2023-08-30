import { motion } from "framer-motion";

const IntialTransformAnimation = ({ children,duration }:any  ) => (
  <motion.div
    initial={{
      opacity: 0.5,
      x: -30,
    }}
    animate={{
      opacity: 1,
      x: 0,
   
    }}
    transition={{ duration: duration }}
  >
    {children}
  </motion.div>
);

export default IntialTransformAnimation;
