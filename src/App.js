import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
/*useEffect*/

function App() {
  const [value, setValue] = useState(0);
  const [keyword, setKeword] = useState("");
  const changeValue = () => setValue((prev) => prev + 1);
  const onChage = (event) => {
    setKeword(event.target.value);
  };
  useEffect(() => {
    console.log("컴포넌트 처음 생성시에만 실행");
  }, []);
  useEffect(() => console.log("Call the API..."), []);
  /*컴포넌트가 생성되는 첫 시점에 
  useEffect 코드가 딱 한번만 실행될수 있도록 보호해줌*/
  useEffect(() => {
    if (keyword !== "" && keyword.length >= 5) {
      console.log("Search for ", keyword);
    }
    /*keyword가 변화할때만 항상 코드가 실행이 됨
  키워드가 빈값이 아니고, keyword의 길이가 5 이상일때만 실행하도록 설정
  */
  }, [keyword]);
  useEffect(() => {
    console.log("카운터가 변할때만 실행");
  }, [value]);
  useEffect(() => {
    console.log("카운터 or 키워드가 변화할 시 실행되도록 코딩");
  }, [keyword, value]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChage}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}> {value}</h1>
      <Button changeValue={changeValue} text={"+"} />
    </div>
  );
}

export default App;
