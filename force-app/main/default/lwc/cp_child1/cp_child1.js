import { LightningElement } from 'lwc';

export default class Cp_child1 extends LightningElement {

    message(){
        const eventname = new CustomEvent("strngvrble",{detail:'hello parent'});
        this.dispatchEvent(eventname);
    }
}