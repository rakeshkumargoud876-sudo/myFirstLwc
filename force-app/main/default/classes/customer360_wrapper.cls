public with sharing class customer360_wrapper {
   @AuraEnabled 
   public Account account;
   @AuraEnabled 
   public List<	Service_Subscription__c> services;
   @AuraEnabled 
   public List<	Case> cases;
   

}