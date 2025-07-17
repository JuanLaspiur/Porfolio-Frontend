import { motion } from "framer-motion";
import icon from "/svg/data-base.svg";

export default function AnimatedIcon() {
  return (
    <motion.img
      src={icon}
      alt="Cloud Icon"
      width={96}
      height={96}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}
