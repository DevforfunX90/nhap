// b1

// let a= [2,1,"a"]
// let b= [1,3,"b"]

// let arr = []


// let count = 0
// for(let i = 0; i< a.length; i++){
//     for(let j=0; j< b.length-i ;j++){
//         if(a[i] === b[j]){
//             a.splice(i,1)
//             b.splice(j,1)
//             arr =(a).concat(b)
//         }
        
//     }
// }
// console.log(arr)


// b2

let arr = [
    {
        name: "asenal",
        points: 99,
        gd :45
    },
    {
        name: "chelsea",
        points: 75,
        gd :39
    },
    {
        name: "M U",
        points: 99,
        gd :39
    },
    {
        name: "liverpool",
        points: 88,
        gd :39
    }
]

arr.sort(function(a, b) {
    return parseFloat(a.gd) - parseFloat(b.gd);
});
arr.sort(function(a, b) {
    return parseFloat(b.points) - parseFloat(a.points);
});

arr.sort(function(a, b) {
    return b.name - a.name;
});
console.log(arr)

// b3

//   fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&fbclid=IwAR2uItvDd7oD1zekYsx5IQ94-3w7RaSD0iJVRWKm_MROzFtyZMUPB-nKME0')
//   .then(response => response.json())
//   .then(data => console.log( data.results));



//   let question = document.querySelector(".question")
//   let answers = document.querySelector(".answers")
//   let quesApi = await data.results.question
//  question.innerHTML=`${quesApi}`
    
    

