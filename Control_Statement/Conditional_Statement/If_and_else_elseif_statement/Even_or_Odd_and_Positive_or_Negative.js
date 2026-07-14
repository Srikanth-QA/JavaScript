/*Write a JavaScript program that checks a number and prints:

"Positive Even" if the number is positive and even.
"Positive Odd" if the number is positive and odd.
"Negative Even" if the number is negative and even.
"Negative Odd" if the number is negative and odd.
"Zero" if the number is 0.*/

let num=100
if(num%2==0&&num>0)
{
    console.log("Number is positive and even.")
}
else if(num%2!=0&&num>0){
    console.log("Number is Positive and Odd.")
}
else if(num%2==0&&num<0)
{
    console.log("Number is negative and even.")
}
else if(num%2!=0&&num<0)
{
    console.log("Number is Negative and Odd")
}
else{
    console.log("Number is Zero")
}