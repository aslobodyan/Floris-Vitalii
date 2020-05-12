import Price from "./Price";
import {connect} from "react-redux";
import {setPrice} from "../../../../redux/reducers/mainReducer";

const mapStateToProps = state => {
    return {
        price: state.mainReducer.price,
    }
}

const PriceContainer = connect(mapStateToProps, { setPrice })(Price);

export default PriceContainer;
