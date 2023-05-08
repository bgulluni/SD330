// JSON data (courses and books)
const data = {
  "courses": [
    {
      "title": "Mathematics",
      "book": "Introduction to Calculus"
    },
    {
      "title": "Physics",
      "book": "Fundamentals of Physics"
    },
    {
      "title": "Biology",
      "book": "Biology: A Global Approach"
    }
    // Add more courses and books as needed
  ]
};

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

    // Store the course title in a data attribute for later retrieval
    link.dataset.courseTitle = course.title;
    // Store the book title in a data attribute for later retrieval
    link.dataset.bookTitle = course.book;

    // Add an event listener to handle clicking on a course
    link.addEventListener("click", handleCourseClick);
  });
}

// Function to handle clicking on a course
function handleCourseClick(event) {
  const courseTitle = event.target.dataset.courseTitle;
  const bookTitle = event.target.dataset.bookTitle;

  // Store the course and book titles in sessionStorage for retrieval on the book page
  sessionStorage.setItem("courseTitle", courseTitle);
  sessionStorage.setItem("bookTitle", bookTitle);
}

// Call the displayCourses function on page load
displayCourses();
