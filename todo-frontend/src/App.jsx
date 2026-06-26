import HeaderName from "./components/HeaderName";
import TableHead from "./components/TableHead";
import TodoItems from "./components/TodoItems";
import React, { useState } from "react";
import Message from "./components/Message";

import "./App.css";
import {
  addItemServer,
  deleteItemServer,
  getItemsServer,
} from "./services/itemsServices";
import { useEffect } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsServer().then((items) => {
      setTodoItems(items);
    });
  }, []);

  const handleAddTask = async (itemName, itemDueDate) => {
    console.log("new item added: ", itemName, itemDueDate);

    const item = await addItemServer(itemName, itemDueDate);

    const newTodoItems = [...todoItems, item];

    setTodoItems(newTodoItems);
  };

  const handleDeleteTask = async (id) => {
    const deletedId = await deleteItemServer(id);
    const newTodoitems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoitems);
  };

  return (
    <center className="todo">
      <HeaderName />
      <TableHead onNewItom={handleAddTask} />
      {todoItems.length === 0 && <Message />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteTask} />
    </center>
  );
}

export default App;
