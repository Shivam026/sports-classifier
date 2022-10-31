const typingclass=document.querySelector(".typing");
const arr=['Image Classifier','Drop image'];
let count=0;
let lettercount=0;
function type()
{

let w=arr[count];
//console.log(count,lettercount);
let l=w.slice(0,++lettercount);
typingclass.textContent=l;
if(l.length===w.length)
{
    count++;
    if(count===arr.length)
       {
       count=0;
       }
     

    lettercount=0;
    }  

setTimeout(type,400);
}
type();