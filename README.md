## `Setup:`

Install AWS CLI:
https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html

Configuring AWS CLI:
https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html

Install Node.js and npm:
You can follow instructions from npm website: https://www.npmjs.com/get-npm

Install AWS-Amplify-CLI:
https://aws-amplify.github.io/docs/

Install yarn:
Proper guide to install: https://yarnpkg.com/en/docs/install

Clone this repo:
From wherever you checkout repos: https://github.com/ayush-garg-github/AWS-SERVERLESS-NOTETAKER.git

Install node packages:




Add aws amplify library:





Run amplify init:
 

Configure API and Authentication:
 
When schema file get opened, enter this and save file:
type Note @model @auth(rules: [{ allow: owner }]) {
  id: ID!
  note: String!
}



Update resource in cloud:


 

Output should be like this:
 

Create an optimized final build:

This will create a folder name “build” containing all the final files.

Create s3 bucket:


Copy files from “build” folder to the bucket:






Configure s3 bucket for static website hosting:
 

Apply bucket policy:
 
