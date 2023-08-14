import {Store, Action} from 'redux';

import reducers from './reducers';
import Hooks from "./hooks/hooks";
import ScheduleMessageModal from "./componets/modals/schedule_message"


export default class Plugin {
    public async initialize(registry, store: Store<object, Action<object>>){
        registry.registerReducer(reducers);
        registry.registerRootComponent(ScheduleMessageModal);

        const hooks = new Hooks(store);
        registry.registerSlashCommandWillBePostedHook(hooks.slashCommandHook);
    }
}