//minimum 10 let variables
let letvar1 = "Cabili";
let letvar2 = "Marc";    //Arrow ngan Template Literals Value
let letvar3 = "BSCS";   //Arrow ngan Template Literals Valuess
let letvar4 = "3A";
let letvar5 = "Activity 1.3 JavaScript Essentials";
let letvar6 = "testing arrowfunction decalred in both object "; //Arrow ngan Template Literals Value



let letvar7 = ["cabili", "Marc", "floralde"]; //para sa destructed arrays
let letvar8 =["Laurio", "gelomio", "Mariel"]; //para sa destructed arrays
let letvar9 = ["BSCS", "BSIT", "BSED"];       //para sa destructed arrays
const [valarray1, valarray2, valarray3] = letvar7;  //para sa destructed arrays
const [valarray4, valarray5, valarray6] = letvar8;  //para sa destructed arrays
const [valarray7, valarray8, valarray9] = letvar9;  //para sa destructed arrays


let letvar10 = { 
                nameletvar10: "Cabili Marc",
                strandletvar10: "BSCS",                  //para sa destructed object 
                sectionletvar10: "3A"
};

// 10 const variables,
const constvar1 = "This is a constant variable 1";
const constvar2 = "This is a constant variable 2";
const constvar3 = "This is a constant variable 3";  //para sa Template Literals
const constvar4 = "This is a constant variable 4";
const constvar5 = "This is a constant variable 5"; 

const constvar6 = {                           
                Nameconst6: "Mariel",
                Strandconst6:"BSIT",     //para sa destructed object
                Sectionconst6: "3B" 
};  
const constvar7 = {
                Nameconst7: "Laurio",
                Strandconst7:"BSED",     //para sa destructed object
                Sectionconst7: "3C"
};


const constvar8 = ["Arrayconcat1", "Arrayconcat2", "Arrayconcat3"]; //para sa spread operator arrays
const constvar9 = ["cabili1Arrayconcat1", "Marc2Arrayconcat2", "Floralde2Arrayconcat3"]; //para sa spread operator arrays
const constvar10 = ["marielcncat1", "lauriocncat2", "gelomiocncat3"];      
const constvar11 = ["Dara", "lauriocncat2", "Madrilijosconcat2"];                    //para sa spread operator arrays





//5 arrow functions,
console.log("==========================Arrow Functions=============================");
let arrow1 = {arrfunction1: (val1) => `Last Name: ${letvar1}`,
             arrfunction2: (val) => `First Name: ${letvar6}`};  // testing declaration on object doule arrow function

const arrow2 = (val2) => `First Name: ${letvar2}`;
const arrow3 = (val3) => `Course: ${letvar3}`;
const arrow4 =(val4)=> `Section: ${letvar4}`;
const arrow5 = (val5) => `Name of Activities: ${letvar5}`;

console.log(arrow1.arrfunction1("val1"));
console.log(arrow1.arrfunction2("val"));

console.log(arrow2("val2"));
console.log(arrow3("val3"));
console.log(arrow4("val4"));
console.log(arrow5("val5"));





//  10 template literals,
console.log("==========================Template Literals=============================");

console.log(`Template Literals1: ${letvar1}`);
console.log(`Template Literals2: ${letvar2}`);
console.log(`Template Literals3: ${letvar3}`);
console.log(`Template Literals4: ${letvar4}`);
console.log(`Template Literals5: ${letvar5}`);
console.log(`Template Literals6: ${constvar1}`);
console.log(`Template Literals7: ${constvar2}`);
console.log(`Template Literals8: ${constvar3}`);
console.log(`Template Literals9: ${constvar4}`);
console.log(`Template Literals10: ${constvar5}`);


// 3 destructured arrays, 
console.log("==========================3 destructured arrays=============================");
console.log("========================== Part 1 =============================");

console.log(valarray1);
console.log(valarray2);
console.log(valarray3);
console.log("========================== Part 2 =============================");

console.log(valarray4);
console.log(valarray5);
console.log(valarray6);
console.log("========================== Part 3 =============================");

console.log(valarray7);
console.log(valarray8);
console.log(valarray9);

// 3 destructured object literals, 
console.log("========================== 3 destructured object literals=============================");

const {nameletvar10, strandletvar10, sectionletvar10} = letvar10;
const {Nameconst6, Strandconst6, Sectionconst6} = constvar6;
let {Nameconst7, Sectionconst7, Strandconst7} = constvar7;
console.log("========================== Part 1 =============================");

console.log(nameletvar10);
console.log(strandletvar10);
console.log(sectionletvar10);
console.log("========================== Part 2 =============================");

console.log(Nameconst6);
console.log(Strandconst6);
console.log(Sectionconst6);
console.log("========================== Part 3=============================");

console.log(Nameconst7);
console.log(Strandconst7);
console.log(Sectionconst7);


// 2 arrays using spread operators, 
console.log("========================== 2 arrays using spread operators =============================");
console.log("========================= Flattened Output =========================");
let mergedarray1 = [...constvar8, ...constvar9];
let mergedarray2 = [...constvar11,...constvar10];
console.log(mergedarray1);
console.log(mergedarray2);

console.log("========================= Nested Output Only working in Terminal =========================");
let mergedarray3 = [constvar8, constvar9];
let mergedarray4 = [constvar11, constvar10];
console.log(mergedarray3);
console.log(mergedarray4);





// 2 object literals using spread operator, 
console.log("============================================== 2 object literals using spread operator ==============================================")
const objectliterals1 = {
    Nameko: "Marc Cabili",
    Section: "3A",
    Strand:"BSCS"
}
const onbjectliterlas2 ={
    Nameko2: "MarielGelomio",
    Section2: "3A",
    Strand2: "BSIT"
}
const objmerged = {...objectliterals1, ...onbjectliterlas2};
console.log(objmerged);



// 2 arrays using .map(), 
//letvar7, letvar8, letvar9
console.log("============================================== 2 arrays using .map() ==============================================")

const Uppercasetesting = letvar7.map(testing => testing.toUpperCase());
console.log("========================================");
console.log("Array value letvar7:")
console.log(letvar7);
console.log("========================================");

console.log("Array COnverted to UPPERCASE:");
console.log(Uppercasetesting);
console.log("========================================");


const Lowercasetesting = letvar8.map(testing2 => testing2.toLocaleLowerCase());
console.log("========================================");
console.log("Array value letvar8:")
console.log(letvar8);
console.log("========================================");

console.log("Array COnverted to LOWERCASE:");
console.log(Lowercasetesting);
console.log("========================================");





// 2 arrays using .filter(), 
// letvar8
console.log("============================================== 2 arrays using .filter() ==============================================")
const filtertesting1 = letvar8.filter(testingkola => testingkola.length > 6 );
console.log("========================================");
console.log("Array value of letvar8:")
console.log(letvar8);
console.log("========================================");
console.log("Array Filtered to length > 6:");
console.log(filtertesting1);
console.log("========================================");

const arraynum = [1,2,3,4,5,6,7,8,9,10];
const filternumpart2 = arraynum.filter(testingkolanum => testingkolanum % 2 === 0 );
console.log("========================================");
console.log("Array value of arraynum:")
console.log(arraynum);
console.log("========================================");
console.log("Array Filtered moddullo of 2 in 1-10 array value:");
console.log(filternumpart2);
console.log("========================================");




// 2 object literals using optional chaining
console.log("============================================== 2 object literals using optional chaining  ==============================================")

const objectkoliterals1 = {
    name: "MARC CABILI",
    section: {editedsection: "3A testting optional chaining"},
    strand: "BSCS"
}
const objectkoliterals2 = {
    name: {edietdname: "MARIADAWN GELOMIO"},
    section: {editedsection: "3B testting optional chaining"},
    strand: "BSIT"
}
console.log("================== PART 1 ==================");
console.log(objectkoliterals1.name);
console.log(objectkoliterals1.section?.editedsection);
console.log(objectkoliterals1.strand);
console.log("================== PART 1 ==================");
console.log(objectkoliterals2.name?.edietdname);
console.log(objectkoliterals2.section?.editedsection);
console.log(objectkoliterals2.strand);

