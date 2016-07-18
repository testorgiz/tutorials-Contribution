[![Circle CI](https://circleci.com/gh/SAPDocuments/Tutorial-Contribution.svg?style=svg&circle-token=9f4b7e5b097e93b36456a318bc7bd29a1cb8c46a)](https://circleci.com/gh/SAPDocuments/Tutorial-Contribution)
[![ReviewNinja](https://app.review.ninja/47841631/badge)](https://app.review.ninja/SAPDocuments/Tutorial-Contribution)
[![Gitter Chat](http://img.shields.io/badge/chat-online-brightgreen.svg)](https://gitter.im/SAPDocuments?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Welcome Tutorial Authors
This repository is solely for you to get familiar with Markdown, the conventions and our guidelines. Nothing in this repository will be pulled to the productive system of `sap.com`.

# What is Markdown (MD)?
It is a markup language - a plain text format - for writing structured documents. We used Markdown to structure tutorial contents. This approach has multiple benefits:

 - simple to use
 - easy to read
 - easy to validate
 - easy to edit and preview within GitHub

In case you have never worked with Markdown, it is recommended to check out [this reference](http://commonmark.org/help/) and this [10 minutes tutorial](http://commonmark.org/help/tutorial/). This tutorial will teach how the standardized Markdown is supposed to look like. On GitHub, however, we use `GitHub Flavored Markdown`, which has [differences to traditional Markdown](https://help.github.com/articles/github-flavored-markdown/) like table, code block syntax highlighting, and URL auto linking. Please get yourself familiar with these conventions before submitting a tutorial proposal.

In case you're already familiar with MD, but need to refresh your memory, check out the **[Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)**.

# What is Git and GitHub?
In case this is your very first contribution on GitHub, we recommend you to check out the following resources to get started:
- [Understanding the `Github Flow`](https://guides.github.com/introduction/flow/)
- [GitHub Hello World](https://guides.github.com/activities/hello-world/)
- [GitHub Overview & Training Webcasts](https://www.youtube.com/playlist?list=PLg7s6cbtAD15Das5LK9mXt_g59DLWxKUe)
- [Free one hour GitHub Live Webinar](https://training.github.com/classes/introduction/)

You will not be required to do complex stuff with Git. The process is optimized for `GitHub.com` and [`GitHub Desktop`](https://desktop.github.com/). For the most simple scenario, it is recommended to install GitHub Desktop. However, you could do everything manually with Git (in case you want to).

# How do tutorials get on `sap.com`?
Tutorial authors create a folder and initial version of a tutorial (from a template) using the `node new.js` command. The initial version of the document is created in the `work-in-progress` folder (inside of this repository), and any screenshots are placed in the same folder as the markdown file. Once it is complete, the Authors will run tests on the tutorial (`node test.js`) and when they pass, move the tutorial folder from `work-in-progress` to the `tutorials` folder with `node ready.js`. 

Once moved to the `tutorials` directory, and committed to Github and an automated HTML generation process (runs every quarter hour) will produce the web version for the QA website. Once everything looks good there, the author will fork the production repository, copy the tutorial folder over, commit it and create a pull request. A Publisher reviews the pull request, and if everything is satisfactory, will merge it into the main branch, and the automated process will produce the HTML page for production.



# Got It! Let's Get Started
At this point, we assume you know how GitHub works, so let's get started: [Open `contributing.md` for detailed steps](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/contributing.md).
