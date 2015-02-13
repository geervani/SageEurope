# README

## How do I get set up?

###Prerequisite
   * Xcode
   * Text Editor (sublimeText, notepad++,....)
   * Git
   * NodeJS
   * Sencha CMD v5.0.0.160
   * AppleStore account

###Configuration
   * Install Xcode
   * Install [NodeJS](http://nodejs.org/)
   * Install [Sencha CMD](http://www.sencha.com/products/sencha-cmd/download)
   * Install the text editor app
   
###Dependencies
   * [Sage Customer View Config](https://bitbucket.org/sagefr/sagecustomerviewconfig) : this repository contains the manifests that defines UI templates used in app runtime.
  * [Sage Customer View Resources](https://bitbucket.org/sagefr/sagecustomerviewresources/src) : this repository contains all resource files (translated terms in all languages available in the app).
  * [HermesSDKJavaScript](https://bitbucket.org/sagefr/hermessdkjavascript) : this repository contains **HermesJS** framework used in the app.
 
###Repository architecture
   * master : containes **Sage Customer View IOS** source code.
   * /release : folder that contains branches that reprensents the releases of **Sage Customer View**.
   * /bugfix : folder that contains branches that represents fixed **Sage Customer View** issues .
   * /feature: folder that containes branches that reprensents **Sage Customer View** new features.
 
  
###Contribution guidelines
####Branching strategy
   * A banch **release/version-number** must be created for every major (**a**.b.c.d)/ minor(**a.b**.c.d) release of **Sage Customer View**.
   * A branch **feature/feature-reference** must be created for every **Sage Customer View ** feature.
   * A branch **bugfix/issue-reference** must be created for every **Sage Customer View** issue.
 

####Merge strategy

#####Pull request:
  * Branches should not be merged directly.
  * Branches must be merged through a pull request that has been approved during the coding review.

#####Not released issue/feature merging
  * **feature/feature-reference** branch must be merged in **master** branch.
  * **bugfix/issue-reference** branch must be merged in **master** branch.

#####Released issue/feature merging
  * **bugfix/issue-reference** branch must be merged in **release/version-number** branch.
  * **release/version-number** branch must be merged in **master** branch in order to synchronize the fix for further versions.

####Tagging rules
  * A tag must be created for every patch and build.

####Code review
* A pull request must be reviewed and approved by all reviewers before merging it in a target branch