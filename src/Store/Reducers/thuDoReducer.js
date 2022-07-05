const DEFAULT_STATE = {
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
        // case value:

        //     return { ...state };

        default:
            return state;
    }
}