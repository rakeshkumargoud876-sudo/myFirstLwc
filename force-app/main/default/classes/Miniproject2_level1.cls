public with sharing class Miniproject2_level1 {
    @AuraEnabled
    public static void addStudent(String name,String course,Decimal age,String city) {
Student__c sd=new Student__c();
sd.Name=name;
sd.Course__c=course;
sd.Age__c=age;
sd.City__c=city;
insert sd;
    }
     @AuraEnabled(cacheable=true)
    public static List<Student__c> showStudent(){
        return[SELECT Name ,Course__c,Age__c,City__c FROM Student__c];
    }

    @AuraEnabled
    public static void updateStudent(Id sdid ,String name,String course,Decimal age,String city) {
Student__c sd=[SELECT Id,Name,Course__c,Age__c,City__c FROM Student__c WHERE Id=:sdid];
sd.Name=name;
sd.Course__c=course;
sd.Age__c=age;
sd.City__c=city;
update sd;
    }
    @AuraEnabled
public static void deleteStudent(Id sdid){
   Student__c sd=[SELECT Id,Name,Course__c,Age__c,City__c FROM Student__c WHERE Id=:sdid];
delete sd;
}
 
}