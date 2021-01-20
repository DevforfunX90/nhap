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

// let arr = [
//     {
//         name: "asenal",
//         points: 99,
//         gd :45
//     },
//     {
//         name: "chelsea",
//         points: 75,
//         gd :39
//     },
//     {
//         name: "M U",
//         points: 99,
//         gd :39
//     },
//     {
//         name: "liverpool",
//         points: 88,
//         gd :39
//     }
// ]

// arr.sort(function(a, b) {
//     return parseFloat(a.gd) - parseFloat(b.gd);
// });
// arr.sort(function(a, b) {
//     return parseFloat(b.points) - parseFloat(a.points);
// });

// arr.sort(function(a, b) {
//     return b.name - a.name;
// });
// console.log(arr)

// b3

//   fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&fbclid=IwAR2uItvDd7oD1zekYsx5IQ94-3w7RaSD0iJVRWKm_MROzFtyZMUPB-nKME0')
//   .then(response => response.json())
//   .then(data => console.log( data.results));



//   let question = document.querySelector(".question")
//   let answers = document.querySelector(".answers")
//   let quesApi = await data.results.question
    // question.innerHTML=`${quesApi}`
    let x =  {question: 'het cau hoi roi'}
    let score1 = 0
    // let score = document.querySelector('.score')
    let question = document.querySelector('.question')
    let answer = document.querySelector('.answer')
    let box = document.querySelector('.container')
    async function getdata(url){
        const response = await fetch(url);
        var data = await response.json();
        let results = data.results
        console.log(results)
        
        show(data);
        
    }
    getdata('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&fbclid=IwAR2uItvDd7oD1zekYsx5IQ94-3w7RaSD0iJVRWKm_MROzFtyZMUPB-nKME0')
    
    function show(data){
        let results = data.results
        let len = results.length
        console.log(results)
        let count = len

                let arrIncorrect = results[0].incorrect_answers
                arrIncorrect.push(results[0].correct_answer)
                box.innerHTML =`
                <div class="score">Score: ${score1}</div>
                <div class="question-box">
                    <div class= 'question'>${results[0].question}</div>
                    <div class= 'answer'>
                        <button class="answer-items " value="${arrIncorrect[0]}">${arrIncorrect[0]}</button>
                        <button class="answer-items " value="${arrIncorrect[1]}">${arrIncorrect[1]}</button>
                        <button class="answer-items " value="${arrIncorrect[2]}">${arrIncorrect[2]}</button>
                        <button class="answer-items " value="${arrIncorrect[3]}">${arrIncorrect[3]}</button>
                    </div> 

                </div>
                    
                    `
                
                let checkItem = document.querySelectorAll('.answer-items')
                for(let check of checkItem){
                    
                    check.addEventListener('click',()=>{
                        if(check.value == results[0].correct_answer){
                            alert('good')
                            count--
                            results.splice(0,1)
                            show(data)
                            score1++
                        }
                        else{
                            alert('wrong')
                            show(data)
                            results.splice(0,1)
                            count--
                            
                        }
                        
                        console.log(check.getAttribute("value"))
                        console.log(count)
                        console.log(score1)
                    })
                    
                }
   
        }

   
