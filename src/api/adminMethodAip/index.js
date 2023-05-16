
// export const API_URL = "https://handmader.herokuapp.com/api";
export const API_URL = "http://localhost:8000";

export const GetDataProduct = (pram = "") => {
   const rest = fetch(API_URL + "/listProduct" + pram)
   return rest
}
export const GetDataProfile = (pram = "") => {
   const rest = fetch(API_URL + "/listProfile" + pram)
   return rest
}
export const PutDataProduct = async (data) => {
   const rest = await fetch(API_URL + "/listProduct" + `/${data.id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
   })
   return rest
}
export const PostDataProduct = (data) => {
   const rest = fetch(API_URL + "/listProduct", {
      method: "POST",
      headers: {
         'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
   })
   return rest
}
export const GetDataSlideShow = async () => {
   const rest = await fetch(API_URL + "/slideShow/")
   return rest
}
export const PutDataSlideShow = async (data) => {
   const rest = await fetch(API_URL + "/slideShow", {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: data })
   })
   return rest
}
export const PutDataCategory = async (data) => {
   const rest = await fetch(API_URL + "/listCategory", {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: data })
   })
   return rest
}
export const PutDataOrder = async (data) => {
   const rest = await fetch(API_URL + "/listOrder/" + data.id, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
   })
   return rest
}
 export const DeleteDataOrder = async(id)=>{
    const rest= await fetch(API_URL+"/listOrder/" + id,{
       method:"DELETE"
    })
    return rest
}


