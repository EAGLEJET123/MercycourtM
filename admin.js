/* ========================= 
   ADMIN DASHBOARD - JavaScript
   ========================= */

/* ========================= 
   CONFIGURATION
   ========================= */

// Default admin credentials (stored in localStorage after first change)
const DEFAULT_ADMIN = {
  username: "admin",
  password: "admin123"
};

// Default quiz password (same as in quiz.js)
const DEFAULT_QUIZ_PASSWORD = "SCHOOL-2025";

// LocalStorage Keys
const STORAGE_KEYS = {
  adminCredentials: "mms_admin_credentials",
  quizPassword: "mms_quiz_password",
  students: "mms_students",
  quizResults: "mms_quiz_results",
  quizzes: "mms_quizzes",
  schoolInfo: "mms_school_info"
};

/* ========================= 
   DEFAULT QUIZ DATA
   (Copy from your quiz.js)
   ========================= */

const DEFAULT_QUIZZES = {
  "Grade 1": {
    "1st": {
      topic: "GENERAL QUESTIONS (Nursery 1 — 1st Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id: 1, text: "What color are strawberries?", options: ["Blue", "Red", "Black", "Grey"], answerIndex: 1 },
        { id: 2, text: "Which of these is round?", options: ["Triangle", "Circle", "Square", "Line"], answerIndex: 1 }
      ]
    },
    "2nd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 2nd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id: 1, text: "What color is grass?", options: ["Yellow", "Green", "Pink", "Purple"], answerIndex: 1 }
      ]
    },
    "3rd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 3rd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id: 1, text: "What shape has 3 sides?", options: ["Circle", "Triangle", "Square", "Line"], answerIndex: 1 }
      ]
    }
  },
  "Grade 2": {
    "1st": {
      topic: "Colors & Simple Shapes (Nursery 1 — 1st Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id: 1, text: "What color are strawberries?", options: ["Blue", "Red", "Black", "Grey"], answerIndex: 1 },
        { id: 2, text: "Which of these is round?", options: ["Triangle", "Circle", "Square", "Line"], answerIndex: 1 }
      ]
    },
    "2nd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 2nd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id: 1, text: "What color is grass?", options: ["Yellow", "Green", "Pink", "Purple"], answerIndex: 1 }
      ]
    },
    "3rd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 3rd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id: 1, text: "What shape has 3 sides?", options: ["Circle", "Triangle", "Square", "Line"], answerIndex: 1 }
      ]
    }
  },
  "Grade 3": {
    "1st": {
      topic: "GST (GRADE 3 — 1st Term)",
      durationSeconds: 25 * 60,
      questions: [
        { id: 1, text: "Visual art is __?", options: ["An art form we can hear", "An art form we can see", "An art form we can taste", "An art form we can smell"], answerIndex: 1 },
        { id: 2, text: "Which of these components serves as the brain of the computer?", options: ["Speaker", "Floppy disk", "Flash drive", "System Unit"], answerIndex: 3 }
      ]
    },
    "2nd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 2nd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id: 1, text: "What color is grass?", options: ["Yellow", "Green", "Pink", "Purple"], answerIndex: 1 },
        { id: 2, text: "What color is grass?", options: ["Yellow", "Green", "Pink", "Purple"], answerIndex: 1 }
      ]
    },
    "3rd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 3rd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id: 1, text: "What shape has 3 sides?", options: ["Circle", "Triangle", "Square", "Line"], answerIndex: 1 }
      ]
    }
  },
  "Grade 4": {
    "1st": {
      topic: "GST (GRADE 4 — 1st Term)",
      durationSeconds: 25 * 60,
      questions: [
        { id: 1, text: "Which of these components serves as the brain of the computer?", options: ["Speaker", "Floppy disk", "Flash drive", "System Unit"], answerIndex: 3 },
        { id: 2, text: "What is 2345 in words?", options: ["Two thousand three hundred and forty-five", "Two thousand three hundred and forty", "Two thousand one hundred and forty-five", "Two thousand three hundred and forty"], answerIndex: 0 }
      ]
    },
    "2nd": {
      topic: "General Studies(Grade 4 — 2nd Term)",
      durationSeconds: 25 * 60,
      questions: [
        { id: 1, text: "The human feeding system helps us take _____ in", options: ["Sound", "Food", "Color", "Breath"], answerIndex: 1 },
        { id: 2, text: "_______ is not a way of becoming a citizen of a country", options: ["Citizenship by birth", "Citizenship by Registration", "Citizenship by computer", "Citizenship by Naturalization "], answerIndex: 2 }
      ]
    },
    "3rd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 3rd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id: 1, text: "What shape has 3 sides?", options: ["Circle", "Triangle", "Square", "Line"], answerIndex: 1 }
      ]
    }
  },
  "Grade 5": {
    "1st": {
      topic: "GST (GRADE 5 — 1st Term)",
      durationSeconds: 25 * 60,
      questions: [
        { id: 1, text: "Which is incorrect?", options: ["A healthy environment is attractive", "A healthy environment is safe for living", "A healthy environment prevents diseases", "A healthy environment causes pollution"], answerIndex: 3 },
        { id: 2, text: "A computer that calculate and perform logical operation is known as ?", options: ["digital computer", "analogue computer", "hybrid computer", "Calculation computer"], answerIndex: 0 }
      ]
    },
    "2nd": {
      topic: "Animals & Colors (Nursery 2 — 2nd Term)",
      durationSeconds: 3 * 60,
      questions: [
        { id: 1, text: "Which of these is a baby cat?", options: ["Puppy", "Calf", "Kitten", "Foal"], answerIndex: 2 }
      ]
    },
    "3rd": {
      topic: "Animals & Colors (Nursery 2 — 3rd Term)",
      durationSeconds: 3 * 60,
      questions: [
        { id: 1, text: "What color are most bananas when ripe?", options: ["Blue", "Yellow", "Red", "Pink"], answerIndex: 1 }
      ]
    }
  }
};

/* ========================= 
   STATE MANAGEMENT
   ========================= */

let currentAdmin = null;
let currentSection = 'overview';

/* ========================= 
   INITIALIZATION
   ========================= */

document.addEventListener('DOMContentLoaded', () => {
  initializeData();
  setupEventListeners();
  updateCurrentDate();
});

function initializeData() {
  // Initialize quizzes if not exists
  if (!localStorage.getItem(STORAGE_KEYS.quizzes)) {
    localStorage.setItem(STORAGE_KEYS.quizzes, JSON.stringify(DEFAULT_QUIZZES));
  }

  // Initialize quiz password if not exists
  if (!localStorage.getItem(STORAGE_KEYS.quizPassword)) {
    localStorage.setItem(STORAGE_KEYS.quizPassword, DEFAULT_QUIZ_PASSWORD);
  }

  // Initialize empty arrays if not exists
  if (!localStorage.getItem(STORAGE_KEYS.students)) {
    localStorage.setItem(STORAGE_KEYS.students, JSON.stringify([]));
  }

  if (!localStorage.getItem(STORAGE_KEYS.quizResults)) {
    localStorage.setItem(STORAGE_KEYS.quizResults, JSON.stringify([]));
  }
}

function updateCurrentDate() {
  const dateEl = document.getElementById('currentDate');
  if (dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('en-US', options);
  }
}

/* ========================= 
   EVENT LISTENERS SETUP
   ========================= */

function setupEventListeners() {
  // Admin Login
  document.getElementById('adminLoginForm').addEventListener('submit', handleAdminLogin);

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', handleLogout);

  // Navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      switchSection(section);
    });
  });

  // Modal close
  document.getElementById('closeModalBtn').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });

  // Students Section
  document.getElementById('addStudentBtn').addEventListener('click', openAddStudentModal);
  document.getElementById('studentSearch').addEventListener('input', filterStudents);
  document.getElementById('studentClassFilter').addEventListener('change', filterStudents);

  // Quiz Section
  document.getElementById('loadQuizBtn').addEventListener('click', loadQuizForEditing);
  document.getElementById('addQuizBtn').addEventListener('click', openAddQuestionModal);
  document.getElementById('saveQuizSettings').addEventListener('click', saveQuizSettings);

  // Results Section
  document.getElementById('resultSearch').addEventListener('input', filterResults);
  document.getElementById('resultClassFilter').addEventListener('change', filterResults);
  document.getElementById('resultTermFilter').addEventListener('change', filterResults);
  document.getElementById('exportResultsBtn').addEventListener('click', exportResultsCSV);
  document.getElementById('clearResultsBtn').addEventListener('click', clearAllResults);

  // Settings Section
  document.getElementById('changePasswordForm').addEventListener('submit', changeAdminPassword);
  document.getElementById('quizPasswordForm').addEventListener('submit', changeQuizPassword);
  document.getElementById('schoolInfoForm').addEventListener('submit', saveSchoolInfo);
  document.getElementById('backupDataBtn').addEventListener('click', backupData);
  document.getElementById('restoreDataInput').addEventListener('change', restoreData);
}

/* ========================= 
   ADMIN LOGIN / LOGOUT
   ========================= */

function handleAdminLogin(e) {
  e.preventDefault();

  const username = document.getElementById('adminUsername').value.trim();
  const password = document.getElementById('adminPassword').value;

  // Get stored credentials or use default
  const storedCredentials = JSON.parse(localStorage.getItem(STORAGE_KEYS.adminCredentials)) || DEFAULT_ADMIN;

  if (username === storedCredentials.username && password === storedCredentials.password) {
    currentAdmin = { username };
    showDashboard();
  } else {
    alert('❌ Invalid username or password!');
  }
}

function handleLogout() {
  if (confirm('Are you sure you want to logout?')) {
    currentAdmin = null;
    document.getElementById('dashboardPage').style.display = 'none';
    document.getElementById('adminLoginPage').style.display = 'flex';
    document.getElementById('adminLoginForm').reset();
  }
}

function showDashboard() {
  document.getElementById('adminLoginPage').style.display = 'none';
  document.getElementById('dashboardPage').style.display = 'flex';
  loadOverviewData();
  loadCurrentQuizPassword();
}

/* ========================= 
   NAVIGATION
   ========================= */

function switchSection(sectionName) {
  currentSection = sectionName;

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === sectionName);
  });

  // Update sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(`${sectionName}Section`).classList.add('active');

  // Update title
  const titles = {
    overview: 'Overview',
    students: 'Student Management',
    quizzes: 'Quiz Management',
    results: 'All Results',
    settings: 'Settings'
  };
  document.getElementById('sectionTitle').textContent = titles[sectionName];

  // Load section data
  switch (sectionName) {
    case 'overview':
      loadOverviewData();
      break;
    case 'students':
      loadStudents();
      break;
    case 'results':
      loadResults();
      break;
    case 'settings':
      loadCurrentQuizPassword();
      loadSchoolInfo();
      break;
  }
}

/* ========================= 
   OVERVIEW SECTION
   ========================= */

function loadOverviewData() {
  const students = getStudents();
  const results = getResults();
  const quizzes = getQuizzes();

  // Count total quizzes
  let totalQuizzes = 0;
  for (const grade in quizzes) {
    for (const term in quizzes[grade]) {
      totalQuizzes++;
    }
  }

  // Calculate average score
  let avgScore = 0;
  if (results.length > 0) {
    const totalPercentage = results.reduce((sum, r) => sum + r.percentage, 0);
    avgScore = Math.round(totalPercentage / results.length);
  }

  // Update stats
  document.getElementById('totalStudents').textContent = students.length;
  document.getElementById('totalQuizzes').textContent = totalQuizzes;
  document.getElementById('totalAttempts').textContent = results.length;
  document.getElementById('avgScore').textContent = avgScore + '%';

  // Load recent results
  loadRecentResults();
}

function loadRecentResults() {
  const results = getResults();
  const tbody = document.getElementById('recentResultsBody');

  // Get last 10 results
  const recentResults = results.slice(-10).reverse();

  if (recentResults.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="no-data">No results yet</td></tr>';
    return;
  }

  tbody.innerHTML = recentResults.map(r => `
    <tr>
      <td>${escapeHtml(r.name)}</td>
      <td>${escapeHtml(r.class)}</td>
      <td>${escapeHtml(r.examNo)}</td>
      <td>${escapeHtml(r.topic)}</td>
      <td class="${r.percentage >= 50 ? 'score-pass' : 'score-fail'}">${r.score}/${r.total}</td>
      <td>${formatDate(r.date)}</td>
    </tr>
  `).join('');
}

/* ========================= 
   STUDENTS SECTION
   ========================= */

function getStudents() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.students)) || [];
}

function saveStudents(students) {
  localStorage.setItem(STORAGE_KEYS.students, JSON.stringify(students));
}

function loadStudents() {
  const students = getStudents();
  renderStudentsTable(students);
}

function renderStudentsTable(students) {
  const tbody = document.getElementById('studentsBody');

  if (students.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="no-data">No students registered</td></tr>';
    return;
  }

  tbody.innerHTML = students.map((s, index) => `
    <tr>
      <td>${escapeHtml(s.name)}</td>
      <td>${escapeHtml(s.class)}</td>
      <td>${escapeHtml(s.examNo)}</td>
      <td>${formatDate(s.dateAdded)}</td>
      <td>
        <button class="btn btn-sm btn-secondary" onclick="editStudent(${index})">✏️ Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteStudent(${index})">🗑️</button>
      </td>
    </tr>
  `).join('');
}

function filterStudents() {
  const searchTerm = document.getElementById('studentSearch').value.toLowerCase();
  const classFilter = document.getElementById('studentClassFilter').value;
  const students = getStudents();

  const filtered = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm) ||
      s.examNo.toLowerCase().includes(searchTerm);
    const matchesClass = !classFilter || s.class === classFilter;
    return matchesSearch && matchesClass;
  });

  renderStudentsTable(filtered);
}

function openAddStudentModal() {
  document.getElementById('modalTitle').textContent = 'Add New Student';
  document.getElementById('modalBody').innerHTML = `
    <form id="studentForm">
      <div class="form-group">
        <label>Student Name</label>
        <input type="text" id="studentName" placeholder="Enter full name" required>
      </div>
      <div class="form-group">
        <label>Class</label>
        <select id="studentClass" required>
          <option value="">Select Class</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
          <option value="Grade 4">Grade 4</option>
          <option value="Grade 5">Grade 5</option>
        </select>
      </div>
      <div class="form-group">
        <label>Exam Number</label>
        <input type="text" id="studentExamNo" placeholder="e.g., MMS-2025-001" required>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Add Student</button>
      </div>
    </form>
  `;

  document.getElementById('studentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addStudent();
  });

  openModal();
}

function addStudent() {
  const name = document.getElementById('studentName').value.trim();
  const studentClass = document.getElementById('studentClass').value;
  const examNo = document.getElementById('studentExamNo').value.trim();

  if (!name || !studentClass || !examNo) {
    alert('Please fill all fields!');
    return;
  }

  const students = getStudents();

  // Check for duplicate exam number
  if (students.some(s => s.examNo.toLowerCase() === examNo.toLowerCase())) {
    alert('A student with this exam number already exists!');
    return;
  }

  students.push({
    name,
    class: studentClass,
    examNo,
    dateAdded: new Date().toISOString()
  });

  saveStudents(students);
  closeModal();
  loadStudents();
  alert('✅ Student added successfully!');
}

function editStudent(index) {
  const students = getStudents();
  const student = students[index];

  document.getElementById('modalTitle').textContent = 'Edit Student';
  document.getElementById('modalBody').innerHTML = `
    <form id="editStudentForm">
      <div class="form-group">
        <label>Student Name</label>
        <input type="text" id="editStudentName" value="${escapeHtml(student.name)}" required>
      </div>
      <div class="form-group">
        <label>Class</label>
        <select id="editStudentClass" required>
          <option value="Grade 1" ${student.class === 'Grade 1' ? 'selected' : ''}>Grade 1</option>
          <option value="Grade 2" ${student.class === 'Grade 2' ? 'selected' : ''}>Grade 2</option>
          <option value="Grade 3" ${student.class === 'Grade 3' ? 'selected' : ''}>Grade 3</option>
          <option value="Grade 4" ${student.class === 'Grade 4' ? 'selected' : ''}>Grade 4</option>
          <option value="Grade 5" ${student.class === 'Grade 5' ? 'selected' : ''}>Grade 5</option>
        </select>
      </div>
      <div class="form-group">
        <label>Exam Number</label>
        <input type="text" id="editStudentExamNo" value="${escapeHtml(student.examNo)}" required>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </div>
    </form>
  `;

  document.getElementById('editStudentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    updateStudent(index);
  });

  openModal();
}

function updateStudent(index) {
  const students = getStudents();

  students[index] = {
    ...students[index],
    name: document.getElementById('editStudentName').value.trim(),
    class: document.getElementById('editStudentClass').value,
    examNo: document.getElementById('editStudentExamNo').value.trim()
  };

  saveStudents(students);
  closeModal();
  loadStudents();
  alert('✅ Student updated successfully!');
}

function deleteStudent(index) {
  if (!confirm('Are you sure you want to delete this student?')) return;

  const students = getStudents();
  students.splice(index, 1);
  saveStudents(students);
  loadStudents();
  alert('✅ Student deleted!');
}

/* ========================= 
   QUIZZES SECTION
   ========================= */

function getQuizzes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.quizzes)) || DEFAULT_QUIZZES;
}

function saveQuizzes(quizzes) {
  localStorage.setItem(STORAGE_KEYS.quizzes, JSON.stringify(quizzes));
}

function loadQuizForEditing() {
  const selectedClass = document.getElementById('quizClassSelect').value;
  const selectedTerm = document.getElementById('quizTermSelect').value;

  if (!selectedClass || !selectedTerm) {
    alert('Please select both Class and Term!');
    return;
  }

  const quizzes = getQuizzes();

  if (!quizzes[selectedClass] || !quizzes[selectedClass][selectedTerm]) {
    // Create new quiz for this class/term
    if (!quizzes[selectedClass]) {
      quizzes[selectedClass] = {};
    }
    quizzes[selectedClass][selectedTerm] = {
      topic: `${selectedClass} — ${selectedTerm} Term`,
      durationSeconds: 25 * 60,
      questions: []
    };
    saveQuizzes(quizzes);
  }

  const quiz = quizzes[selectedClass][selectedTerm];

  // Show quiz details
  document.getElementById('quizDetails').style.display = 'block';
  document.getElementById('quizTopic').value = quiz.topic;
  document.getElementById('quizDuration').value = Math.floor(quiz.durationSeconds / 60);
  document.getElementById('questionCount').textContent = quiz.questions.length;

  renderQuestions(quiz.questions, selectedClass, selectedTerm);
}

function renderQuestions(questions, selectedClass, selectedTerm) {
  const container = document.getElementById('questionsContainer');

  if (questions.length === 0) {
    container.innerHTML = '<p class="no-data">No questions yet. Click "Add Question" to create one.</p>';
    return;
  }

  container.innerHTML = questions.map((q, index) => `
    <div class="question-card">
      <div class="question-card-header">
        <h4>Q${index + 1}. ${escapeHtml(q.text)}</h4>
        <div class="question-card-actions">
          <button class="btn btn-sm btn-secondary" onclick="editQuestion('${selectedClass}', '${selectedTerm}', ${index})">✏️ Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteQuestion('${selectedClass}', '${selectedTerm}', ${index})">🗑️</button>
        </div>
      </div>
      ${q.image ? `
        <div class="question-image">
          <img src="${escapeHtml(q.image)}" alt="Question Image" style="max-width: 200px; border-radius: 8px; margin: 10px 0; border: 2px solid #e0e0e0;">
        </div>
      ` : ''}
      <div class="question-options">
        ${q.options.map((opt, i) => `
          <div class="question-option ${i === q.answerIndex ? 'correct' : ''}">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span>${escapeHtml(opt)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function saveQuizSettings() {
  const selectedClass = document.getElementById('quizClassSelect').value;
  const selectedTerm = document.getElementById('quizTermSelect').value;

  if (!selectedClass || !selectedTerm) {
    alert('Please select Class and Term first!');
    return;
  }

  const quizzes = getQuizzes();
  const topic = document.getElementById('quizTopic').value.trim();
  const duration = parseInt(document.getElementById('quizDuration').value) || 25;

  quizzes[selectedClass][selectedTerm].topic = topic;
  quizzes[selectedClass][selectedTerm].durationSeconds = duration * 60;

  saveQuizzes(quizzes);
  alert('✅ Quiz settings saved!');
}

function openAddQuestionModal() {
  const selectedClass = document.getElementById('quizClassSelect').value;
  const selectedTerm = document.getElementById('quizTermSelect').value;

  if (!selectedClass || !selectedTerm) {
    alert('Please select Class and Term first, then click "Load Quiz"!');
    return;
  }

  document.getElementById('modalTitle').textContent = 'Add New Question';
  document.getElementById('modalBody').innerHTML = `
    <form id="questionForm">
      <div class="form-group">
        <label>Question Text</label>
        <textarea id="questionText" rows="3" placeholder="Enter your question here..." required></textarea>
      </div>
      <div class="form-group">
        <label>Question Image (Optional)</label>
        <div class="file-upload-container">
          <input type="file" id="questionImageFile" accept="image/*" style="display: none;">
          <input type="hidden" id="questionImageData">
          <button type="button" class="btn btn-secondary" id="uploadImageBtn">
            📁 Choose Image File
          </button>
          <span id="fileName" class="file-name">No file selected</span>
          <button type="button" class="btn btn-sm btn-danger" id="removeImageBtn" style="display: none;">
            ✕ Remove
          </button>
        </div>
        <div class="image-preview-container">
          <img id="imagePreview" src="" alt="Preview" style="display: none; max-width: 200px; margin-top: 10px; border-radius: 8px; border: 2px solid #ddd;">
        </div>
        <small class="muted">Supported formats: JPG, PNG, GIF (Max 2MB)</small>
      </div>
      <div class="form-group">
        <label>Options (Select the correct answer)</label>
        <div class="options-container">
          <div class="option-input-group">
            <span class="option-label">A.</span>
            <input type="text" id="optionA" placeholder="Option A" required>
            <input type="radio" name="correctAnswer" value="0" required>
          </div>
          <div class="option-input-group">
            <span class="option-label">B.</span>
            <input type="text" id="optionB" placeholder="Option B" required>
            <input type="radio" name="correctAnswer" value="1">
          </div>
          <div class="option-input-group">
            <span class="option-label">C.</span>
            <input type="text" id="optionC" placeholder="Option C" required>
            <input type="radio" name="correctAnswer" value="2">
          </div>
          <div class="option-input-group">
            <span class="option-label">D.</span>
            <input type="text" id="optionD" placeholder="Option D" required>
            <input type="radio" name="correctAnswer" value="3">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Add Question</button>
      </div>
    </form>
  `;

  // File upload button click
  document.getElementById('uploadImageBtn').addEventListener('click', () => {
    document.getElementById('questionImageFile').click();
  });

  // File selected handler
  document.getElementById('questionImageFile').addEventListener('change', (e) => {
    handleImageUpload(e, 'imagePreview', 'questionImageData', 'fileName', 'removeImageBtn');
  });

  // Remove image button
  document.getElementById('removeImageBtn').addEventListener('click', () => {
    clearImageUpload('imagePreview', 'questionImageData', 'fileName', 'removeImageBtn', 'questionImageFile');
  });

  document.getElementById('questionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addQuestion(selectedClass, selectedTerm);
  });

  openModal();
}

function addQuestion(selectedClass, selectedTerm) {
  const text = document.getElementById('questionText').value.trim();
  const imageData = document.getElementById('questionImageData').value;
  const optionA = document.getElementById('optionA').value.trim();
  const optionB = document.getElementById('optionB').value.trim();
  const optionC = document.getElementById('optionC').value.trim();
  const optionD = document.getElementById('optionD').value.trim();
  const correctAnswer = document.querySelector('input[name="correctAnswer"]:checked');

  if (!text || !optionA || !optionB || !optionC || !optionD) {
    alert('Please fill in all fields!');
    return;
  }

  if (!correctAnswer) {
    alert('Please select the correct answer!');
    return;
  }

  const quizzes = getQuizzes();
  const questions = quizzes[selectedClass][selectedTerm].questions;

  const newId = questions.length > 0 ? Math.max(...questions.map(q => q.id)) + 1 : 1;

  // Create question object
  const newQuestion = {
    id: newId,
    text,
    options: [optionA, optionB, optionC, optionD],
    answerIndex: parseInt(correctAnswer.value)
  };

  // Only add image if provided
  if (imageData) {
    newQuestion.image = imageData;
  }

  questions.push(newQuestion);

  saveQuizzes(quizzes);
  closeModal();
  loadQuizForEditing();
  alert('✅ Question added successfully!');
}

function editQuestion(selectedClass, selectedTerm, index) {
  const quizzes = getQuizzes();
  const question = quizzes[selectedClass][selectedTerm].questions[index];
  const hasImage = question.image ? true : false;

  document.getElementById('modalTitle').textContent = 'Edit Question';
  document.getElementById('modalBody').innerHTML = `
    <form id="editQuestionForm">
      <div class="form-group">
        <label>Question Text</label>
        <textarea id="editQuestionText" rows="3" required>${escapeHtml(question.text)}</textarea>
      </div>
      <div class="form-group">
        <label>Question Image (Optional)</label>
        <div class="file-upload-container">
          <input type="file" id="editQuestionImageFile" accept="image/*" style="display: none;">
          <input type="hidden" id="editQuestionImageData" value="${question.image || ''}">
          <button type="button" class="btn btn-secondary" id="editUploadImageBtn">
            📁 ${hasImage ? 'Change Image' : 'Choose Image File'}
          </button>
          <span id="editFileName" class="file-name">${hasImage ? 'Image uploaded' : 'No file selected'}</span>
          <button type="button" class="btn btn-sm btn-danger" id="editRemoveImageBtn" style="${hasImage ? '' : 'display: none;'}">
            ✕ Remove
          </button>
        </div>
        <div class="image-preview-container">
          <img id="editImagePreview" src="${question.image || ''}" alt="Preview" style="${hasImage ? '' : 'display: none;'} max-width: 200px; margin-top: 10px; border-radius: 8px; border: 2px solid #ddd;">
        </div>
        <small class="muted">Supported formats: JPG, PNG, GIF (Max 2MB)</small>
      </div>
      <div class="form-group">
        <label>Options (Select the correct answer)</label>
        <div class="options-container">
          <div class="option-input-group">
            <span class="option-label">A.</span>
            <input type="text" id="editOptionA" value="${escapeHtml(question.options[0])}" required>
            <input type="radio" name="editCorrectAnswer" value="0" ${question.answerIndex === 0 ? 'checked' : ''}>
          </div>
          <div class="option-input-group">
            <span class="option-label">B.</span>
            <input type="text" id="editOptionB" value="${escapeHtml(question.options[1])}" required>
            <input type="radio" name="editCorrectAnswer" value="1" ${question.answerIndex === 1 ? 'checked' : ''}>
          </div>
          <div class="option-input-group">
            <span class="option-label">C.</span>
            <input type="text" id="editOptionC" value="${escapeHtml(question.options[2])}" required>
            <input type="radio" name="editCorrectAnswer" value="2" ${question.answerIndex === 2 ? 'checked' : ''}>
          </div>
          <div class="option-input-group">
            <span class="option-label">D.</span>
            <input type="text" id="editOptionD" value="${escapeHtml(question.options[3])}" required>
            <input type="radio" name="editCorrectAnswer" value="3" ${question.answerIndex === 3 ? 'checked' : ''}>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </div>
    </form>
  `;

  // File upload button click
  document.getElementById('editUploadImageBtn').addEventListener('click', () => {
    document.getElementById('editQuestionImageFile').click();
  });

  // File selected handler
  document.getElementById('editQuestionImageFile').addEventListener('change', (e) => {
    handleImageUpload(e, 'editImagePreview', 'editQuestionImageData', 'editFileName', 'editRemoveImageBtn');
  });

  // Remove image button
  document.getElementById('editRemoveImageBtn').addEventListener('click', () => {
    clearImageUpload('editImagePreview', 'editQuestionImageData', 'editFileName', 'editRemoveImageBtn', 'editQuestionImageFile');
  });

  document.getElementById('editQuestionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    updateQuestion(selectedClass, selectedTerm, index);
  });

  openModal();
}

function updateQuestion(selectedClass, selectedTerm, index) {
  const quizzes = getQuizzes();
  const question = quizzes[selectedClass][selectedTerm].questions[index];
  const imageData = document.getElementById('editQuestionImageData').value;

  question.text = document.getElementById('editQuestionText').value.trim();
  question.options = [
    document.getElementById('editOptionA').value.trim(),
    document.getElementById('editOptionB').value.trim(),
    document.getElementById('editOptionC').value.trim(),
    document.getElementById('editOptionD').value.trim()
  ];
  question.answerIndex = parseInt(document.querySelector('input[name="editCorrectAnswer"]:checked').value);

  // Add or remove image
  if (imageData) {
    question.image = imageData;
  } else {
    delete question.image;
  }

  saveQuizzes(quizzes);
  closeModal();
  loadQuizForEditing();
  alert('✅ Question updated successfully!');
}

function deleteQuestion(selectedClass, selectedTerm, index) {
  if (!confirm('Are you sure you want to delete this question?')) return;

  const quizzes = getQuizzes();
  quizzes[selectedClass][selectedTerm].questions.splice(index, 1);
  saveQuizzes(quizzes);
  loadQuizForEditing();
  alert('✅ Question deleted!');
}

/* ========================= 
   RESULTS SECTION
   ========================= */

function getResults() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.quizResults)) || [];
}

function saveResults(results) {
  localStorage.setItem(STORAGE_KEYS.quizResults, JSON.stringify(results));
}

function loadResults() {
  const results = getResults();
  renderResultsTable(results);
}

function renderResultsTable(results) {
  const tbody = document.getElementById('resultsBody');

  if (results.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" class="no-data">No results yet</td></tr>';
    return;
  }

  // Show newest first
  const sortedResults = [...results].reverse();

  tbody.innerHTML = sortedResults.map((r, index) => `
    <tr>
      <td>${escapeHtml(r.name)}</td>
      <td>${escapeHtml(r.class)}</td>
      <td>${escapeHtml(r.examNo)}</td>
      <td>${escapeHtml(r.topic)}</td>
      <td>${r.score}/${r.total}</td>
      <td class="${r.percentage >= 50 ? 'score-pass' : 'score-fail'}">${r.percentage}%</td>
      <td>${formatDate(r.date)}</td>
      <td>
        <button class="btn btn-sm btn-secondary" onclick="viewResultDetails(${results.length - 1 - index})">👁️ View</button>
        <button class="btn btn-sm btn-danger" onclick="deleteResult(${results.length - 1 - index})">🗑️</button>
      </td>
    </tr>
  `).join('');
}

function filterResults() {
  const searchTerm = document.getElementById('resultSearch').value.toLowerCase();
  const classFilter = document.getElementById('resultClassFilter').value;
  const termFilter = document.getElementById('resultTermFilter').value;
  const results = getResults();

  const filtered = results.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm) ||
      r.examNo.toLowerCase().includes(searchTerm);
    const matchesClass = !classFilter || r.class.includes(classFilter);
    const matchesTerm = !termFilter || r.class.includes(termFilter);
    return matchesSearch && matchesClass && matchesTerm;
  });

  renderResultsTable(filtered);
}

function viewResultDetails(index) {
  const results = getResults();
  const result = results[index];

  document.getElementById('modalTitle').textContent = 'Result Details';
  document.getElementById('modalBody').innerHTML = `
    <div class="result-details">
      <div class="form-group">
        <label>Student Name</label>
        <p><strong>${escapeHtml(result.name)}</strong></p>
      </div>
      <div class="form-group">
        <label>Class</label>
        <p>${escapeHtml(result.class)}</p>
      </div>
      <div class="form-group">
        <label>Exam Number</label>
        <p>${escapeHtml(result.examNo)}</p>
      </div>
      <div class="form-group">
        <label>Topic</label>
        <p>${escapeHtml(result.topic)}</p>
      </div>
      <div class="form-group">
        <label>Score</label>
        <p class="${result.percentage >= 50 ? 'score-pass' : 'score-fail'}" style="font-size: 24px;">
          ${result.score} / ${result.total} (${result.percentage}%)
        </p>
      </div>
      <div class="form-group">
        <label>Date Taken</label>
        <p>${formatDate(result.date)}</p>
      </div>
      ${result.answers ? `
        <div class="form-group">
          <label>Answer Details</label>
          <div style="max-height: 300px; overflow-y: auto;">
            ${result.answers.map((a, i) => `
              <div style="padding: 8px; margin: 5px 0; background: ${a.correct ? '#e8f5e9' : '#ffebee'}; border-radius: 5px;">
                <strong>Q${i + 1}:</strong> ${a.correct ? '✅ Correct' : '❌ Wrong'}
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
      </div>
    </div>
  `;

  openModal();
}

function deleteResult(index) {
  if (!confirm('Are you sure you want to delete this result?')) return;

  const results = getResults();
  results.splice(index, 1);
  saveResults(results);
  loadResults();
  alert('✅ Result deleted!');
}

function exportResultsCSV() {
  const results = getResults();

  if (results.length === 0) {
    alert('No results to export!');
    return;
  }

  const headers = ['Name', 'Class', 'Exam No', 'Topic', 'Score', 'Total', 'Percentage', 'Date'];
  const rows = results.map(r => [
    r.name,
    r.class,
    r.examNo,
    r.topic,
    r.score,
    r.total,
    r.percentage + '%',
    formatDate(r.date)
  ]);

  const csvContent = [headers, ...rows]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\n');

  downloadFile(csvContent, 'quiz_results.csv', 'text/csv');
  alert('✅ Results exported successfully!');
}

function clearAllResults() {
  if (!confirm('⚠️ Are you sure you want to delete ALL results? This cannot be undone!')) return;
  if (!confirm('⚠️ This is your FINAL warning. All results will be permanently deleted!')) return;

  saveResults([]);
  loadResults();
  loadOverviewData();
  alert('✅ All results cleared!');
}

/* ========================= 
   SETTINGS SECTION
   ========================= */

function loadCurrentQuizPassword() {
  const password = localStorage.getItem(STORAGE_KEYS.quizPassword) || DEFAULT_QUIZ_PASSWORD;
  document.getElementById('currentQuizPassword').value = password;
}

function loadSchoolInfo() {
  const info = JSON.parse(localStorage.getItem(STORAGE_KEYS.schoolInfo)) || {};
  document.getElementById('schoolName').value = info.name || 'MercyCourt Montessori School';
  document.getElementById('schoolAddress').value = info.address || '';
}

function changeAdminPassword(e) {
  e.preventDefault();

  const currentPassword = document.getElementById('currentPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const storedCredentials = JSON.parse(localStorage.getItem(STORAGE_KEYS.adminCredentials)) || DEFAULT_ADMIN;

  if (currentPassword !== storedCredentials.password) {
    alert('❌ Current password is incorrect!');
    return;
  }

  if (newPassword.length < 6) {
    alert('❌ New password must be at least 6 characters!');
    return;
  }

  if (newPassword !== confirmPassword) {
    alert('❌ New passwords do not match!');
    return;
  }

  storedCredentials.password = newPassword;
  localStorage.setItem(STORAGE_KEYS.adminCredentials, JSON.stringify(storedCredentials));

  document.getElementById('changePasswordForm').reset();
  alert('✅ Admin password changed successfully!');
}

function changeQuizPassword(e) {
  e.preventDefault();

  const newPassword = document.getElementById('newQuizPassword').value.trim();

  if (!newPassword) {
    alert('Please enter a new password!');
    return;
  }

  if (newPassword.length < 4) {
    alert('Password must be at least 4 characters!');
    return;
  }

  localStorage.setItem(STORAGE_KEYS.quizPassword, newPassword);
  loadCurrentQuizPassword();
  document.getElementById('newQuizPassword').value = '';
  alert('✅ Quiz password updated successfully!\n\nNew password: ' + newPassword);
}

function saveSchoolInfo(e) {
  e.preventDefault();

  const info = {
    name: document.getElementById('schoolName').value.trim(),
    address: document.getElementById('schoolAddress').value.trim()
  };

  localStorage.setItem(STORAGE_KEYS.schoolInfo, JSON.stringify(info));
  alert('✅ School information saved!');
}

function backupData() {
  const backup = {
    version: '1.0',
    date: new Date().toISOString(),
    data: {
      students: getStudents(),
      results: getResults(),
      quizzes: getQuizzes(),
      quizPassword: localStorage.getItem(STORAGE_KEYS.quizPassword),
      schoolInfo: JSON.parse(localStorage.getItem(STORAGE_KEYS.schoolInfo) || '{}')
    }
  };

  const jsonContent = JSON.stringify(backup, null, 2);
  const fileName = `quiz_backup_${new Date().toISOString().slice(0, 10)}.json`;
  downloadFile(jsonContent, fileName, 'application/json');
  alert('✅ Backup created successfully!');
}

function restoreData(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    try {
      const backup = JSON.parse(event.target.result);

      if (!backup.data) {
        throw new Error('Invalid backup file format');
      }

      if (!confirm('⚠️ This will replace all current data. Are you sure?')) return;

      if (backup.data.students) saveStudents(backup.data.students);
      if (backup.data.results) saveResults(backup.data.results);
      if (backup.data.quizzes) saveQuizzes(backup.data.quizzes);
      if (backup.data.quizPassword) localStorage.setItem(STORAGE_KEYS.quizPassword, backup.data.quizPassword);
      if (backup.data.schoolInfo) localStorage.setItem(STORAGE_KEYS.schoolInfo, JSON.stringify(backup.data.schoolInfo));

      alert('✅ Data restored successfully!');
      location.reload();

    } catch (error) {
      alert('❌ Error reading backup file: ' + error.message);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

/* ========================= 
   MODAL FUNCTIONS
   ========================= */

function openModal() {
  document.getElementById('modal').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

/* ========================= 
   UTILITY FUNCTIONS
   ========================= */

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(dateString) {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function downloadFile(content, fileName, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}


/* ========================= 
   PASSWORD SHOW/HIDE TOGGLE
   ========================= */

function togglePassword(inputId, button) {
  const input = document.getElementById(inputId);
  
  if (input.type === 'password') {
    input.type = 'text';
    button.textContent = '❌';
    button.classList.add('showing');
  } else {
    input.type = 'password';
    button.textContent = '👁️';
    button.classList.remove('showing');
  }

}

/* ========================= 
   IMAGE UPLOAD FUNCTIONS
   ========================= */

function handleImageUpload(event, previewId, dataId, fileNameId, removeBtnId) {
  const file = event.target.files[0];
  
  if (!file) return;

  // Check file type
  if (!file.type.startsWith('image/')) {
    alert('❌ Please select an image file (JPG, PNG, GIF)');
    return;
  }

  // Check file size (max 2MB)
  const maxSize = 2 * 1024 * 1024; // 2MB in bytes
  if (file.size > maxSize) {
    alert('❌ Image is too large! Maximum size is 2MB.');
    return;
  }

  const reader = new FileReader();
  
  reader.onload = function(e) {
    const imageData = e.target.result;
    
    // Update preview
    const preview = document.getElementById(previewId);
    preview.src = imageData;
    preview.style.display = 'block';
    
    // Store image data
    document.getElementById(dataId).value = imageData;
    
    // Update file name display
    document.getElementById(fileNameId).textContent = file.name;
    document.getElementById(fileNameId).classList.add('has-file');
    
    // Show remove button
    document.getElementById(removeBtnId).style.display = 'inline-block';
  };

  reader.onerror = function() {
    alert('❌ Error reading file. Please try again.');
  };

  reader.readAsDataURL(file);
}

function clearImageUpload(previewId, dataId, fileNameId, removeBtnId, fileInputId) {
  // Hide preview
  const preview = document.getElementById(previewId);
  preview.src = '';
  preview.style.display = 'none';
  
  // Clear image data
  document.getElementById(dataId).value = '';
  
  // Reset file name display
  document.getElementById(fileNameId).textContent = 'No file selected';
  document.getElementById(fileNameId).classList.remove('has-file');
  
  // Hide remove button
  document.getElementById(removeBtnId).style.display = 'none';
  
  // Reset file input
  document.getElementById(fileInputId).value = '';
}