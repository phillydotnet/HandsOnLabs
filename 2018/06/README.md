# ASP.NET Core Middleware Lab

## Create a new web project
* From the command line, in a folder of your choosing, type the following:

        dotnet new web -o middleware

    This creates a new subfolder called middleware with your empty ASP.NET Core Web project in it.  The **dotnet restore** command will automatically be run for you.

* Open this new folder in Visual Studio Code

## Middleware Delegates
* In **Startup.cs**, add a middleware delegate between the **if (env.IsDevelopment())** code block and the **app.Run** code block:

        app.Use( (context, next) => {
            context.Response.Headers.Add("PhillyDotNet", "HandsOnLab");
            return next();
        });

    This delegate will simply add a response header.  When you run the application, you can view this header in the browser dev tools, usually in the Network tab.

* Now add the following private static method to the Startup class:

        private static void HandleMappedRoute(IApplicationBuilder app)
        {
            app.Run(async context => {
                await context.Response.WriteAsync("Hello from the mapped route!");
            });
        }

    This method can be passed as a parameter to the Map pipeline method, which allows you to branch off your pipeline by the incoming route.

* Add the following code in the pipeline after you've added the PhillyDotNet response header:

        app.Map( "/mappedRoute", HandleMappedRoute);

* Run the app and navigate to /mappedRoute to see the unique response for this route.

### Short circuiting routes
Note that the method **HandleSampleRoute** uses the app.Run method, which short-circuits the pipeline.  If you change the order of the calls for the PhillyDotNet header and the mapped route, you can short-circuit the creation of the PhillyDotNet header.

The Run method always short circuits (because it does not receive the next method to call as a parameter), but even an implementation of the Use method can do the same by simply not calling the next function.

*Learn more at the following blog post: [
Middleware in ASP.NET Core – Handling requests](https://codingblast.com/asp-net-core-middleware/)*

## Reusable Middleware
* In **Startup.cs**, replace all of our previous middleware code with a middleware delegate between the **if (env.IsDevelopment())** code block and the **app.Run** code block.

        app.Use( (context, next) => {
            var cultureQuery = context.Request.Query["culture"];
            if (!string.IsNullOrWhiteSpace(cultureQuery))
            {
                var culture = new CultureInfo(cultureQuery);
                
                CultureInfo.CurrentCulture = culture;
                CultureInfo.CurrentUICulture = culture;
            }

            return next();
        });
* If you run the application now, the middleware is part of the pipeline, but has no visible effect.  Change the **app.Run** block to use the thread's **CultureInfo** that you've just updated.

        app.Run(async (context) =>
        {
            await context.Response.WriteAsync($"Hello {CultureInfo.CurrentCulture.DisplayName}");
        });

* Now, the output will correspond to your browser's current culture.

* Try forcing a change by adding one of the following query strings
    * *?culture=no*
    * *?culture=es*

## Move the Middleware Delegate to it's own class
While it is perfectly acceptable to use inline delegates to build your pipeline, this is neither reusable nor does it feel like the other middleware components you may be used to.

Let's do the following to move the middleware to its own class.

### Create the RequestCultureMiddleWare class

* Create a new file in your project **RequestCultureMiddleware.cs** and insert the following code:

        using Microsoft.AspNetCore.Http;
        using System.Globalization;
        using System.Threading.Tasks;

        namespace Pdn.Culture
        {
            public class RequestCultureMiddleware
            {
                private readonly RequestDelegate _next;

                public RequestCultureMiddleware(RequestDelegate next)
                {
                    _next = next;
                }

                public Task InvokeAsync(HttpContext context)
                {
                    var cultureQuery = context.Request.Query["culture"];
                    if (!string.IsNullOrWhiteSpace(cultureQuery))
                    {
                        var culture = new CultureInfo(cultureQuery);

                        CultureInfo.CurrentCulture = culture;
                        CultureInfo.CurrentUICulture = culture;

                    }

                    // Call the next delegate/middleware in the pipeline
                    return this._next(context);
                }
            }
        }

* Note that you have created a regular C# class with an InvokeAsync method.  The middleware pipeline will know to look for and execute this method.  To support asynchronous operations, ASP.NET Core 2.0 or later supports either **Invoke** or **InvokeAsync**.

* Create a new file called **RequestCultureMiddlewareExtensions.cs**.
* Copy the following code to create an extension method that implementers can use to invoke your middleware:

        using Microsoft.AspNetCore.Builder;

        namespace Pdn.Culture
        {
            public static class RequestCultureMiddlewareExtensions
            {
                public static IApplicationBuilder UseRequestCulture(
                    this IApplicationBuilder builder)
                {
                    return builder.UseMiddleware<RequestCultureMiddleware>();
                }
            }
        }


* Now you may replace the inline delegate we created earlier with:
        
        app.UseRequestCulture();

    The new **Configure** method in **Startup.cs** looks like the following:

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
            {
                if (env.IsDevelopment())
                {
                    app.UseDeveloperExceptionPage();
                }

                app.UseRequestCulture();

                app.Run(async (context) =>
                {
                    await context.Response.WriteAsync($"Hello {CultureInfo.CurrentCulture.DisplayName}");
                });
            }

* You may have already figured out that you need to add a **using** statement to the top of **Startup.cs**:

        using Pdn.Culture;


*Learn more at the middleware documentation: [Writing middleware](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-2.1&tabs=aspnetcore2x#writing-middleware)*


More resources that may be helpful: https://www.one-tab.com/page/Py3Ha6qXT2255btJszbFCw