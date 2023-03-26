const workoutList = [
    [
        'Bench Press: 3sets',
        'Overhead Press: 3sets',
        'Incline Dumbbell Press: 3sets',
        'Chest Machine Press: 3sets',
        'Dips: 3sets'
    ],
    [
        'Dead List: 3sets',
        'Pull Up: 3ests',
        'Barbell Row: 3sets',
        'Seated Row: 3sets',
        'Reverse Pec-deck Fly: 3sets'
    ],
    [
        'Squat: 3sets',
        'Front Squat: 3sets',
        'Leg Press: 3sets',
        'Leg Extension: 3sets',
        'Leg Curl: 3sets'
    ]
]

const date = new Date();
const days = date.getDay() > 2 ? date.getDay() - 3 : date.getDay();

const list = document.getElementById("workout-list");

for(let i = 0; i < 5; i++){
    let temp = document.createElement('li');
    temp.innerText = workoutList[days].i;
    list.appendClid(temp);
}

/*
<ul>
    <li>목록1</li>
    <li>목록2</li>
    <li>목록3</li>
    <ol>
        <li>목록3-1</li>
        <li>목록3-2</li>
    </ol>
</ul>*/
