var quizdata=[
    {
      question:'1.What is the advantage of selection sort over other sorting techniques ?',
      a:'It requires no additional storage space',
      b:'it is scalable',
      c:'It works best for inputs which are already sorted',
      d:'It is faster than any other sorting technique',
      correct:'a'
    },
    {
     question:'2.What is an external sorting algorithm?',
     a:'Algorithm that uses tape or disk during the sort',
     b:'Algorithm that uses main memory during the sort',
     c:'Algorithm that involves swapping',
     d:'Algorithm that are considered in place',
     correct:'a'
    },
    {
        question:'3.Which of the following sorting algorithm is best suited if the elements are already mostly sorted?',
        a:'Heap Sort',
        b:'Quick Sort',
        c:'Insertion Sort',
        d:'Merge Sort',
        correct:'c'
    },
    {
        question:'4.Merge sort uses which of the following technique to implement sorting?',
        a:'Backtracking',
        b:'Greedy algorithm',
        c:'Divide and conquer',
        d:'Dynamic programming',
        correct:'c'
    },
    {
     question:'5.Which of the following method is used for sorting in merge sort?',
     a:'Partitioning',
     b:'Exchanging',
     c:'Selection',
     d:'Merging',
     correct:'d'
    }
]

var quiz=document.getElementById('quizdiv')
var answer=document.querySelectorAll('.answer')
var question=document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')
 
var submitbtn=document.getElementById('submit')


var CurrentQuestion=0
var quizscore=0

loadQuiz()

function loadQuiz(){
       deselect()
       question.innerHTML=quizdata[CurrentQuestion].question
       option_a.innerText=quizdata[CurrentQuestion].a
       option_b.innerText=quizdata[CurrentQuestion].b
       option_c.innerText=quizdata[CurrentQuestion].c
       option_d.innerText=quizdata[CurrentQuestion].d
}
function deselect(){
    answer.forEach(answer =>answer.checked=false) 
        

}
submitbtn.addEventListener('click',()=>{
      
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption=answer.id
        }
    })
    if(selectedoption==quizdata[CurrentQuestion].correct){
        quizscore=quizscore+1
    }
    CurrentQuestion=CurrentQuestion+1
    if(CurrentQuestion==quizdata.length){

        document.getElementById('quiz').innerHTML=`<h2>You have answered ${quizscore} correctly out of ${quizdata.length}</h2>`

    }else{

    }
    loadQuiz()


})