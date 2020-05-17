import Offerer from "./Offerer";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        logo: state.mainReducer.offerer.logo,
        name: state.mainReducer.offerer.name,
    };
};

export default connect(mapStateToProps)(Offerer);
