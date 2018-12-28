# Azure DevOps Hands-On Lab Part 2
## Azure Pipelines

## Prerequisites
Please make sure your device is ready with the following prerequisites:
1. Azure DevOps Account
2. Parts Unlimited Project from the [Azure DevOps Demo Generator](https://azuredevopsdemogenerator.azurewebsites.net/)
3. Azure Account

### Azure DevOps Account
You should create an [Azure DevOps Account](https://azure.microsoft.com/en-us/services/devops/) at https://devops.azure.com.  This requires a Microsoft account.

#### Microsoft Account creation
Many of our attendees have Microsoft accounts. You can sign in at [account.microsoft.com](https://account.microsoft.com).  If you do not have one, you can create one at [signup.microsoft.com] (https://signup.live.com).

Please note you can use ANY email address for a Microsoft account.  So use whatever account you have access to and is convenient for you.

### Parts Unlimited Project
This lab uses the Azure DevOps portal to utilize Azure Pipelines. To have a more realistic setup, the labs generate a project for you to use.

This project is called Parts Unlimited.  It is an ASP.NET 4.x project that already has a mature code base and repository we can use.

Please complete Task 1 from these instructions:
https://www.azuredevopslabs.com/labs/azuredevops/prereq/

Note this task will create the PartsUnlimited project for you in Azure Repos.  You do not need to complete the Visual Studio tasks (Task 2).

**Tip:** We have found naming your project `PartsUnlimited` without any spaces can be beneficial when cloning the project locally.

### Azure Account
You will need an Azure Account to provision limited resources for the continuous delivery lab.  If you do not have an account, you can get a free account with credits to get started here: https://azure.com/free

The amount of resources provisioned is very small and we will make sure everyone knows how to delete all resources when the lab ends.