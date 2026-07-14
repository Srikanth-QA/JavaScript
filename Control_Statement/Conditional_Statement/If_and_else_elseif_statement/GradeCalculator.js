/*Write a JavaScript program that takes a student's score (0–100) and prints the corresponding grade using if...else if...else statements.

Grading Rules
90–100 → Grade A
80–89 → Grade B
70–79 → Grade C
60–69 → Grade D
Below 60 → Grade F*/

let stu=20;
if(stu>=90)
{
    console.log("Student grede is A");
}
else if(stu<90&&stu>=80)
{
    console.log("Student grede is B");
}
else if(stu<80&&stu>=70)
{
    console.log("Student grede is C");
}
else if(stu<70&&stu>=60)
{
    console.log("Student grede is D");
}
else if(stu<60)
{
    console.log("Student grede is F");
}
else
{
    console.log("Invaild number")
}