let studentEl = document.getElementById("student-el")
let count = 0

function addStudent() {
    count += 1
    studentEl.textContent = count
}

function removeStudent() {
    if (count > 0) 
        count -= 1
        studentEl.textContent = count
    }

    function resetStudent() {
        count = 0
        studentEl.textContent =  "0"
    }