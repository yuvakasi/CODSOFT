function markAttendance(isPresent) {
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;

  if (name === "" || roll === "") {
    alert("Please enter name and roll number");
    return;
  }

  const status = isPresent ? "✅ Present" : "❌ Absent";
  const entry = `${name} (Roll: ${roll}) - ${status}`;

  const list = document.getElementById("attendance-list");
  const li = document.createElement("li");
  li.textContent = entry;
  list.appendChild(li);

  // Clear fields
  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
}