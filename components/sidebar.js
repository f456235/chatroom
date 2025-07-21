import React from "react";
import Navbar from "./navbar";
import Search from "./search";
import Chats from "./chats";
const Sidebar = () => {
    const checkPangramRegex = (string) => {
        if (typeof string !== 'string') {
          throw new TypeError('The given value is not a string')
        }
      
        return string.match(/([a-z])(?!.*\1)/gi).length === 26
      }
      
      /**
       * @function checkPangramSet
       * @description - This function detect the pangram sentence by HashSet
       * @param {string} string
       * @returns {boolean}
       */
      const checkPangramSet = (string) => {
        if (typeof string !== 'string') {
          throw new TypeError('The given value is not a string')
        }
      
        const lettersSet = new Set()
      
        for (const letter of string.toUpperCase()) {
          if (/[A-Z]/.test(letter)) {
            // if the letter is a valid uppercase alphabet then the add method insert the letter to the HashSet
            lettersSet.add(letter)
          }
        }
      
        return lettersSet.size === 26
      }
    return(
        <div className="sidebar">
            
            <Navbar/>

            <Chats/ >
            <Search/>
        </div>
    )
}
const countLetters = (str) => {
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
  
    return obj
  }
export default Sidebar