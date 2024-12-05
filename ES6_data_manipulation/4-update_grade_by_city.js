export default function updateStudentGradeByCity(students, city, newGrades) {
  const newList = students.filter((student) => student.location === city);
  const updatedList = newList.map((student) => {
    const newGradeEntry = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGradeEntry ? newGradeEntry.grade : 'N/A',
    };
  });

  return updatedList;
}
