import React, { useState } from "react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import CustomButton from "../CustomButton";
// import the text to speech library
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  // const [listening, setListening] = useState(false); // State to track if speech recognition is active

  // set the language to English
  // const startListening = () => {
  //   SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  //   setListening(true);
  // };

  // stop listening
  // const stopListening = () => {
  //   SpeechRecognition.stopListening();
  //   setListening(false);
  // };

  // track the transcript
  // const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  // if the browser does not support speech recognition, return null
  // if (!browserSupportsSpeechRecognition) {
  //   return null;
  // }

  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt} // set the transcript to the value
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton type="outline" title="Asking AI..." customStyles="text-xs" />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
            {/* <CustomButton 
              type="filled"
              title={listening ? "Stop" : "Speak"}
              handleClick={listening ? stopListening : startListening}
              customStyles="text-xs"
            /> */}
            {/* <CustomButton 
              type="filled"
              title="Reset"
              handleClick={resetTranscript}
              customStyles="text-xs"
            /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
