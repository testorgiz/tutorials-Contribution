# Tutorial Metadata
Your metadata should be located at the very beginning of each tutorial markdown file. It has to include three keys:

```
---
title: <Your tutorial title goes here>
description: <Your description goes here>
tags: [ <Your list of tags goes here> ]
---
```

## Title
The title appears in the `<title>` tag in the page `<head>`. It is used to inform people and search engines what the web page is about.


### Best Practices:
- Make sure all important keywords appear
- Begin with descriptive and unique text
- Use the progressive (`-ing`) form of verbs
- Use common abbreviations and acronyms
- Be very precise, because search engines crop lengthy titles (>= 55)

## Description
The description appears as meta description in the page `<head>`. Within search results, the matching terms will appear in bold. You should, therefore, make the description sound appealing to encourage people to click on the search result.

### Best Practices:
- Get creative: Avoid plain, formulaic description
- Optimize, so all important keywords appear in the snippet preview
- Minimize use of `SAP` (it will be redundant)
- Be short & precise and avoid exceeding character limit of 165

## Tags
Tags will be used by the system, more specifically [the tutorial catalog](http://go.sap.com/developer/tutorials.html), to allow users to filter for tutorials. There are three main categories: `Technology`, `Product` and `Area of Interest`.
You have to identify matching keywords from the keyword list provided by the SAP system. Therefore, check out [the tag list here](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/templates/tags.md).

### Best Practices:
- Don't use more than 5 keywords. If you think it is really needed, you might need to reconsider the scope of the tutorial proposal


# Example Metadata:

To give you an idea of how the metadata should ultimately look like, here's an example:

 ```
 ---
 title: How to create HANA Developer Edition in the Cloud
 description: This tutorial will help you create a HANA instance in one of the two public cloud providers: Amazon AWS or Microsoft Azure.
 tags: [ tutorial>beginner, products>sap-hana, topic>cloud, topic>big-data ]
 ---
 ```
