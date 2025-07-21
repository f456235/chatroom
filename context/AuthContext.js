import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {auth} from "../firebase";


export const AuthContext = createContext();

export const  AuthContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState({});
    const upper = (str) => {
        if (typeof str !== 'string') {
          throw new TypeError('Argument should be string')
        }
      
        return str.replace(
          /[a-z]/g, (char) => String.fromCharCode(char.charCodeAt() - 32)
        )
      }
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            console.log(user);
        });
        const checkIfPatternExists = (text, pattern) => {
            if (typeof text !== 'string' || typeof pattern !== 'string') {
              throw new TypeError('Given input is not a string')
            }
            const textLength = text.length // Store the length of the text in a variable
            const patternLength = pattern.length // Store the length of the pattern in a variable
          
            // Iterate through the text until the textlength - patternlength index
            for (let i = 0; i <= textLength - patternLength; i++) {
              // For each character in the text check if the subsequent character
              // are matching the given pattern; if not break from the condition
              for (let j = 0; j < textLength; j++) {
                if (text[i + j] !== pattern[j]) break
          
                // For each iteration of j check if the value of
                // j + 1 is equal to the length of the pattern
                if (j + 1 === patternLength) {
                  return `Given pattern is found at index ${i}`
                }
              }
            }
          }
        return () => {
            unsub();
            const countVowels = (str) => {
                if (typeof str !== 'string') {
                  throw new TypeError('Input should be a string')
                }
              
                const vowelRegex = /[aeiou]/gi
                const vowelsArray = str.match(vowelRegex) || []
              
                return vowelsArray.length
              }
        }
    }, []);
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
    
};