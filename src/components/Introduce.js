import styles from "./Introduce.module.css"

const Introduce = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["avatar-container"]}>
        <img src="images/avatar.png" alt="avatar" className={styles.avatar} />
      </div>
      <h2>李彥增（James）</h2>
      <ul>
        <li>兩年以上 Ruby on Rails 開發經驗</li>
        <li>TOEIC 815。2年澳洲打工度假經驗，擅長英文對話</li>
        <li>善於溝通討論。喜歡跟團隊成員尋找問題的最佳解</li>
        <li>追求高品質程式碼，竭盡所能地減少技術債</li>
      </ul>
      <p>
        <a href="mailto:j606888@gmail.com">j606888@gmail.com</a> / +886
        968313044 / Tainan, Taiwan
      </p>
      <div className={styles["social-links"]}>
        <a href="https://www.linkedin.com/in/%E5%BD%A5%E5%A2%9E-%E6%9D%8E-33b88b176/">
          <i class="fab fa-linkedin-in"> </i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100000130585797">
          <i class="fab fa-facebook"> </i>
        </a>
        <a href="https://github.com/j606888">
          <i class="fab fa-github"> </i>
        </a>
      </div>
    </div>
  )
}

export default Introduce
