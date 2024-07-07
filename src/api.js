const ApiUrl = "https://wedev-api.sky.pro/api/leaderboard";
export async function getLeaders() {
  const res = await fetch(ApiUrl);

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return res.json();
}

export async function postLeader(name, time) {
  const res = await fetch(ApiUrl, {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
    }),
  });

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const data = await res.json();
  return data;
}
