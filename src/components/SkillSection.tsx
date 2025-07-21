import { BiShieldAlt2 } from 'react-icons/bi'
import SecurityCard from './common/SecurityCard'
import styles from './styles/SkillSection.module.css'
import CubeBackgroundWrapper from './CubeBackgroundWrapper'
import MarkedLabelProps from '../components/common/MarkedLabel'

function SkillSection() {
    return (<CubeBackgroundWrapper>
        <div className={styles.containerAll}>
            <MarkedLabelProps fontSize='2rem' text='Principal Skill' />
            <div className={styles.containerCardSkill} >

            <SecurityCard
                icon={<BiShieldAlt2 size={42} color="#f3a600" />}
                title="Security Hardening"
                description="Discover the attacker's tactics and purposes and find out the identity of the attacker"
            />          <SecurityCard
                icon={<BiShieldAlt2 size={42} color="#f3a600" />}
                title="Security Hardening"
                description="Discover the attacker's tactics and purposes and find out the identity of the attacker"
            />          <SecurityCard
                icon={<BiShieldAlt2 size={42} color="#f3a600" />}
                title="Security Hardening"
                description="Discover the attacker's tactics and purposes and find out the identity of the attacker"
            /></div>
        </div></CubeBackgroundWrapper>
    )
}

export default SkillSection
