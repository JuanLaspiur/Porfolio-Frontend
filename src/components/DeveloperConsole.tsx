import styles from "./styles/DeveloperConsole.module.css";

export default function DeveloperConsole({ isOpen, setIsOpen }) {

  if (!isOpen) {
    return null
  }

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
{/* Que haya un timer pasado los 10 segundos se cierre automaticamente con setIsOpen(false) */}
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.console} ${isOpen ? styles.open : ""}`}>
        <pre>{JSON.stringify(developer, null, 2)}</pre>
      </div>
    </div>
  );
}
