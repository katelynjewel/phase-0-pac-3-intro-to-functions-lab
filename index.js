function shout(string) {
    return string.toUpperCase();
  } 

function whisper(string) {
    return string.toLowerCase();
  } 

function logShout(string) {
    console.log(string.toUpperCase());
  }

function logWhisper(string) {
    console.log(string.toLowerCase());
  }

function sayHiToGrandma(string){
    const input = string;
    if (input === string.toLowerCase()){
        return 'I can\'t hear you!';
    }
    if (input === string.toUpperCase()){
        return 'YES INDEED!';
    }
    if (input === 'I love you, Grandma.'){
        return 'I love you, too.';
    }
}
