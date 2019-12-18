import React, {useState} from 'react';

export const Login = (props) => {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    setNameValue(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameValue === props.user && passwordValue === props.password){
      props.showAdmin();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
  }

  return (
    <div className="login-holder">
      <div className="login-block">
        {error && <span className="error-data">имя или пароль не подходят</span>}
        <h1>Введите имя и пароль</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-block">
            <label htmlFor="name">Имя:</label>
            <input required id="name" type="text" value={nameValue} onChange={handleChangeName} />
          </div>
          <div className="form-block">
            <label htmlFor="password">Пароль:</label>
            <input required id="password" type="password" value={passwordValue} onChange={handleChangePassword} />
          </div>
          <div className="text-center">
            <button type="submit" className="btn">войти</button>
          </div>
        </form>
      </div>
    </div>
  )
}