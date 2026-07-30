public with sharing class MiniProject1_level1 {
    @AuraEnabled
    public static void createEmployee(String name,Decimal salary,String department,String city) {
Employee__c emp = new Employee__c();
emp.Name = name;
emp.Salary__c=salary;
emp.Department__c=department;
emp.City__c=city;

insert emp;
    }
    @AuraEnabled(cacheable=true)
 public static List<Employee__c> getEmployees(){
    return[SELECT Id,Name,Salary__c,Department__c,City__c FROM Employee__c];

 }
 @AuraEnabled
 public static void deleteEmployee(Id empid){
  Employee__c emp=[SELECT Id FROM Employee__c WHERE Id=:empid];
  delete emp;
 }
 @AuraEnabled 
 public static void updateEmployee(Id empid,String name,Decimal salary,String department, String city){
    Employee__c emp = [SELECT Id ,Name,Salary__c,Department__c,City__c FROM Employee__c WHERE Id=:empid LIMIT 1];
emp.Name = name;
emp.Salary__c=salary;
emp.Department__c=department;
emp.City__c=city;

    update emp;
 }
}