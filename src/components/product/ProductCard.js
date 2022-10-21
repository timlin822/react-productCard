import ThumbnailGallery from 'components/thumbnailGallery/ThumbnailGallery';
import ProductContent from 'components/product/ProductContent';

import './Product.css';

const ProductCard=()=>{
    return (
        <div className="product-flex">
            <ThumbnailGallery />
            <ProductContent />
        </div>
    );
}

export default ProductCard;