import { array1, array2, array3 ,array4,array5,array6} from './Arrayfile.js';


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
let Learner=document.getElementById("Learner");
let range = document.getElementById("range");
let showrangevalue = document.getElementById("showrangevalue");

let starttime, endtime;
let wordcount;
let wordcountstr;
let usedarray1="", usedarray="";
let str1;
let array;
let n =range.value;
let set = 0;
let flag = 0;
let ddd="";
 let checkstrlenght=0;
 let correctwordnow=0;
let setlearner=0;

range.addEventListener("input", () => {
        if(setlearner==0)
        {
            showrangevalue.value = range.value;
           n = range.value;
        }
})

let d;
Learner.addEventListener("change",()=>{
    set++;
    setlearner=1;
    
   
})
Beginner.addEventListener("change", () => {
    setlearner=0;
    n = range.value;
    if (Beginner.checked) {
        array = [...array3];
        set++;
    }
})

Medium.addEventListener("change", () => {
    setlearner=0;
    n = range.value;
    if (Medium.checked) {
        array = [...array2];
        set++;
    }
})

Pro.addEventListener("change", () => {
    setlearner=0;
    n = range.value;    
    if (Pro.checked) {
        array = [...array1];
        set++;
    }
})




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

let previousD = -1;

function generateRandomD() {
  let newD;
  do {
    newD = Math.floor(Math.random() * 3);
  } while (newD === previousD);

  previousD = newD;
  return newD;
}

function arr1call()
{
    
       let d = generateRandomD();
        // console.log("value of d :",d);
        if(d==0)
        {
            array=[...array4];
        }
        else if(d==1)
        {
            array=[...array5];
        }
        else 
        {
            array=[...array6];
        }
    let arr="";
    let f=0;
    while(f<array.length)
    {
        arr+=array[f]+" ";
        f++;
    }

    usedarray = arr;
    usedarray1 = arr.trim();
    
    let m=countWordsWithoutSpaces(usedarray1);
     n=m;

    return arr.trim();

}

function extractLastWord(usedarray1) {
    // Split the input string into words
    
    const mmm = usedarray1.split(' ');
  console.log("mmmmmmmmmmmmmmmm",mmm);
    // Check if there are any words in the input string
    if (mmm.length > 0) {
      // Return the last word
      let str= mmm[mmm.length - 1];
      console.log("nnnnnnnnnnnnnnnnnnnnn",str);
      let mihir=0;
      for(let i=0; i<str.length;i++)
      {
        mihir++;
      }

      console.log("@@@@@@@@@@@@@@ lastwordcount",mihir);
        return mihir;

    } else {
      // Return an empty string if there are no words
      return 0;
    }
    

  }


function getarray() {
    // console.log("getarrayfunction called");
    let arr = "";
    while (arr.split(" ").length <= n) {
        // if(setlearner==1)
        // {
            let randomnumber = Math.floor(Math.random() * array.length);
            arr += array[randomnumber] + " ";

        // }
          
    }
    usedarray = arr;
    usedarray1 = arr.trim();
    let m=countWordsWithoutSpaces(usedarray1);
//    console.log(m);
//    console.log(",,,")
//    console.log(typeof(usedarray));

    return arr.trim();
}

function arrcall() {
    // console.log(first)
    let darray;
    if(setlearner==1)
    {   

        darray = arr1call();
        let wordcheck = darray.split('');
        wordcount = wordcheck.length;
       
        wordshow.innerText=darray;
       
    }
    else
    {
         darray = getarray();
        let wordcheck = darray.split('');
        wordcount = wordcheck.length;
     wordshow.innerText = darray;

    }
    
    // console.log("type of darrya :",darray);
    // console.log("wordcount is :in arrcall: ",ss.length);

}
let wordsTyped=0
function textaredata() {
    let str = textarea.value;
    str1 = str;
    let str2 = str1.replace(/\s/g, '');
     wordsTyped = str2.length;
    let wstr = str1.split(/\s+/);
    wordcountstr=wstr.length;
    // console.log("textareadata wordtyped: ",wordsTyped,"wordtyped.length:",str1.length ,",wordcountstr: ", wordcountstr);
}

let checkstr="";

// Start.addEventListener('click', () => {
    Start.addEventListener('click',startbutton);
    let lastwordcount=0;
     let lastwordoftxt=0;
function startbutton(event){
    lastwordcount=0;
     lastwordoftxt=0;
     vikash="";
    if (event.target.id === 'Start' || event.keyCode === 13) {
    correctwordnow=0;
    ddd="";

    if (set == 0) {
        checkstr="";
        textarea.innerText = "Please Select Level! ";
        textarea.disabled = true;
        
    } else {
        
        checkstr="";
   
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
            lastwordcount = extractLastWord(usedarray1);
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
            lastwordcount = extractLastWord(usedarray1);
        }
    }
}
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // Trigger the click event for the "Start" button
        event.preventDefault();
        Start.click();
    }
});

textarea.addEventListener("input", () => {
    if (!starttime) {
    //  console.log("first time called");
          countSpaces();
        let date = new Date();
        starttime = Math.floor(date.getTime());
    }
})

textarea.addEventListener('keydown', (event) => {
    if (event.key === ' ' && event.repeat) {
        event.preventDefault();
    }
});


 
 textarea.addEventListener("keydown",(event)=>{
    if(event.key === "Backspace")
    {
        ddd=ddd.slice(0,-1);
        // if(ddd[ddd.length-1]!=' ')
        // {
            // console.log("*** checkstr decreased ");
            checkstr=checkstr.slice(0,-1);
            checkstrlenght=countWordsWithoutSpaces(checkstr);
        // }
        // console.log(" **** ddd : ",ddd,"ddd lenght is :",ddd.length);
        // console.log("******checkstrlenght:",checkstrlenght,"checkstr",checkstr);
        // console.log("backspace is called : ",ddd);
    }
 })

 textarea.addEventListener("input", function(event) {

    let currentValue = textarea.value;

    let newValue = currentValue.replace(/ +/g, ' ');

    textarea.value = newValue;
});
let vikash="";
textarea.addEventListener('input', (event) => {

    // console.log("n&&&&&: ",n);
    //  console.log("second event is called");

     if(event.data==null)
     {
        // console.log("event.data==null");
        return;
     }


    checkstr+=event.data;
    ddd+=event.data;
    console.log("checkstr: ",checkstr," ddd : ",ddd);
    // console.log("ddd : ",ddd,"ddd lenght is :",ddd.length);
     checkstrlenght=countWordsWithoutSpaces(checkstr);
    //  console.log("checkstrlenght:",checkstrlenght,"checkstr",checkstr);

    console.log("checkstrlenght: ",checkstrlenght," n: ",n)
    // console.log("checkstr: : ",checkstr);
             console.log("accuracy wordcount:",wordcount,correctwordnow);
            
              vikash="";
            
             if(checkstrlenght==n)
             {
               let pp=0;
                vikash+=event.data;
                for(let i=0; i<vikash.length;i++)
                {

                    pp++;
                    
                }
                lastwordoftxt+=pp;
                console.log("@@@@@@@@@@@@@@ pp",pp,"  :: ",lastwordoftxt);

             }
             console.log("@@@@@@@@@@@@@@ lastwordcount : ",lastwordoftxt);


    if( checkstrlenght==n && event.data === ' ' || lastwordcount===lastwordoftxt )
    { 
        correctwordnow=compareWords(usedarray,ddd)
        console.log("sfewisfwifnweifwerwe",correctwordnow);

       
         calculate_speed();
         calculate_accuracy();
        
         textarea.disabled=true;
         
    }
    
   
})

function compareWords(str1, str2) {
    console.log(" compare called")
    // Split the input strings into words
    const words1 = str1.split(/\s+/);
    const words2 = str2.split(/\s+/);

    // Initialize a variable to count correct words
    let correctWords = 0;

    // Iterate through the words in both strings
    for (let i = 0; i <Math.min(words1.length, words2.length); i++) {
        const word1 = words1[i];
        const word2 = words2[i];
        console.log("word: ",word1, " ,",word2);

        // Initialize a variable to count matching characters

        // Iterate through the characters in the words
        console.log("math.min is: ",Math.min(word1.length, word2.length));
        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            console.log("character :",word1[j]," ,",word2[j])
            if (word1[j] === word2[j]) {
               
                correctWords++;
                console.log("correctwords: ",correctWords);
            }
        }

       
    }

    return correctWords;
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
    // if(correctwordnow!=0)
    // {
        // correctwordnow=correctwordnow+(n-1);
        textaredata();
         
           console.log("type of correctwordnow",(correctwordnow),(wordcount));
        //    wordcount =wordcount-(n-1);
             console.log("accuracy wordcount:",wordcount,correctwordnow);
            let value = Math.round((correctwordnow /( wordcount-(n-1))) * 100);
            curr_accuracy.value = value;

    // }
    // else
    // {
    //     curr_accuracy.value=0;
    // }


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
    correctwordnow=0;
    // correctword = 0;
   
    // str = [];
    checkstr="";
//    wordcount=0;

    ddd="";
    vikash="";
    textarea.focus();
    lastwordcount=0;
     lastwordoftxt=0;
     lastwordcount = extractLastWord(usedarray1);
})
