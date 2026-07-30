import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/Dashboard.getAccounts';
import getContacts from '@salesforce/apex/Dashboard.getContacts';
import getOpportunities from '@salesforce/apex/Dashboard.getOpportunities';

export default class Dashboard extends LightningElement {

    accountscounts;
    contaccounts;
    opportunitycounts;
    connectedCallback(){
getAccounts()
.then(result =>{
   this.accountscounts=result;
}
)
getContacts()
    .then(result=>{
this.contaccounts=result;
    }
    )

    getOpportunities()
    .then(result=>{
        this.opportunitycounts=result;
    }

    )
}

    }

