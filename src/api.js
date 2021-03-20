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

export async function API_REGISTER(email, password) {
  const response = await fetch(`${BACKEND_URL}/register`, {
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = response.json();
  return body;
}

export async function API_PUT_PACK(token, pack) {
  const response = await fetch(`${BACKEND_URL}/pack`, {
    method: "POST",
    body: JSON.stringify({ token: token, pack: pack }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const body = response.json();
  return body;
}

export async function API_GET_PACK(id) {
  const response = await fetch(`${BACKEND_URL}/pack/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const body = response.json();
  return body;
}
