const ApiUrl = "https://wedev-api.sky.pro/api/v2/leaderboard";
export async function getLeaders() {
  const res = await fetch(ApiUrl);

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return res.json();
}

export async function postLeader({ name, time }) {
  try {
    const res = await fetch(ApiUrl, {
      method: "POST",
      body: JSON.stringify({
        name,
        time,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Ошибка при отправке данных: ${error.message}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Ошибка при отправке данных:", error.message);
    throw error;
  }
}
