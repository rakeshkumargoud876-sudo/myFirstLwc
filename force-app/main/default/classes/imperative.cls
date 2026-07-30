public with sharing class imperative {
    @AuraEnabled(cacheable=true)
    public static List<Student__c> displayStudents() {
    return[SELECT Id,Name,Course__c,Age__c,City__c FROM Student__c];
    }
}