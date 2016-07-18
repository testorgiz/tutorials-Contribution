# Style Guide for SAP Tutorials


This document contains formatting standards for creating readable, consistent tutorials using Markdown.

Proposed modifications to this style guide should be directed to [Jim Jaquet](mailto:jim.jaquet@sap.com), Developer Relations.

## Basic conventions for Markdown files

  - Denote **bold** text using the asterisk format: `**bold text**`.
  - Denote _italic_ text using the underscore format: `_emphasized text_`.
  - Force a line-break by ending a line with two spaces, no more.

## Indenting
For the current SAP template parser, any lines, tables, lists etc. inside of a numbered section of the procedure must be indented with four spaces (not tabs) in order for the numbering to continue. A short example is shown below, but you can also refer to the [template file](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/templates/tutorial.md) for a properly structured file.

1. First step of the procedure

    Indenting this line four spaces so numbering is preserved. If it were indented fewer, then the numbering of the next step in the HTML file would restart at 1. Markdown editors with preview panes will not show this problem, so you need to verify this manually (for now).

2. Second step of the procedure


## User actions vs user inputs

  - When creating tutorial procedure text:
    - Use **bold** to call out user actions (items users will click on, or locate on the UI)
    - Use `inline code` for text that a user should enter by surrounding it with back-ticks:  ```Inline code```.  
  	- _Example tutorial step:_ Enter the relative path `/V2/Northwind/Northwind.svc`, then click **Save**.

  - If a user has a number of inputs to make (e.g. filling out a form), use a table to call out the Field and Text to enter (and the text to enter uses the in-line code formatting). If field names are non-standard English words, you should enclose those in back ticks as well. You should also put directory paths `c:/dev/hana_projects` in back ticks as well

    Field Name     | Value
    :------------- | :-------------
    Name           | `Northwind`
    Type           | `HTTP`
    Description    | `Northwind OData Service`
    URL            | `http://services.odata.org`
    Proxy Type     | `Internet`
    Authentication | `NoAuthentication`

## Headings

  - Header text must use the `atx-style` with no closing `#` character
  - Include a space between the `#` and the text of the Header^[1](#1)
  - `Header 1` headings (one `#`) are not permitted in our tutorials.

    ```
    ## Header 2
    ### Header 3
    ```

  - Headers spanning more than 80 characters should be re-evaluated.
  - Headers must be preceded and followed by a newline except at the beginning
    of a file.

## Lists

  - **List items** must be indented 2 spaces further than their parent.
  - Unordered list Items should use `-` instead of `*`.

    ```
    This is arbitrary text, an unordered list begins on the next line.
      - list item 1
      - list item 2
        - sub-list item
    ```

  - The first level of list items must not be preceded by a newline.
  - All lists must be followed by newlines.

    ```
    This text precedes a list of things.
      - list item 1
      - list item 2
        1. sub-list item 1
        2. sub-list item 2

      - list item 3
      - list item 4

    This is text of any kind that follows a list.
    ```

  - List item lines exceeding 80 characters should, when wrapped, align
    vertically with the beginning of the preceding line's text.

    ```
      - Large, avian creatures, chocobos roughly act as the equivalent of
        horses, being domesticated for use as mounts...
    ```
 - You can also use HTML list tags (`<ul>`, `<li>`) for embedded lists inside of a table cell. See table examples below.

## Code

  - **In-line code** must use single back-ticks and must not have spaces between
    the back-tick characters and the code.

    ```
    # Bad
    ` .this-is-wrong `

    # Good
    `.this-is-good`
    ```

  - **Fenced code blocks** must be preceded and followed by a newline.
  - When used inside _list items_, **fenced code blocks** must be indented as
    if they were one level deeper that the list item that contains them.

    ```
      - This list item contains a fenced code block.
      - Let's show how it might interact with a list.

        ```
        .code-example {
          property: value;
        }
        ```

    There is a newline above this paragraph because it is both the end of a
    list and because it follows a fenced code block.
    ```

- **Fenced code blocks** should also include a syntax highlighting keywords. Some common keywords are: `javascript`, `XML`, `ABAP`, `java`. A full list can be found [on Github](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). Here is an XML highlighting example. Look at the markdown source of this file and notice that the language follows the first three back ticks of the fenced code block.


 ```xml
 <?xml version="1.0" encoding="utf-8" standalone="yes"?>
 <edmx:Edmx Version="1.0" xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx">
 <edmx:DataServices m:DataServiceVersion="2.0" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata">

 </edmx:DataServices>
 </edmx:Edmx>
 ```

## Notes
To display a note, start a new line with the `>` character. 
> a note looks like this. You can also use **bold**, `back-ticks` or **`both`**.

