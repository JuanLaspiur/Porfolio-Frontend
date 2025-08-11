import styles from './styles/SecondarySkill.module.css'
import MarkedLabelProps from '../components/common/MarkedLabel'
import SecurityCard from './common/SecurityCard'
import awsIconSvg from '/svg/aws.svg'
import linuxIconSvg from '/svg/linux.svg'
import mySqlIconSvg from '/svg/mysql.svg'

function SecondarySkill() {
  return (
    <div className={styles.containerAll}>
      <MarkedLabelProps fontSize='1.2rem' text='Secondary Skill' />
      <div className={styles.containerCardSkill}>
        <SecurityCard
          icon={awsIconSvg}
          title="AWS"
          description="Experiencia en servicios en la nube y despliegue escalable."
          size="sm"
        />
        <SecurityCard
          icon={linuxIconSvg}
          title="Linux"
          description="Administración de sistemas y automatización de tareas."
          size="sm"
        />
        <SecurityCard
          icon={mySqlIconSvg}
          title="SQL"
          description="Gestión y optimización de bases de datos relacionales."
          size="sm"
        />
      </div>
    </div>
  )
}

export default SecondarySkill
