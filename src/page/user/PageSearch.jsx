import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Filter, Product, Sort } from '../../components';
import ItemNotFound from '../../components/user/ItemNotFound';
import { fetListProductSearch } from '../../redux/thunk/actionThunk';
const PageSearch = props => {
    const dispatch = useDispatch();
    const locale = useLocation()
    const listProduct = useSelector((state) => state.users.SearchProduct);
    const isLoad = useSelector((state) => state.users.isLoadmore);
    const [sort, setSort] = useState("");
    const [limit, setLimit] = useState(6);
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(1);

    const checkProduct = () => {
        let products = listProduct || null
        return (products !== null && products.length);
    }
    useEffect(() => {
        dispatch(fetListProductSearch({ limit: limit, sort: sort, filter: filter, page: page, search: locale.search.slice(1) }))
        window.scroll(0, 0)
    }, [dispatch, locale, limit, filter, sort, page]);

    return (
        <>
            <div className='feature-filter d-flex justify-content-end mt-4' style={{ paddingRight: "30px" }}  >
                <Filter handleChangeValueFilter={(e) => {
                    setFilter(e.target.value)
                }} />
                <Sort handleChangeValueSort={(e) => {
                    setSort(e.target.value)
                }} />
            </div>
            <div className='body'>
                <ul className='list-item'>
                    {listProduct && listProduct.map((e, i) => (
                        <Link to={`/detail/${e.id}`} key={i}>
                            <Product
                                key={e}
                                item={e}
                                img={e.img}
                                rating={e.rating}
                                discount={e.discount}
                                sold={e.sold}
                                status={e.status}
                                name={e.name}
                                price={e.price}
                                category={e.category} />
                        </Link>
                    ))}
                </ul>
                {isLoad && (<div className="loading">
                    <button onClick={() => {
                        setPage((page) => page + 1)
                        setLimit((limit) => limit + 4)
                    }} className="loading__btn">Load More</button>
                </div>)}
                {checkProduct() === false || checkProduct() === 0 ? <ItemNotFound /> : ("")}
            </div>
        </>
    );
};


export default PageSearch;