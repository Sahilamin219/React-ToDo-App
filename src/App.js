import React, { useEffect, useState } from "react";
import "./styles.css";
import { Dispatcher } from "flux";
import { EventEmitter } from "events";

// create an instance of it
const dispatcher = new Dispatcher();

let items_ = ["work more", "sleep less"];

dispatcher.register((action) => {
  switch (action.action) {
    case "ADD_ITEM":
      // items_.push(action.item);
      store.add_item(action.item);
      store.emitChange(); //anytime the store changes, we need to call emitChange
      break;
    case "REMOVE_ITEM":
      store.removeItem(action.item);
      store.emitChange();
      break;
    default:
    //nothing to do here
  }
});

class ToDoStore extends EventEmitter {
  getItems() {
    return items_;
  }
  removeItem(item) {
    console.log(item);

    let itemNew = [];
    var itemToitr = [...items_];
    for (let j = 0; j < items_.length; j++) {
      if (itemToitr[j] !== item) {
        itemNew.push(itemToitr[j]);
        // console.log();
      }
    }
    items_ = itemNew;
    console.log(items_);
  }
  add_item(item) {
    items_ = [...items_, item];
    // items_.push(item);
  }
  addChangeListener(callback) {
    // this will allow React component to subscribe to our store so
    // they are notified when changes occur
    this.on("change", callback);
  }
  removeChangeListener(callback) {
    return this.removeListener("change", callback);
  }

  emitChange() {
    return this.emit("change");
  }
}

const store = new ToDoStore();

function Navbar() {
  // console.log(props);
  const [ItemList, setItemList] = useState(store.getItems());
  function onChange() {
    setItemList(store.getItems());
  }
  useEffect(() => {
    store.addChangeListener(onChange);
  }, []);
  return <p>I have {store.getItems().length} no. </p>;
}
function ToDoList({ mystr, setmyStr }) {
  const [ItemList, setItemList] = useState(store.getItems());
  function onChange() {
    setItemList(store.getItems());
  }
  useEffect(() => {
    store.addChangeListener(onChange);
  }, []);

  const [add_me, Setadd_me] = useState("");
  function removeIt(i) {
    dispatcher.dispatch({
      action: "REMOVE_ITEM",
      item: i
    });
    // console.log(items_);
  }

  function make(target) {
    Setadd_me(target);
    // return( ItemList[-1]);
  }
  function addme() {
    // setmyStr([...mystr, add_me]);
    dispatcher.dispatch({
      action: "ADD_ITEM",
      item: add_me
    });
  }
  return (
    <div>
      {console.log("item", store.getItems())}
      <p>TO DO ITEMS</p>
      {store.getItems().map((i) => {
        return (
          <li>
            {i} <button onClick={() => removeIt(i)}>Delete</button>
          </li>
        );
      })}
      <input type="text" onChange={({ target }) => make(target.value)}></input>
      <button onClick={addme}>add</button>
    </div>
  );
}

export default function App() {
  const [mystr, setmyStr] = useState(["work hard", "sleep well"]);
  return (
    <div className="App">
      <ToDoList />
      <Navbar />
    </div>
  );
}
