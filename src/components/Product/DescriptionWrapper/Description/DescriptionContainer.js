import Description from "./Description";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        text: state.mainReducer.description || 'Some text',
    };
};

export default connect(mapStateToProps)(Description);
