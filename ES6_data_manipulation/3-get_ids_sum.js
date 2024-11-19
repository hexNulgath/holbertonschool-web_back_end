export default function getStudentIdsSum(students) {
  const studentSum = students.reduce((accumulator, student) => {
    return accumulator + student.id;
  }, 0)
  return studentSum;
}
