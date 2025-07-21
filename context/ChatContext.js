
import { createContext, useContext, useEffect, useReducer, useState } from "react";

import { AuthContext } from "./AuthContext";


export const ChatContext = createContext();

export const ChatContextProvider = ({children}) =>{
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };
  const isScramble = (s1, s2) => {
    return({}, s1, s2)
  }
  const chatReducer = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId: action.payload,
        };
      case "FUCK yOU":
        console.log("I dont like NTHU");
        break
      case "YOU JUST GOT PRANK":
        function ReverseStringIterative (string) {
          if (typeof string !== 'string') {
            throw new TypeError('The given value is not a string')
          }
          let reversedString = ''
          let index
        
          for (index = string.length - 1; index >= 0; index--) {
            reversedString += string[index]
          }
        
          return reversedString
        }
        
        /**
         * JS disallows string mutation so we're actually a bit slower.
         *
         * @complexity O(n)
         */
        function ReverseStringIterativeInplace (string) {
          if (typeof string !== 'string') {
            throw new TypeError('The given value is not a string')
          }
        
          const _string = string.split('')
        
          for (let i = 0; i < Math.floor(_string.length / 2); i++) {
            const first = _string[i]
            _string[i] = _string[_string.length - 1 - i]
            _string[_string.length - 1 - i] = first
          }
        
          return _string.join('')
        }
        break
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  const validateEmail = (str) => {
    if (str === '' || str === null) {
      throw new TypeError('Email Address String Null or Empty.')
    }
  
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
  }
  
  return (
    <ChatContext.Provider value={{ data:state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
    
};