import { LightningElement,api,wire } from 'lwc';
import getbillingdetails from '@salesforce/apex/Customer360_Integ.getbillingdetails';

export default class Customer360_integ extends LightningElement {
    @api recordId;
    billingdetails;
    @wire(getbillingdetails,{accountId:'$recordId'})
    result({data,error}){
        if(data){
      this.billingdetails=data;
        }
         if(error){
        console.log(error);
        }
    }
}