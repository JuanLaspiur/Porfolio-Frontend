import { useState } from "react";
import styles from "./styles/DeveloperConsole.module.css";

export default function DeveloperConsole() {
  const [isOpen, setIsOpen] = useState(false);

  const developer = {
    name: "Juan Laspiur",
    role: "Full Stack Developer",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript"
    ],
    expertise: {
      architectures: ["Microservices", "Monolithic", "Serverless"],
      reactDesignPatterns: [
        "Higher Order Components (HOC)",
        "Compound Components",
        "Controlled & Uncontrolled Components",
        "Hooks Pattern (Custom Hooks)",
        "Provider Pattern (Context API)",
        "State Reducer Pattern",
        "Function as Child (FaCC)"
      ],
      designPatterns: ["MVC", "Factory", "Observer", "Singleton"],
      deployment: ["SSH", "VPN", "AWS EC2", "S3", "NGINX", "CloudFront"]
    },
    additionalKnowledge: ["Next.js", "Java", "SQL"],
    passion: "Building scalable web & mobile apps 🚀"
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Cerrar consola" : "Ver más"}
      </button>

      <div className={`${styles.console} ${isOpen ? styles.open : ""}`}>
        <pre>{JSON.stringify(developer, null, 2)}</pre>
      </div>
    </div>
  );
}
