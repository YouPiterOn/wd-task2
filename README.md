# Task 9 documntation

Sockets are used in /chat endpoint

It is a real-time chat where your client socket send messages to a server and then it sends them to every socket connected

You can log in chat with your username and it will be displayed near messages

## Using guide

Start from the /chat/login page. Enter your desired username and click "Submit"

After submitting the username, you will be redirected to the chat page

In the chat page, you can send messages by typing in the input field and pressing "Send"

Your messages, along with your username, will be displayed in the chat

## Developer guide

Here implemented two endpoints

- get /chat/login

  returns the page with login form, on submit it redirects to /chat

- get /chat

  returns page with chat and form to write messages

  user can login with username using query string and parameter 'username' in it

Communication between sockets has these events:

- 'chat message' on server

  have params username and message

  triggers all 'chat message' events on clients with same params

- 'chat message' on client

  have params username and message
  
  create on a page lest element in which display message and sender as "username : message"
