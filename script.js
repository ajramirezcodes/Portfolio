const navItems = document.querySelectorAll(".nav-item");
const careerList = document.getElementById("careerList");
const careerDescription = document.getElementById("careerDescription");

const features1 = document.querySelectorAll(".feature-item1")
const project1 = document.getElementById("project-1");

const features2 = document.querySelectorAll(".feature-item2")
const project2 = document.getElementById("project-2");

const features3 = document.querySelectorAll(".feature-item3");
const project3 = document.getElementById("project-3");

const features4 = document.querySelectorAll(".feature-item4");
const project4 = document.getElementById("project-4");



    
navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show")
        }, index * 300);
})


let careerArr = [
    {
        title: "Junior Software Developer",
        company: "Your innovative company",
        timeFrame: "Coming Soon",
        duties: [
            "Continue sharpening my JavaScript, HTML, and CSS skills",
            "Apply to software developer roles that excite me",
            "Build projects that showcase my passion and growth",
            "Contribute to real-world projects",
            "Collaborate with a passionate development team",
                ],
    },
    {
        title: "Data Analyst", 
        company: "Archdiocese of New York", 
        timeFrame: "September 2021 - Present", 
        duties: [ 
            "Analyze financial data trends and maintain organized records for yearly performance reviews", 
            "Communicate technical information effectively across departments", 
            "Schedule and manage cross-team collaboration to support organizational goals" 
            ],
    },
    {
        title: "Sales/Data Anaylst",
        company: "Shine Electronics",
        timeFrame: "March 2021 - September 2023",
        duties: [ 
            "Extracted and interpreted sales data to improve business outcomes", 
            "Utilized Excel to manage large datasets and generate insights", 
            "Built reports that influenced pruchasing and inventory decisions" 
            ],
    },
    {
        title: "Full-Time Student",
        company: "Virginia Wesleyan University",
        timeFrame: "August 2015 - May 2019",
        duties: [ 
            "Obtained a Bachelors in Business Management", 
            "Worked in multiple internships regarding Sales, Business Operations, and Marketing", 
            "Completed senior capstone on data-driven decision making"
            ],
    }
    ];

  
  careerList.querySelectorAll("li").forEach((li) => {
        li.addEventListener("click", (e) => {
            
            e.preventDefault();
            careerList.querySelectorAll("li").forEach((item) => {
                    item.classList.remove("selected");
            });

            li.classList.add("selected");

            const index = li.getAttribute("data-index");
            const item = careerArr[index];

            careerDescription.classList.remove("show");
            

        setTimeout(() => {
            
            careerDescription.innerHTML = `
                <h4 class="item-title">${item.title} @ <span class="career-span">${item.company}</span></h4>
                <p class="item-time">${item.timeFrame}</p>
                <ul>
                    ${item.duties.map((duty) => `<li class="item-duty"><span class="icon">🔹</span>${duty}</li>`).join("")}
                </ul>
            `;
        
                careerDescription.classList.add("show");
            

            }, 200)

        });
   });




project1.addEventListener("mouseover", () => {

features1.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 400)
});


});


project2.addEventListener("mouseover", () => {
        features2.forEach((item, index) => {
                setTimeout(() => {
                        item.classList.add("show");
                }, index * 400)
        });
});



    project3.addEventListener("mouseover", () => {
        features3.forEach((item, index) => {
                setTimeout(() => {
                        item.classList.add("show");
                }, index * 400)
        });
    });






    project4.addEventListener("mouseover", () => {
        features4.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("show")
            }, index * 400)
        });
    });