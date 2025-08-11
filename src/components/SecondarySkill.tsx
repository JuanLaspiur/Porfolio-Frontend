import styles from './styles/SecondarySkill.module.css'
import MarkedLabelProps from '../components/common/MarkedLabel'
import SecurityCard from './common/SecurityCard'
import javaIconSvg from '/svg/java.svg'
import nodeIconSvg from '/svg/node.svg'
import reactIconSvg from '/svg/react.svg'

function SecondarySkill() {
  return (
    <div className={styles.containerAll}>
      <MarkedLabelProps fontSize='1.5rem' text='Secondary Skill' />
    <div className={styles.containerCardSkill} >
                <SecurityCard
                    icon={javaIconSvg}
                    title="Java"
                    description="Mi primer lenguaje de programación, mi favorito. Conocimiento en JPA (hibernate) y Spring"
                />          <SecurityCard
                    icon={nodeIconSvg}
                    title="Node.js"
                    description="Entorno de Ejecución de JavaScript, el lenguaje con el que más he trabajado. Me interesa JavaScript por su versatilidad Back Front. "
                />          <SecurityCard
                    icon={reactIconSvg}
                    title="React.js"
                    description="Libreria para crear interfaces de usuario rápidas, reutilizables y dinámicas de forma eficiente."
                /></div>
    </div>
  )
}

export default SecondarySkill
