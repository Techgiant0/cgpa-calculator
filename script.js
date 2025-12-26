const courseSections = document.querySelector('.course-section')
const semesters = document.getElementById('semesters')
const add = document.querySelector('.add')
const addSemester = document.getElementById('semesterAdd')
let semesterCount = document.querySelectorAll('.semester').length
const colouredBar = document.getElementById('colored')
const startOver = document.getElementById('startOver')
let degree = document.getElementById('degree')

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        let courseDetails = e.target.closest('.course-details')
        let line = courseDetails?.nextElementSibling
        
        if (courseDetails) {
            courseDetails.remove()
            if (line?.classList.contains('line')) {
                line.remove()
            }
        }
    }
})

const courseDetails = `<div class="course-details">
                    <input type="text" class="courseName" placeholder="e.g. MTH103">
                    <input type="number" class="courseUnit" placeholder="e.g. 2">
                    <select class="select-course">
                        <option value="5">A</option>
                        <option value="4">B</option>
                        <option value="3">C</option>
                        <option value="2">D</option>
                        <option value="1">E</option>
                        <option value="0">F</option>
                    </select>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="delete" width="30" height="30" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </div>
                
                <hr class="line"/>`

const semester = `<div class="semester">
                <div class="heading">
                    <h3>Semester <span>1</span></h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                </div>
                <p class="instruction">Add your courses and grades for this semester</p>

                <div class="course-section">
                    <div class="course-section-heading">
                        <p id="courseNameHeading">Course Name</p>
                        <p id="courseUnitHeading">Credit Unit</p>
                        <p id="grade">Grade</p>
                        <p id="empty"></p>
                    </div>
                    <hr class="line"/>

                    <div class="course-details">
                        <input type="text" class="courseName" placeholder="e.g. MTH103">
                        <input type="number" class="courseUnit" placeholder="e.g. 2">
                        <select class="select-course">
                            <option value="5">A</option>
                            <option value="4">B</option>
                            <option value="3">C</option>
                            <option value="2">D</option>
                            <option value="1">E</option>
                            <option value="0">F</option>
                        </select>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="delete" id="delete" width="30" height="30" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                    </div>

                    <hr class="line"/>

                    <div class="course-details">
                        <input type="text" class="courseName" placeholder="e.g. MTH103">
                        <input type="number" class="courseUnit" placeholder="e.g. 2">
                        <select class="select-course">
                            <option value="5">A</option>
                            <option value="4">B</option>
                            <option value="3">C</option>
                            <option value="2">D</option>
                            <option value="1">E</option>
                            <option value="0">F</option>
                        </select>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="delete" width="30" height="30" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                    </div>
                    
                    <hr class="line"/>

                    <div class="course-details">
                        <input type="text" class="courseName" placeholder="e.g. MTH103">
                        <input type="number" class="courseUnit" placeholder="e.g. 2">
                        <select class="select-course">
                            <option value="5">A</option>
                            <option value="4">B</option>
                            <option value="3">C</option>
                            <option value="2">D</option>
                            <option value="1">E</option>
                            <option value="0">F</option>
                        </select>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="delete" width="30" height="30" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                    </div>
                    
                    <hr class="line"/>

                    <div class="course-details">
                        <input type="text" class="courseName" placeholder="e.g. MTH103">
                        <input type="number" class="courseUnit" placeholder="e.g. 2">
                        <select class="select-course">
                            <option value="5">A</option>
                            <option value="4">B</option>
                            <option value="3">C</option>
                            <option value="2">D</option>
                            <option value="1">E</option>
                            <option value="0">F</option>
                        </select>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="delete" width="30" height="30" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                    </div>
                    
                    <hr class="line"/>
                </div>

                <hr class="bottom"/>

                <div class="funcBtn">
                    <button class="btn add">+ Add Course</button>
                    <button class="btn calc">Calculate GPA</button>
                </div>

                <h3 class="gpa">✅ Your Semester GPA: ---</h3>
            </div>`

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('add')){
        let wrapper = e.target.closest('.semester')
        if(wrapper){
            wrapper.querySelector('.course-section').insertAdjacentHTML("beforeend", courseDetails)
        }
    }
})

addSemester.addEventListener('click', ()=>{
    semesterCount++
    let newSemester = semester.replace('<span>1</span>', `<span>${semesterCount}</span>`)
    semesters.insertAdjacentHTML('beforeend', newSemester)
})

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('calc')){

        let wrapper = e.target.closest('.semester')
        if(wrapper){
            const courseUnits = wrapper.querySelectorAll('.courseUnit')
            const grades = wrapper.querySelectorAll('.select-course')
            let totalCreditUnit = 0
            let totalWeightedGrade = 0
            courseUnits.forEach((unit, index)=>{
                let creditUnit = parseFloat(unit.value)
                let gradeValue = parseFloat(grades[index].value)
                if(!isNaN(creditUnit) && !isNaN(gradeValue)){
                    totalCreditUnit += creditUnit
                    totalWeightedGrade += creditUnit * gradeValue
                }
            })
            let gpa = (totalWeightedGrade / totalCreditUnit).toFixed(2)
            let gpaDisplay = wrapper.querySelector('.gpa')
            gpaDisplay.textContent = `✅ Your Semester GPA: ${isNaN(gpa) ? '---' : gpa}`
        }

        let allSemesters = document.querySelectorAll('.semester')
        let totalCreditUnits = 0
        let totalWeightedGrades = 0
        
        allSemesters.forEach(sem => {
            const courseUnits = sem.querySelectorAll('.courseUnit')
            const grades = sem.querySelectorAll('.select-course')
            
            courseUnits.forEach((unit, index) => {
            let creditUnit = parseFloat(unit.value)
            let gradeValue = parseFloat(grades[index].value)
            if(!isNaN(creditUnit) && !isNaN(gradeValue)){
                totalCreditUnits += creditUnit
                totalWeightedGrades += creditUnit * gradeValue
            }
            })
        })
        
        let cgpa = (totalWeightedGrades / totalCreditUnits).toFixed(2)
        let cgpaDisplay = document.getElementById('cgpa')
        cgpaDisplay.textContent = isNaN(cgpa) ? '---' : cgpa
        let degreeClass = ''
        if(!isNaN(cgpa)){
            let cgpaValue = parseFloat(cgpa)
            if(cgpaValue >= 4.5){
                degreeClass = 'First Class'
            } else if(cgpaValue >= 3.5){
                degreeClass = 'Second Class Upper'
            } else if(cgpaValue >= 2.5){
                degreeClass = 'Second Class Lower'
            } else if(cgpaValue >= 1.5){
                degreeClass = 'Third Class'
            } else if(cgpaValue >= 1.0){
                degreeClass = 'Pass'
            }  else {
                degreeClass = 'Fail'
            }
            degree.textContent = degreeClass
        } else {
            degree.textContent = '---'
        }

        colouredBar.style.width = isNaN(cgpa) ? '0%' : `${(cgpa / 5) * 100}%`
    }
})

startOver.addEventListener('click', ()=>{
    location.reload()
})