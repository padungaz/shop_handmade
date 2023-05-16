import toast from "react-hot-toast";
import { GetDataProduct } from "../../api/adminMethodAip";
import {
  fetProducts,
  fetSlide,
  createAccount,
  createProfileAccount,
  getAccount,
  createItemCart,
} from "../../api/";
import {
  fetchAccount,
  getProduct,
  getProductSearch,
  getProfile,
  getSlider,
  SaveCart,
  saveItemOrder,
  savelistCategory,
  savelistVoucher,
} from "../userReducer/action-reduce";
import {
  isLoadmore,
  addToCart,
  SaveCartReview,
} from "./../userReducer/action-reduce";
import {
  createItemPayment,
  FetchListOrder,
  fetPayment,
  fetProductSearch,
  fetProfile,
  getCartItem,
  getCategory,
  getListVoucher,
  updateAccountUser,
  updateCartItem,
  updateProfileUser,
} from "../../api/apiMethod";
import { putItemInCart } from "./../../api/apiMethod";
import store from "./../store";
import { GetOrder } from "../../api/adminMethodAip/apiMethodAccount";

export const checkLogin = () => {
  return (dispatch) => {
    (async () => {
      try {
        const locale = localStorage.getItem("infoAccount")
          ? JSON.parse(localStorage.getItem("infoAccount"))
          : null;
        if (locale !== null) {
          const data = await getAccount(`/${locale.id}`).then((res) =>
            res.json()
          );
          dispatch(fetchAccount(data));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

export const fetDataAsyn = (path = "") => {
  return (dispatch) => {
    (async () => {
      try {
        const data = await getAccount(path);
        dispatch(fetchAccount(data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

export const fetListProduct = (path) => {
  return (dispatch) => {
    (async () => {
      try {
        // console.log(path);
        const data = await fetProducts({
          page: 1,
          limit: path.limit,
          sort: path.sort,
          filter: path.filter,
          category: path.category
        });
        const load = await fetProducts({
          ...path,
          limit: 4,
          page: path.page + 1,
        });
        dispatch(isLoadmore(load.length === 0 ? false : true));
        dispatch(getProduct(data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const fetListProductSearch = (path) => {
  return (dispatch) => {
    (async () => {
      try {
        const data = await fetProductSearch({
          page: 1,
          limit: path.limit,
          sort: path.sort,
          filter: path.filter,
          search: path.search,
        });
        const load = await fetProductSearch({
          ...path,
          limit: 6,
          page: path.page + 1,
        });
        dispatch(isLoadmore(load.length === 0 ? false : true));
        dispatch(getProductSearch(data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const fillCategory = (path) => {
  return (dispatch) => {
    (async () => {
      try {
        const data = await fetProductSearch({
          page: 1,
          limit: path.limit,
          sort: path.sort,
          filter: path.filter,
          search: path.category !== "" ? `&category=${path.category}` : ""
        })
        dispatch(getProduct(data));
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })()
  }
}
export const fetCategory = () => {
  return (dispatch) => {
    (async () => {
      try {
        const data = await getCategory().then(res => res.json())
        dispatch(savelistCategory(data));
      } catch (error) {
        console.log(error);
      }
    })()
  }
}
export const getSlide = () => {
  return (dispatch) => {
    (async () => {
      try {
        const data = await fetSlide();
        const text = data.data.reduce((a, b) => a + `&id=${b}`, "?");
        const response = await GetDataProduct(text).then((res) => res.json());
        dispatch(getSlider(response));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const getProfileUser = () => {
  return (dispatch) => {
    (async () => {
      try {
        const locale = localStorage.getItem("infoAccount")
          ? JSON.parse(localStorage.getItem("infoAccount"))
          : null;
        if (locale !== null) {
          await getAccount(`/${locale.id}`)
            .then((res) => ResCheck(res, "", "Error Data", 200))
            .then(async (res) => {
              const data = await fetProfile(res.profile_id);
              const dataPayment = await fetPayment(res.payment_id);
              dispatch(
                getProfile({
                  acc: res,
                  profile: data,
                  payment: dataPayment,
                })
              );
            });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const updateInfoUser = (data, call) => {
  return (dispatch) => {
    (async () => {
      try {
        const { acc, profile, valueform } = data;
        let isTrue = { pro: false, acc: false };
        profile.fullname = valueform.fullname;
        profile.email = valueform.email;
        profile.address = valueform.address;
        acc.telephone = valueform.telephone;
        await updateProfileUser(profile).then((res) =>
          ResCheck(res, "", "", 200, () => {
            isTrue.pro = true;
          })
        );
        await updateAccountUser(acc).then((res) =>
          ResCheck(res, "", "", 200, () => {
            isTrue.acc = true;
          })
        );

        if (isTrue.pro === true && isTrue.acc === true) {
          toast.success("success");
          call && call();
        } else {
          toast.error("error");
        }
      } catch (error) {
        toast.error("error");
        console.log(error);
      }
    })();
  };
};
export const createAccountAsyn = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        await createAccount(data.account);
        await createProfileAccount(data.profile);
        await createItemCart(data.cartItem);
        await createItemPayment(data.paymentItem);
        toast.loading("Wating...");
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
const ResCheck = (res, mesSuccess = "", mesError = "", param = 200, call) => {
  if (res.status === param) {
    toast.dismiss();
    mesSuccess !== "" && toast.success(mesSuccess);
    if (call) {
      call();
    }
    return res.json();
  }
};
export const getCart = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        const rest = await getCartItem(data).then(
          (res) => res.status === 200 && res.json()
        );
        dispatch(addToCart(rest));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const putCart = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        const respose = await getCartItem(data.id).then((res) => ResCheck(res));
        const check = respose.cart.findIndex(
          (e) => e.product_id === data.data.product_id
        );
        const temp = {
          ...respose,
          cart: check === -1 ? [...respose.cart, data.data] : [...respose.cart],
        };
        await putItemInCart(data.id, temp).then((res) =>
          ResCheck(res, "Success")
        );
        dispatch(addToCart(data.data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const getDataItemReview = () => {
  return (dispatch) => {
    (async () => {
      try {
        const localitems = localStorage.getItem("infoAccount")
          ? JSON.parse(localStorage.getItem("infoAccount"))
          : {};
        if (localitems.cart_id) {
          const data = await getCartItem(localitems.cart_id)
            .then((res) => res.status === 200 && res.json())
            .then((res) => {
              const datareview = res.cart.map((_) => _.product_id);
              return datareview;
            });
          const dataList = await fetProducts({ page: 1, filter: data });
          dispatch(SaveCartReview(dataList));
        }
      } catch (error) { }
    })();
  };
};
export const getDataCartItem = () => {
  return (dispatch) => {
    (async () => {
      try {
        const localitem = localStorage.getItem("infoAccount")
          ? JSON.parse(localStorage.getItem("infoAccount"))
          : {};
        if (localitem.cart_id) {
          await getCartItem(localitem.cart_id)
            .then((res) => res.status === 200 && res.json())
            .then((res) => {
              dispatch(SaveCart(res));
            });
        }
      } catch (error) { }
    })();
  };
};

export const deleteItemInCart = (id) => {
  return (dispatch) => {
    (async () => {
      try {
        const locale = localStorage.getItem("infoAccount")
          ? JSON.parse(localStorage.getItem("infoAccount"))
          : null;
        const temp = store
          .getState()
          .users.cart.cart.filter((_) => {
            if ((Array.isArray(id))) {
              if (id.includes(_.product_id)) {
                return false
              } else {
                return _
              }
            } else {
              if (id !== _.product_id) {
                return _
              }
            }

          })
        const response = { id: locale.cart_id, cart: temp };

        await updateCartItem(locale.cart_id, response)
          .then((res) => {
            if (res.status === 200) {
              toast.dismiss();
              toast.success("Clear Item cart success!");
              dispatch(SaveCart(response));
            }
          })
          .catch((error) => {
            toast.dismiss();
            toast.error(error.message);
          });
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

/// ----clear all Cart --------
export const clearCartUser = (item) => {
  return (dispatch) => {
    (async () => {
      try {
        await updateCartItem(item.id, item)
          .then((res) => {
            if (res.status === 200) {
              toast.dismiss();
              toast.success("Clear cart success!");
              dispatch(SaveCart(item));
            }
          })
          .catch((error) => {
            toast.dismiss();
            toast.error(error.message);
          });
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
/// ------------------ get list voucher ------------////
export const FetchListVoucher = () => {
  return (dispatch) => {
    (async () => {
      try {
        await getListVoucher()
          .then((res) => res.json())
          .then((res) => {
            dispatch(savelistVoucher(res));
          });
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const createOrder = (data, call) => {
  return (dispatch) => {
    (async () => {
      try {
        await FetchListOrder(data).then(() => call && call())
        const { list_product_order } = data
        const temp = list_product_order.map(_ => {
          return _.product_id
        })

        dispatch(deleteItemInCart(temp))

      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const fetchOrder = (param) => {
  return (dispatch) => {
    (async () => {
      try {
        const txt = `?profile_id=${param}`
        const data = await GetOrder(txt).then(_ => _.json())
        console.log(data);
        dispatch(saveItemOrder(data))
      } catch (error) {
        console.log(error);
      }
    })();
  };
};


