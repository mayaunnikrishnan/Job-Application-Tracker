// Toggle theme

const themeToggle=document.getElementById('themeToggle');

themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
});

// Add job

const addJobBtn = document.getElementById('addJobBtn');
const jobList=document.getElementById('jobList');

addJobBtn.addEventListener('click',()=>{
    const jobTitle=document.getElementById('jobTitle').value ;
    const companyName=document.getElementById('companyName').value ;

    if (jobTitle && companyName){
        const jobCard=document.createElement('div');
        jobCard.className='jobCard';
        jobCard.innerHTML=`
        <h3>${jobTitle}</h3>
        <p>${companyName}</p>
        `;
        jobList.appendChild(jobCard);

        // clear the inputs
        document.getElementById('jobTitle').value='';
        document.getElementById('companyName').value='';
    }else {
        alert('Please fill all the feilds');
    }
});