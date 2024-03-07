import { TAMBAH, KURANG } from "./type";

const initData = {
    counter: 0
}

export const reducerCounter = (state = initData, action) => {
    switch (action.type) {
        case TAMBAH:
            console.log('TAMBAH COUNTER')
            return { ...state, counter: action.data + 1 }
        case KURANG:
            console.log('KURANG COUNTER')
            return { ...state, counter: action.data - 1 }

        default: return state
    }
}