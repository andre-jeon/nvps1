import './App.css';
import React, {useState} from "react";

import Problem1a from './Problem1a'
import Problem1b from './Problem1b'

function App() {
  let students = [
    {
      "_id": {
        "$oid": "5dc194991c9d4400004c640a"
      },
      "name": "Stuart Dent",
      "grade": 6,
      "scores": [
        {
          "subject": "Math",
          "value": 85
        },
        {
          "subject": "English",
          "value": 65
        },
        {
          "subject": "Science",
          "value": 70
        },
        {
          "subject": "Social Studies",
          "value": 95
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc1956a1c9d4400004c640c"
      },
      "name": "Christine Walls",
      "grade": 7,
      "scores": [
        {
          "subject": "Math",
          "value": 95
        },
        {
          "subject": "English",
          "value": 80
        },
        {
          "subject": "Science",
          "value": 85
        },
        {
          "subject": "Social Studies",
          "value": 95
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc196c71c9d4400004c640d"
      },
      "name": "Mirza Carney",
      "grade": 8,
      "scores": [
        {
          "subject": "Math",
          "value": 55
        },
        {
          "subject": "English",
          "value": 85
        },
        {
          "subject": "Science",
          "value": 75
        },
        {
          "subject": "Social Studies",
          "value": 65
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc1971e1c9d4400004c640e"
      },
      "name": "Ishmael Wade",
      "grade": 6,
      "scores": [
        {
          "subject": "Math",
          "value": 50
        },
        {
          "subject": "English",
          "value": 90
        },
        {
          "subject": "Science",
          "value": 95
        },
        {
          "subject": "Social Studies",
          "value": 60
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc197461c9d4400004c640f"
      },
      "name": "Aanya Legge",
      "grade": 8,
      "scores": [
        {
          "subject": "Math",
          "value": 75
        },
        {
          "subject": "English",
          "value": 75
        },
        {
          "subject": "Science",
          "value": 75
        },
        {
          "subject": "Social Studies",
          "value": 75
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc197651c9d4400004c6410"
      },
      "name": "Elsie-Rose Ramirez",
      "grade": 7,
      "scores": [
        {
          "subject": "Math",
          "value": 65
        },
        {
          "subject": "English",
          "value": 95
        },
        {
          "subject": "Science",
          "value": 100
        },
        {
          "subject": "Social Studies",
          "value": 65
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc1979b1c9d4400004c6411"
      },
      "name": "Reanne Simons",
      "grade": 6,
      "scores": [
        {
          "subject": "Math",
          "value": 95
        },
        {
          "subject": "English",
          "value": 75
        },
        {
          "subject": "Science",
          "value": 60
        },
        {
          "subject": "Social Studies",
          "value": 80
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc198051c9d4400004c6412"
      },
      "name": "Amelia-Rose Mullins",
      "grade": 7,
      "scores": [
        {
          "subject": "Math",
          "value": 60
        },
        {
          "subject": "English",
          "value": 90
        },
        {
          "subject": "Science",
          "value": 90
        },
        {
          "subject": "Social Studies",
          "value": 85
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc198291c9d4400004c6413"
      },
      "name": "Shae Paterson",
      "grade": 8,
      "scores": [
        {
          "subject": "Math",
          "value": 65
        },
        {
          "subject": "English",
          "value": 70
        },
        {
          "subject": "Science",
          "value": 80
        },
        {
          "subject": "Social Studies",
          "value": 65
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc1984a1c9d4400004c6414"
      },
      "name": "Kailan Quintero",
      "grade": 6,
      "scores": [
        {
          "subject": "Math",
          "value": 65
        },
        {
          "subject": "English",
          "value": 80
        },
        {
          "subject": "Science",
          "value": 75
        },
        {
          "subject": "Social Studies",
          "value": 60
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc198871c9d4400004c6415"
      },
      "name": "Rahim Williams",
      "grade": 7,
      "scores": [
        {
          "subject": "Math",
          "value": 95
        },
        {
          "subject": "English",
          "value": 90
        },
        {
          "subject": "Science",
          "value": 75
        },
        {
          "subject": "Social Studies",
          "value": 70
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc199101c9d4400004c6416"
      },
      "name": "Davey Barrow",
      "grade": 8,
      "scores": [
        {
          "subject": "Math",
          "value": 50
        },
        {
          "subject": "English",
          "value": 70
        },
        {
          "subject": "Science",
          "value": 80
        },
        {
          "subject": "Social Studies",
          "value": 65
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc199561c9d4400004c6417"
      },
      "name": "Rosa Cervantes",
      "grade": 6,
      "scores": [
        {
          "subject": "Math",
          "value": 70
        },
        {
          "subject": "English",
          "value": 80
        },
        {
          "subject": "Science",
          "value": 90
        },
        {
          "subject": "Social Studies",
          "value": 100
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc199731c9d4400004c6418"
      },
      "name": "Aneeka Leal",
      "grade": 7,
      "scores": [
        {
          "subject": "Math",
          "value": 65
        },
        {
          "subject": "English",
          "value": 70
        },
        {
          "subject": "Science",
          "value": 75
        },
        {
          "subject": "Social Studies",
          "value": 80
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc199991c9d4400004c6419"
      },
      "name": "Helin Holder",
      "grade": 8,
      "scores": [
        {
          "subject": "Math",
          "value": 80
        },
        {
          "subject": "English",
          "value": 75
        },
        {
          "subject": "Science",
          "value": 70
        },
        {
          "subject": "Social Studies",
          "value": 65
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc199ba1c9d4400004c641a"
      },
      "name": "Zayn Bains",
      "grade": 6,
      "scores": [
        {
          "subject": "Math",
          "value": 65
        },
        {
          "subject": "English",
          "value": 95
        },
        {
          "subject": "Science",
          "value": 70
        },
        {
          "subject": "Social Studies",
          "value": 85
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc199d71c9d4400004c641b"
      },
      "name": "Monty Bevan",
      "grade": 7,
      "scores": [
        {
          "subject": "Math",
          "value": 75
        },
        {
          "subject": "English",
          "value": 55
        },
        {
          "subject": "Science",
          "value": 80
        },
        {
          "subject": "Social Studies",
          "value": 80
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc199f61c9d4400004c641c"
      },
      "name": "Mia Hanson",
      "grade": 8,
      "scores": [
        {
          "subject": "Math",
          "value": 75
        },
        {
          "subject": "English",
          "value": 75
        },
        {
          "subject": "Science",
          "value": 80
        },
        {
          "subject": "Social Studies",
          "value": 60
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc19a281c9d4400004c641d"
      },
      "name": "Ewan Rosario",
      "grade": 6,
      "scores": [
        {
          "subject": "Math",
          "value": 60
        },
        {
          "subject": "English",
          "value": 90
        },
        {
          "subject": "Science",
          "value": 55
        },
        {
          "subject": "Social Studies",
          "value": 90
        }
      ]
    },
    {
      "_id": {
        "$oid": "5dc19a531c9d4400004c641e"
      },
      "name": "Gino Dickerson",
      "grade": 7,
      "scores": [
        {
          "subject": "Math",
          "value": 75
        },
        {
          "subject": "English",
          "value": 70
        },
        {
          "subject": "Science",
          "value": 80
        },
        {
          "subject": "Social Studies",
          "value": 65
        }
      ]
    }
  ]






  const[gbg, setgbg] = useState(groupByGrade(students))
  const[fla, setfla] = useState(findlowestAverage(students))


  function groupByGrade(a) {

    let ans = []

    let grade6 = []
    let grade7 = []
    let grade8 = []
    

    // for loop that creates temp students object
    // and adding them to their corresponding variables
    // based on their grade
    for (let i = 0; i < a.length; i++){
    // iterate through a
    // if the grade is equal to 6
      if(a[i].grade == 6){
        // create a temp object
        // and give its values
        // to its corresponding keys 
        let temp = {
          "grade": a[i].grade,
          "name": a[i].name
        }
        // add it to the grade 6 array
        grade6.push(temp)
      }
      
      if(a[i].grade == 7){
        let temp = {
          "grade": a[i].grade,
          "name": a[i].name
        }
        grade7.push(temp)
      }

      if(a[i].grade == 8){
        let temp = {
          "grade": a[i].grade,
          "name": a[i].name
        }
        grade8.push(temp)
      }
      
      // edge case
      // if the students' grade is greater than 8
      // or less than 6, return the student
      if(a[i].grade > 8 || a[i].grade < 6){
        console.log("You don't belong here!", a[i])
      }
    }
  
    ans.push(grade6, grade7, grade8)

    // console.log(ans)

    return ans
  }


function findlowestAverage(a){

    let grade6=[]
    let grade7=[]
    let grade8=[]
  
    for (let i = 0; i<a.length; i++){
      if(a[i].grade == 6){
        let num = a[i].scores
        let total = 0
        for (let x = 0; x < num.length; x++){
          let sing = num[x].value
          total = total + sing
        }
        let avg = total/num.length
        let obj = {
          "grade":a[i].grade,
          "name":a[i].name,
          "average": avg
        }
        grade6.push(obj)
      }
  
      if(a[i].grade == 7){
        let num = a[i].scores
        let total = 0
        for (let x = 0; x < num.length; x++){
          let sing = num[x].value
          total = total + sing
        }
        let avg = total/num.length
        let obj = {
          "grade":a[i].grade,
          "name":a[i].name,
          "average": avg
        }
        grade7.push(obj)
      }
  
      if(a[i].grade == 8){
        let num = a[i].scores
        let total = 0
        for (let x = 0; x < num.length; x++){
          let sing = num[x].value
          total = total + sing
        }
        let avg = total/num.length
        let obj = {
          "grade":a[i].grade,
          "name":a[i].name,
          "average": avg
        }
        grade8.push(obj)
      }
  }
  
    let ans = []
  
    let temp6 = {
      "grade": 6,
      "Name": "Hello World",
      "average": 100
    }
  
    let temp7 = {
      "grade": 7,
      "Name": "Hello World",
      "average": 100
    }
  
    let temp8 = {
      "grade": 8,
      "Name": "Hello World",
      "average": 100
    }
  
    for (let y = 0; y < grade6.length; y++){
      if (temp6.average > grade6[y].average){
        temp6 = grade6[y]
      }
    }
  
    for (let y = 0; y < grade7.length; y++){
      if (temp7.average > grade7[y].average){
        temp7 = grade7[y]
      }
    }
  
    for (let y = 0; y < grade8.length; y++){
      if (temp8.average > grade8[y].average){
        temp8 = grade8[y]
      }
    }
  
    ans.push(temp6, temp7, temp8)

    // console.log(ans)
  
    return ans
  }

  // let problem1a = groupByGrade(students)
  // let problem1b = findlowestAverage(students)
  console.log(gbg)
  console.log(fla)

  return (
    <div className = 'nam'>
      <h2>1a) groupByGrade()</h2>
      <div className = 'woo'>
      {
        gbg.map(emp => {
          return(
            <Problem1a details = {emp}/>
          )
        })
      }
      </div>
      <h2>1b) findLowestAverages()</h2>
      <div className="big">      {
        fla.map(emp => {
          return(
            <Problem1b details = {emp}/>
          )
        })
      }
      </div>

    </div>
  );
}

export default App;
