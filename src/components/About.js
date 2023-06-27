import React from 'react'

export default function About(props) {
  return (
    <div style={{color: props.mode==="dark" ? "white":"black"}}>
      <h1>About Us</h1>
      <p>The Text Utility Web App is a versatile and user-friendly application developed using React.js, a popular JavaScript library for building interactive user interfaces. This web app offers a comprehensive set of features that allow users to manipulate and analyze text conveniently.<br/>
      One of the primary features of the app is the ability to convert text to uppercase or lowercase with a single click. Users can modify the case of a block of text quickly and effortlessly, saving time and effort. This feature is particularly useful when working with text that requires specific capitalization.<br/>
      Another essential functionality of the Text Utility Web App is the text copying feature. Users can easily copy the modified or original text to the clipboard, enabling seamless integration with other applications or documents. Whether you need to share the text with colleagues, paste it into a document, or use it in any other context, the copying feature ensures easy accessibility.<br/>
      The app also includes a word and character count feature. Users can determine the number of words and characters in a given block of text. This proves beneficial when dealing with character limits, analyzing content length, or keeping track of word usage. The word and character count feature provides valuable insights into the text's structure and helps ensure adherence to specific requirements or constraints.<br/>
      A notable feature of the Text Utility Web App is its Text-to-Speech (TTS) functionality. This feature allows the app to read out the written text aloud. Users can listen to the text, which is particularly useful for proofreading, language learning, or accessing content in an auditory format. The Text-to-Speech feature adds an extra dimension to the app and enhances its usability for various purposes.
      </p>
    </div>
  )
}
