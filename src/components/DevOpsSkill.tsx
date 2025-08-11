import styles from './styles/DevOpsSkill.module.css'
import MarkedLabelProps from '../components/common/MarkedLabel'
import SecurityCard from './common/SecurityCard'
import linuxIconSvg from '/svg/linux.svg'
import dockerIconSvg from '/svg/docker.svg'

function DevOpsSkill() {
  return (
    <div className={styles.containerAll}>
      <MarkedLabelProps fontSize='1.2rem' text='DevOps Skill' />
      <div className={styles.containerCardSkill}>
        <SecurityCard
          icon={linuxIconSvg}
          title="Linux"
          description="Linux"
          size="sm"
        />
        <SecurityCard
          icon={dockerIconSvg}
          title="Docker"
            description="Docker"
          size="sm"
        />
      </div>
    </div>
  )
}

export default DevOpsSkill
