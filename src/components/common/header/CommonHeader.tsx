import styles from './CommonHeader.module.scss'

function CommonHeader() {
  return (
    <header className={styles.header}>
        <div className={styles.header__logoBox}>
            <img src="src\assets\images\image-logo.jpg" alt="" className={styles.header__logoBox}/>
            <span className={styles.header__logoBox__title}>PhotoSplash</span>
        </div>
        <div className={styles.header__profileBox}>
            <button className={styles.header__profileBox__button}>사진제출</button>
            <button className={styles.header__profileBox__button}>북마크</button>
            <span className={styles.header__profileBox__userName}>Heejoo | link</span>
        </div>
    </header>
  )
}

export default CommonHeader