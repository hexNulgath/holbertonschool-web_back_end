export default function updateStudentGradeByCity(students, city, newGrades) {
  const newList = students.filter((student) => student.location === city);
  const updatedList = newList.map((student, index) => {
    return {
      ...student,
      grade: newGrades[index] !== undefined ? newGrades[index] : 'N/A'
    };
  });

  return updatedList;
}