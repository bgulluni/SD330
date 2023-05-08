// Sample data object containing course and book information
const data = {
  "courses": [
    {
      "title": "Mathematics",
      "book": "Introduction to Calculus",
      "semester": "Fall 2023",
      "professor": "Dr. Smith"
    },
    {
      "title": "Physics",
      "book": "Fundamentals of Physics",
      "semester": "Spring 2024",
      "professor": "Dr. Johnson"
    },
    {
      "title": "Biology",
      "book": "Biology: A Global Approach",
      "semester": "Fall 2023",
      "professor": "Dr. Anderson"
    }
    // Add more courses with semester and professor details as needed
  ],
  "books": [
    {
      "title": "Introduction to Calculus",
      "isbn": "9781234567890",
      "author": "John Smith"
    },
    {
      "title": "Fundamentals of Physics",
      "isbn": "9780987654321",
      "author": "Jane Doe"
    },
    {
      "title": "Biology: A Global Approach",
      "isbn": "9785678901234",
      "author": "David Johnson"
    }
    // Add more books with ISBN and author details as needed
  ]
};

// Display the course list on the courses.html page
function display() {
  const courseList = document.getElementById("courseList");

  // Iterate through each course in the data object and create list items
  data.courses.forEach(course => {
    const listItem = document.createElement("li");
    listItem.textContent = course.title;

    // Add an event listener to navigate to the book.html page on click
    listItem.addEventListener("click", function() {
      sessionStorage.setItem("courseTitle", course.title);
      sessionStorage.setItem("bookTitle", course.book);
      window.location.href = "book.html";
    });

    // Append the list item to the course list
    courseList.appendChild(listItem);
  });
}

// Call the display function when the courses.html page has finished loading
document.addEventListener("DOMContentLoaded", function() {
  display();
});
