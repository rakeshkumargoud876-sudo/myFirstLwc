public with sharing class Pagination {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
  return[SELECT Id,Name,Phone,Industry FROM Account];
    }
}