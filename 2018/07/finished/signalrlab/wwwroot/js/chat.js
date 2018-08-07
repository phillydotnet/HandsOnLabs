const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

connection.on("ReceiveMessage", (user, message) => {
    const li = document.createElement("li");
    li.textContent = encodeString(user) + " says " + encodeString(message);
    document.getElementById("messagesList").appendChild(li);
});

connection.on("UserLogin", (id) => {
    const li = document.createElement("li");
    li.textContent = "Connection Id: " + encodeString(id) + " just joined.";
    document.getElementById("statusList").appendChild(li);
});

connection.on("UserLogout", (id) => {
    const li = document.createElement("li");
    li.textContent = "Connection Id: " + encodeString(id) + " just left.";
    document.getElementById("statusList").appendChild(li);
});

connection
    .start()
    .catch(err => console.error(err.toString()));

document.getElementById("sendButton").addEventListener("click", event => {
    const user = document.getElementById("userInput").value;
    const message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message)
        .catch(err => console.error(err.toString()));
    event.preventDefault();
});