# Creating new, and editing tutorials in "QA"

The steps for creating a new tutorial and editing tutorials in the "QA" environment are described below.

---

## 1. Install required tooling
Install the following on your laptop:

 - [`Node.js`](https://nodejs.org) (version 0.12.7 or later)
 - [`Github Desktop Client`](https://desktop.github.com/)
 - Markdown editor of your choice. A few options to consider are:
   - [`Atom`](https://atom.io/) (cross-platform)
   - [`MacDown`](http://macdown.uranusjr.com/) (Mac)
   - [`Haroopad`](http://pad.haroopress.com/) (cross-platform)

## 2 Update GitHub Profile
Based on the current system implementation, the first committer of a tutorial file will be listed as the initial author! Therefore, you are required to update your GitHub profile and add your name. Your name will ultimately appear at the top of the tutorial page - along with a link to your GitHub profile.

## 3 Clone Tutorial-Contribution repository
To avoid manual Git usage, it is recommended to use [GitHub Desktop](https://desktop.github.com/). To start working locally on your tutorials, clone the [SAP Documents/Tutorial-Contribution](https://github.com/SAPDocuments/Tutorial-Contribution) projects below to your machine. See the [procedure for cloning with the Desktop Client](https://help.github.com/desktop/guides/contributing/cloning-a-repository-from-github-desktop/) on the Github site.

 > When working with Github or running `node` or `npm` commands, you will need to switch to the SAP-Internet network, or set up proxies. The SAP-Corporate network or VPN will block some of the traffic.

 - Development/QA repository: <https://github.com/SAPDocuments/Tutorial-Contribution>



## 4 Review instructions and style guide
Review the following documents online:

 - [Instructions on folder and file naming](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/work-in-progress/readme.md)
 - [Familiarize yourself with the tags available for tutorials](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/templates/tags.md). These will be inserted for you when running the `node new.js` command
 - [Review the style guide](templates/styleguide.md) for how to format the text in the tutorial documents
 - [Read the tutorial series planning](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/tutorial-series-guidelines.md) document to help frame your ideas for a series, and decide on the appropriate scope for each tutorial


## 5 Create new tutorial folder and MD file
Review the instructions on folder and file naming in the [Tutorial Contribution repository](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/work-in-progress/readme.md).

To simplify tutorial creation the tutorial publication system uses Node.js-based scripts.

In your terminal, run the `node new.js` command. You will be prompted to enter:

 - Tutorial name (which is used for the name of your tutorial folder and the tutorial MD file
 - Tutorial title: A short, meaningful name
 - Tutorial description: A sentence describing the tutorial
 - Select tags: scroll through the list with the up/down arrows on your keyboard and press the space bar to select/deselect a tag.

 If you visit the [online catalog](http://go.sap.com/developer/tutorials.html) and view the tutorial cards there, the title shows up as the first line (in blue) and the description below that. Tags are shown at the bottom of the card.

 A sample run of the `node new.js` command is shown below.

 ```bash
 ~/dev/Tutorials/SAPCOM-Tutorials-Contribution $ node new.js
? What should be the new name of your tutorial? hana-sds-setup
? What is the title of your new tutorial? Setting up SAP HANA Smart Data Streaming
? What is the description of your new tutorial? Learn how to confirgure SAP HANA SDS in your development environment
? Which tags should be associated with the new tutorial?
 ◉ Beginner
 ◯ Intermediate
 ◯ Advanced
❯◯ ABAP
 ◉ Big Data
 ◯ Cloud
 ◯ HTML5
(Move up and down to reveal more choices)
 ```

After selecting all your tags, hit the enter key and the script will create your tutorial directory in the `work-in-progress` folder. The terminal window will now look like this:

```bash
~/dev/Tutorials/SAPCOM-Tutorials-Contribution $ node new.js
? What should be the new name of your tutorial? hana-sds-setup
? What is the title of your new tutorial? Setting up SAP HANA Smart Data Streaming
? What is the description of your new tutorial? Learn how to confirgure SAP HANA SDS in your development environment
? Which tags should be associated with the new tutorial? Beginner, Big Data, SAP HANA
tutorial created
[515] ~/Documents/Developer_Relations/Tutorials/SAPCOM-Tutorials-Contribution $
~/dev/Tutorials/SAPCOM-Tutorials-Contribution $
```


## 6 Understand tutorial file structure
Every tutorial must follow the structure from the template (below). The meta-data is inserted into the [tutorial template](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/templates/tutorial.md) by the `node new.js` command.

```
- Metadata (Title, Description, Tags)
- Prerequisites
  - Proficiency: [Beginner | Intermediate | Advanced]
  - Tutorials: <link to a previous tutorial in a series>
- Next Steps
- Details
  - What you will learn
  - Time to Complete
- <Your Step #1>
- <Your Step #2>
- <Your Step #3>
...
- <Optional Steps>
- <Notes>
- Next Steps
```



## 7 Update the "introduction" portion of the tutorial
Before working on the tutorial procedure, outline the key characteristics of your tutorial for the reader. This will help readers to understand the purpose of the tutorial, how much time they would need and what they will take away from it.

1. **Prerequisites**:

 - Enter a level (Beginner, Intermediate or Advanced)
 - List out previous tutorial(s) that should have been completed, or general knowledge (e.g. "This tutorial assumes you experience with creating SAP HANA XS OData definitions")

2. **Next Steps**: Provide a link to the next tutorial in the series. If you are actively writing a series, the next tutorial won't exist yet - so simply just put the name followed by "(coming soon)". The continuous integration test scripts will fail if you enter an invalid link, so it is better to let the reader know what is coming and add the link after the new tutorial is online.

3. **Details**:

  1. **What you will learn**: What exactly will the reader learn, how they can use the skill outside of the tutorial etc. You can also add background information (with links on additional material to read). An example of a tutorial with background information is [Localizing your SAPUI5 app](http://go.sap.com/developer/tutorials/hcp-webide-localizing-app.html)


  2. **Time to Complete**: Enter a realistic time to complete the tutorial, factoring in the proficiency level you are targeting.

  The target time for individual tutorials is 5-15 minutes with a **maximum of 20 minutes**. If you think the tutorial will take longer, break the steps into two tutorials.

 If you are creating a beginner level series the user experience goal is to have the reader complete and app in less than 20 minutes from start to finish. Feel free to have someone try out the tutorial and measure the time to get a good estimate.


## 8 Edit the tutorial
Build out the body of your tutorial along with screenshots (which may be annotated). Refer to the [style guide](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/templates/styleguide.md) for how to highlight user actions, inputs, etc. It also explains how to use message-boxes.

To understand how to include images, please **read [`templates/images.md`](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/templates/images.md)**.

You can always check out the finished tutorials in the [production repository](https://github.com/SAPDocuments/Tutorial-Contribution/tree/master/tutorials) and compare them to the [tutorial catalog online](go.sap.com/developer/tutorials.html) to see how tutorials will be translated to HTML, and for how other authors are combining instructions, code snippets, images etc. in their tutorials.

It is fine to link to technical help or reference documentation and websites in your tutorial, but _**do not**_ link to marketing materials.

## 9 Test and move your tutorial
The two other Node.js commands (`node test.js` and `node ready.js`) you will use during tutorial creation are outlined below. You will always run the `node` commands from the top-level directory of the `Tutorials-Contribution` repository as shown below.

 ```bash
 ~/dev/Tutorials/SAPCOM-Tutorials-Contribution $ ll
 total 224
 -rw-r--r--   1 i834513  GLOBAL\Domain Users    206 Mar 18 11:07 circle.yml
drwxr-xr-x  23 i834513  GLOBAL\Domain Users    782 Apr 29 11:59 contributing-images/
-rw-r--r--   1 i834513  GLOBAL\Domain Users   7481 May 17 10:18 contributing-production.md
-rw-r--r--   1 i834513  GLOBAL\Domain Users  14618 Jun  9 15:42 contributing.md
drwxr-xr-x   3 i834513  GLOBAL\Domain Users    102 Jun  9 15:35 dependency-mods/
-rw-r--r--   1 i834513  GLOBAL\Domain Users   4774 Jun  9 13:21 new.js
drwxr-xr-x  12 i834513  GLOBAL\Domain Users    408 Jun  9 14:18 node_modules/
-rw-r--r--   1 i834513  GLOBAL\Domain Users   1346 Jun  9 15:35 package.json
-rw-r--r--   1 i834513  GLOBAL\Domain Users   3859 Apr 27 17:10 readme.md
-rw-r--r--   1 i834513  GLOBAL\Domain Users   1320 Jun  8 09:21 ready.js
drwxr-xr-x   8 i834513  GLOBAL\Domain Users    272 Jun  8 13:52 templates/
-rw-r--r--   1 i834513  GLOBAL\Domain Users   3888 Jun  9 14:25 test.js
drwxr-xr-x  14 i834513  GLOBAL\Domain Users    476 Jun  9 13:21 test_modules/
-rwxr-xr-x   1 i834513  GLOBAL\Domain Users     38 Jun  9 14:52 tests.sh*
-rw-r--r--   1 i834513  GLOBAL\Domain Users   5790 Apr  6 07:03 tutorial-series-guidelines.md
drwxr-xr-x  87 i834513  GLOBAL\Domain Users   2958 Jun  9 15:38 tutorials/
drwxr-xr-x  14 i834513  GLOBAL\Domain Users    476 Jun  9 15:38 work-in-progress/
~/dev/Tutorials/SAPCOM-Tutorials-Contribution $
 ```


 - **`node test.js`**: The tooling will run a number of checks on all files and you can control if you want it to run on tutorials in the `Tutorial-Contribution/tutorials` and or the tutorials in the `Tutorial-Contribution/work-in-progress` folder:
   - `filenames`: tests folder and filenames to ensure they meet the guidelines
   - `files_check:images`: ensures that alternative text has been entered for each image
   - `mdspell:all`: checks for spelling errors. The tests will test for standard English spelling and ignore acronyms, words in back ticks and any words in the [.spelling](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/.spelling) file. In general, we want to avoid loading up the spelling file with unnecessary entries. If you need to add a word to the spelling file, make sure the [publisher](tutorial-series-guidelines.md) for your area knows because any entries will need to be replicated in the production instance.
   -  `deadlink`: Tests for invalid links
 - **`node ready.js`**: This command will prompt you to select your tutorial in the `Tutorial-Contribution/work-in-progress` folder and it will move it to the `Tutorial-Contribution/tutorials` folder.

1. To test your tutorial in the `work-in-progress` folder, run the `node test.js -w` command. A successful test run will show an output similar to the following:

 ```bash
 ~/dev/Tutorials/SAPCOM-Tutorials-Contribution $ node test.js -w
 reading input...

 testing [==================================================] 100% 5.4


 CHECK FILENAMES:

  >>> 8 File(s) checked without Error(s)

 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 CHECK SPELLING:

  >>> 8 File(s) checked without Error(s)

 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 CHECK CONTENT:

  >>> 8 File(s) checked without Error(s)

 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 CHECK LINKS:

  >>> 46 Link(s) checked in 8 File(s) without Error(s)

 ~/dev/Tutorials/SAPCOM-Tutorials-Contribution $
 ```

 The `test.js` script can run in an interactive mode (no options specified), or you can use command line parameters to streamline testing. The options and examples are listed below:

 Synopsis
 `node test.js [-h | -a | -t | -w | -f | -s | -g] [-i mask]`

 DESCRIPTION
     The `node test.js` script will run the required tests on all files in the repository, or a selected subset.  If no command line parameters are specified, the script will run in an interactive mode where the user directs which files to test.

     The options are as follows:

 ```
 no options: Run in interactive mode

 -h  Display command line options (also --help).

 -a  Test all files in the repository.

 -t  Test files in the tutorials folder only.

 -w  Test files in the work-in-progress folder only.

 -f  Output the list of files tested.

 -s  Start interactive mode to select a single tutorial.

 -g  Test "guide" files, which are not tutorial or wip files (only in combination with -t)

 -i mask
     Test all files that match the mask. Can be modified with -t and or -w.
 ```

 Examples:

 Command                 | Result
 :---------------------- | :-------------
  `node test.js`         | Run in interactive mode
  `node test.js -tw`      | Tests run on all tutorials in `tutorials` and `work-in-progress` folders
 `node test.js -twf`     | Tests run on all tutorials in `tutorials` and `work-in-progress` folders, with file name output
  `node test.js -i hcp*` | Tests run on all tutorials in `tutorials` and `work-in-progress` folders, starting with `hcp*`
 `node test.js -ti hcp*` | Tests run on all tutorials in `tutorials` folder only, starting with `hcp*`


2. Once you have a clean test run, you will move your tutorial folder (with the `.md` file and any images) to the `Tutorial-Contribution/tutorials` folder by running the `node ready.js` command in your terminal. Use your up/down arrows and space bar to select the tutorial you want to move. Your terminal will look like this:

 ```bash
  ~/dev/Tutorials/SAPCOM-Tutorials-Contribution $ node ready.js
 ? Which tutorial do you want to move? (Use arrow keys)
   ❯ hana-sds-setup
      hana-xsodata
      hcp-webide-commit-git   
 ```

2. Hit the return key and the folder with your `.md` file and images will be moved.


## 10 Commit and push your changes to QA

1. Once your tests pass and the tutorial is in the `Tutorial-Contribution/tutorials` folder, you can commit and push (or `sync`) your files to the `Tutorial-Contribution` repository. The commit and push can be done on the command line, or using the [desktop client procedure](https://help.github.com/desktop/guides/contributing/committing-and-reviewing-changes-to-your-project/).

2. Once pushed, the QA system will immediately kick off a Continuous Integration build and the 1DX system will generate the HTML version of your tutorial within 15 minutes (HTML generation runs on the hour and every 15 minutes).

3. View your tutorial in the [QA system tutorial catalog](http://go-qa.sap.com/developer/tutorials.html) and look for any formatting errors to fix before moving your tutorial to the production repository. You will be prompted for a user name and password by the QA web server. Enter `wcms` for both user name and password.

## 11 Validate your tutorial appearance
**Because the QA repository is private, the QA web server is unable to load images when rendering the page. This requires a two-step validation process:**

1. To confirm your text and image display, view your tutorial via the Github web page. Example: <https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/tutorials/lumira-intro/lumira-intro.md>.

2. To confirm that the page number is rendered properly, view the HTML version on the QA web server. This step is required (for now) because the current parser used to generate HTML pages is different from that used by Github and requires that any items between numbered sections be indented four spaces (no tabs - just four spaces). Example: <http://go-qa.sap.com/developer/tutorials/lumira-intro.html>

## 12 Make any required edits
1. When performing the validation steps above, commit and push and modifications until you are satisfied with the appearance.
2. When complete, follow the steps in the [`contributing-production.md`](contributing-production.md) file to move your tutorial to production.
