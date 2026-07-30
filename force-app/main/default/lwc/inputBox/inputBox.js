import { LightningElement } from 'lwc';

export default class InputBox extends LightningElement {
    name;
    change(event){
        this.name=event.target.value;
    }
}