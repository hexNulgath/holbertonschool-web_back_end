export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }

  const studentSum = students.reduce((total, student) => total + student.id, 0);
  return studentSum;
}
