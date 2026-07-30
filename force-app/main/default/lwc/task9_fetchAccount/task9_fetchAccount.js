import { LightningElement } from 'lwc';
import getaccounts from '@salesforce/apex/task9_fetchAccount.getaccounts';

export default class Task9_fetchAccount extends LightningElement {
    accounts=[];
    handle(){
         getaccounts()
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                console.error(error);
            });

    }
}
