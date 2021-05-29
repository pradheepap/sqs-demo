
# Simple Queue Service

A Demo to set up SQS Queue which triggers Lambda when a message is pushed to the queue

## Authors

- [@pradheepap](https://www.github.com/pradheepap)

  
## Deployment

To deploy this project run

```bash
  sls deploy
```
 
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`serverlessDeploymentBucket`

  
## Features

- Create SQS Queue
- Lambda is Triggered when SQS Queue sends message

  
## CloudFormation Design

![Information Arch](sqs-app-cf-design.png?raw=true "SQS App")
  ## Acknowledgements

 - [Created using readme.so](https://readme.so/)