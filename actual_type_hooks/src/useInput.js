import React, { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;
    //validator의 사용 첫번째
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };

  //준괄호 안에 값을 담아서 리턴하느냐 마느냐의 차이점이 무엇인가?
  // return value;
};

const useInputParent = () => {
  //validator의 사용 두번째의 첫번째 예시
  const maxLen = value => value.length <= 10;
  //validator의 사용 두번째의 두번쨰 예시
  const notAt = value => !value.includes("@");
  // const name = useInput("Mr.", maxLen);
  const name = useInput("Mr.", notAt);
  const password = useInput("", maxLen);
  return (
    <div className="useInputParent">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      <input placeholder="Password" {...password} />
    </div>
  );
};

export default useInputParent;
