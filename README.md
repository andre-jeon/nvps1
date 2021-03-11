Hello,

My name is André Jeon and this is my finished assessment.

You would want be in the 'my-app' directory and then npm install and then npm start in your terminal to start the brower to see my answers.

Just in case, I attached the screenshot of how it should look in the brower in the 'src' folder

[a relative link](my-app/src/Screen Shot 2021-03-11 at 5.17.07 PM.png)


# nvps1

Total Time - 1 - 1.5 Hours

Expected Format

Please submit a link to a Github repo that includes the code for your assessment, as well as a README that
explains any steps we might need to follow in order to view the output of your work. Please turn in your
response within 72 hours of receiving the assignment.

Technical Task
In our work, we often need to shape or make calculations based on student data. For example, a feature might
require us to organize a large number of students into smaller groups, or to display statistical information about a group of students such as their GPA.

You will use students.json, which contains data for 20 fake students. You will use these records as the inputs for the following tasks:

1) To parse the data, create two helper methods:
a) groupByGrade() - should take in an array of student objects as a parameter, and return these
records grouped by the grade field on these records.
example output:

[
    [ { grade: 6, name: ‘A’}, { grade: 6, name: ‘C’ } ],
    [ { grade: 7, name: ‘B’} ]
]

b) findLowestAverages() - should take in an array of student objects as a parameter, and return
the student with the lowest score average for each grade.
example output:

[
    { grade: 6, name: ‘A’, average: 55 },
    { grade: 7, name: ‘B’, average: 50 }
]

2) Create some way to output the results of running groupByGrade() and findLowestSubject() on the
provided data. There is no requirement for how you display this information, but please make sure your
README includes an explanation of any steps we should take to see this output. For example, you
could output this information in the console, in a file, or (bonus) even spin up a front end environment to
display the data.