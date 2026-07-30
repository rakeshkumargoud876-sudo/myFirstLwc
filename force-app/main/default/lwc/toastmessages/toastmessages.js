import { LightningElement } from 'lwc';
import addEmployee from '@salesforce/apex/Toastmessages.addEmployee';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Toastmessages extends LightningElement {
name;
salary;
city;
    handlename(event){
this.name=event.target.value;
    }
    handlesalary(event){
this.salary=event.target.value;
    }
    handlecity(event){
this.city=event.target.value;
    }
    save(){
        addEmployee({name:this.name,salary:this.salary,city:this.city})
        .then(()=>{
        const Toast = new ShowToastEvent(
            {
                title:'success',
                message:'Employee record successfully inserted',
                variant:'success'
            }
        );
        this.dispatchEvent(Toast);

    })
        
    }
}