import { LightningElement } from 'lwc';

export default class Conditional_Rendering extends LightningElement {
    ispassed;
    digit;

    number(event){
        this.digit=event.target.value;
    }
    result(){
       if(Number(this.digit>=35)){
        this.ispassed=true;
       }
       else{
        this.ispassed=false;
       }
    }
}