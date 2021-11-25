import styles from "./Skills.module.css"

const Skills = () => {
  return (
    <div className={styles["skills-container"]}>
      <h2>技能</h2>
      <div className={styles["skill-cols"]}>
        <div className={styles["skill"]}>
          <h3>Back-End</h3>
          <p>Ruby on Rails</p>
          <p>Node.js</p>
          <p>PostgreSQL</p>
          <p>Redis</p>
        </div>
        <div className={styles["skill"]}>
          <h3>AWS</h3>
          <p>
            EC2 / S3 / Route53 / Elasticsearch / IAM / ELB / ECR / SES / SMS /
            Lambda / API Gateway
          </p>
        </div>
        <div className={styles["skill"]}>
          <h3>Others</h3>
          <p>
            Gitlab / GCP / Firebase / Stripe / Postman / DataDog / Sentry /
            Bootstrap / React / Docker / Line API / Typescript
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
