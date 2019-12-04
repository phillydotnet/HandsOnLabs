# SignalR

### Create New Project
- Create new AS<span>P.NET</span> Core Application
- For this lab, the project is called `SignalRHol`
- Can use .NET Core 3.0 or 3.1
- Choose the Empty template

### Do I have to call the project `SignalRHol`
You don't, but if you do not, make sure you adjust the using statements for the Hubs as we go along.  Visual Studio will do this for you.

### Program.cs is ready to go

We don't have to do anything to Program.cs.  That is fine for this simple demonstration.

We will need to make sure the SignalR services are started up in Startup.cs, but we really aren't ready for that quite yet.

SignalR uses a `Hub` abstraction to for you to program against clients that connect to the hub and offer real-time updates.

### Create Hubs Folder
Create a Hubs folder in your project and create a class called ShapeHub.cs.  

If you use Visual Studio's *Add Class...*, it will look like the following:

``` C#
// Note that the only using statement we'll really need is 
using System.Threading.Tasks;

namespace SignalRHol.Hubs
{
    public class ShapeHub
    {
    }
}
```

If you aren't using Visual Studio, create the file and copy in the source above to start.

### Derive ShapeHub from `Microsoft.AspNetCore.SignalR.Hub`

You can do this simply by adding Hub in the source code:

``` C#
public class ShapeHub : Hub
```

In Visual Studio, the IDE will complain about `Hub`, so you can use it to add the following `using` statement.

``` C#
using Microsoft.AspNetCore.SignalR;
```

### Create a method that client can call in the `Hub`
Now you need to add a method that clients can call into to report changes.  Let's add this method to the class:

``` C#
public async Task MoveShape(int x , int y)
{
    await Clients.Others.SendAsync("shapeMoved", x, y);
}
```

### Set up Startup
In .NET Core we define the services we need in **Startup.cs**.  Here is where we will say we are using SignalR and to set up routing for the hub we just created.

- Open Startup.cs

SignalR is already part of ASP.NET, but we add it in the ConfigureServices method.  

- Update your ConfigureServices method so it looks like the following:

```C#
public void ConfigureServices(IServiceCollection services)
{
    services.AddSignalR();
}
```

- Update the Configure method so it looks like the following:

```C#
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }

    // Note that we need to serve static files.  We'll use this option
    app.UseFileServer();

    app.UseRouting();

    // Note we are routing some requests to the hub
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapHub<ShapeHub>("/shapeHub");
    });
}
```       

- Visual Studio will help you add the following using statement, or you can add it yourself at the top:

```C#
using SignalRHol.Hubs;
```

### Now let's build the web client
SignalR takes a little more effort to get going because in order to do anything useful, you need a client **AND** a server.  We really won't see anything useful at this point even though there is a Hub active and ready to call into.

- Add a wwwroot folder to the project.  (This wasn't added for you in an Empty template)
- Add the index.html file from the files folder of this lab into the wwwroot folder

### Add the SignalR client library with Library Manager
You can add the SignalR client via libman and its supoprt for unpkg:

[Add the SignalR client library](https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-3.1&tabs=visual-studio#add-the-signalr-client-library)

You will note that be default this will place the files at a fairly deep folder path.  If you are using Visual Studio Code, you may want to just include the file from the included files folder in this repository.

### Ready to run!
Once you have the client libraries in place, with any corrections to index.html you may need, you can start up the project.

When the web browser opens to your application, open another windows (preferably in another browser) and use the same URL to have two clients running.

You can click and drag the square aruond the screen and real time updates are sent across to other browsers.

## More resources
The common chat tutorial:

[Tutorial: Get started with ASP.NET Core SignalR](https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-3.1&tabs=visual-studio#add-the-signalr-client-library)

[Official Samples on GitHub](https://github.com/aspnet/SignalR-samples)

# gRPC
[Tutorial: Create a gRPC client and server in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/tutorials/grpc/grpc-start?view=aspnetcore-3.0&tabs=visual-studio)