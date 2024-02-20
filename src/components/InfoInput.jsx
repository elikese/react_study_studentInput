function InfoInput({ setInputValues, title }) {

    const handleChangeInput = (e) => {
      const change = new Map([
        ['이름', 'name'],
        ['나이', 'age'],
        ['주소', 'address']
      ]);
      const { name, value } = e.target;
      setInputValues((values) => ({ ...values, [change.get(name)]: value }));
    }
    return (
      <>
        <input type='text' onChange={handleChangeInput} name={title} placeholder={title} />
      </>
    )
}

export default InfoInput;