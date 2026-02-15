// Interactive ODE Course - Main Application

// State
let currentModule = null;
let currentSection = 0;
let userProgress = {
    completedModules: [],
    completedExercises: []
};

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('odeCourseProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('odeCourseProgress', JSON.stringify(userProgress));
}

// Show a section
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    if (sectionId === 'modules' || sectionId === 'progress') {
        renderModules();
        updateProgress();
    }
}

// Render module grid on home page
function renderHomeModules() {
    const grid = document.getElementById('home-module-grid');
    if (!grid) return;
    
    grid.innerHTML = courseData.modules.slice(0, 6).map(m => `
        <div class="module-card ${userProgress.completedModules.includes(m.id) ? 'completed' : ''}" 
             onclick="openModule(${m.id})">
            <div class="module-number">Module ${m.id}</div>
            <h3>${m.title}</h3>
            <div class="module-meta">
                <span>⏱️ ${m.duration}</span>
            </div>
        </div>
    `).join('');
}

// Render all modules
function renderModules() {
    const grid = document.getElementById('modules-grid');
    if (!grid) return;
    
    grid.innerHTML = courseData.modules.map(m => `
        <div class="module-card ${userProgress.completedModules.includes(m.id) ? 'completed' : ''}" 
             onclick="openModule(${m.id})">
            <div class="module-number">Module ${m.id}</div>
            <h3>${m.title}</h3>
            <p>${m.subtitle}</p>
            <div class="module-meta">
                <span>⏱️ ${m.duration}</span>
                ${userProgress.completedModules.includes(m.id) ? '<span>✅ Complete</span>' : ''}
            </div>
        </div>
    `).join('');
}

// Open a module
function openModule(moduleId) {
    currentModule = courseData.modules.find(m => m.id === moduleId);
    currentSection = 0;
    
    if (!currentModule) return;
    
    // Update sidebar
    const sidebar = document.getElementById('module-sidebar');
    sidebar.innerHTML = `
        <h3>${currentModule.title}</h3>
        ${currentModule.sections.map((s, i) => `
            <div class="sidebar-item ${i === currentSection ? 'active' : ''}" 
                 onclick="showSectionContent(${i})">
                ${s.title}
            </div>
        `).join('')}
        
        <h3 style="margin-top: 1.5rem;">Exercises</h3>
        <div class="sidebar-item" onclick="showExercises()">
            📝 Practice Problems
        </div>
    `;
    
    document.getElementById('module-nav-title').textContent = `Module ${currentModule.id}: ${currentModule.title}`;
    
    showSectionContent(0);
    showSection('module-content');
}

// Show section content
function showSectionContent(sectionIndex) {
    currentSection = sectionIndex;
    
    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach((item, i) => {
        item.classList.toggle('active', i === sectionIndex);
    });
    
    const section = currentModule.sections[sectionIndex];
    document.getElementById('lesson-content').innerHTML = `
        <h1>${currentModule.title}</h1>
        <h2>${section.title}</h2>
        ${section.content}
    `;
    
    // Render math with MathJax if available
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise();
    }
    
    // Hide exercise panel
    document.getElementById('exercise-panel').style.display = 'none';
}

// Show exercises
function showExercises() {
    // Update sidebar
    document.querySelectorAll('.sidebar-item').forEach((item, i) => {
        item.classList.toggle('active', i === currentModule.sections.length);
    });
    
    const exercisePanel = document.getElementById('exercise-panel');
    exercisePanel.style.display = 'block';
    
    document.getElementById('lesson-content').innerHTML = `
        <h1>${currentModule.title}</h1>
        <h2>Exercises</h2>
    `;
    
    exercisePanel.innerHTML = `
        <h3>📝 Practice Problems</h3>
        ${currentModule.exercises.map((ex, i) => `
            <div class="exercise-item">
                <h4>Question ${i + 1}</h4>
                <p>${ex.question}</p>
                <button class="btn-secondary" onclick="toggleAnswer(${i})">Show Answer</button>
                <div class="answer" id="answer-${i}" style="display:none; margin-top:0.5rem; padding:0.5rem; background:#e8f5e9; border-radius:4px;">
                    <strong>Answer:</strong> ${ex.answer}
                </div>
            </div>
        `).join('')}
        
        <button class="btn-primary" style="margin-top:1rem" onclick="completeModule(${currentModule.id})">
            ✅ Mark Module Complete
        </button>
    `;
}

// Toggle answer visibility
function toggleAnswer(exerciseIndex) {
    const answerDiv = document.getElementById(`answer-${exerciseIndex}`);
    answerDiv.style.display = answerDiv.style.display === 'none' ? 'block' : 'none';
}

// Complete a module
function completeModule(moduleId) {
    if (!userProgress.completedModules.includes(moduleId)) {
        userProgress.completedModules.push(moduleId);
        saveProgress();
        alert('🎉 Module completed! Great job!');
        showSection('modules');
    }
}

// Update progress display
function updateProgress() {
    const totalModules = courseData.modules.length;
    const completed = userProgress.completedModules.length;
    const percent = Math.round((completed / totalModules) * 100);
    
    // Update circle
    const circle = document.getElementById('progress-circle');
    if (circle) {
        const offset = 283 - (283 * percent / 100);
        circle.style.strokeDashoffset = offset;
    }
    
    // Update text
    const percentText = document.getElementById('progress-percent');
    if (percentText) percentText.textContent = `${percent}%`;
    
    const modulesCompleted = document.getElementById('modules-completed');
    if (modulesCompleted) modulesCompleted.textContent = completed;
    
    // Update module progress list
    const progressModules = document.getElementById('progress-modules');
    if (progressModules) {
        progressModules.innerHTML = courseData.modules.map(m => `
            <div class="module-card ${userProgress.completedModules.includes(m.id) ? 'completed' : ''}">
                <div class="module-number">Module ${m.id}</div>
                <h3>${m.title}</h3>
                ${userProgress.completedModules.includes(m.id) ? '<span>✅ Completed</span>' : '<span>⏳ Not started</span>'}
            </div>
        `).join('');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    renderHomeModules();
    renderModules();
    updateProgress();
});
