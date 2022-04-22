
const defaultState = {
    price: 0,
    goodsInBusket: []
}
export const busketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "toBusket":
            return { ...state, goodsInBusket: [...state.goodsInBusket, action.payload] }
        case "outOfBusket":
            return { ...state, goodsInBusket: state.goodsInBusket.filter(good => good.title !== action.payload) }
        case "clear":
            return { ...state, goodsInBusket: [] }
        default:
            return state;
    }
}