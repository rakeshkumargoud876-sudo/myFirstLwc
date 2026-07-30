import { LightningElement,track } from 'lwc';

export default class CpParent extends LightningElement {
    @track svalue;
    handle(event){
this.svalue=event.detail;
    }
}