const DEFAULT_STATE = {
    selectType: "topclothes",
    model: {
        topclothes: "/img/clothes/topcloth5.png",
        botclothes: "/img/clothes/botcloth4.png",
        shoes: "/img/shoes/shoes2.png",
        handbags: "/img/handbags/handbag2.png",
        necklaces: "img/necklaces/necklace3.png",
        hairstyle: "/img/hairstyle/hairstyle3.png",
        background: "/img/background/background1.jpg",
    }
};

export const thuDoReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case "SET_SELECTED_TYPE":
            // state.selectType = payload   Cach 1
            return { ...state, selectType: payload };
        case "CHANGE_MODEL":
            const { type, imgSrc_png } = payload;
            const newModel = { ...state.model };
            newModel[type] = imgSrc_png;
            state.model = newModel;
            return { ...state, }

        default:
            return state;
    }
};