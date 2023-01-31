import { useState, useEffect } from "react";
/*useEffect*/

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    //나머지 매개변수를 이용해서 작성한 toDo 리스트를 toDos에 저장
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="오늘 해야할 일을 적어주세요"
        />
        <button>추가</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
