
let grades = 34;

switch (true) {
    case (grades > 85):
    alert("Pass")
    break;
    case (grades <= 85 && grades >80 ):
    alert("Pass")
    break;
    case (grades <= 80 && grades >70):
    alert("Pass")
    break;
    case (grades <= 70 && grades >60):
    alert("Pass")
    break;
    case (grades <= 60 && grades >40):
    alert("Pass")
    break;
    case (grades <=40 && grades <=35):
    alert("student below 35% is fail")
    break;
    default: 
    alert= ("final grades are")
}