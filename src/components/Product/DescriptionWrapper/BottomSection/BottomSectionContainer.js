import BottomSection from "./BottomSection";
import {connect} from "react-redux";
import {getTemplateData} from "../../../../redux/reducers/mainReducer";

const mapStateToProps = state => {
    return {
        mockedData: state.mainReducer.templateData,
    }
};

export default connect(mapStateToProps, { getTemplateData })(BottomSection);
