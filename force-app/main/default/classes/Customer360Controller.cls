public with sharing class Customer360Controller {
    @AuraEnabled(Cacheable=true)
    public static customer360_wrapper getCustomer(Id accountId) {
    customer360_wrapper wrapper = new customer360_wrapper();
    wrapper.account=[select id,Name,Phone,Customer_Status__c from Account
     WHERE Id = :accountId limit 1];

    wrapper.services=[select id,Name, Status__c, Service_Type__c from  
    Service_Subscription__c WHERE Account__c = :accountId];

    wrapper.cases=[
            SELECT Id, CaseNumber, Subject, Status, Priority
            FROM Case
            WHERE AccountId = :accountId
        ];
     
        return wrapper;
    }
}