import { Products } from 'components/Product/Products/Products';
import { PagingList } from 'components/shared/PagingList/PagingList';
import { usePagination } from 'components/utils/Pagination/Pagination';
import productData from 'data/product/product';
import Slider from 'rc-slider';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { AsideItem } from '../shared/AsideItem/AsideItem';
import { useGetProductsQuery } from 'services/api';

// React Range
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const options = [
  { value: 'highToMin', label: 'From expensive to cheap' },
  { value: 'minToHigh', label: 'From cheap to expensive' },
];
export const Shop = () => {
    const {data, isLoading} = useGetProductsQuery()

    const [allProducts, setAll] = useState(data?.data ? data.data: [...productData]);
    const [productOrder, setProductOrder] = useState(
        [...allProducts].sort((a, b) => (a.price < b.price ? 1 : -1))
    );
    const [products, setProducts] = useState([...productOrder]);
    useEffect(()=> {
        if(data?.data) {
            setAll([...data.data])
            setProducts([...data.data].sort((a, b) => (a.price < b.price ? 1 : -1)))
            setProductOrder([...data.data].sort((a, b) => (a.price < b.price ? 1 : -1)))
        }
    },[isLoading])
    const [filter, setFilter] = useState({ isNew: false, isSale: false });

    useEffect(() => {
        setProducts(productOrder);
    }, [productOrder]);

    const [recentlyViewed, setRecent] = useState(data?.data? data.data: [...allProducts]);
    const handleChange = (value) => {
        const range = value;
        setProducts([...allProducts].filter(ite => (Number(ite.price) > range[0] && Number(ite.price) < range[1])))
    };

    useEffect(() => {
        let viewed = JSON.parse(localStorage.getItem('xs_viewed')??'[]');
        setRecent(recentlyViewed.filter( ite => viewed.includes(String(ite.id))))
        if (filter.isNew && filter.isSale) {
            const newPro = productOrder.filter(
                (pd) => Boolean(pd.isNew) === true && Boolean(pd.isSale) === true
            );
            setProducts(newPro);
        } else if (filter.isNew && !filter.isSale) {
            const newPro = productOrder.filter((pd) => Boolean(pd.isNew) === true);
            setProducts(newPro);
        } else if (filter.isSale && !filter.isNew) {
            const newPro = productOrder.filter((pd) => Boolean(pd.isSale) === true);
            setProducts(newPro);
        } else {
            setProducts([...productOrder]);
        }
    }, [filter, productOrder]);

    const categorize = cat => {
        const newPro = [...allProducts].filter((pd) => pd.category === cat);
        setProducts(newPro)
    }


    const todaysTop = [...allProducts].slice(3, 6);
    const paginate = usePagination(products, 9);

    const handleSort = (value) => {
        if (value === 'highToMin') {
            const newOrder = [...allProducts].sort((a, b) => (a.price < b.price ? 1 : -1));
            setProductOrder(newOrder);
        }
        if (value === 'minToHigh') {
            const newOrder = [...allProducts].sort((a, b) => (a.price > b.price ? 1 : -1));
            setProductOrder(newOrder);
        }
    };

    const handleSearch = e => {
        const {value} = e.target
        setProducts([...allProducts].filter(ite => (ite.name?.toLowerCase()).indexOf(value.toLowerCase())!==-1))
    }

    return (
    <div>
        {/* <!-- BEGIN SHOP --> */}
        <div className='shop'>
        <div className='wrapper'>
            <div className='shop-content'>
            <div className='shop-aside'>
                <div className='box-field box-field__search'>
                <input
                    type='search'
                    className='form-control'
                    placeholder='Search'
                    onKeyUp={handleSearch}
                />
                <i className='icon-search'></i>
                </div>
                <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Categories</span>
                <ul>
                    <li>
                    <a href='javascipt:void(0)' onClick={()=> categorize('Treatment')}>
                        Treatment <span>({allProducts.filter(pr => pr.category==='Treatment').length})</span>
                    </a>
                    </li>
                    <li>
                    <a onClick={()=> categorize('SPA')} href='javascipt:void(0)'>
                        SPA <span>({allProducts.filter(pr => pr.category==='SPA').length})</span>
                    </a>
                    </li>
                    <li>
                    <a onClick={()=> categorize('Skin Care')} href='javascipt:void(0)'>
                        Skin care <span>({allProducts.filter(pr => pr.category==='Skin Care').length})</span>
                    </a>
                    </li>
                    <li>
                    <a onClick={()=> categorize('Hair Care')} href='javascipt:void(0)'>
                        Hair care <span>({allProducts.filter(pr => pr.category==='Hair Care').length})</span>
                    </a>
                    </li>
                </ul>
                </div>
                <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Price</span>
                <div className='range-slider'>
                    <Range
                        min={0}
                        max={2000}
                        defaultValue={[0, 2000]}
                        tipFormatter={(value) => `${value}₹`}
                        onChange={handleChange}
                        allowCross={false}
                        tipProps={{
                            placement: 'bottom',
                            prefixCls: 'rc-slider-tooltip',
                        }}
                    />
                </div>
                </div>
                <div className='shop-aside__item'>
                {
                 recentlyViewed.length ? (
                    <>
                        <span className='shop-aside__item-title'>You have viewed</span>
                        {recentlyViewed.map((data) => (
                            <AsideItem key={data.id} aside={data} />
                        ))}
                    </>
                 ) : null
                }
                </div>
            </div>

            <div className='shop-main'>
                <div className='shop-main__filter'>
                    <div className='shop-main__checkboxes'>
                        <label className='checkbox-box'>
                        <input
                            checked={filter.isSale}
                            onChange={() => {
                                productOrder.filter((pd) => Boolean(pd.isSale) === true)
                                setFilter({...filter, isSale:!filter.isSale})
                            }}
                            type='checkbox'
                        />
                        <span className='checkmark'></span>
                        SALE
                        </label>
                        <label className='checkbox-box'>
                        <input
                            checked={filter.isNew}
                            onChange={() => {
                                productOrder.filter((pd) => Boolean(pd.isNew) === true)
                                setFilter({...filter, isNew:!filter.isNew})
                            }}
                            type='checkbox'
                        />
                        <span className='checkmark'></span>
                        NEW
                        </label>
                    </div>
                    <div className='shop-main__select'>
                        <Dropdown
                        options={options}
                        className='react-dropdown'
                        onChange={(option) => handleSort(option.value)}
                        value={options[0]}
                        />
                    </div>
                </div>
                <div className='shop-main__items'>
                <Products products={paginate?.currentData()} />
                </div>
                <PagingList paginate={paginate} />
            </div>
            </div>
        </div>
        <img
            className='promo-video__decor js-img'
            src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/promo-video__decor.jpg'}
            alt=''
        />
        <img
            className='shop-decor js-img'
            src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/shop-decor.jpg'}
            alt=''
        />
        </div>
        {/* <!-- SHOP EOF   --> */}
    </div>
    );
};
