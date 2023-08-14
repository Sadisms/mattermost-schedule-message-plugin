import React from 'react';

import FormButton from '../../form_button';

import DateTimePicker from 'react-datetime-picker';



type Props = {
    close: (e?: Event) => void;
    message?: string;
    channelId?: string;
    visible: boolean;
};

type State = {
    submitting: boolean;
    error: string;
    dateTime: Date;
};


export default class ScheduleMessageForm extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            error: null,
            dateTime: null
        }
    }
    handleClose = (e?: Event) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        this.props.close();
    }


    handleSubmit = (e?: React.FormEvent) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        let channelId = this.props.channelId;
        let message = this.props.message;

        const scheduleMessage = {
            message: message,
            channelId: channelId,
            dateTime: this.state.dateTime
        }

        this.setState({submitting: true});

    }

    handleDateTimeChange = (dateTimeValue: Date) => {
        const state = {
            error: null,
            dateTime: null
        } as State

        if (dateTimeValue <= new Date()){
            state.error = 'Дата не может быть меньше текущий даты!';
        } else {
            state.dateTime = dateTimeValue;
        }

        this.SetState(state);
    }

    render() {
        let disableSubmit = !this.state.dateTime;

        let error;
        if (this.state.error) {
            error = (
                <p className='alert alert-danger'>
                    <i
                        style={{marginRight: '10px'}}
                        className='fa fa-warning'
                        title='Warning Icon'
                    />
                    <span>{this.state.error}</span>
                </p>
            );
        }

        const footer = (
            <React.Fragment>
                <FormButton
                    type='button'
                    btnClass='btn-link'
                    defaultMessage='Cancel'
                    onClick={this.handleClose}
                />
                <FormButton
                    id='submit-button'
                    type='submit'
                    btnClass='btn btn-primary'
                    saving={this.state.submitting}
                    disabled={disableSubmit}
                >
                    {'Create'}
                </FormButton>
            </React.Fragment>
        );

        return (
            <form
                role='form'
                onSubmit={this.handleSubmit}
            >
                {error}
                <DateTimePicker
                    onChange={this.handleDateTimeChange}
                    value={new Date()}
                />
            </form>
        )
    }
}