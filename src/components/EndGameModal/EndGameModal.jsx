import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { postLeader } from "../../api";
import cn from "classnames";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick, game }) {
  const { pairsCount } = useParams();
  console.log(pairsCount, isWon);
  const title = isWon ? "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  // const newLeader = pairsCount === 9 ? true : false;
  let newLeader;
  if (game === 9 && isWon === true) {
    newLeader = true;
  } else {
    newLeader = false;
  }

  console.log(newLeader);

  const [leaderName, setLeaderName] = useState("Пользователь");
  const gameDuration = gameDurationMinutes * 60 + gameDurationSeconds;

  const handlePostLeader = () => {
    postLeader({ name: leaderName, time: gameDuration })
      .then()
      .catch(error => {
        console.log(error);
      });
  };
  console.log(newLeader);
  return (
    <>
      <div className={newLeader ? cn(styles.modal, styles.modalWin) : styles.modal}>
        <img className={styles.image} src={imgSrc} alt={imgAlt} />
        {newLeader ? (
          <h2 className={styles.title}>
            Вы попали <br /> на Лидерборд!
          </h2>
        ) : (
          <h2 className={styles.title}>{title}</h2>
        )}

        {newLeader ? (
          <input
            className={styles.leaderName}
            onChange={e => {
              setLeaderName(e.target.value);
            }}
            onBlur={handlePostLeader}
            type="text"
            placeholder="Пользователь"
          />
        ) : null}

        <p className={styles.description}>Затраченное время:</p>
        <div className={styles.time}>
          {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
        </div>

        <Button onClick={onClick}>Начать сначала</Button>
        <Link to={`/leaderboard`}>
          <p className={styles.leaderBoardLink}>Перейти к лидерборду</p>
        </Link>
      </div>
    </>
  );
}
