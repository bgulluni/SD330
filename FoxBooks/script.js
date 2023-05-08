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
  ]
};

// Function to display all courses on Page 2
function displayCourses() {
  const courseList = document.getElementById("courseList");

  data.courses.forEach((course) => {
    const listItem = document
