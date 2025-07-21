# Software Studio 2023 Spring Midterm Project

### Scoring

| **Basic components**                             | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Membership Mechanism                             | 15%       | Y         |
| Firebase page                                    | 5%        | Y         |
| Database read/write                              | 15%       | Y         |
| RWD                                              | 15%       | Y         |
| Chatroom                                         | 20%       | Y         |

| **Advanced tools**                               | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Using React                                      | 10%       | Y         |
| Third-Party Sign In                              | 1%        | N         |
| Notification                                     | 5%        | Y         |
| CSS Animation                                    | 2%        | Y         |
| Security                                         | 2%        | Y         |

| **Other useful functions**                         | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Name of functions                                  | 1~5%     | Y        |


---

### How to use 

![](https://i.imgur.com/q9S85yx.jpg)
![](https://i.imgur.com/7Oa722c.jpg)
![](https://i.imgur.com/GJyFZzt.jpg)
![](https://i.imgur.com/D4jTMU0.jpg)

從上到下分別是登入、註冊以及主頁面。首先先介紹註冊頁面

#### 註冊頁面
註冊頁面有三個欄位可以輸入，分別是使用者的名字，email跟密碼，下方則可以選擇圖片作為自己的哥人圖片。按下sign up 按鈕就可以註冊，並直接跳到主頁面。如果已經註冊過或不符合format，則會跳出通知。另外，如果要前往login page，可以按下方的連結。

#### 登入頁面
登入頁面則是email，密碼登入，如果想註冊可以點下方的register前往註冊頁面。

#### 主頁面包含5個部分。
1.左上方的資訊欄，左邊是chatroom字樣，右邊有個人圖片跟名字，還有一個logout的按鈕，按下去之後可以回到login page。

2.左側有一個新增聊天室的按鈕，可以創建一個新的聊天室，如果輸入一個已經存在的聊天室名字，則會直接加入。下方有目前這個使用者加入的聊天室，會根據最後更新時間排序，不管是最後新增的聊天室或是新增訊息。點擊其中一欄可以進入那個聊天室聊天。

3.右側上方欄位的左邊，會顯示目前選擇的聊天室名稱，如果都沒選擇就會像圖中那樣，右邊的圖案可以新增成員進入目前的聊天室，如果使用者不存在或有問題會跳通知。

4.右邊粉色區域會有現在聊天室所有的message，每則訊息都會有發送者的名字、圖片還有傳送時間。另外也有把自己傳的跟別人傳的做區分。自己傳的在右邊，別人則是在左邊

5.右側下方可以輸入文字，也可以上傳圖片，按send可以傳送出去。

### Function description

bonus的部分，有做傳圖片以及個人資訊，也就是個人圖片及名稱。

advanced的部分，有用react做components，然後login page跟register page有做css animation，notification以及security也都有。

### Firebase page link

   https://chatroom-a2973.web.app/

### Others (Optional)

    ^_^

<style>
table th{
    width: 100%;
}
</style>