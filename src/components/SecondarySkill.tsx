import styles from './styles/SecondarySkill.module.css'
import MarkedLabelProps from '../components/common/MarkedLabel'
import SecurityCard from './common/SecurityCard'
import awsIconSvg from '/svg/aws.svg'
import nextIconSvg from '/svg/next.svg'
function SecondarySkill() {
  return (
    <div className={styles.containerAll}>
      <MarkedLabelProps fontSize='1.2rem' text='Secondary Skill' />
      <div className={styles.containerCardSkill}>
        <SecurityCard
          icon={awsIconSvg}
          title="AWS"
          description="AWS"
          size="sm"
        />

        <SecurityCard
          icon={nextIconSvg}
          title="Next.js"
            description="Next.js"
          size="sm"
        />
      </div>
    </div>
  )
}

export default SecondarySkill
