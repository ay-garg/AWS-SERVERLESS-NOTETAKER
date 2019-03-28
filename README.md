## Setup:

## Install AWS CLI:
https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html

## Configuring AWS CLI:
https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html

## Install Node.js and npm:
You can follow instructions from npm website: https://www.npmjs.com/get-npm

## Install AWS-Amplify-CLI:
https://aws-amplify.github.io/docs/

## Install yarn:
Proper guide to install: https://yarnpkg.com/en/docs/install

## Clone this repo:
From wherever you checkout repos: https://github.com/ayush-garg-github/AWS-SERVERLESS-NOTETAKER.git

## Install node packages:
`cd AWS-SERVERLESS-NOTETAKER`

`npm install`

## Add aws amplify library:
`yarn add aws-amplify aws-amplify-react`

## Run amplify init:
![amplify init](https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/1.png)
 

## Configure API and Authentication:
![Cognito and API](https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/2.png)

## When schema file get opened, enter text from this file:
https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/schema.graphql

## Update resources in cloud:
`amplify push`

![amplify push](https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/3.png)

## Output should be like this:
![amplify push output](https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/4.png) 

## Create an optimized final build:
`npm run-script build`

This will create a folder name “build” containing all the final files.

## Create s3 bucket:
`aws s3 mb s3://serverless-notetaker`

## Copy files from “build” folder to the bucket:
`aws s3 cp –recursive build/ s3://serverless-notetaker`

## Configure s3 bucket for static website hosting:
![s3 static](https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/5.png)
 
## Apply bucket policy:
https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/policy.json

![bucket policy](https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/6.png)

## Get s3 static website endpoint
![s3 endpoint](https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/7.png)

## Open the endpoint url
![login page](https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/8.png)

![after login](https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/9.png)

![add notes](https://github.com/ayush-garg-github/resources/blob/master/serverless-notetaker/10.png)
