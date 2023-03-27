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
];
const dayMapping = [-1, 0, 1, 2, 0, 1, 2];

const date2 = new Date();
const days = dayMapping[date2.getDay()];

const list = document.getElementById("workout-list");

if(days == -1){
    const title = document.getElementById("title");
    title.innerText = 'Workout Day OFF!';
} else{
    for(let i = 0; i < 5; i++){ 
        let temp = document.createElement('li');
        temp.innerText = workoutList[days][i];
        list.appendChild(temp);
    }
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
