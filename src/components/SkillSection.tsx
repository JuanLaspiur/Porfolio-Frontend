import { BiShieldAlt2 } from 'react-icons/bi'
import SecurityCard from './common/SecurityCard'
import styles from './styles/SkillSection.module.css'
import CubeBackgroundWrapper from './CubeBackgroundWrapper'
import MarkedLabelProps from '../components/common/MarkedLabel'
import javaIconSvg from '/svg/java.svg'
import nodeIconSvg from '/svg/node.svg'
import reactIconSvg from '/svg/react.svg'

function SkillSection() {
    return (<CubeBackgroundWrapper>
        <div className={styles.containerAll}>
            <MarkedLabelProps fontSize='2rem' text='Principal Skill' />
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
        </div></CubeBackgroundWrapper>
    )
}

export default SkillSection
