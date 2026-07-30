import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/Pagination.getAccounts';

export default class Pagination extends LightningElement {
    page=1;
    pagesize=5;
    
    displayrecords=[];
    accountrecords=[];
    connectedCallback(){
        getAccounts()
        .then(result=>{
            this.accountrecords=result;
        }

        )
        this.loadrecords();
    }
    loadrecords(){
        let start=(this.page-1)*this.pagesize;
        let end=start+this.pagesize;
        this.displayrecords=this.accountrecords.slice(start,end);
    }

    handlenext(){
       this.page++;
        this.loadrecords();
    }
    handleprevious(){
        this.page--;
        this.loadrecords();
    }
}