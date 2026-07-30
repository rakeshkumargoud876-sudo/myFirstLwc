import { LightningElement,wire } from 'lwc';
import displayAccounts from '@salesforce/apex/wire.displayAccounts';

export default class Wire extends LightningElement {
@wire(displayAccounts)
accounts;
}