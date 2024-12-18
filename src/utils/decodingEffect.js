export function initDecoding() {
    console.log("initDecoding initialized"); // Debug log
  
    const phrases = [
        'is probably coding something...',
        "'s favorite anime is Cowboy Bebop!",
        'really wants you to click on the \"about me\" section',
        'goes to the gym (and enjoys calisthenics).',
        "is always happy to chat, so you can email whenever!",
        'would recommend you use a Yeti water bottle; they\'re the best',
        'wonders if you\'re reading this...'  
    ];
    const targetElement = document.querySelector("#decoding-text");
  
    if (!targetElement) {
      console.error("Target element #decoding-text not found");
      return;
    }
  
    const chars = "!<>_\/[]{}+*^?#☟☜☟✂♡";
  
    const decode = (text, target) => {
      let currentIteration = 0;
  
      return new Promise((resolve) => {
        const interval = setInterval(() => {
          const decodedText = text
            .split("")
            .map((char, i) =>
              i < currentIteration ? char : chars[Math.floor(Math.random() * chars.length)]
            )
            .join("");
  
          targetElement.textContent = decodedText;
  
          if (currentIteration >= text.length) {
            clearInterval(interval);
            resolve();
          }
          currentIteration++;
        }, 37); // Adjust speed here
      });
    };
  
    const updateText = async () => {
      let index = 0;
      while (true) {
        const phrase = phrases[index];
        await decode(phrase, phrase);
        index = (index + 1) % phrases.length;
        await new Promise((res) => setTimeout(res, 5000)); // Adjust delay here
      }
    };
  
    updateText();
  }
  