import { LightningElement,api,wire } from 'lwc';
import getCustomer from '@salesforce/apex/Customer360Controller.getCustomer';

export default class Customer360 extends LightningElement {
@api recordId;
  account;
  services;
  cases;
  error;

    @wire(getCustomer,{accountId:'$recordId'})
    wiredaccounts({data,error}){
        if(data){
      this.account= data.account;
      this.services=data.services;
      this.cases=data.cases;
     
        }
        else if(error){
            console.log(error);
          
        }
    }
}