
### Demo images

![](https://i.imgur.com/q9S85yx.jpg)
![](https://i.imgur.com/7Oa722c.jpg)
![](https://i.imgur.com/GJyFZzt.jpg)
![](https://i.imgur.com/D4jTMU0.jpg)

From top to bottom, these are the login page, registration page, and homepage. Let's start by introducing the registration page.

### Registration Page
The registration page has three input fields: user's name, email, and password. Below that, users can select an image as their profile picture. Clicking the "Sign Up" button will register the user and redirect them to the homepage. If the user is already registered or the input format is invalid, a notification will pop up. To go to the login page, users can click the link at the bottom.

### Login Page
The login page allows users to log in with their email and password. If the user wants to register instead, they can click the "Register" link below to go to the registration page.

### Homepage – consists of five parts:
Top Left Info Bar:
On the left, it shows the word "Chatroom". On the right, it displays the user’s profile picture, name, and a "Logout" button. Clicking the button will redirect the user back to the login page.

### Left Sidebar:
There is a button to create a new chatroom. If the name entered already exists, the user will join that chatroom instead. Below the button is a list of chatrooms the user has joined, sorted by the latest update time—whether it's a newly created room or a new message. Clicking one of the items will enter that chatroom.

### Top Right Info Bar:
On the left, it displays the currently selected chatroom name. If no chatroom is selected, it will appear blank as shown in the image. On the right, there is an icon to add members to the current chatroom. If the user doesn't exist or there's an issue, a notification will appear.

### Chat Area (Pink Section on the Right):
This section shows all messages in the current chatroom. Each message includes the sender’s name, profile picture, and timestamp. Messages sent by the current user appear on the right side, while messages from others appear on the left.

### Bottom Right Input Area:
Users can type text or upload images. Clicking "Send" will send the message.

#### Function Description
As a bonus feature, we implemented image messaging and user profile info, including profile pictures and names.

As for the advanced part, we used React components. The login and registration pages include CSS animations. Notification and security features are also implemented.

### Firebase page link

   https://chatroom-a2973.web.app/

### Others (Optional)

    ^_^


