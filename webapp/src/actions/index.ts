import {OPEN_ROOT_MODAL, CLOSE_ROOT_MODAL} from '../action_types';
import {getPluginServerRoute} from "../selectors";
import {CreateScheduleMessageRequest} from "../types/model";
import {doFetch} from '../client';

export const openRootModal = (message, channelId) => (dispatch) => dispatch({
    type: OPEN_ROOT_MODAL,
    data: {
        message,
        channelId
    }
});

export const closeRootModal = () => (dispatch) => {
    dispatch({
        type: CLOSE_ROOT_MODAL,
    });
};


export const createScheduleMessage = (payload: CreateScheduleMessageRequest) => {
    return async (dispatch, getState) => {
        const baseUrl = getPluginServerRoute(getState());

        try {
            const data = await doFetch(`${baseUrl}/api/v4/create-schedule-message`, {
                method: 'post',
                body: JSON.stringify(payload),
            });

            return {data};
        } catch (error) {
            return {error};
        }
    }
}