import { LightningElement } from 'lwc';

export default class Task4_show_Hide_details extends LightningElement {
    isvisible=false;
    
    handle(){
        this.isvisible=!this.isvisible;
     
    }
}