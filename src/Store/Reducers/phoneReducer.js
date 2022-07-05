import dsDienThoai from "../../data/dataDT.json";

const DEFAULT_STATE = {
    selectedPhone: dsDienThoai[0],
    cartList: [],
};

export const phoneReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SELECTED_PHONE': {
            state.selectedPhone = action.payload
            return { ...state }
        }
        case 'ADD_TO_CART': {
            const data = [...state.cartList];
            const idx = data.findIndex(ele => ele.maSP === action.payload.maSP);

            if (idx !== -1) {
                data[idx].soLuong += 1;
            } else {
                data.push({ ...action.payload, soLuong: 1 });
            }

            // this.setState({
            //     cartList: data,
            // }, () => {
            //     // console.log(this.state.cartList);
            // })

            console.log(action.payload);
            state.cartList = data;
            return { ...state };
        }
        case 'HANDLE_QTY': {
            const { phone, isIncrease } = action.payload;
            const data = [...state.cartList];
            const idx = data.findIndex(ele => ele.maSP === phone.maSP);

            if (idx === -1) {
                alert("Không tìm thấy sản phẩm");
                throw new Error("Không tìm thấy sản phẩm");
            }

            if (isIncrease) {
                data[idx].soLuong += 1;
            } else if (data[idx].soLuong > 1) {
                data[idx].soLuong -= 1;
            } else if (window.confirm("Bạn có muốn xóa ko?")) {
                data.splice(idx, 1);
            }

            console.log(action.payload);
            state.cartList = data;

            return { ...state };
        }
        default:
            return state;
    }
};