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

    // Store the course title and book title in sessionStorage for later retrieval
    link.addEventListener("click", function () {
      sessionStorage.setItem("courseTitle", course.title);
      sessionStorage.setItem("bookTitle", course.book);
    });
  });
}

// Call the displayCourses function on page load
displayCourses();
