import {Modal} from 'react-bootstrap';
import ScheduleMessageForm from "./schedule_message_form";


type Props = {
    visible: boolean;
    close: () => void;
}


export default function ScheduleMessageModal(props: Props){
    if (!props.visible) {
        return null;
    }

    return <Modal
        dialogClassName='modal--scroll'
        show={props.visible}
        onHide={props.close}
        onExited={props.close}
        bsSize='large'
        backdrop='static'
    >
        <Modal.Header closeButton={true}>
            <Modal.Title>{'Datetime schedule message'}</Modal.Title>
        </Modal.Header>
        <ScheduleMessageForm {...props}/>
    </Modal>

}