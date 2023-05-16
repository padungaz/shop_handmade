import { API_URL } from ".";

export const GetAccoutAll = (param="")=>{
    const rest = fetch(API_URL+'/listAccount'+param)
    return rest
};
export const GetAllProfileUser =(pram="")=>{
    const rest = fetch(API_URL+'/listProfile'+pram)
return rest
};
export const GetListCart =(pram="")=>{
    const rest = fetch(API_URL+'/listCart'+pram)
return rest
};
export const GetListPayment =(pram="")=>{
    const rest = fetch(API_URL+'/listPayment'+pram)
return rest
};
export const GetOrder=(pram="")=>{
    const rest = fetch(API_URL+'/listOrder'+pram)
return rest
};
export const GetCategory=(pram="")=>{
    const rest = fetch(API_URL+'/listCategory'+pram)
return rest
};
