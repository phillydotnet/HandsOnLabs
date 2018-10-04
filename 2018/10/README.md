# Getting Started with GitHub Hands-On Lab
Part two of the Git series covers setting up your GitHub account and creating your first repository.  We will also cover:

* Move your local repository to GitHub
* Cloning from GitHub to your device
* Committing to your repository on GitHub
* Contributing to a repository via a Pull Request
* Basic Markdown so we you create great documentation

## Prerequisites
Please make sure you and your machidevicene is ready with the following prerequisites:

### Git for Windows
You will need Git installed and ready to use from the command prompt or Powershell to follow along with this lab.

This lab installation guide covers Windows, but anyone with Git installed should be able to follow along on any OS.

This lab will not use any other tools.  Future labs will cover IDE integration and tools.

### Visual Studio Code (optional)
https://code.visualstudio.com/download

You may use any text editor you wish but we will use Visual Studio Code.  If you wish to follow along exactly as we are working, Visual Studio Code is available for Mac, Linux, and Windows. 

## Determine your current Git version
You may determine if you have Git installed and ready to go for this lab by simply opening a Command Prompt or Powershell prompt and typing:

    git --version

If this returns output similar to `git version 2.17.1` or `git version 2.17.1.windows.2` (on Windows), then Git is already installed and ready to use in this lab.  This likely also means this is in your system PATH so that it can be used from anywhere you desire.

As of this writing, we recommend that Windows developers have at least 2.17.1(2) installed because of this security vulnerability disclosure: https://blogs.msdn.microsoft.com/devops/2018/05/29/announcing-the-may-2018-git-security-vulnerability/

## Installing Git (for Windows Developers)
There are many ways to have Git installed on your machine.   Please read all of the options below and determine your best action:

### Install Visual Studio 2017
Download - (https://visualstudio.microsoft.com/vs/)

If you already have installed Visual Studio 2017 Community, Professional, or Enterprise, you may have already installed Git For Windows.  If not, and you plan to use Visual Studio 2017 on the device, this is a great option as the Visual Studio update process keeps Git updated as needed to remediate important fixes.

No matter what workload or other components you choose, make sure you have selected Git for Windows among Individual Components.

![Select Git for Windows in Individual Components](docs/images/vside_git_for_windows_component.png) 

### Install Git for Windows yourself
As of this writing, the current version is 2.18.0. You can download an installer from: https://gitforwindows.org/

### Install from Chocolatey
Chocolatey is a package manager for Windows.  It installs quickly and automates installation of many tools and products you may use.

If you have Chocolatey you can simply use
    
    choco install git

Links: [Chocolatey Site](https://chocolatey.org) - [Chocolatey Install Information](https://chocolatey.org/install) - [Git for Windows package](https://chocolatey.org/packages/git)

