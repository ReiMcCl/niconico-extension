import Message from './Message';
import { MESSAGES_TRANSFER } from '../modules/actions';

export default class Twitch_Viewport {
    constructor () {
        console.log('Initializes Twitch Viewport');
        this.getViewport();
    }

    getViewport () {
        const VIEWPORT = document.querySelector('.pl-overlay');
        const VIEWPORT_RECT = VIEWPORT.getBoundingClientRect();

        this.viewport = {
            el: VIEWPORT,
            width: VIEWPORT_RECT.width,
            height: VIEWPORT_RECT.height,
            x: VIEWPORT_RECT.x,
            y: VIEWPORT_RECT.y
        };

        this.createOverlay();
    }

    createOverlay () {
        const PARENT = this.viewport.el.parentElement;
        const OVERLAY = document.createElement('div');

        OVERLAY.id = 'nn-overlay';
        OVERLAY.className = 'nn-overlay';
        
        PARENT.appendChild(OVERLAY);

        this.overlay = OVERLAY;
    }

    displayMessage (messages) {
        for(var i = 0; i < messages.length; i++){
            let message = new Message(messages[i]);
            let dom = message.getMessageDOM();
            this.overlay.appendChild(dom);
        }
    }

    receiveMessages (messages) {
        this.displayMessage(messages);
    }
}