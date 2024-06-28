import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoardPage.module.css";
export function LeaderBoardPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Лидерборд</p>
        <div className={styles.button}>
          <Link to={`/game/3`}>
            <Button>Начать игру</Button>
          </Link>
        </div>
      </div>
      <div className={styles.leaderBoardContainerTop}>
        <div className={styles.leaderBoardColomns}>
          <div className={styles.colomn1}>
            <p className={styles.leaderBoardTopText}>Позиция</p>
          </div>
          <div className={styles.colomn2}>
            <p className={styles.leaderBoardTopText}>Пользователь</p>
          </div>
          <div className={styles.colomn3}>
            <p className={styles.leaderBoardTopText}>Время</p>
          </div>
        </div>
      </div>
      <div className={styles.leaderBoardContainer}>
        <div className={styles.leaderBoardColomns}>
          <div className={styles.colomn1}>
            <p className={styles.leaderBoardText}>#1</p>
          </div>

          <div className={styles.colomn2}>
            <p className={styles.leaderBoardText}>ab98awj_918mlz1lavfh_ru</p>
          </div>

          <div className={styles.colomn3}>
            <p className={styles.leaderBoardText}>01:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}
