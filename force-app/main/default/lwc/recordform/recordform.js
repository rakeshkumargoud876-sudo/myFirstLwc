import { LightningElement } from 'lwc';
import Name from '@salesforce/schema/Account.Name';
import Phone from '@salesforce/schema/Account.Phone';
import Industry from '@salesforce/schema/Account.Industry';

export default class Recordform extends LightningElement {
    fields=[Name,Phone,Industry];
}