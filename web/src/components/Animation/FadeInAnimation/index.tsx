import { motion } from "framer-motion";

const FadeInAnimation = ({ children }:any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

export default FadeInAnimation;
