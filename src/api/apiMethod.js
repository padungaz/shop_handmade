// const API_URL = "https://handmader.herokuapp.com/api"
const API_URL = "http://localhost:8000"

export const getAccount = async (path = "") => {
  const data = await fetch(API_URL + `/listAccount${path}`)
  return data;
}
export const getCategory = async (path = "") => {
  const data = await fetch(API_URL + `/listCategory${path}`)
  return data;
}
export const fetProfile = async (param) => {
  const data = await fetch(API_URL + `/listProfile/` + param).then(res => res.json())
  return data;
}
export const fetPayment = async (param) => {
  const data = await fetch(API_URL + `/listPayment/` + param).then(res => res.json())
  return data;
}

export const fetSlide = async () => {
  const slide = await fetch(API_URL + "/slideShow").then(res => res.json())
  return slide;
}
export const fetProducts = async (path) => {
  const slide = await fetch(API_URL + `/listProduct?_page=${path.page}&_limit=${path.limit}${path.filter}${path.sort}${path.category ? path.category : ""}`).then(res => res.json())
  return slide;
}
export const fetProductSearch = async (path) => {
  const slide = await fetch(API_URL + `/listProduct?_page=${path.page}&_limit=${path.limit}${path.filter}${path.sort}${path.search}`).then(res => res.json())
  return slide;
}


export const createAccount = (data) => {
  return fetch(API_URL + `/listAccount`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};
export const createProfileAccount = (data) => {
  return fetch(API_URL + `/listProfile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
export const createItemCart = (data) => {
  return fetch(API_URL + `/listCart`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};
export const createItemPayment = (data) => {
  return fetch(API_URL + `/listPayment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};
export const putItemInCart = (id, data) => {
  return fetch(API_URL + `/listCart/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};

export const getCartItem = (data = "") => {
  return fetch(API_URL + `/listCart/${data}`);
};
export const updateCartItem = (id, data) => {
  return fetch(API_URL + `/listCart/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}
export const updateProfileUser = (data) => {
  return fetch(API_URL + `/listProfile/${data.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}
export const updateAccountUser = (data) => {
  return fetch(API_URL + `/listAccount/${data.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}
export const getListVoucher = (param = "") => {
  const data = fetch(API_URL + `/listVoucher/`)
  return data;
}

export const FetchListOrder = (data) => {
  return fetch(API_URL + `/listOrder/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}