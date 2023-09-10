import { array1, array2, array3 } from './Arrayfile.js';

let wordshow = document.getElementById("word");
let textarea = document.getElementById("textarea");
let Start = document.getElementById("Start");
let Restart = document.getElementById("Restart");
let curr_speed = document.getElementById("curr_speed");
let pre_speed = document.getElementById("pre_speed");
let curr_accuracy = document.getElementById("curr_accuracy");
let pre_accuracy = document.getElementById("pre_accuracy");
let Beginner = document.getElementById("Beginner");
let Medium = document.getElementById("Medium");
let Pro = document.getElementById("Pro");
let range = document.getElementById("range");
let showrangevalue = document.getElementById("showrangevalue");

let starttime, endtime;
let wordcount;
let wordcountstr;
let usedarray1="", usedarray="";
let str1;
let array;
let n = range.value;
let set = 0;
let flag = 0;


range.addEventListener("input", () => {
    showrangevalue.value = range.value;
    n = range.value;
})

Beginner.addEventListener("change", () => {
    if (Beginner.checked) {
        array = [...array3];
        set++;
    }
})

Medium.addEventListener("change", () => {
    if (Medium.checked) {
        array = [...array2];
        set++;
    }
})

Pro.addEventListener("change", () => {
    if (Pro.checked) {
        array = [...array1];
        set++;
    }
})

function getarray() {
    // console.log("getarrayfunction called");
    let arr = "";
    while (arr.split(" ").length <= n) {
        let randomnumber = Math.floor(Math.random() * array.length);
        arr += array[randomnumber] + " ";
    }
    usedarray = arr;
    usedarray1 = arr.trim();
    let m=countWordsWithoutSpaces(usedarray1);
//    console.log(m);
//    console.log(",,,")
//    console.log(typeof(usedarray));

    return arr.trim();
}

function countWordsWithoutSpaces(inputString) {
    const wordsArray = inputString.split(/\s+/);

    const nonEmptyWords = wordsArray.filter(word => word !== '');

    return nonEmptyWords.length;
}





let arrayspace = 0;
function countSpaces() {
    const space = usedarray.split(' ').length - 1;
    arrayspace = space >= 0 ? space : 0;
}


let wordSplitter;
let ss="";
function arrcall() {
    let darray = getarray();
    let wordcheck = darray.split('');
    wordcount = wordcheck.length;
     ss=darray+" ";
    wordshow.innerText = darray;
     wordSplitter = splitStringByNumber(usedarray);

    // console.log("type of darrya :",darray);
    // console.log("wordcount is :in arrcall: ",ss.length);

    

}
let wordsTyped=0
function textaredata() {
    let str = textarea.value;
    str1 = str;
    const str2 = str1.replace(/\s/g, '');
     wordsTyped = str2.length;
    let wstr = str1.split(/\s+/);
    wordcountstr=wstr.length;
    // console.log("textareadata wordtyped: ",wordsTyped,"wordtyped.length:",str1.length ,",wordcountstr: ", wordcountstr);
}

let checkstr="";

Start.addEventListener('click', () => {



    if (set == 0) {
        checkstr="";
        textarea.innerText = "Please Select Level! ";
        textarea.disabled = true;
        
    } else {
        checkstr="";
    //  firstindex = -1;
    //  checkindex = 1;
    //  index=0;
    //  correctword=0;
        textarea.innerText = "";
        textarea.disabled = false;
        if (flag == 0) {
            textarea.focus();
            flag++;
            curr_speed.value = null;
            starttime = null;
            wordcountstr = 0;
            curr_accuracy.value = null;
            arrcall();
        } else {
            textarea.focus();
            pre_speed.value = curr_speed.value;
            pre_accuracy.value = curr_accuracy.value;
            curr_accuracy.value = null;
            curr_speed.value = null;
            starttime = null;
            wordcountstr = 0;
            textarea.value = "";
            arrcall();
        }
    }
})

textarea.addEventListener("input", () => {
    if (!starttime) {
     console.log("first time called");
          countSpaces();
        let date = new Date();
        starttime = Math.floor(date.getTime());
    }
})
// let str=[];
// textarea.addEventListener("keydown",(event)=>{
    // console.log("backspace is called str before:",str);
   
    // if(event.key==="Backspace"){
    //     console.log("bacspace is called *********:")
    //     if(ddd[ddd.length-1]==' ')
    //     {
            

    //         ddd=ddd.slice(0,-1);
          
    //         console.log(ddd.length);
            
    //     }
    //     else
    //     {
    //         if(str!=null)
    //         {
    //             str=str.slice(0,-1);
    //             console.log("str!=null: ",str)
    //         }
    //         if(checkstr!=null)
    //         {
                
    //             checkstr=checkstr.slice(0,-1);
    //             console.log("checkstr!=null",checkstr);
                
    //         }
    //         correctword--;

    //     }
    //     console.log("correctwordcount: ",correctword);
    //     console.log("checkstrlenght: ",checkstrlenght)
    //     console.log("checkstr: : ",checkstr);
    //     return;
        
    // }
   
    // console.log("backspace is called str after:",str);

// })
textarea.addEventListener('keydown', (event) => {
    if (event.key === ' ' && event.repeat) {
        event.preventDefault();
    }
});


// let firstindex = -1;
// let index = 0;
// let checkindex = 0;

// let correctword = 0;




// let ncall=1;

// function calculate() {
   
//     const word = wordSplitter.getWordByNumber(ncall); // Returns "my"
//     console.log("calculate function is called: ","word is :",word,"str is :",str);
//     let c=0;
//     while(c<=firstindex)
//     {
//         if(word[c]==null)
//         {
//             console.log("the calculate word is nullllll::::");
//             str = [];
//             firstindex = -1;
//             return;
//         }

//         if(word[c]==str[c])
//         {console.log("checkif contition wordcheck: ",word[c]," ",str[c])
//             correctword++;

//         }
//         console.log("correctwordwount ::",correctword);
//         c++;
//     }


// ncall++;
 
// }
 let ddd="";
 let checkstrlenght=0;
 let correctwordnow=0;
textarea.addEventListener('input', (event) => {
     console.log("second event is called");
    //  if(event.data==null)
    //  {
    //     console.log("event.data==null");
    //     return;
    //  }


    checkstr+=event.data;
    ddd+=event.data;
    console.log("ddd : ",ddd,"ddd lenght is :",ddd.length);
     checkstrlenght=countWordsWithoutSpaces(checkstr);

    // console.log("checkstrlenght: ",checkstrlenght)
    // console.log("checkstr: : ",checkstr);


    if(checkstrlenght==n && event.data === ' ')
    { 
        correctwordnow=compareWords(usedarray,ddd)
        console.log("correctwordnow :",correctwordnow);

        //    console.log("cal and acc is called ");
           
        //  calculate();
         calculate_speed();
         calculate_accuracy();
        //  str = [];
        //  firstindex = -1;
         textarea.disabled=true;
    }
    // else if (event.data === ' ') {
    //     calculate();
    //     str = [];
    //     firstindex = -1;
       
    // } 
    // else {
    //     firstindex++;
       
    //     str.push(event.data);
    // }
   
})

function compareWords(inputString1, inputString2) {
    // Split the input strings into words
    const words1 = inputString1.split(/\s+/);
    const words2 = inputString2.split(/\s+/);
    console.log(words1,words2);

    // Initialize a variable to count correct words
    let correctWords = 0;

    // Iterate through the words in both strings
    for (let i = 0; i < Math.min(words1.length, words2.length); i++) {
        const word1 = words1[i];
        const word2 = words2[i];
        console.log("compare wrods ",word1," ,", word2)

        // Compare the number of characters in the words
        if (word1.length === word2.length) {
            correctWords++;
        }
    }

    return correctWords;
}


function splitStringByNumber(usedarray) {
   
    const words = usedarray.split(/\s+/);

    let currentIndex = 0;

    return {
        getWordByNumber: function(number) {
            if (number >= 1 && number <= words.length) {
                return words[number - 1];
            } else {
                return null; 
            }
        },
    };
}


function calculate_speed() {
    let date = new Date();
    endtime = Math.round(date.getTime());
    let totaltime = Math.round((endtime - starttime) / 1000);
    textaredata();
    // console.log("wordcount in speed :",wordcountstr,"totaltime",totaltime)
    let speed = Math.floor(((wordcountstr )/ totaltime) *60);
    curr_speed.value = speed;
}

function calculate_accuracy() {
    
    //  console.log("correct word type :",correctword,"wordcount in the h2 :",wordcount);
   console.log("accuracy wordcount:",wordcount,correctwordnow);
   console.log("type of correctwordnow",typeof(correctwordnow), typeof(wordcount));
    let value = Math.round((correctwordnow / wordcount) * 100);
    curr_accuracy.value = value;
}

Restart.addEventListener('click', () => {
    textarea.disabled = false;
    textarea.value = null;
    let date = new Date();
    starttime = Math.floor(date.getTime());
    pre_speed.value = curr_speed.value;
    pre_accuracy.value = curr_accuracy.value;
    curr_accuracy.value = 0;
    curr_speed.value = 0;
    index = 0;
    // correctword = 0;
    checkindex = 0;
    // str = [];
    checkstr="";
    firstindex = -1;
    textarea.focus();
})
