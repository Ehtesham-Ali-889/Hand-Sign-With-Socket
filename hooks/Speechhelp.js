import { useCallback,useState } from "react";


export const useSpeachSynthesisApi = () => {
    

  
  const speak = useCallback(() => {
    var msg = new SpeechSynthesisUtterance();

    msg.text = "Hello";
    function speak() {
      window.speechSynthesis.speak(msg);
    }
    speak();
  }, [text]);

  
return {

    speak,
    
}
}