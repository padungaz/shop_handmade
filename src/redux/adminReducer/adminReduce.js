import * as _ from "./actionTypeAd";
import { adInitalValue } from "./initalValueAd";

export const adminReduce = (state = adInitalValue, action) => {
  switch (action.type) {
    case _.GET_LIST_PRODUCT:
      return { ...state, dataProducts: action.payload };
    case _.ADD_PRODUCT:
      return {
        ...state,
        dataProducts: [...state.dataProducts, action.payload],
      };
    case _.SAVE_LIST_SLIDER:
      return { ...state, slideShow: action.payload };
    case _.ADD_LIST_SLIDER:
      return { ...state, slideShow: [...state.slideShow, action.payload] };

    case _.SAVE_INFO_USER:
      return { ...state, infomationUser: action.payload };

    case _.SAVE_LIST_RATING:
      return { ...state, ratings: action.payload };

    case _.SAVE_LIST_HiSTORY_ORDER:
      return { ...state, historyOrder: action.payload.sort((_, __) => -1) };

    case _.SAVE_LIST_ORDER:
      action.payload.sort((_, __) => -1);
      return { ...state, listOrder: action.payload };

    case _.CHANGE_LIST_ORDER:
      let temp = state.listOrder.map((_) => {
        if (_.id === action.payload.id) {
          _.time_complete = action.payload.time_complete;
          _.status = action.payload.status;
          return _;
        }
        return _;
      });
      return {
        ...state,
        listOrder: temp,
      };
      case _.SAVE_LIST_VOUCHER:        
        return { ...state, listVoucher: action.payload };
      case _.SELECT_VOUCHER: 
      action.payload.index = action.index       
        return { ...state, itemVoucherSelect: action.payload };
      case _.DELETE_VOUCHER: 
        const tem = state.listVoucher.filter(_=>_.id!==action.payload.id)
        return { ...state, listVoucher: tem };
      case _.ADD_VOUCHER: 
        const add = [...state.listVoucher,action.payload]
        return { ...state, listVoucher: add };
      case _.SELECT_USER:         
        return { ...state, ItemDataSelect: action.payload };
    default:
      return {
        ...state,
      };
  }
};
