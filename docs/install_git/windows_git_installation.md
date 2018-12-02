# Installing Git (for Windows Developers)
There are many ways to have Git installed on your machine.   

1. Install Visual Studio 2017 - Select Git For Windows component
2. Install Git for Windows
3. Install via Chocolatey

As of this writing, GitHub Desktop no longer installs Git (for command line usage), but still performs Git functions.  We suspect it is using a Git library internally.  If you are interested in this, check out [libgit2](https://libgit2.org/).  There are many different language implementations.

Please read all of the options below and determine your best action:

## Install Visual Studio 2017
Download - (https://visualstudio.microsoft.com/vs/)

If you already have installed Visual Studio 2017 Community, Professional, or Enterprise, you may have already installed Git For Windows.  If not, and you plan to use Visual Studio 2017 on the device, this is a great option as the Visual Studio update process keeps Git updated as needed to remediate important fixes.

In other words, if you let VS 2017 install Git for Windows, let it manage Git for you on that device.

No matter what workload or other components you choose, make sure you have selected Git for Windows among Individual Components.

![Select Git for Windows in Individual Components](docs/images/vside_git_for_windows_component.png) 

## Install Git for Windows yourself
As of this writing, the current version is 2.18.0. You can download an installer from: https://gitforwindows.org/

## Install from Chocolatey
Chocolatey is a package manager for Windows.  It installs quickly and automates installation of many tools and products you may use.

If you have Chocolatey you can simply use
    
    choco install git

Links: [Chocolatey Site](https://chocolatey.org) - [Chocolatey Install Information](https://chocolatey.org/install) - [Git for Windows package](https://chocolatey.org/packages/git)
