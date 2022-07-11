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
        case "ADD_USER": {
            const data = [...state.userList];
            data.push({ ...payload, id: Date.now() })
            state.userList = data;
            return { ...state };
        }
        case "SET_SELECTED_USER": {
            // state.selectedUSer = payload;
            return { ...state, selectedUSer: payload }
        }
        default:
            return state;
    }
}