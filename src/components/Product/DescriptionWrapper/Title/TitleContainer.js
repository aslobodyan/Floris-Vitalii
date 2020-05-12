import {connect} from "react-redux";
import Title from "./Title";
import {setTitle} from "../../../../redux/reducers/mainReducer";

const mapStateToProps = state => {
    return {
        title: state.mainReducer.title
    }
};

const TitleContainer = connect(mapStateToProps, { setTitle })(Title);

export default TitleContainer;
