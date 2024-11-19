export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0; // Return 0 if students is not an array
  }

  const studentSum = students.reduce((accumulator, student) => accumulator + student.id, 0); // Concise arrow function
  return studentSum; // Semicolon added
}