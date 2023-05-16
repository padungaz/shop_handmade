import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PutDataCategory } from "../../../api/adminMethodAip";
import { ICONADD, ICONBAG, ICONCLOSE } from "../../../Icon";
import {
  InfoProduct,
  ModuleCreateProduct,
  ModuleListSlider,
} from "./../../index";
import ItemCategory from "./ItemCategory";

const ListProductAd = (props) => {
  const data = useSelector((state) => state.adminData.dataProducts);
  const [productSelect, setProductSelect] = useState("");
  const dispatch = useDispatch();
  const [disForm, setDisForm] = useState({
    formCreate: false,
    moduleSlide: false,
  });
  const [anima, setAnimation] = useState({
    formCreate: "disTrue",
    moduleSlide: "animation-list-slider-on",
  });
  const [dataOutput, setDataOutput] = useState([]);
  const [muti, setMuti] = useState(false);

  const multipleOn = () => {
    setMuti(!muti);
  };

  //Filter category
  let listCategory = useMemo(() => {
    let arr = [];
    for (const key in data) {
      if (!arr.includes(data[key].category.toLowerCase())) {
        arr.push(data[key].category.toLowerCase());
      }
    }
    return arr;
  }, [data]);
  // divide data flow category
  const dataDevide = useMemo(() => {
    return listCategory.map((e, i) => ({
      name: e,
      data: data.filter((el) => el.category.toLowerCase() === e),
    }));
  }, [data, listCategory]);

  //set data when data update
  useEffect(() => {
    setDataOutput(dataDevide);
    PutDataCategory(listCategory);
  }, [dataDevide]);
  const handleChangeFilter = (e) => {
    let temp = dataDevide.filter((item) => e.includes(item.name));
    temp.length ? setDataOutput(temp) : setDataOutput(dataDevide);
  };
  const handleChange = (e) => {
    let value = Array.from(
      e.target.previousSibling.selectedOptions,
      (option) => option.value
    );
    return value;
  };
  const handleClick = (a, b) => {
    if (disForm[a] === false) {
      if (disForm[b] === true) {
        setAnimation({ [a]: "animation-list-slider-on", [b]: "disFalse" });
        setTimeout(() => {
          setDisForm({ [a]: true, [b]: false });
        }, 500);
      } else {
        setAnimation({ ...anima, [a]: "animation-list-slider-on" });
        setDisForm({ ...disForm, [a]: true });
      }
    } else {
      setAnimation({ ...anima, [a]: "animation-list-slider-off" });
      setTimeout(() => {
        setDisForm({ ...disForm, [a]: false });
      }, 500);
    }
  };

  return (
    <div className="list-product-Ad">
      {/* {-----------------------module infomation product select------------------} */}

      {productSelect && (
        <InfoProduct
          handleClose={() => {
            setTimeout(() => {
              setProductSelect("");
            }, 500);
          }}
          data={productSelect}
        />
      )}
      {/* {-----------------------module Create new product------------------} */}

      <ModuleCreateProduct
        check={disForm.formCreate}
        listCategory={listCategory}
        onclickClose={() => {
          setAnimation({ ...anima, formCreate: "disFalse" });
          setTimeout(() => {
            setDisForm({ ...disForm, formCreate: !disForm.formCreate });
          }, 500);
        }}
        disForm={anima.formCreate}
      />
      {/* {-----------------------module slider------------------} */}
      <ModuleListSlider
        check={disForm.moduleSlide}
        data={productSelect}
        onclickClose={() => {
          setAnimation({ ...anima, moduleSlide: "animation-list-slider-off" });
          setTimeout(() => {
            setDisForm({ ...disForm, moduleSlide: !disForm.moduleSlide });
          }, 500);
        }}
        disForm={anima.moduleSlide}
      />
      <div className="main-list">
        <div className="list-product-Ad_header">
          {/* {---------------------------------BUTTON--------------------------} */}
          <div className="btn-group">
            {/* {button add new product} */}
            <button
              onClick={() => {
                handleClick("formCreate", "moduleSlide");
              }}
            >
              <i className={ICONADD}> </i> <i className={ICONBAG}></i>
            </button>
            {/* {---------------------------------BUTTON--------------------------} */}
            {/* {button view list silder} */}
            <button
              onClick={() => {
                handleClick("moduleSlide", "formCreate");
              }}
            >
              LIST SLIDER
            </button>
            {/* {list category} */}
          </div>

          <div className="list-product-select">
            <select className={muti? "muti":""}
              multiple={muti}
              onChange={(e) => {
                !muti && handleChangeFilter([e.target.value]);
              }}
          
            >
             {muti===false&& <option >ALL CATEGORY</option>}
              {listCategory &&
                listCategory.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
            </select>
            {muti && (
              <button onClick={(e) =>{ 
                setMuti(!muti);
                handleChangeFilter(handleChange(e))}}>
                Find
              </button>
            )}
            <button onClick={multipleOn}>
              {muti ? <i className={ICONCLOSE}></i> : "Multiple"}
            </button>
          </div>
        </div>
        {/* {-----------------------list product render------------------} */}
        {dataOutput &&
          dataOutput.map((e, i) => {
            return (
              <ItemCategory
                key={i}
                setProductSelect={(av) => setProductSelect(av)}
                e={e}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ListProductAd;
