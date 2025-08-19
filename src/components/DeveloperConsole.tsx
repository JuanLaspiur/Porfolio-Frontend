import { useEffect, useState } from "react";
import styles from "./styles/DeveloperConsole.module.css";
import ProgressBar from "./common/ProgressBar"; 
import MarkedLabel from "./common/MarkedLabel";

export default function DeveloperConsole({ isOpen, setIsOpen }) {
  const [progress, setProgress] = useState(0); 

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      return;
    }

    let startTime = Date.now();
    const duration = 15000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent >= 100) {
        setIsOpen(false);
      }
    }, 100); // Actualiza cada 100ms

    return () => clearInterval(interval);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

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
    passion: "Building scalable web & mobile apps 🚀   //  ¯\\_(ツ)_/¯"
  };

  return (
    <div className={styles.wrapper}>

      <div className={`${styles.console} ${isOpen ? styles.open : ""}`}>
                   <MarkedLabel fontSize="1.2rem" text="Buenas Prácticas" />
        <ProgressBar progress={progress} />

        <pre style={{ color: "#f3a600", position: "relative", zIndex: 1 }}>
          {JSON.stringify(developer, null, 2)}
        </pre>
      </div>
    </div>
  );
}
