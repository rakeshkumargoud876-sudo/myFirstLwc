import { LightningElement,wire } from 'lwc';
import { subscribe,MessageContext } from 'lightning/messageService';
import HELLO_CHANNEL from '@salesforce/messageChannel/HelloMessage__c';

export default class Subscribe extends LightningElement {
    @wire(MessageContext)
    messageContext;
  received;
    connectedCallback(){
subscribe(
 this.messageContext,
 HELLO_CHANNEL,
 (payload)=>{
    this.received=payload.message;
 }

);
    }
}