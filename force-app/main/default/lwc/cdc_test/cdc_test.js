
import { LightningElement } from 'lwc';

import { subscribe } from 'lightning/empApi';

export default class AccountCDC extends LightningElement {

    channelName = '/data/AccountChangeEvent';

    subscription = {};

    eventMessage = '';

    connectedCallback() {

        this.subscribeCDC();

    }

    subscribeCDC() {

        subscribe(this.channelName, -1, (response) => {

            console.log(
                'CDC Event Received',
                JSON.stringify(response)
            );

            this.eventMessage =
                JSON.stringify(response, null, 2);

        })
        .then(result => {

            this.subscription = result;

            console.log(
                'Subscribed Successfully'
            );

        });

    }

}
