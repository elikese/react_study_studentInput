import { useEffect, useState } from 'react';
import './App.css';

function StudentInfo({ title, studentInfo }) {
  return (
    <>
      <h1>{title}: {studentInfo}</h1>
    </>
  )
}

function Infoinput({ setInputValues, title }) {

  const handleChangeInput = (e) => {
    const change = new Map([
      ['이름', 'name'],
      ['나이', 'age'],
      ['주소', 'address']
    ]);
    const { name, value } = e.target;
    console.log([change.get(name)]);
    setInputValues((values) => ({ ...values, [change.get(name)]: value }));
  }
  return (
    <>
      <input type='text' onChange={handleChangeInput} name={title} placeholder={title} />
    </>
  )
}


function App() {
  const sutdentObj = {
    name: "",
    age: "",
    address: ""
  }

  const [student, setStudent] = useState(sutdentObj);
  const [inputValues, setInputValues] = useState(sutdentObj);
  const [refresh, setRefresh] = useState(false);

  // 최초 1회 동작. 이후 의존성 등록된 변수의 변화마다 동작
  // 이를 refresh라는 flag를 만들어 if문에 감싸서 최초1회를 막음

  useEffect(() => {
    if (refresh) {
      setInputValues(sutdentObj);
    }
    setRefresh(true);
  }, [student]);


  /* JS 객체 특)
   * 1. 키값은 문자열이어도 됨
   * 2. 키값을 []로 묶어도 된다. 대괄호 안에는 지역에있는 변수를 키값으로 쓸 수 있다.
   * 3. 지역에 있는 변수명만 입력하면, 변수이름이 키값이 되고 대입되는 값이 밸류가 된다.
   */

  // let email = "email";
  // let phone = "01011223366";

  // let User = {
  //   username: "test",
  //   ["password"]: "1234",
  //   [email]: "test",
  //   phone
  // }

  const handleOnClean = () => {
    setStudent(sutdentObj);
  }

  const handleOnOk = () => {
    setStudent(inputValues);
  }

  return (
    <>
      <StudentInfo
        studentInfo={student.name}
        title={"이름"} />
      <StudentInfo
        studentInfo={student.age}
        title={"나이"} />
      <StudentInfo
        studentInfo={student.address}
        title={"주소"} />

      <Infoinput
        setInputValues={setInputValues}
        value={inputValues.name}
        title={"이름"} />
      <Infoinput
        setInputValues={setInputValues}
        value={inputValues.age}
        title={"나이"} />
      <Infoinput
        setInputValues={setInputValues}
        value={inputValues.address}
        title={"주소"} />

      <button onClick={handleOnOk}>확인</button>
      <button onClick={handleOnClean}>비우기</button>
    </>
  );
}

export default App;
