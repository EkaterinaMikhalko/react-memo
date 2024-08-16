import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoardPage.module.css";
import { useEffect, useState } from "react";
import { getLeaders } from "../../api";
import achievement1 from "./images/achievement1.svg";
import notAchievement1 from "./images/notAchievement1.svg";
import achievement2 from "./images/achievement2.svg";
import notAchievement2 from "./images/notAchievement2.svg";
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
            <p className={styles.leaderBoardTopText}>Достижения</p>
          </div>
          <div className={styles.colomn4}>
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
                <div className={styles.leaderBoardAchievement}>
                  {leader.achievements.includes(1) ? (
                    <img src={achievement1} alt="achievement1" />
                  ) : (
                    <img src={notAchievement1} alt="notAchievement1" />
                  )}
                  {leader.achievements.includes(2) ? (
                    <img src={achievement2} alt="achievement2" />
                  ) : (
                    <img src={notAchievement2} alt="notAchievement2" />
                  )}
                </div>
              </div>

              <div className={styles.colomn4}>
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
