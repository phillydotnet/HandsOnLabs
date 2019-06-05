# .NET Core 3 (Preview) and C# 8 (Preview) Hands-On Lab

**June 5th, 2019 6:00PM EDT (UTC -4)**

To help get you started, please read the prerequisites.

## Watch Live
You can watch the lab live on any of our streaming platforms:
- Mixer: https://mixer.com/phillydotnet
- YouTube: https://youtube.com/phillydotnet
- Twitch: https://twitch.tv/phillydotnet

## Replay
The recording of this lab will be available at our [YouTube Channel](https://youtube.com/phillydotnet) along with all past recordings and content.

## Prerequisites
Please make sure your device is ready with the following prerequisites:
1. Visual Studio 2019 **Preview**, any edition (Community, Professional, or Enterprise).
    - You can download from https://visualstudio.microsoft.com/.
    - Community edition is free and bits are identical to Professional.
    - For the purposes of this lab, it is recommended you install:
        - dot.netThe .NET desktop development workload
1. .NET Core 3.0 preview SDK (preview 5) : https://dotnet.microsoft.com/download/dotnet-core/3.0. **(NOTE:  .NET Core 3.0 previews do not install with Visual Studio.  This is a separate download/install)**

1. [OPTIONAL] You can also complete many items in the lab with Visual Studio Code, which is available for all platforms at: https://code.visualstudio.com/Download

Note that everything above is the latest as of the writing and delivery of the lab.

Most attendees will install these for Windows, but Mac and Linux users can follow along with the C# 8 portions using Visual Studio Code.

# Hands-On with .NET Core 3 (Preview)
This lab will focus on .NET Core 3 You should have already downloaded and installed Visual Studio 2019 preview.
.NET Core 3 can be downloaded from here:

https://dotnet.microsoft.com/download/dotnet-core/3.0

Clone or download the zip from here:

https://github.com/OliaG/matching-game

## Converting a Framework Windows Forms 
- Open the match game project in Visual Studio and run it. This is running the Framework version. 
- Modify the UI project
    1. Unload the project
    1. remove all the contents
    1. Replace the contents with the following code

``` XML
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>WinExe</OutputType>
    <TargetFramework>net472</TargetFramework>
    <UseWindowsForms>true</UseWindowsForms>
    <GenerateAssemblyInfo>false</GenerateAssemblyInfo>
  </PropertyGroup>
  <ItemGroup>
    <ProjectReference Include="..\MatchingGame.Logic\MatchingGame.Logic.csproj" />
  </ItemGroup>
  <ItemGroup>
    <Reference Include="System.Windows.Forms" />
  </ItemGroup>
</Project>
```

- Now update the logic project
    1. unload the project file and replace its contents with this

```XML
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net472</TargetFramework>
  </PropertyGroup>
</Project>
```

- Try to build the project 
- Update the project file by changing it to look like this
- 
```XML
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net472</TargetFramework>
    <GenerateAssemblyInfo>false</GenerateAssemblyInfo>
  </PropertyGroup>
</Project>
```

- Now build and it should work.
- Modify the target framework to *netstandard2.0*
- Now build and notice the errors
- Add the following nuget package
    - microsoft.windows.compatibility
- to see other compatibility issuses add microsoft.dotnet.analyzers.compatibility
- rebuild

- Create a .NET Core 3 Winforms project
    - `dotnet new winforms -o MatchingGameCore`
- go back to VS and
Add existing project
- Set the new project as the startup project
- Run the solution
- get rid of all the code
- open the project file and
add

```XML
  <ItemGroup>
    <Compile Include="..\MatchingGame\**\*.cs" />
  </ItemGroup>
```

- Files should start to show up in the new project.

- Add the following to the project file

```XML
  <GenerateAssemblyInfo>false</GenerateAssemblyInfo>
```

- build
- add reference from logic code

- build 
- run

- Modify the mainform
  You may have to unload the core project for this to work...

    - double click on the mainform - you should see the designer open. If not then
  unload the core project and try again.

    - Reload the core project and you can edit the form in the designer.

- Build a standalone EXE file
    - in the .netcore project directory run the following command line

```
dotnet publish -r win10-x64 /p:PublishSingleFile=true
```

- go to the bin\debug\netcoreapp3.0\win10-x64\publish directory and you should see a single exe
  run this - the game should start. This is a self contained exe (very large)
# Hands-On with C# 8 (Preview)

## Setting your project to use C# 8
Start a new console app project.  Because you are using VS 2019 Preview and have the preview .NET Core SDK installed, it will be selected as your SDK and runtime by default.

### Selecting C# 8
With Visual Studio 2019 Preview 16.2.0 Preview 1, we are not seeing a need to change the project settings to select C# 8.  Previously this seemed to be required.

We will briefly demonstrate how you can set C# language in the new csproj format very easily or use the Project Properties in Visual Studio.  Either way you get the `<LangVersion>` attribute added:

```XML
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.0</TargetFramework>
    <LangVersion>8.0</LangVersion>
  </PropertyGroup>

</Project>
```

## Index & Ranges
- Create a new function we will call from Main

``` C#
static void WriteToConsole(int[] array)
{
    Console.WriteLine(string.Join(", ", array));
}
```

- Now call it with various uses of the range operators. Change Main to look like this:

``` C#
static void Main(string[] args)
{
    var values = new[] { 1, 2, 3, 4, 5 };

    var firstThree = values[0..3];

    Console.Write("values[0..3]: ");
    WriteToConsole(firstThree);
}
```

- You don't have to create a new variable to use ranges.  Add:

```C#
// You don't have to create a new variable to hold the range result
Console.Write("values[1..3]: ");
WriteToConsole(values[1..3]);  // start at index one and take three
```

- Let's introduce the hat operator

```C#
// Introducing the ^ (hat)

// same as [values.Count - 1]
Console.WriteLine($"values[^1]: {values[^1]}");

// throws IndexOutOfRange Exception
//Console.WriteLine($"values[^0]: {values[^0]}");
```

- Putting them together

``` C#
// start at index two and ignore last two
Console.Write("values[2..^2]: ");
WriteToConsole(values[2..^2]);  

// implicit start at index zero and ignore last four
Console.Write("values[..^4]: ");
WriteToConsole(values[..^4]);  
```

- Finally something more interesting:

```C#
// something more interesting
string text = "The quick brown fox jumps over the lazy dog.";
string lazydog = text[^9..^1];
Console.WriteLine($"lazydog: {lazydog}");
```

### Note this is notation for the new types
Try this code and view in Watch

``` C#
// Note that this notation is creating types
var range = 2..5;
var index = ^6;
```

## Async Streams
*Before proceeding, you may remove the code you used to demonstrate Range and Index language features or comment it out*

- Let's create a small class pretending to be data from a sensor:

``` C#
public class SensorData
{
    public int Value1 { get; }
    public DateTime Time { get; }

    public SensorData(int value1) => (Value1, Time) = (value1, DateTime.UtcNow);
}
```

- Now let's add some code to the Main method in Program that would be an enumerable stream using **yield return**.

``` C#
static IEnumerable<SensorData> GetSensorData()
{
    var r = new Random();

    for (var i = 1; i <= 5; i++)
    {
        Thread.Sleep(1500);  // In a web app, this is I/O bound work!
        yield return new SensorData(i);
    } 
}
```

- Finally, let's use the IEnumerable in Main method

```C#
foreach (var i in GetSensorData())
{
    Console.WriteLine($"Event: {i.Value1} at {i.Time.ToString("MM/dd/yy H:mm:ss zzz")}");
}
```

Okay what is wrong with this?

This is synchronous, and won't work well if you are in a desktop app that wants to keep pumping events in the UI or a web app that wants to keep throughput going while an I/O bound call is in progress.

Enumerables and Enumerators didn't support async.  Now they do.

- Use Task.Delay instead of Thread.Sleep and await it

``` C#
await Task.Delay(1500);
```

- We have to mark method async and use IAsyncEnumerable

``` C#
static async IAsyncEnumerable<SensorData> GetSensorData()
```

- Now the foreach must be modified with the await operator and Main method must be properly marked async

``` C#
static async Task Main(string[] args)
{
    await foreach (var i in GetSensorData())
    {
        Console.WriteLine($"Event: {i.Value1} at {i.Time.ToString("MM/dd/yy H:mm:ss zzz")}");
    }
}
```

For reference, here is the entire Program class:

```C#
class Program
    {
        static async Task Main(string[] args)
        {
            await foreach (var i in GetSensorData())
            {
                Console.WriteLine($"Event: {i.Value1} at {i.Time.ToString("MM/dd/yy H:mm:ss zzz")}");
            }
        }

        static async IAsyncEnumerable<SensorData> GetSensorData()
        {
            var r = new Random();

            for (var i = 1; i <= 5; i++)
            {
                await Task.Delay(1500);
                yield return new SensorData(i);
            } 
        }
    }
```

## Implicitly Scoped Using Statement
Change Program.cs to be this listing (or comment out irrelevant code):

```C#
using System;
using System.IO;

namespace CSharpEight
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var reader = new StreamReader(@"C:\Source\CSharpEight\helloworld.txt"))
            {
                var contents = reader.ReadToEnd();
                Console.WriteLine($@"Read {contents.Length} characters from C:\Source\CSharpEight\helloworld.txt");
            }
        }

    }
}
```

Now you have a simple program that reads from a file using a StreamReader.

This implements IDisposable and expects you to dispose of the object.  So we use the `using` keyword in the classic pattern.

However, what if the compiler could dispose of this for us when the StreamReader instance `reader` went out of scope?  Why do we have to define the scope?

That would look like this for our `Main` method:

```C#
static void Main(string[] args)
{
    using var reader = new StreamReader(@"C:\Source\CSharpEight\helloworld.txt");
    var contents = reader.ReadToEnd();
    Console.WriteLine($@"Read {contents.Length} characters from C:\Source\CSharpEight\helloworld.txt");
}
```

You may enjoy this as an alternative to defining the scope as we have for almost twenty years.

## Simplified Verbatim Interpolated Strings
I think this feature is actually called "Alternative Verbatim Interpolated String" but you can just call it "C# 8 fixed something silly".

In the same code listing above, we used a verbatim interpolated string for no apparent reason.

Really I just wanted everyone to see that you could combine interpolated strings and verbatim strings.

**BUT**

Before C# 8, you had to get the ordering of those characters (`$` for interpolated and `@` for verbatim) correct or it was an error.  Ugh!

Now you can switch the order and the compiler is smart enough to figure it out.

Try this out:

```C#
Console.WriteLine($@"Read {contents.Length} characters from C:\Source\CSharpEight\helloworld.txt");
```

and this:

```C#
Console.WriteLine(@$"Read {contents.Length} characters from C:\Source\CSharpEight\helloworld.txt");
```

Yay!

## Nullable Reference Types
This has a weird name, because what it REALLY is about is having the compiler help you make setting a reference to `null` illegal in your code (unless you explicitly say it's okay).

Suppose this was the listing of Program.cs

```C#
using System;

namespace CSharpEight
{
    public class Programmer
    {
        public string FirstName { get; }
        public string LastName { get; }
        public string Language { get; }

        public Programmer(string first, string last, string language) =>
            (FirstName, LastName, Language) = (first, last, language);
    }

    class Program
    {
        static void Main(string[] args)
        {
            var programmer = new Programmer("Chris", "Gomez", "C#");
            var result = ReviewCodeFrom(programmer);

            Console.WriteLine(result);
        }

        static bool ReviewCodeFrom(Programmer programmer)
        {
            if (programmer.LastName[1..3] == "om")
            {
                return true;
            }

            return false;
        }
    }
}
```

This works fine, but what if you add a line of code before the call to `ReviewCodeFrom()`

```C#
Programmer nullprogrammer = null;
var result = ReviewCodeFrom(nullprogrammer);
```

You get the dreaded null reference exception!

What if the compiler helped us here?

You have to enable this, because otherwise it would be considered a breaking change.

Open the csproj file and insert:

```XML
<Nullable>Enable</Nullable>
```

And now you get two warnings

`warning CS8600: Converting null literal or possible null value to non-nullable type.`

`warning CS8604: Possible null reference argument for parameter 'programmer' in 'bool Program.ReviewCodeFrom(Programmer programmer)'`

So, what if you really are okay with this and promise to check up on references?

First of all, you can say a reference type may be nullable with a ? mark:

```C#
Programmer? nullprogrammer = null;
```
This eliminates the CS8600 warning.  But why not the other one?  Well, just because **you** said it was okay doesn't mean the function you are calling knows how to deal with a null reference (or claims that it does).

```C#
static bool ReviewCodeFrom(Programmer? programmer)
```

Now this function is saying "Yes I am prepared for a null reference".

But what good would this feature be if you just said that and didn't mean it, so now we have a new warning for code **inside the function**

`warning CS8602: Dereference of a possibly null reference.`

Let's add this guard clause:

```C#
if (programmer == null)
{
    return false;
}
```

Finally, there is the "null-forgiving operator" which has been given other names in other talks.  Remove the guard clause above, and now when the warning reappears, insist that you know the reference is not null (with the `!` operator).

```C#
if (programmer!.LastName[1..3] == "om")
```

There is more to this so please read the reference:

Reference: [Nullable reference types](https://docs.microsoft.com/en-us/dotnet/csharp/nullable-references)

## Switch Expressions
For those times when you are using a switch statement but end up evaluating an expression afterwards, now you have switch expressions.

One example is if you are simply using a switch to determine what to return from a function:

Let's start with this Program.cs listing:

```C#
using System;

namespace CSharpEight
{
    public class Programmer
    {
        public string FirstName { get; }
        public string LastName { get; }
        public string Language { get; }

        public Programmer(string first, string last, string language) =>
            (FirstName, LastName, Language) = (first, last, language);
    }

    class Program
    {
        static void Main(string[] args)
        {
            var programmer = new Programmer("Chris", "Gomez", "C#");
            var result = ChooseCertification(programmer);

            Console.WriteLine(result);
        }

        static string ChooseCertification(Programmer programmer)
        {
            string customMessage = "You chose ";

            switch (programmer.Language)
            {
                case "C#":
                    customMessage += ".NET Certification";
                    break;
                case "VB":
                    customMessage += "Maintenance Certification";
                    break;
                case "F#":
                    customMessage += "Future Certification";
                    break;
                default:
                    customMessage += "No Certification";
                    break;
            }

            return customMessage;
        }
    }
}
```

With switch expressions, the switch statement could now look like this

```C#
return programmer.Language switch
{
    "C#" => customMessage += ".NET Certification",
    "VB" => customMessage += "Maintenance Certification",
    "F#" => customMessage += "Future Certification",
    _ => customMessage += "No Certification"
};
```

Give some of these remaining tutorials a try

## Default Interface Implementations
Suppose we had a good reason to modify an interface with a new member, but perhaps we cannot reasonably modify all of the implementations.  This could be because some of those implementations are in a library we can't change.

Default interface implementations might be a way to add generic default functionality for new interface members without having to recompile all implementations.

Suppose you started with this Program.cs

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace CSharpEight
{
    interface IMessage
    {
        void Insert(string text, DateTime time);
        IEnumerable<string> Read(string id);
    }

    public class TwitterMessage : IMessage
    {
        private string _tweet = string.Empty;
        private DateTime _timeOfTweet = DateTime.MinValue;
        public void Insert(string text, DateTime time) {
            _tweet = text;
            _timeOfTweet = time;
        }
        public IEnumerable<string> Read(string id) => Enumerable.Empty<string>();
    }

    public class NntpMessage : IMessage
    {
        private string _message = "NO MESSAGE";
        public void Insert(string text) => _message = text ?? "NO MESSAGE";
        public void Insert(string text, DateTime time) => Insert(text);
        public IEnumerable<string> Read(string id) => Enumerable.Empty<string>();
    }

    class Program
    {
        static void Main(string[] args)
        {
            var message = new TwitterMessage();

            // NntpMessage was implemented much later after TwitterMessage
            // and needed an implementation for Insert(string)
            // The interface was updated and released,
            // but TwitterMessage hasn't changed!
        }
    }
}
```

First of all, in its current state, NntpMessage has an extra implemented member that is not part of the IMessage interface.

Suppose we decide that it would be nice if all IMessage implementers had this member, but what can we do now?  We realize we could provide a default implementation that would be generic enough to work for all of today's implementers.

So we could add this default interface implementation **right into the interface definition**.

```C#
void Insert(string text)
{
    Insert(text, DateTime.UtcNow);
}
```

If you like expression bodied members, you could use this instead:

```C#
void Insert(string text) => Insert(text, DateTime.UtcNow);
```

**NOTE: Do not use both of these implementations.  The latter simply demonstrates a different syntax for the same thing.**

Now we have a default implementation that is reasonable.  Even though our app uses the TwitterMessage (which we presume cannot be updated) we can still use this implementation!

The key is that we have to have a reference to the *interface*, not the TwitterMessage implementation.

Change the Main method to look like this:

```C#
var message = new TwitterMessage();

var imessage = message as IMessage;
imessage.Insert("hello world");
```

Please consider this more in-depth tutorial as well:

[Tutorial: Update interfaces with default interface members in C# 8.0](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/default-interface-members-versions)

## Pattern Matching
Suppose we started with these classes.  These classes might all be in different libraries or not. You might own all the code or not.  That isn't relevant to pattern matching.

```C#
public class Car
{
    public int Passengers { get; set; }
}

public class DeliveryTruck
{
    public int GrossWeightClass { get; set; }
}

public class Taxi
{
    public int Fares { get; set; }
}

public class Bus
{
    public int Capacity { get; set; }
    public int Riders { get; set; }
}
```

You might have considered that these types should be in an inheritance hierarchy, which is still a good idea to consider.  What if this would be cumbersome to implement?  We have pattern matching syntax that might help us make decisions among these types without any additional redesign.

Now let's implement a toll calculator class that merely charges each vehicle based on type:

This is called a switch expression with **type patterns**.

```C#
public class TollCalculator
{
    public decimal CalculateToll(object vehicle) =>
        vehicle switch
        {
            Car c => 2.00m,
            Taxi t => 3.50m,
            Bus b => 5.00m,
            DeliveryTruck t => 10.00m,
            { } => throw new ArgumentException(message: "Not a known vehicle type", paramName: nameof(vehicle)),
            null => throw new ArgumentNullException(nameof(vehicle))
        };
}
```
To try it out, this simple code in Main will do the trick:

```C#
static void Main(string[] args)
{
    var calc = new TollCalculator();
    var result = calc.CalculateToll(new Car { Passengers = 2 });

    Console.WriteLine($"The result is {result}");
}
```

Suppose we wanted to make decisions based on types AND properties.  Let's rewrite the switch expression in the TollCalculator to use **property patterns**.

```C#
public decimal CalculateToll(object vehicle) =>
    vehicle switch
    {
        Car { Passengers: 0 } => 2.00m + 0.50m,
        Car { Passengers: 1 } => 2.0m,
        Car { Passengers: 2 } => 2.0m - 0.50m,
        Car c => 2.00m - 1.0m,
        Taxi { Fares: 0 } => 3.50m + 1.00m,
        Taxi { Fares: 1 } => 3.50m,
        Taxi { Fares: 2 } => 3.50m - 0.50m,
        Taxi t => 3.50m - 1.00m,
        { } => throw new ArgumentException(message: "Not a known vehicle type", paramName: nameof(vehicle)),
        null => throw new ArgumentNullException(nameof(vehicle))
    };
```

In this example we only added patterns for the Car and Taxi types, but you can see we also are drilling into properties of these objects as well!

This final sample adds in more patterns, including **recursive patterns**, which lets us make decisions based on expressions within the patterns!

```C#
public decimal CalculateToll(object vehicle) =>
    vehicle switch
    {
        Car { Passengers: 0 } => 2.00m + 0.50m,
        Car { Passengers: 1 } => 2.0m,
        Car { Passengers: 2 } => 2.0m - 0.50m,
        Car c => 2.00m - 1.0m,

        Taxi { Fares: 0 } => 3.50m + 1.00m,
        Taxi { Fares: 1 } => 3.50m,
        Taxi { Fares: 2 } => 3.50m - 0.50m,
        Taxi t => 3.50m - 1.00m,

        Bus b when ((double)b.Riders / (double)b.Capacity) < 0.50 => 5.00m + 2.00m,
        Bus b when ((double)b.Riders / (double)b.Capacity) > 0.90 => 5.00m - 1.00m,
        Bus b => 5.00m,

        DeliveryTruck t when (t.GrossWeightClass > 5000) => 10.00m + 5.00m,
        DeliveryTruck t when (t.GrossWeightClass < 3000) => 10.00m - 2.00m,
        DeliveryTruck t => 10.00m,
    };
```

(As an aside, note that switch expressions let you leave a trailing comma without being pedantic and complaining about it).

We really recommend you look at this entire sample, including the GitHub repository mentioned to see even more ways to clean up the code, reduce the 'length' of this code, and try to make it easy to understand the business rules being implemented at a glance.


[Tutorial: Using pattern matching features to extend data types](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/pattern-matching)
