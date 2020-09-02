# VS Code Tips

## command line

* Open new window
* Used for diff

``` cmd
code -n --diff readme.md readmenew.md
```

* open to a specific file/location

``` cmd
code -n -g readme.md:5:45
```

* read from standard input

``` cmd
echo Hello World | code.exe -
```

* extensions

``` cmd
code --list-extensions --show-versions
```

## Multiple Cursors

* sequential/box *ctrl+alt+shift arrow*
* discountinuous *alt+mouse right click*
* put cursor at the end of every line in a selection *alt+shift+i*
* put cursor at all matching selection *ctrl+shift+L*

## Font Ligatures

fira code has ligatures. VS Code also lets you add modifications - show in settings.

## Built in Markdown

Decent Markdown editor

## Git Integration

Show git commands in the git panel
Show git console - good for learning git commands 
Add VS Code as a diff tool
in global config for git add

``` yaml
[diff]
    tool = vscode
[difftool "vscode"]
    cmd = code --wait --diff $LOCAL $REMOTE
```

for Github integration you should install the Github Pull Request and issues extension.

## WSL integration

Show starting vscode from within wsl and from windows using the extension. also from the commandline.

``` powershell
code --remote wsl+ubuntu-18.04 /home/rob
```

show extensions are specific to the environment

