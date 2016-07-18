# Work In Progress
This folder is for your contributions. Please submit all tutorials in this folder _only_.

# Folders and Markdown Files
As per convention, we require you to create **one folder per tutorial**. The folder should include all assets and exactly one markdown file.
**Note:** Even though, only the filename of the markdown is carried over, having the same folder name is important and enables easier navigation.

# Naming Conventions
Managing namespace is crucial and impacts how search engines crawl the tutorials since the markdown filename will be mapped to the tutorial html filename. For instance:

Markdown File: `build-mobile-web-app-from-template.md`

Ultimate Template URL: `http://go.sap.com/developer/tutorials/build-mobile-web-app-from-template.html`

In other words, we have to maintain the searchability for our tutorials. To do that effectively, SEO guidelines were composed in corporation with the `sap.com` team.

## SEO Guidelines
- [ ] no underscores
- [ ] all characters lowercase
- [ ] no buzz or stop words
- [ ] filename length < 50
- [ ] replace Umlauts (á, ä, ö, ..)
- [ ] up to 6 unique keywords

### No underscores
Do not use underscores in your file & folder names.

_Bad_: ```web_ide_introduction```

_Good_: ```web-ide-introduction```

### All characters lowercase
Do not user uppercase charcaters.

_Bad_: ```WEB-IDE-Introduction```

_Good_: ```web-ide-introduction```

### No Buzz or stop words
Do not add 'sap', buzz words (e.g. cloud, iot, vr, data mining, machine learning) or stop words (e.g. sap, with, and, for, using). Doouble check if your word is listed as stop word in [work-in-progress/stopwords.md](https://github.com/SAPDocuments/Tutorial-Contribution/blob/master/work-in-progress/stopwords.md).

_Bad_: ```cloud-based-sap-web-ide-iot-ready-to-get-you-started```

_Good_: ```web-ide-getting-started```

### Filename length < 50 characters
The max length of the URL is 94 characters, excluding the domain (everything after “go.sap.com”). Furthermore, URLs will be cropped by search engine crawlers after 50 chars. Therefore, keep it short and precise!

_Bad_: ```use-the-cloud-based-sap-web-ide-to-develop-sapui5-applications```

_Good_: ```sapui5-applications-web-ide```

### Replace Umlauts (á, ä, ö, ..)
Replace every occurance of Umlauts with “e” added to character with dots on top. For instance, ä > ae, ö > oe. In case, you have to integrated `ß`, you have to replace it with `ss`.

_Bad_: ```sapui5-äußerst-leicht-gemacht```

_Good_: ```sapui5-aeusserst-leicht-gemacht```

# So, how do should I approach when looking for a filename?
Identify up to **6 unique** keywords (no `SAP`) that you think are most importantly. These keywords should represent what you think potential readers will be searching for. Test your assumption about the importance by looking *solely* at the keywords and ask yourself what one would expect to see based on them. If that is representing what your tutorial is about, you are good to go.

Next, order your keywords by importance:

1. Main product in use, e.g. `hcp`

2. Optional: sub-product in use, e.g. `web-ide`

3. Goal of your tutorial, e.g. `create-sapui5-app`

4. Optional: Details on *how* you achieve the goal, e.g. `template`


Taking the examples above, the proposed filename could be `hcp-web-ide-create-sapui5-app`. Given the limitation of 6 unique keywords, it is proposed to skip the details on how you want to achieve the goal.

Finally, check the character count of your filename. It should be < 50. The easiest way to achieve this is to [use this Plunk and copy&paste your title in the input field](http://embed.plnkr.co/moVlKM/).
