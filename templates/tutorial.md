
## Prerequisites  
 - **Proficiency:** Beginner | Intermediate | Advanced
 - **Tutorials:** [Do this tutorial first](http://go.sap.com/developer/tutorials/hcp-create-trial-account.html)

## Next Steps
 - Select a tutorial from the [Tutorial Navigator](http://go.sap.com/developer/tutorial-navigator.html) or the [Tutorial Catalog](http://go.sap.com/developer/tutorials.html)

## Details
### You will learn  
What the reader should take away from this time investment. You can also add screenshot(s) to illustrate what they will do.

### Time to Complete
**XX Min**.

---

1. When writing the procedure, refer to the user as "you" not "we will add a field". Currently, you must indent any lines between numbered steps four spaces (a tab space will not work) to preserve the numbering.

    This is an example of indenting another line of text, so that the next numbered paragraph will continue the numbering sequence. Indenting is not required before or after a numbered sequence (see **Prerequisites** section above).

    The three dashes just before step 1 inserts a horizontal line to mark the beginning of the procedure.


2. When specifying things they need to click on or visually locate, put the name in **bold**. For text they will enter or "code" items like variable names, class names, etc... surround that string with back-ticks. This will allow non-standard English words to be skipped by the spell checker. Examples:

    In the **Create new file** dialog box, enter `Detail.view.xml`, change the `ObjectAttribute` field to match the string below. Then click **Save**.

3. Notes:

    > Describe your crucial information by indenting four spaces, then using the greater-than character. You can also **bold items** or use `back-ticks`

4. When adding images, use the <raw.githubusercontent.com> form of the URL. It is easiest to commit your images to the repository first, visit the repository on <www.github.com>, select your image, then right-click on it and select **Open image in new tab**. The URL displayed there will be the one you want to use. For SEO, you must also include alternative text for the image. That is one of the tests run by the Continuous Integration script and an error will show up on Github if you don't. Feel free to annotate the images if there are multiple areas to locate, or a sequence the user must follow. It is best to insert a blank line before and after the image reference to avoid rendering problems.

    Example below:

    ![Activating the SAP Web IDE search pane](https://raw.githubusercontent.com/SAPDocuments/Tutorials/master/tutorials/hcp-webide-add-labels-field/mob2-1_label_1.png)

5. When providing a "chunk" of code, use a back-tick block with the content type to enable syntax highlighting. Remember, all lines must be indented four spaces to preserve numbering. It is best to insert a blank line before and after the blocks to avoid rendering problems. Examples:


    XML:

    ```xml
    <ObjectAttribute title="Product ID" text="{ProductID}"/>
    ```


    JavaScript:

    ```javascript
    // Reformat UnitPrice string to show only two decimal places
    oModel.attachRequestCompleted(function()
    {
        var NUM_DECIMAL_PLACES = 2;

        //Get all objects
        var products = this.getModel().mContexts;

        // loop through the objects and round to NUM_DECIMAL_PLACE
        for (var i in products)
        {
            var product = products[i].getObject();
            product.UnitPrice = Number(product.UnitPrice).toFixed(NUM_DECIMAL_PLACES);
        }
        this.getModel().updateBindings();
    }, this);
    ```

    Java:

    ```java
    /**
    * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
    */protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
    	    String user = request.getRemoteUser();
    	    if (user != null)
    	    {
    	        response.getWriter().println("Hello, " + user);
    	    }
    	    else
    	    {
    	        LoginContext loginContext;
    		    try
    	        {
    	             loginContext = LoginContextFactory.createLoginContext("FORM");
    			 		loginContext.login();
    	             response.getWriter().println("Hello, " +  request.getRemoteUser());
    	        }
    	        catch (LoginException ex)
    	        {
    	             ex.printStackTrace();
    		    }
    	    }
    }
    ```

6. Understand tutorial file structure. Every tutorial has to follow the structure you just copied over:

    - Metadata (Title, Description, Tags)
    - Prerequisites
    - Next Steps
    - Details
        - What you will learn
        - Time to Complete
    - Your Step #1
    - Your Step #2
    - Your Step #3
    - ...
    - Optional Steps
    - Notes
    - Next Steps


7. For markdown tools, you can whatever you'd like. [Atom](https://atom.io/) is a good choice. If you have a Mac, [MacDown](http://macdown.uranusjr.com/) has a nice preview capability.  

8. It is useful if you familiarize yourself with the markdown syntax. Some references are below. Notice that if you put angle brackets around a URL, the URL will be displayed and hyperlinked. (as opposed to the link format used for **Atom** and **MacDown** above):

    - <http://www.markdown-tutorial.com/#/>
    - <http://www.markdowntutorial.com/>
    - <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>

### Optional
 - Put any option steps here or remove this section if not applicable.

## Next Steps
 - Select a tutorial from the [Tutorial Navigator](http://go.sap.com/developer/tutorial-navigator.html) or the [Tutorial Catalog](http://go.sap.com/developer/tutorials.html)
