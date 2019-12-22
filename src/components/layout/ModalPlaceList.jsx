import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

const ThanksMsg = ({ nameValue, emailValue }) => {
  return (
    <div className="modal-block">
      <h3 className="text-center">{`${nameValue} cпасибо за покупку!`}</h3>
      <p>{`Билеты отправлены вам на почту ${emailValue}`}</p>
      <div className="text-center">
        <Link to="/movies" className="btn">вернутся к фильмам</Link>
      </div>
    </div>
  );
};

const FormLogin = ({ booked, nameValue, emailValue, handleChangeName, handleChangeEmail, handleSubmit }) => {
  return (
    <div className="modal-block">
      <h3 className="text-center">Вы выбрали</h3>
      <ul className="text-center place-list">
        {booked.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-block">
          <label htmlFor="name">Имя:</label>
          <input required id="name" type="text" value={nameValue} onChange={handleChangeName} />
        </div>
        <div className="form-block">
          <label htmlFor="email">Эл. адрес:</label>
          <input required id="email" type="email" value={emailValue} onChange={handleChangeEmail} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn">купить</button>
        </div>
      </form>
    </div>
  );
};

export class ModalPlaceList extends React.Component {
  state = {
    nameValue: '',
    emailValue: '',
    secondModal: false
  };

  handleChangeName = (event) => {
    this.setState({
      nameValue: event.target.value
    });
  };

  handleChangeEmail = (event) => {
    this.setState({
      emailValue: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      secondModal: true
    });
  };

  componentWillMount() {
    this.root = document.createElement("div");
    this.body = document.querySelector("body");
    this.body.classList.add('modal-show');
    this.body.appendChild(this.root);
  };

  componentWillUnmount() {
    this.root.remove();
    this.body.classList.remove('modal-show');
  };

  render() {
    const { nameValue, emailValue, secondModal } = this.state;
    const { bookedPlace, handleClickBay } = this.props;
    return ReactDOM.createPortal(
      <div className="modal-holder">
        <div className="modal-section">
          <button className="modal-close" onClick={handleClickBay}>Close</button>
          {!secondModal
            ? bookedPlace.length
              ? <FormLogin 
                  booked={bookedPlace} 
                  nameValue={nameValue} 
                  emailValue={emailValue} 
                  handleChangeEmail={this.handleChangeEmail} 
                  handleChangeName={this.handleChangeName} 
                  handleSubmit={this.handleSubmit} 
                />
              : <h3 className="text-center">Вы ничего не выбрали</h3>
            : <ThanksMsg nameValue={nameValue} emailValue={emailValue} />
          }
        </div>
      </div>,
      this.root
    );
  };
};