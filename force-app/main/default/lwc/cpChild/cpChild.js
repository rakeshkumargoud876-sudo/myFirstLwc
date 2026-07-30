import { LightningElement } from 'lwc';

export default class CpChild extends LightningElement {
     kname;
    
    name(event){
this.kname=event.target.value;
    
    const evname=new CustomEvent("vrble",{detail:this.kname});
this.dispatchEvent(evname);
    
    }



    
}