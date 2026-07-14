const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// 🤖 CHAT API
export const sendMessage = async (message) => {
  const res = await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  return res.json();
};

// 🔐 AUTH API (REGISTER / LOGIN)
export const postRequest = async (url, data) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const text = await res.text();
  return text;
};
