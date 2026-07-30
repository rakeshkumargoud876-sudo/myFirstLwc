public with sharing class wire1 {
    @AuraEnabled(cacheable=true)
    public static List<Employee__c> displayEmployee() {
return[SELECT Id ,Name,Salary__c,Department__c,City__c FROM Employee__c];
    }
}