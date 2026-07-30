import { LightningElement } from 'lwc';

export default class Practice extends LightningElement {
     connectedCallback(){
        console.log('component connected to the page');
    }
     renderedCallback(){
        console.log('renderedCallback excuted');
     }
    constructor(){
        super();
        console.log('constructor called');
    }
    disconnectedCallback(){
        console.log('componenet removed');
    }
}