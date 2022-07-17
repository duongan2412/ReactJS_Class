import { ADD_USER, UPDATE_USER, SET_SELECTED_USER, DELETE_USER } from "../Types/user";

const DEFAULT_STATE = {
    userList: [
        {
            id: 1,
            userName: "man.nguyen",
            fullName: "Man Ng",
            email: "man.nguyen@gmail.com",
            password: "123",
            phone: "01234546733",
            type: "Client"
        },
        {
            id: 2,
            userName: "khai.tran",
            fullName: "Khai Tran",
            email: "khai.tran@gmail.com",
            password: "123",
            phone: "01674552333",
            type: "Admin"
        },
    ],
    selectedUSer: null
};

export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case ADD_USER: {
            const data = [...state.userList];
            data.push({ ...payload, id: Date.now() })
            state.userList = data;
            return { ...state };
        }
        case SET_SELECTED_USER: {
            // state.selectedUSer = payload;
            return { ...state, selectedUSer: payload }
        }
        case UPDATE_USER: {
            // const data = [...state.userList];
            // const idx = data.findIndex(ele => ele.id === payload.id);
            // if (idx !== -1) {
            //     data[idx] = payload
            // };
            // state.userList = data;
            // state.selectedUSer = null;
            state.userList = state.userList.map(ele => ele.id === payload.id ? payload : ele)
            state.selectedUSer = null;
            return { ...state }
        }
        case DELETE_USER: {
            // const data = [...state.userList];
            // const idx = data.findIndex(ele => ele.id === payload);
            // if (idx !== -1) {
            //     data.splice(idx, 1)
            // }
            // state.userList = data;
            state.userList = state.userList.filter(ele => ele.id !== payload)
            return { ...state }
        }
        default:
            return state;
    }
}