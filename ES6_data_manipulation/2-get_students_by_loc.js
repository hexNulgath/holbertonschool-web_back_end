export default function getStudentsByLocation(student, location) {
  const students = student.filter((student) => student.location === location);
  return students;
}
