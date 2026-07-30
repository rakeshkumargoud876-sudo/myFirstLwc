import { LightningElement,wire } from 'lwc';
import { subscribe,MessageContext } from 'lightning/messageService';
import recieve from '@salesforce/messageChannel/practiceMessage__c';
export default class Lms_subscribe_practice extends LightningElement {
name;
age;
salary;
city;
    @wire(MessageContext)
    messagecontext;
    connectedCallback(){
        subscribe(
            this.messagecontext,recieve,(result)=>{
this.name=result.name;
this.age=result.age;
this.salary=result.salary;
this.city=result.city;

            }
        );
    }
    
}