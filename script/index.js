import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";


const db = getDatabase();
const countofpeople = ref(db, 'countofpeople/' + '');
onValue(countofpeople, (snapshot) => {
const data = snapshot.val();
document.getElementById('peoplecount').innerHTML = data;
});

const waitingtime = ref(db, 'waitingtime/' + '');
onValue(waitingtime, (snapshot) => {
const data = snapshot.val();
document.getElementById('waitingtime').innerHTML = data;
});

const availableseats = ref(db, 'availableseats/' + '');
onValue(availableseats, (snapshot) => {
const data = snapshot.val();
document.getElementById('availableseats').innerHTML = data;
});




const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    label: "fds",
    data: {
        labels: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
        datasets: [{
            data: [40, 20, 0, 0, 5, 15, 20, 0, 0, 30, 40]
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});