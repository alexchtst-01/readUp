import {TAMBAH, KURANG} from "./type"

export const tambahCounter = (counter) => ({
    type: TAMBAH,
    data: counter
})

export const kurangCounter = (counter) => ({
    type: KURANG,
    data: counter
})