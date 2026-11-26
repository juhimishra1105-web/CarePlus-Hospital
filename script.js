function showMessage(){

    document.body.innerHTML = `
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f0f5fa;
            color: #26364a;
        }

        .dashboard-header {
            background: #087eae;
            color: white;
            padding: 25px;
        }

        .dashboard {
            padding: 30px;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-top: 25px;
        }

       .stat-card {
    background: white;
    padding: 25px;
    border-radius: 16px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    text-align: center;
    border-left: 5px solid #087eae;
    transition: all 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

 .stat-icon {
    font-size: 32px;
    margin-bottom: 12px;
}

.stat-card h3 {
    color: #64748b;
    font-size: 15px;
    margin-bottom: 12px;
}

.stat-card h2 {
    color: #087eae;
    font-size: 32px;
    margin: 0;
}
.stat-card h2 {
    color: #087eae;
    font-size: 32px;
    margin: 0;
}
        .modules {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 25px;
        }

        .module h3 {
            color: #087eae;
        }

        button {
            background: #087eae;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }

        @media(max-width: 700px) {
            .stats, .modules {
                grid-template-columns: 1fr;
            }
        }
            .recent-activity {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.recent-activity h2 {
    grid-column: 1 / -1;
    color: #087eae;
    margin-bottom: 5px;
}

.activity-box {
    background: white;
    padding: 22px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.activity-box h3 {
    color: #26364a;
    margin-bottom: 15px;
}

@media (max-width: 650px) {
    .recent-activity {
        grid-template-columns: 1fr;
    }
}
    .quick-actions {
    margin-top: 35px;
}

.quick-actions h2 {
    color: #087eae;
    margin-bottom: 20px;
}

.quick-action-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.quick-card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: 0.3s;
    border-bottom: 4px solid #087eae;
}

.quick-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.quick-icon {
    font-size: 35px;
}

.quick-card h3 {
    color: #087eae;
}

.quick-card p {
    color: #64748b;
}

@media(max-width: 700px) {
    .quick-action-grid {
        grid-template-columns: 1fr;
    }
}
    .top-nav {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: white;
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.08);
}

.nav-logo {
    font-size: 24px;
    font-weight: bold;
    color: #087eae;
}

.nav-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.nav-links button {
    background: transparent;
    color: #26364a;
    padding: 10px 12px;
    font-weight: bold;
    border-radius: 7px;
}

.nav-links button:hover {
    background: #e5f4fa;
    color: #087eae;
}
    </style>

    <nav class="top-nav">
    <div class="nav-logo">🏥 CarePlus</div>

    <div class="nav-links">
        <button onclick="showMessage()">Home</button>
        <button onclick="showPatients()">Patients</button>
        <button onclick="showDoctors()">Doctors</button>
        <button onclick="showAppointments()">Appointments</button>
        <button onclick="showDiet()">Diet</button>
        <button onclick="showBeds()">Beds</button>
    </div>
</nav>
<div class="hero-banner">

    <div class="hero-content">
        <p class="hero-tag">WELCOME TO CAREPLUS</p>

        <h1>Better Care.<br>Healthier Tomorrow.</h1>

        <p>
            Providing quality healthcare with
            compassion and care.
        </p>

        <button onclick="document.querySelector('.modules').scrollIntoView({behavior:'smooth'})">
            Explore Services →
        </button>
    </div>

    <div class="hero-visual">
    <img src="hospital.jpg" alt="CarePlus Hospital">
</div>

</div>
    <div class="dashboard-header">
        <h1>🏥 CarePlus Hospital</h1>
        <p>Hospital Management Dashboard</p>
    </div>

    <div class="dashboard">
        <h2>Welcome, Administrator!</h2>
        <p>Hospital Overview</p>
        <div class="notifications-section">

    <h2>🔔 Notifications & Alerts</h2>

    <div class="notification-grid">

        <div class="notification-card">
            <span>👥</span>
            <h3>Patient Updates</h3>
            <p id="patientAlert">Loading...</p>
        </div>

        <div class="notification-card">
            <span>📅</span>
            <h3>Appointments</h3>
            <p id="appointmentAlert">Loading...</p>
        </div>

        <div class="notification-card">
            <span>🛏️</span>
            <h3>Bed Availability</h3>
            <p id="bedAlert">Loading...</p>
        </div>

        <div class="notification-card">
            <span>🩺</span>
            <h3>Medical Team</h3>
            <p id="doctorAlert">Loading...</p>
        </div>

    </div>
</div>

        <div class="stats">
    <div class="stat-card">
    <div class="stat-icon">👨‍⚕️</div>
    <h3>Total Patients</h3>
    <h2 id="totalPatients">0</h2>
</div>

    <div class="stat-card">
    <div class="stat-icon">🩺</div>
        <h3>Total Doctors</h3>
        <h2 id="totalDoctors">0</h2>
    </div>

    <div class="stat-card">
    <div class="stat-icon">📅</div>
        <h3>Total Appointments</h3>
        <h2 id="totalAppointments">0</h2>
    </div>

    <div class="stat-card">
    <div class="stat-icon">🛏️</div>
        <h3>Total Beds</h3>
        <h2 id="totalBeds">0</h2>
    </div>

    <div class="stat-card">
        <h3>Available Beds</h3>
        <h2 id="availableBeds">0</h2>
    </div>

    <div class="stat-card">
        <h3>Occupied Beds</h3>
        <h2 id="occupiedBeds">0</h2>
    </div>
</div>
<div class="recent-activity">

    <h2>📋 Recent Activity</h2>

    <div class="activity-box">
        <h3>👥 Recently Registered Patients</h3>
        <div id="recentPatients">
            Loading patients...
        </div>
    </div>

    <div class="activity-box">
        <h3>📅 Recent Appointments</h3>
        <div id="recentAppointments">
            Loading appointments...
        </div>
    </div>

</div>

<div class="quick-actions">
    <h2>⚡ Quick Actions</h2>

    <div class="quick-action-grid">

        <div class="quick-card" onclick="showPatients()">
            <div class="quick-icon">➕</div>
            <h3>Register Patient</h3>
            <p>Add a new patient record</p>
        </div>

        <div class="quick-card" onclick="showAppointments()">
            <div class="quick-icon">📅</div>
            <h3>Book Appointment</h3>
            <p>Schedule a new appointment</p>
        </div>

        <div class="quick-card" onclick="showDoctors()">
            <div class="quick-icon">🩺</div>
            <h3>View Doctors</h3>
            <p>Explore doctor records</p>
        </div>

    </div>
</div>
        <h2>Hospital Management Modules</h2>

        <div class="modules">
            <div class="module">
                <h3>👨‍⚕️ Patient Management</h3>
                <p>Register and manage patients.</p>
                <button onclick="showPatients()">
                    Open
                </button>
            </div>

            <div class="module">
                <h3>🩺 Doctor Management</h3>
                <p>Manage doctor information.</p>
                <button onclick="showDoctors()">
                    Open
                </button>
            </div>

            <div class="module">
                <h3>📅 Appointment Management</h3>
                <p>Manage patient appointments.</p>
                <button onclick="showAppointments()">
                    Open
                </button>
            </div>

            <div class="module">
                <h3>🍎 Diet & Nutrition</h3>
                <p>Manage patient meal plans.</p>
                <button onclick="showDiet()">
                    Open
                </button>
            </div>

            <div class="module">
    <h3>🛏️ Bed Management</h3>
    <p>Manage hospital beds and availability.</p>
    <button onclick="showBeds()">
        Open
    </button>
</div>
        </div>
    </div>
    `;

    updateDashboardStats();
    updateRecentActivity();
    updateNotifications();

}
function updateRecentActivity() {

    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const recentPatients = patients.slice(-5).reverse();
    const recentAppointments = appointments.slice(-5).reverse();

    document.getElementById("recentPatients").innerHTML =
        recentPatients.length
        ? recentPatients.map(p => `<p>👤 ${p.name}</p>`).join("")
        : "No patients registered yet.";

    document.getElementById("recentAppointments").innerHTML =
        recentAppointments.length
        ? recentAppointments.map(a =>
            `<p>📅 ${a.patient} — ${a.date} at ${a.time}</p>`
          ).join("")
        : "No appointments yet.";
}
function updateNotifications() {

    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const beds = JSON.parse(localStorage.getItem("beds")) || [];

    const availableBeds = beds.filter(bed => !bed.patient).length;

    document.getElementById("patientAlert").textContent =
        patients.length + " patients registered";

    document.getElementById("appointmentAlert").textContent =
        appointments.length + " appointments scheduled";

    document.getElementById("bedAlert").textContent =
        availableBeds + " beds available";

    document.getElementById("doctorAlert").textContent =
        doctors.length + " doctors registered";
}
    
function showPatients() {

    document.body.innerHTML = `
    <style>
        body {
            font-family: Arial;
            background: #f0f5fa;
            margin: 0;
            color: #26364a;
        }

        header {
            background: #087eae;
            color: white;
            padding: 20px;
        }

        .patient-box {
            background: white;
            margin: 30px auto;
            padding: 25px;
            max-width: 700px;
            border-radius: 12px;
        }

        input, select {
            width: 95%;
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            background: #087eae;
            color: white;
            border: none;
            padding: 12px 20px;
            margin: 5px;
            border-radius: 5px;
            cursor: pointer;
        }

        li {
            background: #eef6fa;
            padding: 12px;
            margin: 8px 0;
        }
            .notifications-section {
    margin-top: 25px;
}

.notifications-section h2 {
    color: #087eae;
    margin-bottom: 18px;
}

.notification-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.notification-card {
    background: white;
    padding: 20px;
    border-radius: 14px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    border-left: 4px solid #087eae;
    transition: 0.3s;
}

.notification-card:hover {
    transform: translateY(-5px);
}

.notification-card span {
    font-size: 30px;
}

.notification-card h3 {
    color: #26364a;
}

.notification-card p {
    color: #087eae;
    font-weight: bold;
}

@media(max-width: 700px) {
    .notification-grid {
        grid-template-columns: 1fr 1fr;
    }
}
    .hero-banner {
    background: linear-gradient(120deg, #dff4ff, #a8dff5, #eaf8ff);
    padding: 40px;
    border-radius: 20px;
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    overflow: hidden;
}

.hero-content {
    max-width: 550px;
}

.hero-tag {
    color: #087eae;
    font-weight: bold;
    letter-spacing: 2px;
}

.hero-content h1 {
    color: #123b62;
    font-size: 36px;
    margin: 12px 0;
}

.hero-content p {
    color: #45647e;
}

.hero-content button {
    margin-top: 15px;
    padding: 14px 24px;
    border-radius: 25px;
}

.hero-visual {
    flex: 1;
    min-width: 250px;
}

.hero-visual img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
}

@media(max-width: 650px) {
    .hero-banner {
        flex-direction: column;
        text-align: center;
        min-height: 230px;
    }

    .hero-content h1 {
        font-size: 28px;
    }
}
    </style>

    <header>
    

        <h1>🏥 Patient Management</h1>
        <p>CarePlus Hospital</p>
    </header>

    <div class="patient-box">
        <h2>Register New Patient</h2>

        <form id="patientForm">

            <input id="name" placeholder="Patient Name" required>

            <input id="age" type="number"
            placeholder="Age" min="0" max="120" required>

            <select id="gender" required>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
            </select>

            <input id="phone" type="tel"
            placeholder="Contact Number" required>

            <input id="condition"
            placeholder="Medical Condition" required>

            <button type="submit">Save Patient</button>

        </form>
        <input
    id="searchPatient"
    type="text"
    placeholder="🔍 Search patient by name..."
    oninput="searchPatients()"
>

        <h2>Patient Records</h2>
        <ul id="patientList"></ul>

        <button onclick="showMessage()">
            Back to Dashboard
        </button>
    </div>
    `;




     let patients = JSON.parse(
    localStorage.getItem("patients") || "[]"
);

if (patients.length === 0) {

    patients = [
        {
            name: "Aarav Sharma",
            age: 25,
            gender: "Male",
            phone: "0000000001",
            condition: "Fever"
        },
        {
            name: "Ananya Verma",
            age: 32,
            gender: "Female",
            phone: "0000000002",
            condition: "Regular Checkup"
        },
        {
            name: "Rohan Gupta",
            age: 45,
            gender: "Male",
            phone: "0000000003",
            condition: "Diabetes"
        },
        {
            name: "Priya Singh",
            age: 28,
            gender: "Female",
            phone: "0000000004",
            condition: "Migraine"
        },
        {
            name: "Kabir Mehta",
            age: 38,
            gender: "Male",
            phone: "0000000005",
            condition: "Blood Pressure"
        }
    ];

    localStorage.setItem(
        "patients",
        JSON.stringify(patients)
    );
}


function displayPatients() {

    function renderPatients(list) {

        document.getElementById("patientList").innerHTML =
            list.map(p => `
                <li>
                    <strong>${p.name}</strong>
                    | Age: ${p.age}

                    <button onclick="showPatientProfile(${patients.indexOf(p)})">
                        View Profile
                    </button>
                </li>
            `).join("");
    }

    window.searchPatients = function() {

        const searchText = document
            .getElementById("searchPatient")
            .value.toLowerCase();

        const filteredPatients = patients.filter(p =>
            p.name.toLowerCase().includes(searchText)
        );

        renderPatients(filteredPatients);
    };

    renderPatients(patients);
}
    displayPatients();
    window.showPatientProfile = function(index) {

    const patient = patients[index];

    document.body.innerHTML = `
        <style>
            body {
                font-family: Arial;
                background: #f0f5fa;
                color: #26364a;
                margin: 0;
            }

            .profile-box {
                background: white;
                max-width: 600px;
                margin: 40px auto;
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            }

            .profile-box h2 {
                color: #087eae;
            }

            .profile-box p {
                padding: 10px;
                background: #eef6fa;
                border-radius: 6px;
            }

            button {
                background: #087eae;
                color: white;
                padding: 12px 20px;
                border: none;
                border-radius: 6px;
                cursor: pointer;
            }
        </style>

        <div class="profile-box">

            <h2>👤 Patient Profile</h2>

            <p><strong>Name:</strong> ${patient.name}</p>
            <p><strong>Age:</strong> ${patient.age}</p>
            <p><strong>Gender:</strong> ${patient.gender}</p>
            <p><strong>Contact:</strong> ${patient.phone}</p>
            <p><strong>Medical Condition:</strong> ${patient.condition}</p>

            <button onclick="showPatients()">
                Back to Patient Records
            </button>

        </div>
    `;
};

    document.getElementById("patientForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        const patient = {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            phone: document.getElementById("phone").value,
            condition: document.getElementById("condition").value
        };

        patients.push(patient);

        localStorage.setItem(
            "patients",
            JSON.stringify(patients)
        );

        alert("Patient Registered Successfully!");

        displayPatients();
        this.reset();
    });
}
function showDiet() {

    const patients = JSON.parse(
        localStorage.getItem("patients") || "[]"
    );

    const patientOptions = patients.map((p, i) =>
        `<option value="${i}">${p.name}</option>`
    ).join("");

    document.body.innerHTML = `
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f0f5fa;
            color: #26364a;
        }

        header {
            background: #087eae;
            color: white;
            padding: 22px;
        }

        .diet-box {
            background: white;
            max-width: 750px;
            margin: 30px auto;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 3px 10px #dce5ed;
        }

        input, select, textarea {
            width: 95%;
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 6px;
        }

        textarea {
            min-height: 70px;
        }

        button {
            background: #087eae;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin: 5px;
        }

        .plan {
            background: #eaf5f7;
            padding: 15px;
            margin: 12px 0;
            border-radius: 8px;
        }
    </style>

    <header>
        <h1>🍎 Diet & Nutrition Management</h1>
        <p>CarePlus Hospital</p>
    </header>

    <div class="diet-box">

        <h2>Create Patient Diet Plan</h2>

        <form id="dietForm">

            <label>Select Patient</label>

            <select id="patient" required>
                <option value="">Choose Patient</option>
                ${patientOptions}
            </select>

            <label>Breakfast</label>
            <input id="breakfast"
                placeholder="Enter breakfast plan" required>

            <label>Lunch</label>
            <input id="lunch"
                placeholder="Enter lunch plan" required>

            <label>Evening Snacks</label>
            <input id="snacks"
                placeholder="Enter snacks plan" required>

            <label>Dinner</label>
            <input id="dinner"
                placeholder="Enter dinner plan" required>

            <label>Dietary Notes</label>
            <textarea id="notes"
                placeholder="Enter diet-related notes"></textarea>

            <button type="submit">Save Diet Plan</button>

        </form>

        <h2>Saved Diet Plans</h2>

        <div id="dietList"></div>

        <button onclick="showMessage()">
            Back to Dashboard
        </button>

    </div>
    `;

     let plans = JSON.parse(
    localStorage.getItem("dietPlans") || "[]"
);

if (plans.length === 0) {

    plans = [
        {
            patient: "Aarav Sharma",
            breakfast: "Oats and seasonal fruits",
            lunch: "Rice, dal and vegetables",
            snacks: "Fruit salad",
            dinner: "Roti and vegetable soup",
            notes: "Sample balanced meal plan"
        },
        {
            patient: "Ananya Verma",
            breakfast: "Milk and vegetable sandwich",
            lunch: "Roti, dal and salad",
            snacks: "Yogurt and fruits",
            dinner: "Rice and mixed vegetables",
            notes: "Demo plan only"
        },
        {
            patient: "Rohan Gupta",
            breakfast: "Vegetable oats",
            lunch: "Dal, roti and vegetables",
            snacks: "Seasonal fruit",
            dinner: "Vegetable khichdi",
            notes: "Demo plan only"
        },
        {
            patient: "Priya Singh",
            breakfast: "Idli and sambar",
            lunch: "Rice, dal and vegetables",
            snacks: "Fruit bowl",
            dinner: "Roti and vegetable curry",
            notes: "Demo plan only"
        },
        {
            patient: "Kabir Mehta",
            breakfast: "Vegetable poha",
            lunch: "Roti, dal and salad",
            snacks: "Yogurt",
            dinner: "Rice and vegetables",
            notes: "Demo plan only"
        }
    ];

    localStorage.setItem(
        "dietPlans",
        JSON.stringify(plans)
    );
}

    function displayPlans() {

        document.getElementById("dietList").innerHTML =
            plans.map((p, i) => `
                <div class="plan">
                    <h3>Plan ${i + 1}: ${p.patient}</h3>
                    <p>Breakfast: ${p.breakfast}</p>
                    <p>Lunch: ${p.lunch}</p>
                    <p>Snacks: ${p.snacks}</p>
                    <p>Dinner: ${p.dinner}</p>
                    <p>Notes: ${p.notes || "None"}</p>
                </div>
            `).join("");
    }

    displayPlans();

    document.getElementById("dietForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        const selected = document.getElementById("patient");
        const patientName =
            selected.options[selected.selectedIndex].text;

        const plan = {
            patient: patientName,
            breakfast: document.getElementById("breakfast").value,
            lunch: document.getElementById("lunch").value,
            snacks: document.getElementById("snacks").value,
            dinner: document.getElementById("dinner").value,
            notes: document.getElementById("notes").value
        };

        plans.push(plan);

        localStorage.setItem(
            "dietPlans",
            JSON.stringify(plans)
        );

        alert("Diet Plan Saved Successfully!");

        displayPlans();
        this.reset();
    });
}

function showDoctors() {
    document.body.innerHTML = `
    <style>
        body {
            font-family: Arial;
            background: #f0f5fa;
            margin: 0;
            color: #26364a;
        }
        header {
            background: #087eae;
            color: white;
            padding: 20px;
        }
        .doctor-box {
            background: white;
            padding: 25px;
            margin: 30px auto;
            max-width: 600px;
            border-radius: 12px;
        }
        input {
            width: 95%;
            padding: 12px;
            margin: 8px 0;
        }
        button {
            background: #087eae;
            color: white;
            padding: 12px;
            border: none;
            cursor: pointer;
            margin-top: 10px;
        }
    </style>

    <header>
        <h1>Doctor Management</h1>
        <p>CarePlus Hospital</p>
    </header>

    <div class="doctor-box">
        <h2>Register New Doctor</h2>

        <form id="doctorForm">
            <input id="doctorName" placeholder="Doctor Name" required>
            <input id="specialization" placeholder="Specialization" required>
            <input id="doctorPhone" placeholder="Contact Number" required>
            <input id="availableDays" placeholder="Available Days" required>

            <button type="submit">Save Doctor</button>
        </form>

        <h2>Doctor Records</h2>
        <ul id="doctorList"></ul>

        <button onclick="showMessage()">Back to Dashboard</button>
    </div>
    `;

    let doctors = JSON.parse(
    localStorage.getItem("doctors") || "[]"
);

if (doctors.length === 0) {

    doctors = [
        {
            name: "Dr. Amit Sharma",
            specialization: "Cardiologist",
            phone: "0000000011",
            days: "Monday to Friday"
        },
        {
            name: "Dr. Neha Verma",
            specialization: "Dermatologist",
            phone: "0000000012",
            days: "Monday to Saturday"
        },
        {
            name: "Dr. Rahul Gupta",
            specialization: "Neurologist",
            phone: "0000000013",
            days: "Tuesday to Saturday"
        },
        {
            name: "Dr. Priya Singh",
            specialization: "Pediatrician",
            phone: "0000000014",
            days: "Monday to Friday"
        },
        {
            name: "Dr. Karan Mehta",
            specialization: "Orthopedic",
            phone: "0000000015",
            days: "Wednesday to Sunday"
        }
    ];

    localStorage.setItem(
        "doctors",
        JSON.stringify(doctors)
    );
}
    function displayDoctors() {
        document.getElementById("doctorList").innerHTML =
            doctors.map((d, i) =>
                `<li>${i + 1}. ${d.name} - ${d.specialization}</li>`
            ).join("");
    }

    displayDoctors();

    document.getElementById("doctorForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const doctor = {
            name: document.getElementById("doctorName").value,
            specialization: document.getElementById("specialization").value,
            phone: document.getElementById("doctorPhone").value,
            days: document.getElementById("availableDays").value
        };

        doctors.push(doctor);
        localStorage.setItem("doctors", JSON.stringify(doctors));

        alert("Doctor Registered Successfully!");
        displayDoctors();
        this.reset();
    });
}

function showAppointments() {
    const patients = JSON.parse(localStorage.getItem("patients") || "[]");
    const doctors = JSON.parse(localStorage.getItem("doctors") || "[]");

    const patientOptions = patients.map(p =>
        `<option>${p.name}</option>`
    ).join("");

    const doctorOptions = doctors.map(d =>
        `<option>${d.name}</option>`
    ).join("");

    document.body.innerHTML = `
    <style>
        body {
            font-family: Arial;
            background: #f0f5fa;
            margin: 0;
            color: #26364a;
        }
        header {
            background: #087eae;
            color: white;
            padding: 20px;
        }
        .appointment-box {
            background: white;
            padding: 25px;
            margin: 30px auto;
            max-width: 600px;
            border-radius: 12px;
        }
        input, select {
            width: 95%;
            padding: 12px;
            margin: 8px 0;
        }
        button {
            background: #087eae;
            color: white;
            padding: 12px;
            border: none;
            cursor: pointer;
            margin-top: 10px;
        }
    </style>

    <header>
        <h1>Appointment Management</h1>
        <p>CarePlus Hospital</p>
    </header>

    <div class="appointment-box">
        <h2>Book New Appointment</h2>

        <form id="appointmentForm">
            <label>Patient Name</label>
            <select id="appointmentPatient" required>
                <option value="">Select Patient</option>
                ${patientOptions}
            </select>

            <label>Doctor Name</label>
            <select id="appointmentDoctor" required>
                <option value="">Select Doctor</option>
                ${doctorOptions}
            </select>

            <label>Appointment Date</label>
            <input id="appointmentDate" type="date" required>

            <label>Appointment Time</label>
            <input id="appointmentTime" type="time" required>

            <label>Reason for Visit</label>
            <input id="appointmentReason" placeholder="Reason for visit" required>

            <button type="submit">Save Appointment</button>
        </form>

        <h2>Appointment Records</h2>
        <ul id="appointmentList"></ul>

        <button onclick="showMessage()">Back to Dashboard</button>
    </div>
    `;

   let appointments = JSON.parse(
    localStorage.getItem("appointments") || "[]"
);

if (appointments.length === 0) {

    appointments = [
        {
            patient: "Aarav Sharma",
            doctor: "Dr. Amit Sharma",
            date: "2026-11-27",
            time: "10:00",
            reason: "Regular Checkup"
        },
        {
            patient: "Ananya Verma",
            doctor: "Dr. Neha Verma",
            date: "2026-11-27",
            time: "11:30",
            reason: "Skin Consultation"
        },
        {
            patient: "Rohan Gupta",
            doctor: "Dr. Amit Sharma",
            date: "2026-11-28",
            time: "12:00",
            reason: "Diabetes Checkup"
        },
        {
            patient: "Priya Singh",
            doctor: "Dr. Rahul Gupta",
            date: "2026-11-28",
            time: "14:00",
            reason: "Headache Consultation"
        },
        {
            patient: "Kabir Mehta",
            doctor: "Dr. Karan Mehta",
            date: "2026-11-29",
            time: "10:30",
            reason: "Joint Pain"
        }
    ];

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );
}

    function displayAppointments() {
        document.getElementById("appointmentList").innerHTML =
            appointments.map((a, i) =>
                `<li>${i + 1}. ${a.patient} - ${a.doctor}
                | ${a.date} | ${a.time} | ${a.reason}</li>`
            ).join("");
    }

    displayAppointments();

    document.getElementById("appointmentForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const appointment = {
            patient: document.getElementById("appointmentPatient").value,
            doctor: document.getElementById("appointmentDoctor").value,
            date: document.getElementById("appointmentDate").value,
            time: document.getElementById("appointmentTime").value,
            reason: document.getElementById("appointmentReason").value
        };

        appointments.push(appointment);

        localStorage.setItem(
            "appointments",
            JSON.stringify(appointments)
        );

        alert("Appointment Booked Successfully!");
        displayAppointments();
        this.reset();
    });
}

function showBeds() {
    const patients = JSON.parse(localStorage.getItem("patients") || "[]");

    const patientOptions = patients.map(p =>
        `<option value="${p.name}">${p.name}</option>`
    ).join("");

    document.body.innerHTML = `
    <style>
        body {
            font-family: Arial;
            background: #f0f5fa;
            margin: 0;
            color: #26364a;
        }
        header {
            background: #087eae;
            color: white;
            padding: 20px;
        }
        .bed-box {
            background: white;
            padding: 25px;
            margin: 30px auto;
            max-width: 650px;
            border-radius: 12px;
        }
        input, select {
            width: 95%;
            padding: 12px;
            margin: 8px 0;
        }
        button {
            background: #087eae;
            color: white;
            padding: 12px;
            border: none;
            cursor: pointer;
            margin-top: 10px;
        }
        .stats {
            background: #e3f2fd;
            padding: 12px;
            margin: 10px 0;
            border-radius: 8px;
        }
    </style>

    <header>
        <h1>Bed Management</h1>
        <p>CarePlus Hospital</p>
    </header>

    <div class="bed-box">
        <h2>Bed Overview</h2>
        <div class="stats" id="bedStats"></div>

        <h2>Register / Allocate Bed</h2>

        <form id="bedForm">
            <input id="bedNumber"
                placeholder="Enter Bed Number" required>

            <input id="wardName"
                placeholder="Enter Ward Name" required>

            <label>Allocate Patient (optional)</label>
            <select id="bedPatient">
                <option value="">Available Bed</option>
                ${patientOptions}
            </select>

            <button type="submit">Save Bed</button>
        </form>

        <h2>Bed Records</h2>
        <ul id="bedList"></ul>

        <button onclick="showMessage()">Back to Dashboard</button>
    </div>
    `;

     let beds = JSON.parse(
    localStorage.getItem("beds") || "[]"
);

if (beds.length === 0) {

    beds = [
        {
            number: "101",
            ward: "General Ward",
            patient: "Aarav Sharma"
        },
        {
            number: "102",
            ward: "General Ward",
            patient: "Ananya Verma"
        },
        {
            number: "103",
            ward: "ICU",
            patient: "Rohan Gupta"
        },
        {
            number: "104",
            ward: "Private Ward",
            patient: ""
        },
        {
            number: "105",
            ward: "Private Ward",
            patient: "Priya Singh"
        },
        {
            number: "106",
            ward: "General Ward",
            patient: ""
        },
        {
            number: "107",
            ward: "ICU",
            patient: ""
        },
        {
            number: "108",
            ward: "General Ward",
            patient: ""
        }
    ];

    localStorage.setItem(
        "beds",
        JSON.stringify(beds)
    );
}
    function displayBeds() {
       const available = beds.filter(bed => !bed.patient).length;
const occupied = beds.length - available;

        document.getElementById("bedStats").innerHTML =
            `Total Beds: ${beds.length} |
             Available: ${available} |
             Occupied: ${occupied}`;

        document.getElementById("bedList").innerHTML =
            beds.map((b, i) =>
                `<li>Bed ${b.number} - ${b.ward} -
                ${b.patient ? "Occupied by " + b.patient : "Available"}</li>`
            ).join("");
    }

    displayBeds();

    document.getElementById("bedForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const number = document.getElementById("bedNumber").value;

        if (beds.some(b => b.number === number)) {
            alert("This bed number already exists!");
            return;
        }

        const bed = {
            number: number,
            ward: document.getElementById("wardName").value,
            patient: document.getElementById("bedPatient").value
        };

        beds.push(bed);

        localStorage.setItem("beds", JSON.stringify(beds));

        alert("Bed Saved Successfully!");
        displayBeds();
        this.reset();
    });
}
function updateDashboardStats() {

    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const beds = JSON.parse(localStorage.getItem("beds")) || [];

    document.getElementById("totalPatients").textContent = patients.length;
    document.getElementById("totalDoctors").textContent = doctors.length;
    document.getElementById("totalAppointments").textContent = appointments.length;
    document.getElementById("totalBeds").textContent = beds.length;

    const available = beds.filter(bed => !bed.patient).length;
    const occupied = beds.length - available;

    document.getElementById("availableBeds").textContent = available;
    document.getElementById("occupiedBeds").textContent = occupied;
}
// MEDAXIS ANALYTICS - DOCTOR DIRECTORY

function loadAnalyticsDoctors() {

    const doctors = JSON.parse(
        localStorage.getItem("doctors") || "[]"
    );

    const doctorTable = document.getElementById("analyticsDoctorList");

    if (!doctorTable) return;

    if (doctors.length === 0) {
        doctorTable.innerHTML =
            '<tr><td colspan="3">No doctors registered yet.</td></tr>';
        return;
    }

    const demoRatings = [4.8, 4.6, 4.7, 4.5, 4.9];

    doctorTable.innerHTML = doctors.map((doctor, index) => `
        <tr>
            <td>${doctor.name}</td>
            <td>${doctor.specialization}</td>
            <td>⭐ ${demoRatings[index % demoRatings.length]} / 5</td>
        </tr>
    `).join("");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadAnalyticsDoctors);
} else {
    loadAnalyticsDoctors();
}
function submitReview() {
    const name = document.getElementById("reviewName").value.trim();
    const message = document.getElementById("reviewMessage").value.trim();
    const rating = document.querySelector('input[name="rating"]:checked');

    if (!name || !message || !rating) {
        alert("Please enter your name, feedback and rating!");
        return;
    }

    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");

    reviews.push({
        name: name,
        message: message,
        rating: Number(rating.value)
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    document.getElementById("reviewName").value = "";
    document.getElementById("reviewMessage").value = "";
    rating.checked = false;

    displayReviews();

    alert("Thank you for your feedback!");
}

function displayReviews() {
    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    const display = document.getElementById("reviewDisplay");

    if (!display) return;

    display.innerHTML = reviews.length === 0
        ? "<p>No reviews submitted yet.</p>"
        : reviews.map(review => `
            <div class="review-card">
                <h4>${escapeReviewText(review.name)}</h4>
                <div class="review-stars">
                    ${"★".repeat(review.rating)}${"☆".repeat(5-review.rating)}
                </div>
                <p>${escapeReviewText(review.message)}</p>
            </div>
        `).join("");
}

function escapeReviewText(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

document.addEventListener("DOMContentLoaded", displayReviews);
function submitReview() {
    const name = document.getElementById("reviewName").value.trim();
    const message = document.getElementById("reviewMessage").value.trim();
    const rating = document.querySelector(
        'input[name="rating"]:checked'
    );

    if (!name || !message || !rating) {
        alert("Please enter your name, feedback and star rating!");
        return;
    }

    const reviews = JSON.parse(
        localStorage.getItem("reviews") || "[]"
    );

    reviews.push({
        name: name,
        message: message,
        rating: Number(rating.value)
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    document.getElementById("reviewName").value = "";
    document.getElementById("reviewMessage").value = "";
    rating.checked = false;

    displayReviews();

    alert("Thank you for rating Care Plus Hospital!");
}

function displayReviews() {
    const reviews = JSON.parse(
        localStorage.getItem("reviews") || "[]"
    );

    const display = document.getElementById("reviewDisplay");

    if (!display) return;

    if (reviews.length === 0) {
        display.innerHTML = "<p>No reviews submitted yet.</p>";
        return;
    }

    display.innerHTML = reviews.map(review => `
        <div class="review-card">
            <h4>${escapeReviewText(review.name)}</h4>
            <div class="review-stars">
                ${"★".repeat(review.rating)}
                ${"☆".repeat(5 - review.rating)}
            </div>
            <p>${escapeReviewText(review.message)}</p>
        </div>
    `).join("");
}

function escapeReviewText(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

document.addEventListener("DOMContentLoaded", displayReviews);
function toggleCareBot() {
    const bot = document.getElementById("botWindow");

    bot.style.display =
        bot.style.display === "block" ? "none" : "block";
}

function botReply(topic) {
    const messages = document.getElementById("botMessages");

    let answer = "";

    if (topic === "timings") {
        answer = "Care Plus Hospital demo timings are 9 AM to 8 PM.";
    }

    else if (topic === "departments") {
        const doctors = JSON.parse(
            localStorage.getItem("doctors") || "[]"
        );

        const departments = [
            ...new Set(doctors.map(d => d.specialization).filter(Boolean))
        ];

        answer = departments.length
            ? "Our listed specializations are: " +
              departments.map(escapeReviewText).join(", ")
            : "No doctor specializations have been registered yet.";
    }

    else if (topic === "appointment") {
        const appointments = JSON.parse(
            localStorage.getItem("appointments") || "[]"
        );

        answer = "There are currently " + appointments.length +
            " appointments in the demo records. Please use the appointment section to manage bookings.";
    }

    else if (topic === "beds") {
        const beds = JSON.parse(
            localStorage.getItem("beds") || "[]"
        );

        const available = beds.filter(b => !b.patient).length;
        const occupied = beds.length - available;

        answer = "Demo bed status: " + available +
            " available and " + occupied + " occupied.";
    }

    else if (topic === "contact") {
        answer = "Please visit the hospital's contact section for contact information. Contact details have not been configured in this demo.";
    }

    messages.innerHTML += `
        <div class="bot-message">
            ${answer}
        </div>
    `;

    messages.scrollTop = messages.scrollHeight;
}