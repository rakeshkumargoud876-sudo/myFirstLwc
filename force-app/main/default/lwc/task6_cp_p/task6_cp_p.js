import { LightningElement } from 'lwc';

export default class Task6_cp_p extends LightningElement {
    message;
    handle(event){
this.message=event.detail;
    }
}