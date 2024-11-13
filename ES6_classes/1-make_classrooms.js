import ClassRoom from "./0-classroom";

function initializeRooms{
  const school = [];
  school.push(new ClassRoom(19), new ClassRoom(20), new ClassRoom(34))
  return school;
}
