import styles from "./WorkExperience.module.css"

const WorkExperience = () => {
  return (
    <div>
      <h2>工作經歷</h2>
      <div>
        <div className={styles["experience"]}>
          <div className={styles["img-container"]}>
            <img
              src="images/logos/processand.png"
              alt="processand"
              className="logo"
            />
          </div>
          <h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.processand.com/"
            >
              Processand
            </a>
            <span className={styles["comma"]}>,</span> Back-End Developer,
            2021/07 ~ 至今
          </h3>
          <ul>
            <li>將多支 API 改寫，大幅降低 90% 以上的 Response Time</li>
            <li>導入 Postman，建立起 API 文件的習慣幫助前後端的溝通</li>
            <li>使用 Cypress 導入 e2e testing，使產品（前後端）穩定性提升</li>
            <li>負責協調台灣部門與德國主管的溝通與建議</li>
            <li>自學 Python 來協助開發 Flask API Server</li>
          </ul>
        </div>
        <div className={styles["experience"]}>
          <div className={styles["img-container"]}>
            <img src="images/logos/lubn.png" alt="lubn" className="logo" />
          </div>
          <h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://lubn.com/"
            >
              Lubn
            </a>
            <span className={styles["comma"]}>,</span> Back-End Developer,
            2021/05 ~ 2021/07
          </h3>
          <ul>
            <li>
              將原有專案 90% Refactor，並導入 Express 使用的 Best
              practices，使整個專案的可維護性以及擴充性大幅提升。
            </li>
            <li>
              使用 Node.js 搭配 lambda, API Gateway 來實現 Serverless 後台
            </li>
            <li>
              導入 CI / CD (Git flow & Github Actions)
              大幅度提升部署速度並減少人為疏失
            </li>
            <li>自學 React 來協助開發 Front-End</li>
          </ul>
        </div>
        <div className={styles["experience"]}>
          <div className={styles["img-container"]}>
            <img
              src="images/logos/kdanmobile.png"
              alt="kdan"
              className="logo"
            />
          </div>
          <h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.kdanmobile.com"
            >
              Kdan Mobile
            </a>
            <span className={styles["comma"]}>,</span> Back-End Developer,
            2018/09 ~ 2021/05
          </h3>
          <ul>
            <li>使用 Ruby on Rails 開發公司內部系統</li>
            <li>開發 API 給跨平台 App & 內部微服務 Server 使用</li>
            <li>
              新產品 MVP & 外包案開發。曾擔任 PM
              角色與業主溝並協調團隊合作與時程控管
            </li>
            <li>
              協助 Customer
              Support，將常用工作自動化（產品贈送、GDPR檢查、故障排除）
            </li>
            <li>串接第三方金流服務(Stripe, Apple, PlayStore)</li>
            <li>跨平台訂閱系統 ＆ 每日數據自動化搜集且整理</li>
            <li>導入 BookStack 作為公司內部的共享知識庫</li>
            <li>擔任面試官協助面試新人</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
