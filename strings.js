var names  ="naresh,srilakshmi,varshini,paavani";
console.log(names);
console.log("Here given Innputs are : "+names+" Entered datatype is: "+typeof names);
console.log(names.length);
let result=names.toUpperCase()
console.log("The upper case modified names are: "+result);
 result=names.replace("naresh","suresh");
console.log(result);

let contactNames=[
    "naresh",
    "srilakshmi",
    "varshini",
    "paaavani"];
let searchkeyword="ni";
for (var idx=0;idx<contactNames.length;idx++){
    if(contactNames[idx].endsWith(searchkeyword)){
        console.log(contactNames[idx]);
    }
}