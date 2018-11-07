# Git Tools Hands-On Lab

## Prerequisites
Please make sure your device is ready with the following prerequisites:

### Git
You will need Git installed and ready to use from the command prompt or Powershell to follow along with this lab.

This lab installation guide covers Windows, but anyone with Git installed should be able to follow along on any OS.

*(We will add Ubuntu Linux instructions before the lab, and we would accept help for Mac users with a pull request!)*

This lab will not use any other tools.  Future labs will cover IDE integration and tools.

### Visual Studio Code
https://code.visualstudio.com/download

Visual Studio Code will be covered in this lab

### GitHub Desktop
GitHub Desktop can be installed from: https://desktop.github.com/

### GitKraken by AxoSoft
GitKraken can be downloaded from: https://www.gitkraken.com/

## Determine your current Git version
You may determine if you have Git installed and ready to go for this lab by simply opening a Command Prompt or Powershell prompt and typing:

    git --version

If this returns output similar to `git version 2.17.1` or `git version 2.17.1.windows.2` (on Windows), then Git is already installed and ready to use in this lab.  This likely also means this is in your system PATH so that it can be used from anywhere you desire.

As of this writing, we recommend that Windows developers have at least 2.17.1(2) installed because of this security vulnerability disclosure: https://blogs.msdn.microsoft.com/devops/2018/05/29/announcing-the-may-2018-git-security-vulnerability/

## Installing Git & First-Time Setup
Please see one of these guides for Git installation

[Git for Windows](../../docs/install_git/windows_git_installation) - we provide additional guidance based on our experiences

[Git for Linux and Unix](https://git-scm.com/download/linux) - official documentation

[Git for Mac](https://git-scm.com/download/mac) - official documentation

[Quick First-Time Setup](../../docs/install_git/first_time_configuration.md) - This includes setting your name/email address for Git and changing the default text editor.

## Installing Posh-git

https://github.com/dahlbyk/posh-git

Modifies the PowerShell prompt to include the git status.
Adds Tab Completion of git commands
Some SSH capabilities
Update all branches command

Open a PowerShell command window and enter the following

`install-module posh-git`

After posh-git has been installed you can import the module.

`Import-Module posh-git`

If you want posh-git to be available all the time you can enter the following command

`Add-PoshGitToProfile`

If you go to a directory that contains a git repo you should see the prompt change to the current status of that repo.

## Using Git within Visual Studio Code

Visual Studio Code is tightly integrated with Git.

Open Visual Studio without any project. On the left hand side of the screen you should be able to see the Source Control Management (SCM) panel.
Open the command palette (ctrl-shift-P) and type **Git**. You will see several Git commands availalbe.

Select or type the clone command (git clone)
You will be presented with a text box that allows you to enter a repos URL.
Enter the url from the Phillydotnet git repo for this lab.
You will be prompted for a location to put the repo. The repo will be place into a subdirectory under the directory you select.
After the repo downloads you will get a dialog asking if you would like to open the repo. CLick the Open Respostory button.

At thsi point you may be asked to log into Github.com. If you are, then click the _Sign in_ button.

You should now have a directory with the repo in it.

Assuming you have installed posh-git and had it added to always load, you should be able to open a command prompt from within VS Code and posh-git should be working.

Make some changes to the readme file - save it - then go back to the command prompt and see what happens when you hit the enter key.

On the left side of the screen you should see a number in the SCM button. Click on it and you should see the readme file listed with an M (for modified).
There is a text box at the top of the pane, enter a commit message and then hit the check mark (or Ctrl-Enter).
A dialog box will open asking if you want to stage and commit the changes, click Yes.

At the bottom of the screen in the status bar you should see a double arrow in a circle with numbers and arrows next to them. Click on this and you will synchronize your changes.
You may be asked to log into github again, if so, log in and continue.

With the SCM still open, hover over the bar above the textbox and you should see an elipse. Click on the elipse. You should see lots of git commands.

In the status bar you can see the branch name - it should be master.
Click on the name and you will get an option to create a branch.
Click on create a new branch and it will prompt you for a name. Name it anything you want. Spaces will be turned into hyphens.

Make some changes to the readme and then commit the changes.
In the status bar you should see and arrow pointing to a cloud. This is becuase you havne't published the branch up to GitHub. Clicking on the cloud will do that.

If you want to merge your changes into master you can do that by switching to the master branch and then going to the command palette and selecting _Git Merge_. You will be asked which
branch you want to merge from.

Make another change to the Readme file and save it.
Go into the SCM and click on the readme file. You will see the changes you've made since the last commit.

If you want to revert your commit you can click on the arrow bending to the left. You can also accomplish this by typing _git discard changes_ in the command palette.

## Extensions

Also on the left is the VS Code Extensions pane. Click on it to open it.
Enter Git into the search box and you should see a list of git extensions - we are not going to be going over all of them.

### GitLens

This is one of my favorite extensions for git. It adds a pane on the left and also shows who changed the line you are currently on in the code and if the line has been committed or not.
In the GitLens pane you can see information about the repository. Gitlens also adds some buttons to the top right of the screen that can be used to see changes.

### Git Blame

This one adds "blame" information in the status bar. You can click on the persons name and it will show more information about the commit.

### Git History

This allows you to show a visual history of the branches and commits. It also shows the hash codes.