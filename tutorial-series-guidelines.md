# Planning your tutorial series


## Tutorials -> Groups -> Series

All tutorials in the [catalog](http://go.sap.com/developer/tutorials.html) will be organized into a series (of some length) with the intent of helping developers or IT Admins to develop some skill using SAP technology. 

Each individual tutorial should take a person with the proficiency intended (Beginner, Intermediate or Advanced) 5-15 minutes to complete - with a maximum of 20 minutes (which should be an exception). Shorter times are preferred over longer...

Individual tutorials should be organized in groups of 3-5 tutorials. At the end of each group, the user should have made some significant advancement in a running application. 

The tutorial groups are arranged into a tutorial series. The number of groups and constituent tutorials will vary depending on the skill set or technology targeted. 

Organizing tutorials into groups/series is necessary to support the **Tutorial Navigator** concept currently in development.

## Developer Experience time goals

When planning your tutorial series, you should keep the following developer experience time goals in mind:

Time limit    | Desired outcome
:------------ | :------------------------------------------------------------
1 min         | Survey what is available on developer page, decide what to dig into
5 min         | Sign up for first trial –or– read developer friendly info on product
20 min        | Build first app
60 min        | Build second or third version of app – adding interesting functionality
1 week        | Work through other tutorials of product (2-3 hrs of time) and be able to report up to senior management
2 weeks       | Build something custom, refer to community resources
1 month       | Engage and become active in the community

## No Hello World apps

As part of the developer experience we are moving away from tutorials that are called or result in traditional "Hello World" type output. Instead, our tutorials will do something "useful" (even if basic). For instance, if the result of the tutorial is to output some text on a web page, instead of just printing "Hello World" have the output log the local time, temperature in Paris, etc... If you include "Hello World" or something close to it, your tutorial will be sent back to you for revision.

## Example tutorial series plan
The following example series meets the time goals above. When planning your series, you should produce an outline like this one to review with the publisher assigned to your area. 

#### Mobile Group 1: Mobile web development based on a "hybrid ready" app template (Time to Complete: 15 min)

 - Part 1: Create a destination in HCP which connects to a cloud-based OData service
 - Part 2: Building a responsive UI mobile web application based on a "Kapsel" template in Web IDE
 - Part 3: Deploying your mobile web app to HCP (and see it on your mobile devices)

#### Mobile Group 2: Add some polish to your app (Time to Complete: 20 min)

 - Part 1: Add labels and a field to your app
 - Part 2: Rounding a number from the OData service using JavaScript
 - Part 3: Add a currency symbol
 - Part 4: Replace label strings using the i18n (internationalization) feature in SAPUI5

#### Mobile Group 3: Go beyond the basics (Time to Complete: 45 min) 

 - Part 1: Add a tab and more data fields to your app
 - Part 2: Calculate a new data field from OData values and display it in the app
 - Part 3: Add support for multiple languages using i18n and the SAP Translation Hub service on HCP
 - Part 4: Learn more about OData with the OData for Developers primer
 - Part 5: Inserting OData query options into an SAPUI5 app

#### Mobile Group 4: OData models and using Mock Data (Time to Complete: 45 min)

 - Part 1: Create an OData model in SAP Web IDE
 - Part 2: Building an app and running it with the Mock Data Server
 - Part 3: Switching your app from Mock Data to a live OData service

#### Mobile Group 5: Deploy your app as a downloadable hybrid app using the Hybrid App Toolkit (Time to Complete: 20 min)

 - Part 1: Enable HCP mobile services in your HCP trial account
 - Part 2: Deploy a Hybrid app on HCP mobile services with HAT

#### Mobile Group 6: Build and deploy an Android Native version of your app (Time to Complete: 45 min)

 - Part 1: Create a master-detail activity app in  Android Studio
 - Part 2: Configure Android Studio with Mobile SDK
 - Part 3: Get the source code and build the native Android master-detail app


## Publishers and areas of responsibilities
The publishers are responsible for approving tutorial series plans, reviewing pull requests and merging tutorials from authors into the production repository. We will add publishers with specialties in different product and topic areas over time. The current list of Publishers is shown below.

For SAP products           | Name
:------------------------- | :--------------------------------
SAP API Management         | Jonathan Baker, <jonathan.baker@sap.com>
SAP BusinessObjects Design Studio | Witalij Rudnicki, <witalij.rudnicki@sap.com>
SAP HANA                   | Craig Cmehil, <craig.cmehil@sap.com>
SAP HANA Cloud Platform    | Jonathan Baker, <jonathan.baker@sap.com>
SAP HANA Vora              | Witalij Rudnicki, <witalij.rudnicki@sap.com>
SAP Lumira                 | Witalij Rudnicki, <witalij.rudnicki@sap.com>
SAP Predictive Analytics   | Witalij Rudnicki, <witalij.rudnicki@sap.com>
SAP Web IDE                | Jim Jaquet, <jim.jaquet@sap.com>


For Topics                 | Name
:------------------------- | :----------------------
HCP Extensions             | Jonathan Baker, <jonathan.baker@sap.com>
IoT                        | Craig Cmehil, <craig.cmehil@sap.com>
Mobile                     | Jim Jaquet, <jim.jaquet@sap.com>

