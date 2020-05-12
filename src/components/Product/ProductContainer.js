import Product from "./Product";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isInitialized: state.mainReducer.isInitialized,
    };
};

const ProductContainer = connect(mapStateToProps)(Product);

export default ProductContainer;
