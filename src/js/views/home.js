import React, { useState } from "react";
import Item from "../component/item";
import "../../styles/home.scss";

const Home = () => {
  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState("");
  const [itemSelected, setItemSelected] = useState();
  const [lastState,setLastState] = useState();

  const handleItem = itemList.map((item) => {
    return (
      <div
        onClick={() => setItemSelected(item)}
        className={item == itemSelected ? "item-selected" : ""}
        key={item.id + item.description}
      >
        <Item title={item.description}></Item>
      </div>
    );
  });

  const handleChangeAddItem = (ev) => {
    setItem(ev.target.value);
  };

  const handleAddItem = () => {
    if (item) {
      setItemList([...itemList, { id: itemList.length, description: item }]);
      setItem("");
      setLastState(itemList)
    } else {
      alert("Task field is empty");
    }
  };

  const handleDeleteItem = () => {
    const taskList = itemList.filter((item) => item != itemSelected);
    setItemList(taskList);
    setLastState(itemList);
  };

  const returnState = ()=>{
    setItemList(lastState);
  }

  return (
    <div className="main-container text-center mt-5">
      <h4>This is a technical proof</h4>
      <p className="description-todoList">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="item-container ">{handleItem}</div>
      <div className="btn-container">
        <div>
          <button type="button" className="btn-todo-list btn-return" onClick={() => returnState()}>
            <i className="fa-solid fa-arrow-rotate-left"></i>
          </button>
          <button
            type="button"
            className="btn-todo-list"
            onClick={handleDeleteItem}
          >
            DELETE
          </button>
        </div>
        <button
          type="button"
          className="btn-todo-list btn-add"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
        >
          ADD
        </button>
      </div>

      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <div className="content-modal">
                  <label hmtlfor="recipient-name" className="mb-2">Add item to list</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={item}
                    onChange={handleChangeAddItem}
                    placeholder="Type the text here..."
                    maxLength={60}
                  ></input>
                </div>
              </form>
            </div>
            <div className="footer-modal">
              <button
                type="button"
                className="btn-todo-list"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-todo-list btn-add"
                onClick={() => handleAddItem()}
                data-bs-dismiss="modal"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
