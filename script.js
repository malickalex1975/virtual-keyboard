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
'|','DEL','Caps Lock','A','S','D','F','G','H','J','K','L',':','"',
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
 let btn= document.createElement("div")
 btn.id=`key-${i}`;
 btn.className=`button key-${i}`
 btn.textContent=keys[i];
  keyboard.append(btn);
}
const realKeyDown = (code,e) =>{
    if(!keyCodes.includes(code)){return} // if the key doesn't present on the virtual keyboard it doesn't work.
    let keyNumber=keyCodes.indexOf(code)
    if(e.shiftKey  && e.altKey){setTimeout( ()=> changeLanguage(),10)}
    if(e.shiftKey  && !e.altKey){shiftDown();}
    if (code=="CapsLock"){pressedCapsLock();}
    if (code == "ShiftLeft" || code == "ShiftRight") { shiftDown();}
    if (code == "Backspace") { backspaceDown();}
    if (code == "Enter") { enterDown();}
    if (code == "Tab") { tabDown();}
    keyDownAnimation(keyNumber)
    print(keyNumber); 
  }
  
    const realKeyUp = (code,e) =>{
    if(!keyCodes.includes(code)){return}
    let keyNumber=keyCodes.indexOf(code);
    if(e.key=="Shift" ){shiftUp();}
    keyUpAnimation(keyNumber);
  }
    const virtualKeyDown = code =>{
    keyDownAnimation(code);
        if (code == 42 || code == 54) { shiftDown();}
        if (code == 29) { pressedCapsLock();}
        if (code == 13) { backspaceDown();}
        if (code == 41) { enterDown();}
        if (code == 14) { tabDown();}
    print(code)
  }
  
    const virtualKeyUp = code =>{
    keyUpAnimation(code);
    if (code==42 || code==54){shiftUp()}
  }
  
  
  
    const shiftDown = () =>{
    flagShiftDown=true;
    (lang=="ENG" )?((capsLock)?keys=keys7:keys=keys3): ((capsLock)?keys=keys8:keys=keys4) ;
    updateKeys();
  }
    const shiftUp=()=>{
    if (flagShiftDown){
      (lang=="ENG" )?((capsLock)?keys=keys5:keys=keys1): ((capsLock)?keys=keys6:keys=keys2) ;
    updateKeys();
    flagShiftDown=false;
    }
  }
  
    const keyDownAnimation = i =>{
  
    let btn= document.getElementById(`key-${i}`);
    btn.style.backgroundImage="linear-gradient( #bbeb11,  #354206)";
    btn.style.transform="translateY(0px)  scale(.97)";
  }
  
    const keyUpAnimation = i =>{
  
    let btn= document.getElementById(`key-${i}`);
    if ([13,14,28,29,40,41,42,52,53,54,55,56,57,59,60,61,62,63].includes(i)){
      btn.style.backgroundImage="linear-gradient( #555555,  #000000)";
    }else{
           btn.style.backgroundImage="linear-gradient( #888888,  #222222)"
          }
  
           btn.style.transform="";
           btn.style.backgroundImage="";       
  }
  
     const print = i =>{
    let symb;
    (keys[i].length>1)  ?  symb='' :  symb=keys[i];
    input.value+=symb;
    if(symb!=""){cloudUp(symb)}
  }
  
    const changeLanguage = () =>{
    if (lang=="ENG") {
      sessionStorage.setItem("language","RUS");
      (capsLock) ? keys=keys6:keys=keys2;
      updateKeys();
    }else{
      sessionStorage.setItem("language","ENG");
      (capsLock) ? keys=keys5:keys=keys1;
      updateKeys();
    }
    lang=sessionStorage.getItem("language");
  }
  
    const updateKeys = () =>{
    for (let i=0;i<64;i++){
      let btn= document.getElementById(`key-${i}`);
      btn.textContent=keys[i];
      
    }
  }
    const cloudUp = i =>{
    if (i.length>1){return}
    cloud.textContent=i;
    cloud.style.opacity=0.6;
    setTimeout(()=>cloud.style.opacity=0, 300)
  }
    const pressedCapsLock = () =>{
    capsLock=!capsLock;
    let btn=document.getElementById("key-29");
    (capsLock)? btn.style.color="#bbeb11" : btn.style.color="#ffffff";
    (capsLock)? ((lang=="ENG")? keys=keys5 : keys=keys6):((lang=="ENG")? keys=keys1 : keys=keys2)
    updateKeys()
    
  }
  
  const backspaceDown = () =>{
    let len= input.value.length;
    input.value= input.value.slice(0,len-1);
  }
  const enterDown = () =>{
    input.value+="\n"
  }
  const tabDown = () =>{
    input.value+=`\t`
  }
  
  
  //    listen to the real keyboard
  
  document.addEventListener("keydown" , (e)=>{
      e.preventDefault();
      realKeyDown(e.code,e)});
  
  document.addEventListener("keyup" , (e)=>{
      e.preventDefault();
      realKeyUp(e.code,e)});
  
  
  //   listen to  the virtual buttons 
  
  for(let i =0;i<64;i++){
    let btn= document.getElementById(`key-${i}`);
    btn.addEventListener("mousedown",(e)=>{
        e.preventDefault();
        virtualKeyDown(i)});
    btn.addEventListener("mouseup",(e)=>{
        e.preventDefault();
        virtualKeyUp(i)});
    btn.addEventListener("mouseout",(e)=>{
         e.preventDefault();
        virtualKeyUp(i)});
  }
  
  
  