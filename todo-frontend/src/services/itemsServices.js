const API_URL = import.meta.env.VITE_API_URL;

export const addItemServer = async (task, date) => {
  const response = await fetch(`${API_URL}/api/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });
  const item = await response.json();
  return mapToServerItemName(item);
};

export const getItemsServer = async () => {
  const response = await fetch(`${API_URL}/api/todo`);
  const items = await response.json();
  return items.map(mapToServerItemName);
};

export const deleteItemServer = async (id) => {
  await fetch(`${API_URL}/api/todo/${id}`, {
    method: "DELETE",
  });
  return id;
};

export const martItemCompleted = async (id) => {
  const response = await fetch(`${API_URL}/api/todo/${id}/completed`, {
    method: "PUT",
  });
  const item = await response.json();
  return mapToServerItemName(item);
};

const mapToServerItemName = (serverItem) => {
  return {
    id: serverItem._id,
    Name: serverItem.task,
    Date: serverItem.date,
    completed: serverItem.isCompleted,
  };
};
