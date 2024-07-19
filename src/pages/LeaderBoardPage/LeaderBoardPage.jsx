import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoardPage.module.css";
import { useEffect, useState } from "react";
import { getLeaders } from "../../api";
export function LeaderBoardPage() {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    getLeaders()
      .then(data => {
        setLeaders(data.leaders);
      })
      .catch(error => {
        console.log(error);
      });
  }, [setLeaders]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Лидерборд</p>
        <div className={styles.button}>
          <Link to={`/game/9`}>
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
      {leaders
        .sort((a, b) => a.time - b.time)
        .map((leader, index) => (
          <div className={styles.leaderBoardContainer} key={index}>
            <div className={styles.leaderBoardColomns}>
              <div className={styles.colomn1}>
                <p className={styles.leaderBoardText}>#{index + 1}</p>
              </div>

              <div className={styles.colomn2}>
                <p className={styles.leaderBoardText}>{leader.name}</p>
              </div>

              <div className={styles.colomn3}>
                <p className={styles.leaderBoardText}>
                  {Math.floor(leader.time / 60)
                    .toString()
                    .padStart("2", "0")}
                  :
                  {Math.floor(leader.time % 60)
                    .toString()
                    .padStart("2", "0")}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
