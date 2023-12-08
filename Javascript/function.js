let name;
function  Greeting(name) {
    console.log('Hello' +' '+ name )
    document.write('Hello'+ ' '+ name+ '<br>')
}
Greeting('ATEFA');
Greeting('Manuela');

function add(num1,num2){
     console.log(num1 + num2);
     document.write(num1 + num2 + '<br>');
     return
}
add(10,12);
add(11,9);

function identifyNumbers(number){
    if(number % 2 === 0){
        console.log(number +':'+' ' +'EVEN')
        document.write(number +':'+' ' +'EVEN' + '<br>')
        return
    }
    else 
        console.log(number + ':'+ ' '+ 'ODD')
        document.write(number + ':'+ ' '+ 'ODD' + '<br>')
        return

}
identifyNumbers(12)
identifyNumbers(13)
identifyNumbers(15)
identifyNumbers(20)
identifyNumbers(1)