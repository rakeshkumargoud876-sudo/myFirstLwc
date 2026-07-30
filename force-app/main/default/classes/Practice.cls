public with sharing class Practice {
    @AuraEnabled(Cacheable=true)
   
    public static List<Account> getAccounts() {
        return [select id,name ,phone from Account limit 3 ];

    }
}