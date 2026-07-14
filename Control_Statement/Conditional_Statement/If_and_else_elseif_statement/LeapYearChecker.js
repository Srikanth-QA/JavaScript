/*Write a JavaScript program to check whether a year is a leap year or not.

Rules

A year is a leap year if:

It is divisible by 400, OR
It is divisible by 4 but not divisible by 100.*/

let year = 2024;
if((year % 400===0)||(year%4===0&&year%100!==0))
{
    console.log("year is leap year");
    
}
else{
        console.log("Year is not leap year")
    }