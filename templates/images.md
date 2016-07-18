# Including images
1. To include images, you should first save them in PNG format, and put them in the same folder as your tutorial. When you are first working on your tutorial, include them into your tutorial document using a local reference like:

    ```
    ![some alternative text](step-1.png)
    ```

    It is important for you to add an alternative text for Search Engine Optimization. The `node test.js` command and CI tests will flag an error if you don't. 

2. Also, the 4 white-spaces appending to '!' are required by MD to ensure that step numbering with images in between works as expected.
3. Please use dashes (`-`) rather than underscores (`_`) in image file names.

