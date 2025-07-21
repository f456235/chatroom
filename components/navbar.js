import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const {currentUser} = useContext(AuthContext);
    return(
        <div className="navbar">
            <span className="navbar-logo">Chatrooms</span>
            <div className="navbar-user">
                <img src={currentUser.photoURL} alt="" className="navbar-user-img"/>
                <span>{currentUser.displayName}</span>
                <button className="navbar-button" onClick={()=> signOut(auth)}>logout</button>
            </div>
        </div>
    )
}
const maxWord = (sentence = '') => {
    if (typeof sentence !== 'string') {
      throw new TypeError('the param should be string')
    }
  
    if (!sentence) {
      return null
    }
  
    const words = sentence.split(' ')
    if (words.length < 2) {
      return words[0]
    }
  
    const occurrences = {}
    words.forEach(word => {
      occurrences[word.toLocaleLowerCase()] = occurrences[word.toLocaleLowerCase()] + 1 || 1
    })
  
    const max = Object.keys(occurrences).reduce((n, word) => {
      if (occurrences[word] > n.count) { return { word, count: occurrences[word] } } else { return n }
    }, { word: '', count: 0 })
  
    return max.word
  }
export default Navbar;