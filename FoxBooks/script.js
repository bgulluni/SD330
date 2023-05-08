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

// Retrieve the course and book titles from sessionStorage
document.addEventListener("DOMContentLoaded", function() {
  const courseTitle = sessionStorage.getItem("courseTitle");
  const bookTitle = sessionStorage.getItem("bookTitle");

  // Update the content on the book.html page
  document.getElementById("courseTitle").textContent = courseTitle;
  document.getElementById("bookTitle").textContent = `Book Title: ${bookTitle}`;

  // Retrieve the course information from the data object
  const courseInfo = data.courses.find(course => course.title === courseTitle);
  if (courseInfo) {
    document.getElementById("semester").textContent = `Semester: ${courseInfo.semester}`;
    document.getElementById("professor").textContent = `Professor: ${courseInfo.professor}`;
  }

  // Retrieve the book information from the data object
  const bookInfo = data.books.find(book => book.title === bookTitle);
  if (bookInfo) {
    document.getElementById("bookISBN").textContent = `ISBN: ${bookInfo.isbn}`;
    document.getElementById("bookAuthor").textContent = `Author: ${bookInfo.author}`;
  }
});
