// services/api.js

const API_BASE_URL = "http://127.0.0.1:51972"; // Replace with your API's base URL

export async function fetchItems() {
  const response = await fetch(`${API_BASE_URL}/users`);
  const data = await response.json();
  return data;
}

export async function createItem(itemData) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  });
  const data = await response.json();
  return data;
}

export async function updateItem(itemId, itemData) {
  const response = await fetch(`${API_BASE_URL}/users/${itemId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  });
  const data = await response.json();
  return data;
}

export async function deleteItem(itemId) {
  const response = await fetch(`${API_BASE_URL}/users/${itemId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
