import {openRootModal} from "../actions";

type ContextArgs = {channel_id: string};


const createPostCommand = "/schedule";

export default class Hooks{
    constructor(store: any) {
        this.store = store;
    }

    private store: any;

    slashCommandHook = (rawMessage: string, contextArgs: ContextArgs) => {
        let message;
        if (rawMessage) {
            message = rawMessage.trim();
        }

        if (!message) {
            return Promise.resolve({message, args: contextArgs});
        }

        if (message.startsWith(createPostCommand)){
            this.store.dispatch(openRootModal(message.slice(createPostCommand.length).trim(), contextArgs.channel_id));
        }

        return Promise.resolve({message, args: contextArgs});
    }

}