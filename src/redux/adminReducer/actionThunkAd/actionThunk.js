import toast from "react-hot-toast";
import {
  DeleteDataOrder,
  GetDataProduct,
  GetDataSlideShow,
  PostDataProduct,
  PutDataCategory,
  PutDataOrder,
  PutDataProduct,
  PutDataSlideShow,
} from "../../../api/adminMethodAip";
import {
  GetAccoutAll,
  GetAllProfileUser,
  GetListPayment,
  GetOrder,
} from "../../../api/adminMethodAip/apiMethodAccount";
import store from "../../store";
import {
  AddProduct,
  ChangeOrder,
  historyOrder,
  listRating,
  saveInfoUser,
  saveOrder,
  saveSlideShow,
  SetDataProduct,
} from "../adminAction";

export const checkRespose = (param, message ,callback) => {
   if(param.status === 200 ){ 
    if(callback){
      callback()
    }
    return param.json() 
  }else{toast.error(message); } 
};

export const fetchDataProduct = () => {
  return (dispatch) => {
    (async () => {
      try {
        await GetDataProduct()
          .then((res) => res.status === 200 && res.json())
          .then((res) => {
            dispatch(SetDataProduct(res));
          })
          .catch((error) => {
            toast.error(`${error.message}`);
          });
      } catch (error) {
        toast.error(`${error}`);
      }
    })();
  };
};
export const PostProduct = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        await PostDataProduct(data)
          .then((res) =>
            res.status !== 201
              ? console.error(res.message)
              : setTimeout(() => {
                  toast.dismiss();
                  toast.success("Create Product success");
                }, 1000)
          ).then(res=>
            dispatch(AddProduct(data))
            )
          .catch((error) => {
            toast.error("Create Product Fail");
          });
      } catch (error) {
        console.error(error);
      }
    })();
  };
};

export const PutProductThunk = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        await PutDataProduct(data)
          .then((res) => {
            if (res.status !== 200) {
              console.error(res.message);
            } else {
              GetDataProduct()
                .then((res) => res.status === 200 && res.json())
                .then((res) => {
                  dispatch(SetDataProduct(res));
                })
                .catch((error) => {
                  toast.error(`${error.message}`);
                });

              setTimeout(() => {
                toast.dismiss();
                toast.success("Save Product success");
              }, 1000);
            }
          })
          .catch((error) => {
            toast.error("Create Product Fail");
          });
      } catch (error) {
        console.error(error);
      }
    })();
  };
};

export const GetSlideShow = () => {
  return (dispatch) => {
    (async () => {
      try {
        const rest = await GetDataSlideShow().then((res) => res.json());
        const teemp = rest.data.reduce((a, b) => a + `&id=${b}`, "?");
        const data = await GetDataProduct(teemp).then((res) => res.json());
        dispatch(saveSlideShow(data));
      } catch (error) {
        console.error(error);
      }
    })();
  };
};
export const PutSlideShow = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        const temp = data.map((e, i) => e.id);
        dispatch(saveSlideShow(data));
        await PutDataSlideShow(temp)
          .then((res) => {
            res.status === 200 && toast.dismiss();
            res.status === 200 && toast.success("Change Success!",{
              position:"top-right"
            });
          })
          .catch((error) => {
            toast.error("Put Data SlideShow Fail!");
          });
      } catch (error) {
        console.log(error);
      }
    })();
  };
};



export const GetInfomationUser = (param) => {
  return (dispatch) => {
    (async () => {
      try {
        const rest = await GetAccoutAll().then((res) =>
          checkRespose(res, "Call AIP fail!")
        );
        const respose = await GetListPayment(param).then((res) =>
          checkRespose(res, "Call List Payment Fail!")
        );
        const profile = await GetAllProfileUser(param).then((res) =>
          checkRespose(res, "Call List Profile Fail!")
        );
        dispatch(
          saveInfoUser({ acc: rest, payment: respose, profile: profile })
        );
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

export const GetRatingsTotal = () => {
  return (dispatch) => {
    (async () => {
      try {
        const payment = await GetListPayment(
          "?_page=1&_limit=5&_sort=total&_order=desc"
        ).then((res) => checkRespose(res, "Top Fail!"));

        const txt = payment.reduce((a, b) => a + `&id=${b.profile_id}`, "?");
        const profile = await GetAllProfileUser(txt).then((res) =>
          checkRespose(res, "Profile Ratings Fail!")
        );
        const txtacc= payment.reduce((a,b)=>a+`&profile_id=${b.profile_id}`,"?")
        const acc = await GetAccoutAll(txtacc).then(res=>checkRespose(res,"Get Fail Acc!"))
        dispatch(listRating({ profile: profile, payment: payment ,acc:acc}));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

export const GetListOrder = (param = "", sendlist = true) => {
  return (dispatch) => {
    (async () => {
      try {
        const txt = param.length !== 0 ? `?profile_id=${param}` : "?_order=asc";
        await GetOrder(txt)
          .then((res) => checkRespose(res, "Fet List Oder Fail!"))
          .then((res) => {
            sendlist ? dispatch(historyOrder(res)) : dispatch(saveOrder(res));
          });
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const UpdateStatus = (param, txt) => {
  return (dispatch) => {
    (async () => {
      try {
        const newData = { ...param, time_complete: txt, status: !param.status };
        await PutDataOrder(newData)
          .then((res) => checkRespose(res, "Change status Fail!"))
          .then((res) => dispatch(ChangeOrder(newData)));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const handleDeleteOrder = (param) => {
  return (dispatch) => {
    (async () => {
      try {
        await DeleteDataOrder(param).then(res=>checkRespose(res,"Delete Fail!",()=>{
          toast.dismiss()
          toast.success("Delete Success!")
          let temp = store.getState().adminData.listOrder.filter(_=>_.id!==param)
          dispatch(saveOrder(temp))
        }))
        
      } catch (error) {
        console.log(error);
      }
    })();
  };
};


export const updateCategory = (param) => {
  return (dispatch) => {
    (async () => {
      try {
          await PutDataCategory(param).then(res=>checkRespose(res,"Put succsess"))
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
