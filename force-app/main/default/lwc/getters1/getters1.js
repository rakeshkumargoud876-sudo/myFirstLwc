import { LightningElement } from 'lwc';

export default class Getters1 extends LightningElement {
    salary=1000;
    gst=180;
    get total(){
        return this.salary+this.gst;
    }
}