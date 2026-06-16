export const addItemServer = async (task, date) => {
  const response = await fetch("http://localhost:3000/api/todo", {
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
  const response = await fetch("http://localhost:3000/api/todo");
  const items = await response.json();
  return items.map(mapToServerItemName);
};

export const deleteItemServer = async (id) => {
  await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "DELETE",
  });
  return id;
};

export const martItemCompleted = async (id) => {
  const response = await fetch(
    `http://localhost:3000/api/todo/${id}/completed`,
    {
      method: "PUT",
    },
  );
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
