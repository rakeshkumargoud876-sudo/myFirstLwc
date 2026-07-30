public with sharing class Customer360_Integ {
    @AuraEnabled(cacheable=true)
    public static customer360_integWrapperClass getbillingdetails(Id accountId) {
    Account acc=[select AccountNumber from Account where Id=:accountId];
    
    Http http=new Http();
    HttpRequest req=new HttpRequest();
    req.setEndpoint('callout:API_BILLING/user/1');
    req.setMethod('GET');
    HttpResponse res=http.send(req);
     System.debug(res.getStatusCode());
System.debug(res.getBody());
    if(res.getStatusCode()==200){
        customer360_integWrapperClass wrapper= (customer360_integWrapperClass)
            JSON.deserialize(
                res.getBody(),
                customer360_integWrapperClass.class
               
          );
         
    
    
   return wrapper;
    
    }
    return null;
}
 
}