const keys1=['`','1','2','3','4','5','6','7','8','9','0','-','='
,'BackSpace','Tab','q','w','e','r','t','y','u','i','o','p','[',']',
'\\','DEL','Caps Lock','a','s','d','f','g','h','j','k','l',';','\'',
'Enter','Shift','z','x','c','v','b','n','m',',','.','/','↑','Shift',
'Ctrl','Win','Alt',' ','Ctrl','←','↓','→','Alt'];

const keys2=['ё','1','2','3','4','5','6','7','8','9','0','-','='
,'BackSpace','Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ',
'\\','DEL','Caps Lock','ф','ы','в','а','п','р','о','л','д','ж','э',
'Enter','Shift','я','ч','с','м','и','т','ь','б','ю','.','↑','Shift',
'Ctrl','Win','Alt',' ','Ctrl','←','↓','→','Alt'];

const keys3=['~','!','@','#','$','%','^','&','*','(',')','_','+'
,'BackSpace','Tab','Q','W','E','R','T','Y','U','I','O','P','{','}',
'|','DEL','Caps Lock','A','S','D','F','G','H','J','K','L',':','\"',
'Enter','Shift','Z','X','C','V','B','N','M','<','>','?','↑','Shift',
'Ctrl','Win','Alt',' ','Ctrl','←','↓','→','Alt'];

const keys4=['Ё','!','"','№',';','%',':','?','*','(',')','_','+'
,'BackSpace','Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ',
'/','DEL','Caps Lock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э',
'Enter','Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю',',','↑','Shift',
'Ctrl','Win','Alt',' ','Ctrl','←','↓','→','Alt'];

const keys5=['`','1','2','3','4','5','6','7','8','9','0','-','='
,'BackSpace','Tab','Q','W','E','R','T','Y','U','I','O','P','[',']',
'\\','DEL','Caps Lock','A','S','D','F','G','H','J','K','L',';','\'',
'Enter','Shift','Z','X','C','V','B','N','M',',','.','/','↑','Shift',
'Ctrl','Win','Alt',' ','Ctrl','←','↓','→','Alt'];

const keys6=['Ё','1','2','3','4','5','6','7','8','9','0','-','='
,'BackSpace','Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ',
'\\','DEL','Caps Lock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э',
'Enter','Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю','.','↑','Shift',
'Ctrl','Win','Alt',' ','Ctrl','←','↓','→','Alt'];

const keys7=['~','!','@','#','$','%','^','&','*','(',')','_','+'
,'BackSpace','Tab','q','w','e','r','t','y','u','i','o','p','{','}',
'|','DEL','Caps Lock','a','s','d','f','g','h','j','k','l',';','"',
'Enter','Shift','z','x','c','v','b','n','m','<','>','?','↑','Shift',
'Ctrl','Win','Alt',' ','Ctrl','←','↓','→','Alt'];

const keys8=['ё','!','"','№',';','%',':','?','*','(',')','_','+'
,'BackSpace','Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ',
'/','DEL','Caps Lock','ф','ы','в','а','п','р','о','л','д','ж','э',
'Enter','Shift','я','ч','с','м','и','т','ь','б','ю',',','↑','Shift',
'Ctrl','Win','Alt',' ','Ctrl','←','↓','→','Alt'];

const keyCodes=['Backquote','Digit1','Digit2','Digit3','Digit4',
                'Digit5','Digit6','Digit7','Digit8','Digit9','Digit0',
                'Minus','Equal','Backspace','Tab','KeyQ','KeyW','KeyE',
                'KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP',
                'BracketLeft','BracketRight','Backslash','Delete',
                'CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH',
                'KeyJ','KeyK','KeyL','Semicolon','Quote','Enter','ShiftLeft',
                'KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma',
                'Period','Slash','ArrowUp','ShiftRight','ControlLeft',
                'MetaLeft','AltLeft','Space','ControlRight','ArrowLeft',
                'ArrowDown','ArrowRight','AltRight']

let flagShiftDown=false;
let capsLock=false;
let keys;
let ke;
//    check last language setting
let lang= sessionStorage.getItem("language");
if(lang=="ENG"|| lang==undefined ||lang==null ){
   keys=keys1;
}
if(lang== "RUS"){
  keys=keys2;
}

let divContainer = document.createElement("div");
divContainer.className="container";
document.body.append(divContainer);

let information1= document.createElement("p");
information1.className="info";
information1.textContent="Virtual Keyboard создавалась в среде Windows.";
document.body.append(information1);

let information2= document.createElement("p");
information2.className="info";
information2.textContent=" Shift + Alt - переключение языка.";
document.body.append(information2);

let input= document.createElement("textarea");
input.className="text";
input.id="text";
input.setAttribute("placeholder", "Try Virtual Keybord");
divContainer.append(input);
input.setAttribute("readonly","true")

let keyboard= document.createElement('div');
keyboard.className="keyboard";
divContainer.append(keyboard);

let cloud=document.createElement("div");
cloud.className="cloud";
cloud.id="cloud";
document.body.append(cloud);

//    create the  buttons

for (let i=0;i<64;i++){
  btn= document.createElement("div")
  btn.id=`key-${i}`;
  btn.className=`button key-${i}`
  btn.textContent=keys[i];
  keyboard.append(btn);
}