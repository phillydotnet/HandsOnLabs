# Windows Forms

1. Open Visual Studio 2019 and select *Create a new project*
2. Search for **Winforms** in the search box
3. Select **Windows Forms App (.NET Core)**
   1. There is only the ability to create C# apps right now.
4. Click Next
5. Name it **PDNWebFoms**
6. Click **Create**
7. Run the project
   1. You should see a window open that is empty. 

## Designer

1. Double click on the Form1.cs file
   1. Oddly enough, nothing seems to happen (probably)
2. Close Visual Studio
3. Download the .NET Core WinForms Designer (not included...) from https://aka.ms/winforms-designer
4. Open the file and install the extension.
5. Reopen Visual Studio and open your project
6. The Designer may open automatically, if not double click on the Form1.cs file.
    1. (**NOTE**): This is a beta designer, you may have to close the form and then reopen it before everything works correctly.
7. If the Toolbox is not open then open it.
    1. If you don't see a tab for the toolbox on the left then click on the **View** menu item
    2. Find the ToolBox in the list and select it.
    3. Pin it open if it isn't already pinned
8. Select the Button control from the toolbox and place it on the form
9. Select the TextBox control and place it on the form.
10. Double click the Button and you should be taken to the click event for the button
11. Add the line ```textBox1.Text = "hello world!";```
12. Run the app

## Single Exe file

1. Drop to a command line in the directory that contains your Solution file
    1. Easy way to do this is to right click on your solution and select **Open Folder in File Explorer**
    2. In the Address bar of the file explorer type CMD and hit enter - you should be in the command window in the directory of your project
2. type ```dotnet publish -r win-x64 -c Release /p:PublishSingleFile=true```
    1. The -r specifies a Runtime Identifier (RID). There are RIDs for Linux and macOS as well. You can find a list at this URL: https://docs.microsoft.com/en-us/dotnet/core/rid-catalog
3. Look in the publish directory for your file
4. Check it's size
5. Add ```/p:PublishTrimmed=true``` to the end of the command and rerun the command
6. The size should be significantly smaller. 
