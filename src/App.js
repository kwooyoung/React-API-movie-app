import { useState, useEffect } from "react";
/*useEffect*/
function Hello() {
  /*function byFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("hi");
    return byFn;
  }
  useEffect(hiFn, []);
  useEffect는 function을 받고 이 function은 dependency가 변화할때 호출.
  위 경우 dependency가 비어있으니, 컴포넌트가 처음 생성될 때 function이
  호출된 후에 다시 호출하지 않음. component가 파괴될 때도 function을 실행하고
  싶으면, hiFn이 byFn을 return 해야 함 react.js가 hiFn을 실행하고 
  component가 파괴될 때는 react.js는 hiFn이 return 한 function을 실행함.
  -> 왜냐면 deps가 비어있으면 자동으로 컴포넌트가 파괴될 때 cleanup함수가 
  실행되는데 그 과정이 리렌더링으로 useEffect함수가 실행되고 클린업하면서
   이전에 있던 이펙트인 console.log(“created :) )가 삭제되고 
   새로운 이펙트 함수인 return함수가 실행되기 때문이다.
리렌더링 -> 이전 이펙트 클린업 -> 이펙트 실행

  */
  useEffect(() => {
    console.log("i'm here!");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default App;
