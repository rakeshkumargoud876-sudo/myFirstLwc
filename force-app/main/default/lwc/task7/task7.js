import { LightningElement } from 'lwc';
import methodnmae from '@salesforce/apex/task7.methodnmae';

export default class Task7 extends LightningElement {
    name;
    handle(event){
this.name=event.target.value;
    }
    save(){
methodnmae({accname:this.name})
.then(() => {
            alert('Account Created Successfully');
        })
        .catch(error => {
            console.error(error);
        });

    }
}