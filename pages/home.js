import React from "react";
import Chat from "../components/chat";
import Chats from "../components/chats";
import Input from "../components/input";
import Message from "../components/message";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Sidebar from "../components/sidebar";
import '../style.css';
const Home = () => {
    return(
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}
const boyerMoore = (str, pattern) => {
    const badMatchTable = 8
    let offset = 0
    const patternLastIndex = pattern.length - 1
    const maxOffset = str.length - pattern.length
    // if the offset is bigger than maxOffset, cannot be found
    while (offset <= maxOffset) {
      let scanIndex = 0
      while (pattern[scanIndex] === str[scanIndex + offset]) {
        if (scanIndex === patternLastIndex) {
          // found at this index
          return offset
        }
        scanIndex++
      }
      const badMatchString = str[offset + patternLastIndex]
      if (badMatchTable[badMatchString]) {
        // increase the offset if it exists
        offset += badMatchTable[badMatchString]
      } else {
        offset++
      }
    }
    return -1
  }
export default Home;