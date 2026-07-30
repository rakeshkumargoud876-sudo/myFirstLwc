import { LightningElement,wire } from 'lwc';
import displayEmployee from '@salesforce/apex/wire1.displayEmployee';

export default class Wire1 extends LightningElement {

    @wire(displayEmployee)
    employees;
}