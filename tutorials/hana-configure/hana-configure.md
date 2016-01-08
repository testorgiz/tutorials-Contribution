---
title: HANA 101 - Getting Started, and connecting the Web Workbench
description: Access your first data in a native HANA Application.
tags: [product:tech/73554900100700000996, product:tech/67838200100800004076, product:tech/01200615320800003694, tutorial:product/hcp_web_workbench, tutorial:technology/sql, topic:139269250608756787992873, tutorial:interest/gettingstarted]
---
## Prerequisites  
[How to create an SAP HANA Developer Edition in the Cloud](http://go-qa.sap.com/developer/tutorials/setup-hana-for-cloud.html)

## Details
### You will learn  
1. How to use HANA Studio Perspectives
2. How to create a connection to the HANA back end
3. Getting started with the HANA Web based development workbench

[Information]> Information
> All source code solutions and templates for all exercises in this document can be found [here](http://hanapm:8005/workshop/admin/ui/exerciseMaster/?workshop=xs)

### Time to Compete
Beginners will take **30 minutes** to finish this tutorial.

### Host Configuration
Access your HANA instance that was created in ["How to create an SAP HANA Developer Edition in the Cloud"](http://go-qa.sap.com/developer/tutorials/setup-hana-for-cloud.html).

Chose Notepad as the Open with Editor:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/1.png)

Replace the current IP address in front of the hostname hanapm with the specific IP address for this workshop which was supplied by your instructor:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/2.png)

Save the content. Exit Notepad:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/3.png)


### HANA Studio Configuration
### ![](http://go.sap.com/dam/application/shared/icons/icon_gold_circle_01.svg) Adding the HANA Studio Perspectives

Open the HANA Studio via the Windows Start menu or via the Icon on your Start bar.

If your HANA Studio opens to the following Overview screen, simply press Workbench to return to the full Studio tooling:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/4.png)

To support the new developer centric workflow, there are two additional Eclipse Perspectives which have been added to SAP HANA Studio. These are not displayed by default.

In the upper right corner of your SAP HANA Studio, there is an add Perspectives button. Press this:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/5.png)

Add the SAP HANA Development perspective. This is the perspective you should be using for almost this entire walkthrough:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/6.png)

Repeat the step and add the Debug perspective:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/7.png)

After adding these two new perspectives, you may also still see the initial SAP HANA Administration Console perspective as well. If so, you can right mouse click and choose Close as we will not be using this perspective:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/8.png)

### ![](http://go.sap.com/dam/application/shared/icons/icon_gold_circle_02.svg) Create a connection to the HANA server

Make sure you are in the SAP HANA Development perspective by clicking on the button:
![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/9.png)

Click on the ```Systems``` view.  Right click in the white space below this tab and choose ```Add System...```.

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/10.png)

Input the server hostname: ```hanapm```

Input the instance number: ```00```

Enter a meaningful description of your choice. Press the ```Next``` button:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/11.png)

Enter the user id and password. The user id should be WORKSHOP_<Group Number>. Your group number is ```01```. For this tutorial, your user id is ```WORKSHOP_01```. 

Enter the password: ```HANARocks2015```

Click Store user name and password in secure storage.

Click ```Finish```:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/12.png)

You should now have a new connection with your specific user id for the HANA system. Please make sure to use this connection for the rest of the exercise.

[Note]> The System ID and users shown in these screen shots might be different than the ones you are working with and will often be blurred to avoid any confusion.

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/13.png)

### ![](http://go.sap.com/dam/application/shared/icons/icon_gold_circle_03.svg) Create a Repository Workspace
Switch to the ```SAP HANA Repositories``` view. You should see the system entry you created in the previous step and a default Workspace. Right mouse click and choose ```Create Repository Workspace```:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/14.png)

Confirm the file system location on your local machine which will hold the local copy of this Workspace. Click ```Finish```:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/14.png)

You should now see the local workspace mapped to the remote workspace in the SAP HANA Repositories view:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/15.png)

[Note]> Your System ID, User ID, Hostname, and System Numbers will be different than those displayed in subsequent screen shots. For this reason we have often blurred this information in screen shots to avoid confusion.

### ![](http://go.sap.com/dam/application/shared/icons/icon_gold_circle_03.svg) Launching the SAP HANA Web-based Development Workbench and creating initial development artifacts

We will primarily work in the Browser Based IDE – the SAP HANA Web-based Development Workbench. Launch Google Chrome from the Windows desktop:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/16.png)

Input URL for your HANA system ```http://hanapm:8000```

Then the path to the HANA Web Workbench (```/sap/hana/ide/editor/```).

Complete URL would be: ```http://hanapm:8000/sap/hana/ide/editor/```

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/17.png)

If prompted for user name and password, enter the user id and password which the instructor has provided to you. The user id should be WORKSHOP_. Your group number will be given to you by the session instructor. For example if the group number is “01”, then your user id would be ```WORKSHOP_01```. 

Enter the password: ```HANARocks2015```:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/18.png)

The Web Workbench represents the Repository content as folders and files. Each development object is a file which can be directly edited within this tool. We don’t check out projects, but instead directly edit and save objects. Commit and Activate are both performed upon save.

We will begin by creating a package for our development. Expand the workshop folder and the exercises folder within it:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/19.png)

The Web Workbench also has some project wizards.  Right mouse click on the exercises folder and choose ```Create Application```:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/20.png)

In the Create Application from Template dialog, first choose the Empty application (with XSAccess and XSApp) option as the Template type:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/21.png)

Now in the package field, extend the value which is there with .g<group number>. In our example we are group number 01. Therefore our value is ```workshop.exercises.g01```.

Then press ```Create```:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/22.png)

The Repository view should refresh and you should see your new package and the basic XS application descriptor files within:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/23.png)

We will also need a schema to house database catalog objects. Right mouse on your group package and choose ```New->File```:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/24.png)

Create a file named HANA_WORKSHOP_<Group Number>.hdbschema.

For this example this would be ```HANA_WORKSHOP_01.hdbschema```.

Press ```Create```:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/25.png)

A code template can be inserted into the new development object by choosing the Insert snippet button from the toolbar:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/26.png)

Replace the default value of MY_SCHEMA_NAME without your actual schema name of  HANA_WORKSHOP_<Group Number> (```HANA_WORKSHOP_01```):

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/27.png)

Save the Schema:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/28.png)

When you first create a development object, like a schema, you don’t have access to it. This is because it is created and owned by the system user _SYS_REPO.  In order to grant your development user access to this object, we will need to open the security tool. The security tool will then open in a new browser tab:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/29.png)

Expand the Users folder and then select your user:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/30.png)

In the user details, select the Object Privileges tab and then press ```Add```:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/31.png)

Search for ```HANA_WORKSHOP_``` and then select the Schema name you created in the earlier step (```HANA_WORKSHOP_01```):

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/32.png)

The Schema will be inserted in to the SQL Object list. Select it and then choose the Drop, Execute, Select, Insert, Update, Delete, and Debug Privileges for the object:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/33.png)

Save your changes:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/34.png)

You can now close the Security tab in the browser and return to the Editor tab:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/35.png)

Your group folder now also contains an index.html file. This is a nice way to test to make sure that HTTP access is setup and working for your group folder:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/36.png)

Select the ```index.html``` file and then press the ```Run``` button in order to test it:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/37.png)

The index.html file should open in a new browser window. This simple test tells us that your project, role and access control files are all setup properly:

![](https://raw.githubusercontent.com/testorgiz/test-tutorials/master/tutorials/hana-configure-gt/38.png)

You have completed the exercise! You are now able to:
- Create a connection to the HANA server 
- Launch the SAP HANA Web-based Development Workbench
- Create a schema
- Create access control files
- Grant access to the schema
- Create an index.html file to test your setup

### Optional - Getting Help
If you need addition help resources beyond this document, we would suggest the following content:

* The Online Help at [http://help.sap.com/hana/SAP_HANA_Developer_Guide_en.pdf](http://help.sap.com/hana/SAP_HANA_Developer_Guide_en.pdf)
* The integrated help within SAP HANA Studio (content  identical to the above mentioned online help)
* SAPUI5 SDK (installed on your HANA Server) ```/sap/ui5/1/sdk/index.html#content/Overview.html```

