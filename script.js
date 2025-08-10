const glow = document.getElementById("cursor-glow");

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    glow.style.background = `
      radial-gradient(
        400px circle at ${x}px ${y}px,
        rgba(255, 255, 255, 0.1),
        transparent 80%
      )
    `;
  });




const careerCards = document.querySelectorAll(".career-card");

careerCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    careerCards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.classList.add("blur-sm");
      }
    });
  });

  card.addEventListener("mouseleave", () => {
    careerCards.forEach((otherCard) => {
      otherCard.classList.remove("blur-sm");
    });
  });
});



const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    projectCards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.classList.add("blur-sm");
      };
    });
  });


  card.addEventListener("mouseleave", () => {
    projectCards.forEach((otherCard) => {
      otherCard.classList.remove("blur-sm")
    });
  });
});




const hoverVideo = document.querySelectorAll(".hover-video");

hoverVideo.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();

   
    
  })

  video.addEventListener("mouseleave", () => {
    video.pause();

  
  })
})



const problemCard = document.querySelectorAll(".problem-card");

problemCard.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    problemCard.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.classList.add("blur-sm")
      };
    });
  });

  card.addEventListener("mouseleave", () => {
    problemCard.forEach((otherCard) => {
      otherCard.classList.remove("blur-sm")
    });
  })
});









const challengesTable = document.getElementById("challenges-table");



const challengeArr = [
  {
    name: "Longest String Without Repeating", 
    link: "https://drive.google.com/file/d/1ujm2IF3MBwtZ8GXEryzI1DGOrie768Lm/view?usp=sharing",
    question: "Write a function that takes a string as input and returns the length of the longest substring without repeating characters.", 
    concepts: ["Sliding Window Technique", "Map or Set", "Loops & Iteration", "Conditionals", "String Access & Indexing", "Math Functions"]
  },
  {
    name: "Longest Consecutive",
    link: "https://drive.google.com/file/d/18y-vYEi9vPQBLieYl6F204hXdptGUKul/view?usp=sharing",
    question: "Write a function that takes an unsorted array of numbers and returns the length of the longest consecutive.",
    concepts: ["Set Structure", "Loops & Iteration", "Conditionals", "Math & Counters", "Edge Case"]
  },
  {
    name: "Group Anagrams",
    link: "https://drive.google.com/file/d/1QywMyslGT1-aQrwCm2oFLzkRtuRz11r2/view?usp=sharing",
    question: "Write a function that takes an array and groups the anagrams together. You should return a list of lists, where each sublist contains anagrams of each other.",
    concepts: ["Maps/Objects", "String Manipulation", "Array Methods", "Loops & Iterations", "Conditionals"]
  },
 {
    name: "Finding Kth Largest",
    link: "https://drive.google.com/file/d/1--hNw0Y_IFyAUv_kviqhZNe65F5u2-Ci/view?usp=sharing",
    question: "Write a function that finds the Kth largest element in an unsorted array. You may assume that k is always valid.",
    concepts: ["Sorting Arrays", "Comparator Functions", "Array Indexing", "Edge Case"]
  },
    {
    name: "Rotate Array",
    link: "https://drive.google.com/file/d/16RSlhQPw0Y-YYTPSVPIp3Yh4sYUqrLGE/view?usp=sharing",
    question: "Given an array, rotate the elements to the right by k steps. The rotation should be done in place (without creating a new array).",
    concepts: ["Modulo Arithmetic", "Array Reversal Technique", "Helper Functions", "In-Place Mutation", "Destructuring Swap-Syntax", "Edge Case"]
  },
  {
    name: "Flatten Array",
    link: "https://drive.google.com/file/d/1c7tS2on-szkHQB8w9hJOeq_D-_6h8yHa/view?usp=sharing",
    question: "Write a function called flattenArray that takes a nested array and returns a new flattened array with all elements in a single-level array.",
    concepts: ["Recursion", "Array Methods", "Loops", "Base Case"]
  },
    {
    name: "Merge Sorted Arrays",
    link: "https://drive.google.com/file/d/1Hhi4zipNhm1zfFM01laBNoZ47pAELyPH/view?usp=sharing",
    question: "Write a function that takes two sorted arrays as input and merges them into one sorted array. You should not use the built-in sort() method.",
    concepts: ["Two-Pointer Technique", "Loops", "Conditionals", "Edge Case"]
  },
   {
    name: "First Non Repeating Char",
    link: "https://drive.google.com/file/d/1k-5oOWnkox85VGV0MbgPsMEoCGxGaRxR/view?usp=sharing",
    question: "Write a function that takes a string as input and returns the first non-repeating character. If there is no such character, return null.",
    concepts: ["Maps/Objects", "Loops", "Conditionals", "Edge Case"]
  },
 {
    name: "First Recurring Char",
    link: "https://drive.google.com/file/d/13ZVv6-dU1hs1R8vMnFhFyibrYCmnb-Cs/view?usp=sharing",
    question: "Write a function that finds the first character that appears more than once in a given string. If there are no recurring characters, return null.",
    concepts: ["Set", "Loops", "Conditionals", "Edge Case"]
  },
   {
    name: "First Unique Char",
    link: "https://drive.google.com/file/d/1yawiWQDFmwYN97aA_zIeWNpn50DU0rKO/view?usp=sharing",
    question: "Given a string, return the index of the first non-repeating character. If all characters repeat, return -1.",
    concepts: ["Maps/Objects", "Loops", "Index", "Conditional", "Edge Case"]
  },
     {
    name: "Find Missing Number",
    link: "https://drive.google.com/file/d/1rW-7RCgh1DK4EGq9061fDBWms5FzhnvY/view?usp=sharing",
    question: "You are given an array containing n distinct numbers taken from the range 0 to n. Find the missing number in the sequence.",
    concepts: ["Arithmetic Formula", "Array Reduction", "Length-Based Reasoning", "Edge Case"]
  },
  {
    name: "Find Majority Element",
    link: "https://drive.google.com/file/d/1dPBxNmZIhPxMSrGiMY_VUobDy-eSimNq/view?usp=sharing",
    question: "Given an array nums, return the majority element. The majority element is the element that appears more than ⌊ n / 2 ⌋ times. You may assume that the input array always has a majority element.",
    concepts: ["Maps/Objects", "Math Functions", "Loops", "Conditionals"]
  },
    {
    name: "Intersection",
    link: "https://drive.google.com/file/d/1NQx3Gt_cPT18hzoqBQfMUYXESkpNOW19/view?usp=sharing",
    question: "Given two arrays, return an array that contains only the elements that appear in both arrays (without duplicates).",
    concepts: ["Sets", "Deduplication", "Array Methods"]
  },
   {
    name: "Single Number",
    link: "https://drive.google.com/file/d/1y4L6iIhL-_24WShNnrlgfUZvHYZQqgGD/view?usp=sharing",
    question: "Given a non-empty array of integers where every element appears twice except for one element, find that single number. You must solve this problem without using extra memory (i.e., no hash maps or sets).",
    concepts: ["Bitwise", "Loops", "Edge Case"]
  },
  {
    name: "Group Odd or Even",
    link: "https://drive.google.com/file/d/11F0A0GxgZeFGHpPFZjKLq9kdJXxORzvJ/view?usp=sharing",
    question: "Write a function that takes an array of integers and returns a 2D array where: The first sub-array contains all the odd numbers. The second sub-array contains all the even numbers. Preserve the original order of elements within each group.",
    concepts: ["Array Iteration", "Operators", "Edge Case"]
  },
    {
    name: "Move Zeroes",
    link: "https://drive.google.com/file/d/1OpFjpez0PzTPVN2sLNkVr9SoEECP2ra8/view?usp=sharing",
    question: "Given an array of numbers, move all the zeroes to the end while maintaining the relative order of the non-zero elements. You must modify the array in place (i.e., don’t return a new array).",
    concepts: ["Two-Pointer Technique", "In-Place Mutation", "Loops", "Index", "Conditionals"]
  },
  {
    name: "Second Largest",
    link: "https://drive.google.com/file/d/1eYFroxAOSNij2Ddv2EsXXdowF6s8w1_N/view?usp=sharing",
    question: "Write a function that returns the second largest number in an array of numbers.",
    concepts: ["Tracking Maximums", "Iteration", "Edge Case"]
  },
    {
    name: "Find Duplicates",
    link: "https://drive.google.com/file/d/1s_McLVFFAhuteepqdL5pMZArNXIqn9G8/view?usp=sharing",
    question: "Write a function that takes an array of integers and returns a new array containing all the elements that appear more than once, without any duplicates in the result.",
    concepts: ["Sets/Objects", "Array Conversion", "Loops"]
  },
  {
    name: "Find Pairs",
    link: "https://drive.google.com/file/d/1EqYuin2zXoj-5lLgF2-gtnKYdoNhktoj/view?usp=sharing",
    question: "Write a function that returns all unique pairs of numbers from the array that sum up to the given target.",
    concepts: ["Sets", "Logic", "Edge Case"]
  },
    {
    name: "Reverse Words",
    link: "https://drive.google.com/file/d/1OMMXyPvKCMgmY5HhekoahbJHJaOjNrLf/view?usp=sharing",
    question: "Given an input string, reverse the order of the words. A word is defined by a sequence of non-space characters. The words in the output string should be separated by exactly one space.",
    concepts: ["Regex", "String Immutability", "Chaining Methods"]
  },
   {
    name: "Capitalize Words",
    link: "https://drive.google.com/file/d/1Fsf8K6_pQFRUDRqVCD_KtsWQ_WdcDfyv/view?usp=sharing",
    question: "Write a function that takes a string as input and returns a new string where the first letter of each word is capitalized, and the rest of the word remains unchanged.",
    concepts: ["Maps", "Concatenation", "Edge Case"]
  },
  {
    name: "Longest Common Prefix",
    link: "https://drive.google.com/file/d/12q7AKVbtjGKF9P1bjWdC1tN7XzmGsvg2/view?usp=sharing",
    question: "Given an array of strings, return the longest common prefix shared among all strings. If there is no common prefix, return an empty string.",
    concepts: ["Edge Case", "Loop Control", "Comparison"]
  },
    {
    name: "Is Valid",
    link: "https://drive.google.com/file/d/1JFPJL5IHehrxvlcucjPov0jkDpO7b46u/view?usp=sharing",
    question: "Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid. An input string is valid if: 1) The brackets must close in the correct order. 2) Open brackets must be closed by the same type of bracket. 3) Open brackets must be closed in the correct order.",
    concepts: ["Stacking", "Maps", "Loops"]
  },
   {
    name: "Find Unique Characters",
    link: "https://drive.google.com/file/d/1yu5euE6hwzA6FqVHCcTsm5BT1wF4NeNq/view?usp=sharing",
    question: "Write a function that returns true if all characters in the input string are unique, and false if any character repeats.",
    concepts: ["Objects", "Loops", "Frequency"]
  },
   {
    name: "Is Palindrome",
    link: "https://drive.google.com/file/d/1vlX8vY9r-oDiBQXklgr8ygwXI9fOcT-g/view?usp=sharing",
    question: "Write a JavaScript function that takes a string as input and returns true if it’s a palindrome (reads the same forwards and backwards), and false otherwise. Ignore spaces, punctuation, and capitalization.",
    concepts: ["String Manipulation", "Reverse Comparison", "Regex"]
  },
   {
    name: "FizzBuzz",
    link: "https://drive.google.com/file/d/16DgGIZj0atfQONEyuw4o15Hr4okQXW_U/view?usp=sharing",
    question: `Write a function that prints the numbers from 1 to n. But for multiples of 3, print 'Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".`,
    concepts: ["Loops", "Modulo Operator", "Conditionals"] 
  },
   {
    name: "Remove Duplicates",
    link: "https://drive.google.com/file/d/1IoqWk0Ik0wYYY5kj1nS9AhELDG-_62i6/view?usp=sharing",
    question: "Write a function that takes an array of numbers and returns a new array with all duplicates removed. The order of the elements should be preserved.",
    concepts: ["Sets", "Loops", "Push Method"]
  },
   {
    name: "Two Sum",
    link: "https://drive.google.com/file/d/17OZizLsYqGCLDbZcuJ8VxxVxHMUMG3pS/view?usp=sharing",
    question: "Given an array of integers and an integer target, return indices of the two numbers such that they add up to the target.",
    concepts: ["Objects/Maps", "Loops", "Index"]
  },
  {
    name: "Is Anagram",
    link: "https://drive.google.com/file/d/1lXWtqF3OeCrHuC0PMZV5ae5sqAFIhKrl/view?usp=sharing",
    question: "Given two strings, return true if str1 is an anagram of str2 and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.",
    concepts: ["Objects", "Frequency", "Iterating Strings"]
  },
   {
    name: "Missing Letter",
    link: "https://drive.google.com/file/d/1JhQmLCchOurnq2_28UvkJeiNqD-AFdzg/view?usp=sharing",
    question: "Write a function that takes an array of consecutive (increasing) letters and returns the missing letter in the sequence.",
    concepts: ["Character Codes", "Iterating Arrays", "Edge Case"]
  },
   {
    name: "Factorial",
    link: "https://drive.google.com/file/d/18SZMVQo1hAr4F3sSR9_9UyORTZ6EqCSV/view?usp=sharing",
    question: "Write a function to compute the factorial of a non-negative integer. (Example: 5! = 5 × 4 × 3 × 2 × 1 = 120)",
    concepts: ["Recursion", "Base Case", "Call Stack"]
  },
   {
    name: "Find Largest",
    link: "https://drive.google.com/file/d/1v0u9h9EdJ17_tzSGtGRy9CoToO9XuzwT/view?usp=sharing",
    question: "Write a function that takes an array of numbers and returns the largest number in the array.",
    concepts: ["Iterating Arrays", "Tracking Values", "Conditionals", "Edge Case", "Max Variables"]
  },
  {
    name: "Count Vowels",
    link: "https://drive.google.com/file/d/13KI-4TW6EeCeak1H1kz6g78wP7B2BJy7/view?usp=sharing",
    question: "Write a function that counts the number of vowels in a given string.",
    concepts: ["Loops", "Counter", "Includes Method"]
  },
  {
    name: "Cumulative Sum",
    link: "https://drive.google.com/file/d/1Q_KS_-zqJh61gZEm5eD8jUrvsuNGPdV2/view?usp=sharing",
    question: "Write a function that takes an array of numbers and returns a new array where each element at index i is the sum of all elements from index 0 to i in the original array.",
    concepts: ["Loops", "Accumulative Sum", "Arrays"]
  },
  {
    name: "Chunk Array",
    link: "https://drive.google.com/file/d/1pEdvfkoBRYJmy4xwAssBggkyEmGI0URc/view?usp=sharing",
    question: "Write a function that splits an array into smaller arrays (“chunks”) of a specified size and returns them as a new array of arrays.",
    concepts: ["Loops", "Array Slicing", "Edge Case"]
  }
];

if (challengesTable) {


challengeArr.forEach((challenge) => {

  const challengeRow = document.createElement("tr");
  const challengeName = document.createElement("td")
  const challengeQuestion = document.createElement("td");
  const conceptContainer =  document.createElement("td");
  const buttonContainer = document.createElement("div");
  const conceptDiv = document.createElement("tr");
  const conceptLine = document.createElement("td");

  challengeName.innerHTML = `<a href="${challenge.link}" target="_blank">${challenge.name}</a>`
  challengeName.classList.add("text-xs", "md:text-sm");

  challengeQuestion.innerHTML = `${challenge.question}`;
  challengeQuestion.classList.add("text-stone-50", "text-xs", "md:text-sm");

  conceptContainer.classList.add("text-left", "hidden", "lg:table-cell");
  conceptContainer.id = "projects";
  buttonContainer.classList.add("concepts", "grid", "grid-cols-2", "grid-rows-3", "gap-2", "max-w-[25rem]", "mt-6");

  conceptLine.setAttribute("colspan", "3")
  conceptLine.classList.add("border-t", "border-slate-500", "w-full")
  

  challengesTable.appendChild(challengeRow);
  challengeRow.appendChild(challengeName);
  challengeRow.appendChild(challengeQuestion);
  challengeRow.appendChild(conceptContainer);
  conceptContainer.appendChild(buttonContainer);
  challengesTable.appendChild(conceptDiv)
  conceptDiv.appendChild(conceptLine);
  

  challenge.concepts.forEach((concept) => {
    const conceptButtons = document.createElement("button");
    conceptButtons.textContent = concept;
    conceptButtons.classList.add("cursor-default", "min-w-[12rem]");
    buttonContainer.appendChild(conceptButtons);
  })


  if (challenge.concepts.length % 2 !== 0) {
      const lastButton = buttonContainer.lastElementChild;
      lastButton.classList.add("col-span-2", "mx-auto");
  }

})

}



const projectsTable = document.getElementById("projects-table");


const projectArr = [
  {
    year: "July 2025",
    project: "Movie App",
    built: ["React", "Tailwind", "Javascript", "HTML", "CSS"],
    link: "https://ajramirezcodes.github.io/Movie-App/",
  },
  {
    year: "June 2025",
    project: "Team USA Basketball",
    built: ["Javascript", "HTML", "CSS"],
    link: "https://ajramirezcodes.github.io/2024-Mens-Olympic-Basketball/",
  },
  {
    year: "June 2025",
    project: "Magic 8 Ball",
    built: ["React", "Bootstrap", "Javascript", "HTML", "CSS"],
    link: "https://ajramirezcodes.github.io/magic8ball-app/",
  },
  {
    year: "May 2025",
    project: "Budget Tracker",
    built: ["Javascript", "HTML", "CSS"],
    link: "https://ajramirezcodes.github.io/Budget-Tracker/",
  },
   {
    year: "May 2025",
    project: "Weather App",
    built: ["Javascript", "HTML", "CSS"],
    link: "https://ajramirezcodes.github.io/Weather-App/",
   },
   {
    year: "Apr 2025",
    project: "To-Do List",
    built: ["Javascript", "HTML", "CSS"],
    link: "https://ajramirezcodes.github.io/To-Do-List/",
   },
   {
    year: "Mar 2025",
    project: "Hotel Website",
    built: ["Javascript", "HTML", "CSS"],
    link: "https://ajramirezcodes.github.io/Hotel-Website/index.html",
   },
];



if (projectsTable) {


projectArr.forEach((project) => {

  const projectRow = document.createElement("tr");
  const projectYear = document.createElement("td");
  const projectName = document.createElement("td");
  const projectBuilt = document.createElement("td");
  const builtContainer = document.createElement("div");
  const projectLink = document.createElement("td");
  const projectDiv = document.createElement("tr");
  const projectLine = document.createElement("td");
  

 projectYear.innerHTML = `${project.year}`;
 projectYear.classList.add("text-sm", "xl:text-lg")

 projectName.innerHTML = `<a href="${project.link}" target="_blank">${project.project}</a>`;
 projectName.classList.add("text-stone-50", "text-base", "xl:text-lg", "pointer-events-auto", "md:pointer-events-none")

 projectLink.innerHTML = `<a href="${project.link}" target="_blank">View Project</a>`
 projectLink.classList.add("xl:text-base", "text-sm", "hidden", "md:table-cell")

 projectBuilt.classList.add("text-left", "hidden", "lg:table-cell");
 projectBuilt.id = "projects"

 builtContainer.classList.add("flex", "flex-wrap", "gap-2")


 projectLine.setAttribute("colspan", "4")
 projectLine.classList.add("border-t", "border-slate-500")

  project.built.forEach((build, index) => {
    const buildButtons = document.createElement("button");
    buildButtons.textContent = build;
    buildButtons.classList.add("cursor-default")

    if (index === 0) {
      buildButtons.classList.add("ml-[-1.5rem]");
    }

    builtContainer.appendChild(buildButtons);

  })


  projectsTable.appendChild(projectRow);
  projectsTable.appendChild(projectDiv)
  projectRow.appendChild(projectYear);
  projectRow.appendChild(projectName);
  projectRow.appendChild(projectBuilt);
  projectBuilt.appendChild(builtContainer);
  projectRow.appendChild(projectLink);
  projectDiv.appendChild(projectLine);


  

})

}
