import { useRef } from "react";
import { MdLibraryAdd } from "react-icons/md";
function TableHead({ onNewItom }) {
  const NameElement = useRef();
  const DateElement = useRef();

  const handleAddTask = () => {
    event.preventDefault();
    const Name = NameElement.current.value;
    const Date = DateElement.current.value;
    NameElement.current.value = "";
    DateElement.current.value = "";
    onNewItom(Name, Date);
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddTask}>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Add a task"
            ref={NameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" ref={DateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success">
            <MdLibraryAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TableHead;
