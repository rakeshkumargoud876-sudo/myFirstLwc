public with sharing class Toastmessages {
    @AuraEnabled
    public static void addEmployee(String name,Decimal salary,String city) {
Employee__c emp = new Employee__c();
emp.Name=name;
emp.Salary__c=salary;
emp.City__c=city;
insert emp;
    }
}