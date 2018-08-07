using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace signalrlab.Hubs
{
    public class ChatHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            base.OnConnectedAsync();
            Clients.Others.SendAsync("UserLogin", Context.ConnectionId);
            
            return Task.CompletedTask;
        }

        public override Task OnDisconnectedAsync(System.Exception exception)
        {
            base.OnDisconnectedAsync(exception);
            Clients.Group("Admin").SendAsync("UserLogout", Context.ConnectionId);
            return Task.CompletedTask;
        }

        public async Task SendMessage(string user, string message)
        {
            if (user.StartsWith('A'))
            {
                // let's make this user an admin
                await Groups.AddToGroupAsync(Context.ConnectionId, "Admin");
            }
            else
            {
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, "Admin");
            }

            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}