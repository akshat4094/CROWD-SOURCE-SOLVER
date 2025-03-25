
// Store problems in localStorage (simulated database)
let problems = JSON.parse(localStorage.getItem('problems')) || [];

function postProblem(title, description, category) {
    const newProblem = {
        id: Date.now(),
        title,
        description,
        category,
        solutions: [],
        upvotes: 0,
        date: new Date().toLocaleDateString()
    };
    problems.push(newProblem);
    localStorage.setItem('problems', JSON.stringify(problems));
    alert('Problem posted successfully!');
}

function displayProblems() {
    const problemsList = document.getElementById('problems-list');
    problemsList.innerHTML = '';
    problems.forEach(problem => {
        const problemDiv = document.createElement('div');
        problemDiv.className = 'problem-card';
        problemDiv.innerHTML = `
            <h3>${problem.title}</h3>
            <p>${problem.description}</p>
            <small>Category: ${problem.category}</small>
            <button onclick="viewSolutions(${problem.id})">View Solutions</button>
        `;
        problemsList.appendChild(problemDiv);
    });
}

window.onload = displayProblems;