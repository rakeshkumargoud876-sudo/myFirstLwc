import { LightningElement } from 'lwc';
import displayStudents from '@salesforce/apex/imperative.displayStudents';

export default class imperative extends LightningElement {
studentrecords=[];
showtable=false;
getrecords(){
displayStudents()
    .then(result=>{
        this.studentrecords=result;
        this.showtable=true;
    }

    )
    .catch(error=>{console.error(error);});
}


}