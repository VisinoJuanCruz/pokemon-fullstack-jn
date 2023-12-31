import {
    GET_POKEMONS,
} from "./actions_types";

export const initialState = {
    pokemons: [],
    pageNumber: []
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POKEMONS:
        return {
          ...state,
          pokemons: action.payload.pageData,
          pageNumber: action.payload.countPages
        };
        default:
          return { ...state };
    }
}

export default rootReducer;

