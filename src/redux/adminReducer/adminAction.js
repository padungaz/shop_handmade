import * as _ from "./actionTypeAd";
export const SetDataProduct =(data)=>{
    return {
        type : _.GET_LIST_PRODUCT,
        payload :data
    }
}
export const AddProduct =(data)=>{
    return {
        type : _.ADD_PRODUCT,
        payload :data
    }
}
export const saveSlideShow =(data)=>{
    return {
        type : _.SAVE_LIST_SLIDER,
        payload: data
    }
}
export const addListSlider =(data)=>{
    return {
        type : _.ADD_LIST_SLIDER,
        payload: data
    }
}
export const saveInfoUser =(data)=>{
    return {
        type : _.SAVE_INFO_USER,
        payload: data
    }
}
export const listRating =(data)=>{
    return {
        type : _.SAVE_LIST_RATING,
        payload: data
    }
}
export const historyOrder =(data)=>{
    return {
        type : _.SAVE_LIST_HiSTORY_ORDER,
        payload: data
    }
}
export const saveOrder =(data)=>{
    return {
        type : _.SAVE_LIST_ORDER,
        payload: data
    }
}
export const ChangeOrder =(data)=>{
    return {
        type : _.CHANGE_LIST_ORDER,
        payload: data
    }
}
export const saveListVoucher =(data)=>{
    return {
        type : _.SAVE_LIST_VOUCHER,
        payload: data
    }
}
export const selectItemVoucher =(data)=>{
    return {
        type : _.SELECT_VOUCHER,
        payload: data.data,
        index:  data.index
    }
}
export const deleteItemVoucher =(data)=>{
    return {
        type : _.DELETE_VOUCHER,
        payload: data
    }
}
export const addItemVoucher =(data)=>{
    return {
        type : _.ADD_VOUCHER,
        payload: data
    }
}
export const selectItemUser =(data)=>{
    return {
        type : _.SELECT_USER,
        payload: data,
    }
}