
convert =(minutes)=>{
    return minutes*60
}


divide =(number1,number2)=>{
    if(number1%number2===0){
        return true;
    }
    else{
        return false;
    }
}

charCount=(a,b)=>{
    let count=0
    for(i=0;i<b.length;i++){
       if(b[i]==a){
           count++
       }
    }
    return count
}


addup=(n)=>{
    let sum=0
    for (let index = 1; index <= n ; index++) {
        sum=sum+index;
    }
    return sum
}

replaceVowel=(array)=>{
    for (let i = 0; i < array.length; i++) {
        array=array.replace('a',1)
        array=array.replace('e',2)
        array=array.replace('i',3)
        array=array.replace('o',4)
        array=array.replace('u',5)
    }
    return array
}

specialreverse=(str,ch)=>{
    let a=str.split(" ")
    let ns=""
    a.map((indi)=>{
        if(indi[0]===ch){
            indi=indi.split('').reverse().join('')
            ns=ns+" "+indi
        }
        else{
            ns=ns+" "+indi
        }
    })
    return ns
}


testjackpot=(arr)=>{
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]!==arr[i+1]){
            return false
        }
    }
    return true 
}

removedups=(arr)=>{
    var set1 = new Set(arr);
    arr=Array.from(set1)
    return arr
}



realtype=(tp)=>{

    return  tp.constructor.name
}

checkno=(string)=>{
    for (let i = 0; i < string.length; i++) {
        if(string[i]>=1&&string[i]<=9){
            return true
        }
    }
    return false
}

numinstr=(arr)=>{

    na=arr.filter((string)=>{
        return checkno(string)
    })
    return na
    
}
//1st question
let n=1
console.log(convert(n))
//2nd question
let number1=14,number2=8
console.log(divide(number1,number2))
//3rd question
console.log(charCount ("c","Chamber of secrets"))
//4th question
console.log(addup (4))
//5th question
console.log(replaceVowel("karachi"))
//6th question
console.log(specialreverse("word searches are super fun", "s" ))
//7th question
console.log(testjackpot(["@","@","@","@"]))
//8th question 
console.log(removedups(["The","Big","Cat"]))
//9th question 
console.log(realtype(["The","Big","Cat"]))
//10th question 
console.log(numinstr(["1a","a","2b","a"]))