import toast from "react-hot-toast";

import { DeleteVoucher, GetDataVoucher, PostDataListVoucher } from "../../../api/adminMethodAip/apiMethodVoucher";
import { checkRespose } from "../actionThunkAd/actionThunk";
import { addItemVoucher, deleteItemVoucher, saveListVoucher, selectItemVoucher } from "../adminAction";



export const postVoucher = (param) => {
  return (dispatch) => {
    (async () => {
      try {
        await PostDataListVoucher(param).then((res) =>
         { if (res.status === 201)
            {
              toast.success("Create new voucher success 👌")
              dispatch(addItemVoucher(param))
            } else toast.error("Create Fail! 🤷‍♂️")}
        );
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

export const GetVoucher = (param) => {
  return (dispatch) => {
    (async () => {
      try {
         await GetDataVoucher(param).then((res) =>
          checkRespose(res,"Get Data Voucher Fail! 🤷‍♂️")
        ).then(res=>{
          dispatch(saveListVoucher(res))
          dispatch(selectItemVoucher({data: res[0], index: 1}))
        })
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const  handleDeleteVoucher = (param) => {
  return (dispatch) => {
    (async () => {
      try {
         await DeleteVoucher(param.id)
         .then(res=>
          checkRespose(res,"Delete Fail!",
          ()=>{
            dispatch(deleteItemVoucher(param))
            toast.dismiss()
            toast.success("Delete Success!")
          }
                      )
                )
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
