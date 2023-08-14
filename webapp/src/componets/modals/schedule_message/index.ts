import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {closeRootModal, createScheduleMessage} from "../../../actions";
import ScheduleMessageModal from "./schedule_message_modal";

const mapDispatchToProps = (dispatch) => bindActionCreators({
    close: closeRootModal,
    create: createScheduleMessage
}, dispatch);

export default connect(mapDispatchToProps)(ScheduleMessageModal);