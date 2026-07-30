import { LightningElement } from 'lwc';

export default class Task1_studentRegistrationForm extends LightningElement {
    first;
    second;
    third;
    name;
    age;
    course;
    handlename(event){
this.first=event.target.value
    }
    handleage(event){
        this.second=event.target.value;
    }
    handlecourse(event){
        this.third=event.target.value;
    }
    save(){
       this.name=this.first;
        this.age=this.second;
       this.course=this.third;
    }

}