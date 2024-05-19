import ACTION_TYPE from "./constants/action_type";


export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.init:
      return {
        query: action.payload.query,
        items: action.payload.items
      }
    case ACTION_TYPE.add_item:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case ACTION_TYPE.change_search:
      return {
        ...state,
        query: action.payload
      }
    case ACTION_TYPE.complete_item:
      return {
        ...state,
        items: state.items.map((i) => i.id === action.payload ? { ...i, complete: true } : i)
      }
    default:
      return state;
  }
}