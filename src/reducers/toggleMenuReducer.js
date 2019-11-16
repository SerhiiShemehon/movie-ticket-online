import { TOGGLE_MENU } from "../constants";

const INITIAL_DATA = {
  menuClass: 'hide-menu',
  buttonClass: 'no-active'
};


export const toggleMenuReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuClass: state.menuClass === 'hide-menu' ? 'show-menu' : 'hide-menu',
        buttonClass: state.buttonClass === 'no-active' ? 'is-active' : 'no-active'
      };
  
    default:
      return state;
  }
}