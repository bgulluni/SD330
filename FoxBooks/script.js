// JSON data (courses and books)
const data = {
  "courses": [
    {
      "title": "System Design",
      "book": "Introduction to System Design",
      "semester": "Spring 2023",
      "professor": "Andrew Tokash",
      "bookISBN": "98716513241",
      "bookAuthor": "Lana Sanders"
    }, 
    {
      "title": "Internetworking",
      "book": "Internetworking 101",
      "semester": "Spring 2024",
      "professor": "Andrew Tokash",
      "bookISBN": "8465121576623",
      "bookAuthor": "Molly Brook"
    },
    {
      "title": "Fantasy  and Science Fiction",
      "book": "Lord of the Rings",
      "semester": "Fall 2023",
      "professor": "Branden Sanderson",
      "bookISBN": "65468765431",
      "bookAuthor": "J.R.R Tolkin"
    },
    {
      "title": "Descrete Math",
      "book": "Descrete Computing Mathmatics",
      "semester": "Fall 2023",
      "professor": "Malick Nydie",
      "bookISBN": "34513246878465",
      "bookAuthor": "Molly Brook"
    },
    {
      "title": "Software Development 1",
      "book": "Intro to Python",
      "semester": "Fall 2022",
      "professor": "Jake Reeder",
      "bookISBN": "7984651935426",
      "bookAuthor": "Adam Blake"
    },
    {
      "title": "Software Development 2",
      "book": "MySQL & Php",
      "semester": "Spring 2022",
      "professor": "Ron Coleman",
      "bookISBN": "65464165431",
      "bookAuthor": "Greg Nott"
    }
    // Add more courses and books as needed
  ]
};

// Function to search courses
function searchCourses() {
  const searchInput = document.getElementById("searchInput").value;
  const filteredCourses = data.courses.filter(course => course.title.toLowerCase().includes(searchInput.toLowerCase()));
  displayCourses(filteredCourses);
}
// Function to display all courses on Page 2
function displayCourses() {
  const courseList = document.getElementById("courseList");

  data.courses.forEach((course) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "book.html";
    link.textContent = course.title;
    listItem.appendChild(link);
    courseList.appendChild(listItem);

    // Store the course title and book title in sessionStorage for later retrieval
    link.addEventListener("click", function () {
      sessionStorage.setItem("courseTitle", course.title);
      sessionStorage.setItem("bookTitle", course.book);
    });
  });
}

// Call the displayCourses function on page load
displayCourses();
