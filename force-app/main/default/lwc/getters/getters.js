import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
     FirstName='Rakesh';
     LastName='Goud';
     
    get fullName(){
     return this.FirstName+" "+this.LastName;
     
    }
}