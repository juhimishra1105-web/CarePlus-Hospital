  function showMessage() {

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

        .stat-card, .module {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 3px 10px #dce5ed;
        }

        .stat-card h2 {
            color: #087eae;
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
    </style>

    <div class="dashboard-header">
        <h1>🏥 CarePlus Hospital</h1>
        <p>Hospital Management Dashboard</p>
    </div>

    <div class="dashboard">
        <h2>Welcome, Administrator!</h2>
        <p>Hospital Overview</p>

        <div class="stats">
            <div class="stat-card">
                <h3>Total Patients</h3>
                <h2>120</h2>
            </div>

            <div class="stat-card">
                <h3>Total Doctors</h3>
                <h2>25</h2>
            </div>

            <div class="stat-card">
                <h3>Appointments</h3>
                <h2>35</h2>
            </div>

            <div class="stat-card">
                <h3>Available Beds</h3>
                <h2>18</h2>
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
        </div>
    </div>
    `;
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

    function displayPatients() {
        document.getElementById("patientList").innerHTML =
            patients.map((p, i) =>
                `<li>Patient ${i + 1}: ${p.name} | Age: ${p.age}</li>`
            ).join("");
    }

    displayPatients();

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

    let doctors = JSON.parse(localStorage.getItem("doctors") || "[]");

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

    let beds = JSON.parse(localStorage.getItem("beds") || "[]");

    function displayBeds() {
        const available = beds.filter(b => !b.patient).length;
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