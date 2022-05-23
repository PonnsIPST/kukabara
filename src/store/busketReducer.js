
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
        case "increasePrice":
            console.log(action.payload)
            return { ...state, price: state.price + action.payload }
        case "reducePrice":
            return { ...state, price: state.price - action.payload }
        case "noPrice":
            return { ...state, price: 0 }
        case "clear":
            return { ...state, goodsInBusket: [] }
        default:
            return state;
    }
}

export const addToBusket = (payload) => ({ type: 'toBusket', payload })
export const rmFromBusket = (payload) => ({ type: 'outOfBusket', payload })
export const incPrice = (payload) => ({ type: 'inceasePrice', payload })
export const redPrice = (payload) => ({ type: 'reducePrice', payload })
export const noPrice = (payload) => ({ type: 'noPrice', payload })
export const clearBusket = (payload) => ({ type: 'clear', payload })