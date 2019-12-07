import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

export class ModalPlaceList extends React.Component {
  state = {
    nameValue: '',
    emailValue: '',
    secondModal: false
  };

  hendleChangeName = (event) => {
    this.setState({
      nameValue: event.target.value
    });
  };

  hendleChangeEmail = (event) => {
    this.setState({
      emailValue: event.target.value
    });
  };

  hendleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      secondModal: true
    });
  }

  componentWillMount() {
    this.root = document.createElement("div");
    this.body = document.querySelector("body");
    this.body.classList.add('modal-show');
    this.body.appendChild(this.root);
  }

  componentWillUnmount() {
    this.root.remove();
    this.body.classList.remove('modal-show');
  }

  render() {
    const { nameValue, emailValue, secondModal } = this.state;
    const { bookPlace, handleClickBay } = this.props;
    return ReactDOM.createPortal(
      <div className="modal-holder">
        <div className="modal-section">
          <button className="modal-close" onClick={handleClickBay}>Close</button>
          {!secondModal
            ? bookPlace.length
              ? <div className="modal-block">
                <h3 className="text-center">Вы выбрали</h3>
                <ul className="text-center place-list">
                  {bookPlace.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <form className="form" onSubmit={this.hendleSubmit}>
                  <div className="form-block">
                    <label htmlFor="name">Имя:</label>
                    <input required id="name" type="text" value={nameValue} onChange={this.hendleChangeName} />
                  </div>
                  <div className="form-block">
                    <label htmlFor="email">Эл. адрес:</label>
                    <input required id="email" type="email" value={emailValue} onChange={this.hendleChangeEmail} />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn">купить</button>
                  </div>
                </form>
              </div>
              : <h3 className="text-center">Вы ничего не выбрали</h3>
            : <div className="modal-block">
                <h3 className="text-center">{`${nameValue} cпасибо за покупку!`}</h3>
                <p>{`Билеты отправлены вам на почту ${emailValue}`}</p>
                <div className="text-center">
                  <Link to="/movies" className="btn">вернутся к фильмам</Link>
                </div>
              </div>
          }
        </div>
      </div>,
      this.root
    );
  }
}