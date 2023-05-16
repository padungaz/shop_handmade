import { API_URL } from "."

export const GetDataVoucher = (pram="")=>{
    const rest= fetch(API_URL+"/listVoucher"+pram)
    return rest
}
export const PostDataListVoucher =(data)=>{
    const rest= fetch(API_URL+"/listVoucher" , {
       method:"POST",
       headers:{
           'Content-Type': "application/json"
       },
       body: JSON.stringify(data)
    })
    return rest
 }
export const DeleteVoucher =(data)=>{
    const rest= fetch(API_URL+"/listVoucher/"+data , {
       method:"DELETE"
    })
    return rest
 }
 