import * as actionTypes from './actionType';
import { toast } from 'react-hot-toast';
export const fetchAccount = (data) => {
    return {
        type: actionTypes.FETCH_ACCOUNT,
        payload: data,
    }

}
export const notifyError = (data) => {
    return {
        type: actionTypes.FETCH_ACCOUNT,
        payload: data,
    }

}
export const getSlider = (data) => {
    return {
        type: actionTypes.FETCH_SLIDE,
        payload: data,
    }
}
export const getProfile = (data) => {
    return {
        type: actionTypes.FETCH_PROFILE,
        payload: data,
    }
}

export const getProductSearch = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCT_SEARCH,
        payload: data,
    }

}
export const getProduct = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCT,
        payload: data,
    }

}
export const getProductAll = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCT_ALL,
        payload: data,
    }

}
export const isLoadmore = (data) => {
    return {
        type: actionTypes.LOADMORE,
        payload: data
    }

}
export const addToCart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: data
    }

}
export const SaveCart = (product) => {
    return {
        type: actionTypes.SAVE_TO_CART,
        payload: product
    }

}
export const SaveCartReview = (product) => {
    return {
        type: actionTypes.SAVE_TO_CART_REVIEW,
        payload: product
    }

}
export const ChooseItem = (product) => {
    toast.dismiss()
    toast.success("Add Product Success 👏")
    product.quantity = 1
    return {
        type: actionTypes.SELECT_CART,
        payload: product
    }
}
export const DeleteItem = (product) => {
    toast.dismiss()
    toast.success("Delete success!!")
    return {
        type: actionTypes.DELETE_ITEM,
        payload: product
    }
}
export const ClearStepPayment = (product) => {
    return {
        type: actionTypes.CLEAR_PAYMENT,
        payload: product
    }
}
export const ChangeQuantityItem = (product) => {
    switch (product.temp) {
        case "minus":
            if (product.item.quantity > 1) {
                product.item.quantity -= 1
            }
            break;
        case "plus":
            product.item.quantity += 1
            break;
        default:
            return;
    }
    return {
        type: actionTypes.CHANGE_QUANTITY_ITEM,
        payload: product.item
    }
}
export const stepFasle = (action) => {
    return {
        type: actionTypes.STEP_PAY,
        payload: action.product_id,
        value: action.value
    }
}
export const savelistVoucher = (data) => {
    return {
        type: actionTypes.SAVE_LIST_VOUCHER,
        payload: data
    }
}
export const savelistCategory = (data) => {
    return {
        type: actionTypes.SAVE_LIST_CATEGORY,
        payload: data
    }
}
export const saveItemOrder = (data) => {
    return {
        type: actionTypes.SAVE_ITEM_ORDER,
        payload: data
    }
}