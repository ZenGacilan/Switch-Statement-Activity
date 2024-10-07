function taskCalendar() {
  const dayOfWeek = prompt("Enter a day of the week (Tuesday):");

  switch (dayOfWeek.toLowerCase()) {
    case "monday":
      alert("Task: Plan weekly tasks");
      break;
    case "tuesday":
      alert("Task: Attend team meeting");
      break;
    case "wednesday":
      alert("Task: Complete project report");
      break;
    case "thursday":
      alert("Task: Review code for bugs");
      break;
    case "friday":
      alert("Task: Prepare for the weekend");
      break;
    default:
      alert("Invalid day of the week.");
  }
}

taskCalendar("finish your assignments");
