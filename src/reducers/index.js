const initialState = {
    data: [],
    empty:[]
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case "UPDATE_DATA":
            return { ...state, data: [ payload] }

        default:
            return state
    }
}
