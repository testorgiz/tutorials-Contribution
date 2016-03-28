---
title: Inserting OData query options into your SAPUI5 app
description: Learn how to insert OData query options to your SAPUI5 app
tags: [ tutorial:product/hcp,tutorial:product/mobile,tutorial:product/sap_ui5,tutorial:product/sapui5_web_ide,tutorial:technology/odata ]
---
## Prerequisites  
 - **Proficiency:** Beginner | Intermediate | Expert
 - **Tutorials:** [An Open Data Protocol (OData) primer for developers](http://go.sap.com/developer/tutorials/hcp-webide-odata-primer.html)

## Next Steps
 - Manually creating a data model to use in SAP Web IDE's Mock Data server (coming soon)

## Details
### You will learn  
The previous tutorial introduced a number of OData query options that developers can use to offload logic from the client to the OData service. In this tutorial, you will learn how to incorporate one or more query options into your SAPUI5 application.

### Time to Complete
**10 Min**.

---

1. Log into your [HCP account](https://account.hanatrial.ondemand.com) and open SAP Web IDE tab in a Google Chrome browser. Ensure that your latest code has been committed to your git repository. If so, you should have green dots next to the folders and files in your project (as shown below). If not, [commit your files to Git now](http://go.sap.com/developer/tutorials/hcp-webide-commit-git.html).
 
     You may want to add some line breaks in your code to match the image below. It will make it simpler to change the `items` attribute in the steps below.
     items="{/Products?$orderby=ProductName}"
     
 

    

     Name    |  Character  | XML Format | Description
     :-------| :-----------| :--------- | :-----------
     `quot`  | `"`         | `&quot;`   | Double quotation mark
     `amp`   | `&`         | `&amp;`    | Ampersand
     `apos`  | `'`         | `&apos;`   | Apostrophe
     `lt`    | `<`         | `&lt;`     | Less-than sign
     `gt`    | `>`         | `&gt;`     | Greater-than sign

     
7. To sort by the product name *and* exclude products that are out of stock, the query option would need to be formatting like the string below (the `&` in the URL is replaced with `&amp;`). Modify the `items` attribute to 
 
     items="{/Products?$orderby=ProductName&amp;$filter=UnitsInStock gt 0 and SupplierID gt 2}"
 
     ![Discard changes using git](https://raw.githubusercontent.com/SAPDocuments/Tutorials/master/tutorials/hcp-webide-inserting-query-options/mob3-5_9.png)



## Next Steps
 - Manually creating a data model to use in SAP Web IDE's Mock Data server (coming soon)