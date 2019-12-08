import React, {useState} from 'react';

export const Login = (props) => {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState(false);

  const hendleChangeName = (event) => {
    setNameValue(event.target.value);
  };

  const hendleChangePassword = (event) => {
    setPasswordValue(event.target.value);
  };

  const hendleSubmit = (event) => {
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
        <form onSubmit={hendleSubmit}>
          <div className="form-block">
            <label htmlFor="name">Имя:</label>
            <input required id="name" type="text" value={nameValue} onChange={hendleChangeName} />
          </div>
          <div className="form-block">
            <label htmlFor="password">Пароль:</label>
            <input required id="password" type="password" value={passwordValue} onChange={hendleChangePassword} />
          </div>
          <div className="text-center">
            <button type="submit" className="btn">войти</button>
          </div>
        </form>
      </div>
    </div>
  )
}