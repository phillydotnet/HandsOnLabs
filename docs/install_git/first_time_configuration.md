# First-Time Configuration Quickstart

This document does not replace the official documentation, but is a quick series of steps you can use if you just want to get going and follow the remaining instructions in the labs.

## Set name and email
Most Git GUI tools will prompt you for this if they detect nothing has been set, but since we're doing this all command line, you should configure your name and email address that will be applied to commits.

From the prompt enter these commands.  Use your own information:

`git config --global user.name "Philly.Net User Group"`

`git config --global user.email phillydotnet@example.com`

*Read more about First-Time Git Setup at the official documentation: [Getting Started - First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)*

## (Optional) Set a default text editor

Many users want to use their favorite text editor for commits, rebase, and merges.  You may use the instructions below to set Visual Studio Code as your default editor or the instructions below from the official Git docs.

### Visual Studio Code as editor
`git config --global core.editor "code --wait"`

For this to work, Visual Studio Code needs to be in the path on Windows.

You can actually set any editor you like by providing a command for the core.editor setting.

*Read complete instructions for using VSCode as your git Editor here: [Visual Studio Code as Git Editor](https://code.visualstudio.com/docs/editor/versioncontrol#_vs-code-as-git-editor)*

### More information on setting editors

*Read more about setting your text editor at First-Time Git Setup at the official Git documentation.  Look for the section "Your editor": [Getting Started - First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)*

