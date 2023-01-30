import { useState, useEffect } from "react";
/*useEffect*/

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="오늘 해야할 일을 적어주세요"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default App;
