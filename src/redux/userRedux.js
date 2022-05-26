//selectors
export const getUser = ({ user }) => user;

//action name creator
const createActionName = actionName => `app/user/${actionName}`;
const EDIT_USER = createActionName('EDIT_USER');

// action creators
export const editUser = payload => ({ type: EDIT_USER, payload });

//reducer
const userReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case EDIT_USER:
      return { ...statePart, status: action.payload };
    default:
      return statePart;
  }
};

export default userReducer;
