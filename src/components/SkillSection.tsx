import SecurityCard from './common/SecurityCard'
import styles from './styles/SkillSection.module.css'
import MarkedLabelProps from '../components/common/MarkedLabel'
import javaIconSvg from '/svg/java.svg'
import nodeIconSvg from '/svg/node.svg'
import reactIconSvg from '/svg/react.svg'

function SkillSection() {
    return (
        <div className={styles.containerAll}>
            <MarkedLabelProps fontSize='2rem' text='Principal Skill' />
            <div className={styles.containerCardSkill} >
                <SecurityCard
                    icon={javaIconSvg}
                    title="Java"
                    description="Mi primer lenguaje de programación."
                />          <SecurityCard
                    icon={nodeIconSvg}
                    title="Node.js"
                    description="El que más he utilizado. Versatil y potente."
                />          <SecurityCard
                    icon={reactIconSvg}
                    title="React.js"
                    description="Interfaces de usuario rápidas, reutilizables y dinámicas."
                /></div>
        </div>
    )
}

export default SkillSection
