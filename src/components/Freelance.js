import styles from "./Freelance.module.css"

const Freelance = () => {
  return (
    <div>
      <h2>自由職業</h2>
      <div>
        <div className={styles["project"]}>
          <h3>Saturday Project</h3>
          <p>
            透過中英雙語的方式以及 Scratch, Microsoft Arcade
            來教導國中國小的學生學程式
          </p>
        </div>
        <div className={styles["project"]}>
          <h3>Kdan Mobile PRD 顧問</h3>
          <p>
            與該公司 PM 討論需求和情境來協助撰寫規格書（Product Require
            Document）供內部使用
          </p>
        </div>
        <div className={styles["project"]}>
          <h3>潤滑油公司內部管理後台 & Line 官方帳號</h3>
          <ul>
            <li>每日自動排程拉取訂單最新狀態</li>
            <li>建立權限制度來做內部管控</li>
            <li>
              建立對話視窗讓 Line Bot 在 API 模式還是可以由客服人工回覆訊息
            </li>
            <li>自動偵測用戶註冊狀態，動態的切換 Rich Menu</li>
            <li>使用 LIFF 提供簡易購物車</li>
          </ul>
        </div>
        <div className={styles["project"]}>
          <h3>預約管理後台</h3>
          <ul>
            <li>管理用戶、群組、服務、優惠等等</li>
            <li>每日自動備份 Postgres 資料至 S3 來實現災難防護</li>
            <li>配置 SSL 增強資安管理</li>
            <li>使用 Bootstrap 來實作前端樣式</li>
            <li>使用 Chart.js 建立多樣性的收入報表</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Freelance
