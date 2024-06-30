const ApiUrl = "https://wedev-api.sky.pro/api/leaderboard";
export async function getLeaders() {
  const res = await fetch(ApiUrl);

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return res.json();
}
