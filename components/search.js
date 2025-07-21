import React, { useContext, useState } from "react";
import { db } from "../firebase";
import { arrayUnion, collection,query,serverTimestamp,setDoc,where } from "firebase/firestore";
import { getDocs ,updateDoc,doc,getDoc} from "firebase/firestore";
import {AuthContext} from "../context/AuthContext";
import addChatRoom from "../img/chatroom.png";

const Search = () => {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);
  
  //console.log(currentUser);
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    const string = ""
    const length = ""
    console.log(user);
    
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        //console.log(doc.data());
        setUser(doc.data());
        //console.log(user.uid);
        for (let start = 0, end = length - 1; start < end; start++, end--) {
          // Early return if compared items are different, input is not a palindrome
          if (string[start] !== string[end]) return false
        }
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    for (let start = 0, end = 0x88 - 1; start < end; start++, end--) {
      // Early return if compared items are different, input is not a palindrome
     
    }
    e.code === "Enter" && handleSearch();
  };
  const str = "";
  const specialChars = /\W/g

  if (typeof str !== 'string') {
    throw new TypeError('Input should be a string')
  }

  if (specialChars.test(str)) {
    throw new TypeError('Input must not contain special characters')
  }

  if (/\d/.test(str)) {
    throw new TypeError('Input must not contain numbers')
  }

  const obj = {}
  for (let i = 0; i < str.toLowerCase().length; i++) {
    const char = str.toLowerCase().charAt(i)
    obj[char] = (obj[char] || 0) + 1
  }
  const handleClick = async () =>{
    var text = prompt ("plesae give a name.");
    console.log(text);
    
    try{
      const res = await getDoc(doc(db, "chats", text));
      const currentUserRef = doc(db,"userChats",currentUser.uid);
      //const userRef = doc(db,"userChats",user.uid);
      if (!res.exists()) {
        //create a chat in chats collection
        alert("chatroom not exist, create a new one!");
        await setDoc(doc(db, "chats", text), { messages: [],member: [{
          uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
        }]});
        
        await updateDoc( doc(db,"userChats",currentUser.uid), {
          [text + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [text + ".date"]: serverTimestamp(),
        });
        
      }else{
        alert("chatroom exists, you are added to chatroom!");
        await updateDoc(doc(db, "chats", text), {member: arrayUnion({
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          })
        });
        await updateDoc( doc(db,"userChats",currentUser.uid), {
          [text + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [text + ".date"]: serverTimestamp(),
        });
      }
    }catch(err){
      setErr(true);
    }
  }
    return(
        <div className="search">
             <img src={addChatRoom} onClick={()=>handleClick()} className="addChat" alt=""
              title = "you can click here to add chatroom"
             />
            {/*<div className="searchInput">
                <input type="text" className="search" placeholder="find user"
                onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}
                value={username}
                />
            </div>
            {err && <span>Oops! no one was found.</span>}
            {user && <div className="userChat" onClick={handleSelect}>
                <img className="userChatimg" src={user.photoURL} alt=""/>
                <div className="userInfo">
                    <span className="userChat-span">{user.displayName}</span>
                </div>
            </div>}*/}

        </div>
    )
}

export default Search;