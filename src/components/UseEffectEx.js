import { useEffect, useState } from "react";

export const UseEffectEx = () => {
  const [num, setNum] = useState(0);

  //   useEffect(() => {
  //     console.log("마운트와 업데이트 할 때 마다 실행함");
  //   });

  //   useEffect(() => {
  //     console.log("마운트 될 때만 실행함");
  //   }, []);

  useEffect(() => {
    console.log("num 값이 변경될때만 실행");
  }, [num]);

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

// *useEffect
// => 앱이 랜더링, 리랜더링, 페이지 이동 등 이런 상황에서 부수적인 동작을 할 때 사용

// mount : 첫 렌더링
// update : 리 랜더링
// unmount : 화면에서 사라질 때 (다른 페이지로 이동할 때)
