import {useState,useEffect} from 'react';

import Toast from 'components/toast/Toast';

import PRODUCTS_DATA from 'data/ProductsData';

import './Product.css';

const ProductContent=()=>{
    const [toastIsOpen,setToastIsOpen]=useState(false);
    const [toast,setToast]=useState({
        type: "",
        message: ""
    });

    const toastOpenHandler=()=>{
        setToastIsOpen(true);
    };
    const toastCloseHandler=()=>{
        setToastIsOpen(false);
    };

    useEffect(()=>{
        const timeoutId=setTimeout(()=>{
            toastCloseHandler();
        },3000);

        return ()=>{
            clearTimeout(timeoutId);
        }
    },[toastIsOpen]);

    const product=PRODUCTS_DATA[0];
    const [selectProductData,setSelectProductData]=useState({
        selectSize: "L",
        selectColor: "紅",
        quantity: 1
    });
    const {selectSize,selectColor,quantity}=selectProductData;

    const changeHandler=(e)=>{
        setSelectProductData({
            ...selectProductData,
            [e.target.name]: e.target.value
        });
    };
    
    const addCartHandler=(product)=>{
        if(quantity<1){
            setToast({
                type: "warning",
                message: "數量不少於一件"
            });
            toastOpenHandler();
        }
        else{
            const addCartProduct={
                id: product.id,
                title: product.title,
                images: product.images,
                price: product.price,
                sale: product.sale,
                size: selectSize,
                color: selectColor,
                quantity: Number(quantity),
            };
            setToast({
                type: "success",
                message: "新增成功"
            });
            toastOpenHandler();
            console.log("addCart",addCartProduct);
        }
    };

    return (
        <div className="product-content">
            <div className="product-content-title">{product.title}</div>
            <div className="product-content-price">NT$ {product.price}</div>
            <div className="product-content-sale">NT$ {product.sale}</div>
            <div className="product-content-description">{product.description}</div>
            <div className="product-content-size-group">
                <span className="product-content-size-title">尺寸:</span>
                {product.sizes.map((size,index)=>(
                    <span key={index}>
                        <input type="radio" className="input" id={size} name="selectSize" value={size} checked={selectSize===size} onChange={changeHandler} />
                        <label htmlFor={size} className="product-content-size">{size}</label>
                    </span>
                ))}
            </div>
            <div className="product-content-color-group">
                <span className="product-content-color-title">顏色:</span>
                {product.colors.map((color,index)=>(
                    <span key={index}>
                        <input type="radio" className="input" id={color.colorName} name="selectColor" value={color.colorName} checked={selectColor===color.colorName} onChange={changeHandler} />
                        <span className="product-content-color-border"><label htmlFor={color.colorName} style={{backgroundColor: color.colorCode}} className="product-content-color"></label></span>
                    </span>
                ))}
            </div>
            <input type="number" className="product-content-quantity" id="quantity" name="quantity" min="1" value={quantity} onChange={changeHandler} />
            <button className="btn-addCart" onClick={()=>addCartHandler(product)}>加入購物車</button>
            <Toast toastIsOpen={toastIsOpen} toast={toast} toastCloseHandler={toastCloseHandler} />
        </div>
    );
}

export default ProductContent;