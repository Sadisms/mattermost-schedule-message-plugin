import {combineReducers} from 'redux';

import {OPEN_ROOT_MODAL, CLOSE_ROOT_MODAL} from "../action_types";

const createModalVisible = (state = false, action) => {
    switch (action.type) {
        case OPEN_ROOT_MODAL:
            return true;
        case CLOSE_ROOT_MODAL:
            return false;
        default:
            return state;
    }
};

const createModal = (state = '', action) => {
    switch (action.type) {
        case OPEN_ROOT_MODAL:
            return {
                ...state,
                postId: action.data.postId,
                message: action.data.message,
                channelId: action.data.channelId,
            };
        case CLOSE_ROOT_MODAL:
            return {};
        default:
            return state;
    }
};

export default combineReducers({
    createModalVisible,
    createModal
});