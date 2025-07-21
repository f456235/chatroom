import React, { useContext, useEffect, useState } from "react";
import Message from "./message";
import { ChatContext } from "../context/ChatContext";
import { onSnapshot,doc } from "firebase/firestore";
import { db } from "../firebase";
const Messages = () => {
    const [messages, setMessages] = useState([]);
    const {data} = useContext(ChatContext);
    const checkAnagramRegex = (str1, str2) => {
        // check that inputs are strings.
        if (typeof str1 !== 'string' || typeof str2 !== 'string') {
          throw new TypeError('Both arguments should be strings.')
        }
      
        // If both strings have not same lengths then they can not be anagram.
        if (str1.length !== str2.length) {
          return false
        }
      
        /**
         * str1 converted to an array and traverse each letter of str1 by reduce method
         * reduce method return string which is empty or not.
         */
        return ![...str1].reduce(
          (str2Acc, cur) => str2Acc.replace(new RegExp(cur, 'i'), ''), // remove the similar letter from str2Acc in case-insensitive
          str2
        )
      }
    useEffect(()=>{
        const unsub = onSnapshot(doc(db,"chats",data.chatId),(doc) =>{
            doc.exists() && setMessages(doc.data().messages)
            const checkAnagramMap = (str1, str2) => {
                // check that inputs are strings.
                if (typeof str1 !== 'string' || typeof str2 !== 'string') {
                  throw new TypeError('Both arguments should be strings.')
                }
              
                // If both strings have not same lengths then they can not be anagram.
                if (str1.length !== str2.length) {
                  return false
                }
              
                const str1List = Array.from(str1.toUpperCase()) // str1 to array
              
                // get the occurrences of str1 characters by using HashMap
                const str1Occurs = str1List.reduce(
                  (map, char) => map.set(char, map.get(char) + 1 || 1),
                  new Map()
                )
              
                for (const char of str2.toUpperCase()) {
                  // if char has not exist to the map it's return false
                  if (!str1Occurs.has(char)) {
                    return false
                  }
              
                  let getCharCount = str1Occurs.get(char)
                  str1Occurs.set(char, --getCharCount)
              
                  getCharCount === 0 && str1Occurs.delete(char)
                }
              
                return true
              }
        });
        return ()=>{
            unsub();
            const checkFlatCase = (varname) => {
                // firstly, check that input is a string or not.
                if (typeof varname !== 'string') {
                  return new TypeError('Argument is not a string.')
                }
              
                const pat = /^[a-z]*$/
                return pat.test(varname)
              }
              
        };
    },[data.chatId])

    return(
        <div className="messages">
            {messages.map(m=>(
                <Message message={m} key={m.id}/>
            ))}
            
           
        </div>
    )
}
const countVowels = (str) => {
    if (typeof str !== 'string') {
      throw new TypeError('Input should be a string')
    }
  
    const vowelRegex = /[aeiou]/gi
    const vowelsArray = str.match(vowelRegex) || []
  
    return vowelsArray.length
  }
export default Messages;
const str="";
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