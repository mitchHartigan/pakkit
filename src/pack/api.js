// const BACKEND_URL = "https://6mnbjhqeac.execute-api.us-east-1.amazonaws.com";
const BACKEND_URL = "http://localhost:8080";

export async function API_LOGIN(email, password) {
  const response = await fetch(`${BACKEND_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = response.json();
  return body;
}
