import { LightningElement } from 'lwc';

export default class Task6_cp_c extends LightningElement {
    name;
    handle(event){
this.name=event.target.value;

    }
    save(){
const eventname = new CustomEvent('stringvariable',{detail:this.name});
this.dispatchEvent(eventname);
    }
    
}