const initialState = {

}

export default (state = {}, action) => {
  console.log(this, state, action);
  switch(action.type) {
    case 'ADD_GAME_PIECE' :
    return { turn } = action;
    let newState = Object.assign({}, state, {
      xIsNext: turn,
    });
    return newState
    default:
    return state;
    }
  };
