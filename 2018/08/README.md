# ASP.NET Blazor Hands-On Lab

## PLEASE NOTE
Blazor is an experimental project and is not ready for production.  It is not even released as an alpha.  Significant changes to APIs and design are likely to occur and there is no official word on any timeframes or if the project will be seen through to completion.

If you like Blazor, consider using the watch and star features of GitHub to indicate your interest, and contribute to the work or the discussion about issues. (Last updated: 8/7/2018)

[Official ASP.NET Blazor Repository](https://github.com/aspnet/blazor)

## Watch Live On Mixer
This lab will be presented live on August 8th, 2018.  The stream goes live at 5:45pm US Eastern (UTC -4) at the PhillyDotNet Mixer channel: https://mixer.com/PhillyDotNet

Join the Mixer chatroom to ask questions that will be relayed directly to the speaker.

You may also watch on YouTube:
https://www.youtube.com/PhillyDotNet

## Prerequisites
* Visual Studio Code - *([Download](https://code.visualstudio.com/download))*
    *  Make sure the [C# Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp) is installed. *([Download](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp))*
* .NET Core SDK 2.1.300 or later - *([Download](https://www.microsoft.com/net/download/dotnet-core/sdk-2.1.302))* Make sure when you execute the `dotnet --version` command that the response is ***at least*** 2.1.300 *(SDK version [2.1.302](https://www.microsoft.com/net/download/dotnet-core/sdk-2.1.302) is preferred due to it containing security fixes, but for a lab any 2.1.300 or later should work)*.

    ### If you wish to use Visual Studio, there are more prerequisites:

* Install [Visual Studio 2017 15.7](https://visualstudio.microsoft.com/vs/) or later with the *"ASP.NET and web development"* workload selected during installation.
* Install the latest [Blazor Language Services extension](https://marketplace.visualstudio.com/items?itemName=aspnet.blazor) from the Visual Studio Marketplace. *([Download](https://marketplace.visualstudio.com/items?itemName=aspnet.blazor))*

### All participants must install the Blazor templates at the command line:
    dotnet new -i Microsoft.AspNetCore.Blazor.Templates
