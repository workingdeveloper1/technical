import { getUnselectedEmployee } from "./utils.js";
const employees = [
    { "nik":"1", "name":"ABIYYU" },
    { "nik":"2", "name":"ADHIKA" },
    { "nik":"3", "name":"AFRIE" },
    { "nik":"4", "name":"ALAM"}
];

const selected_employees = [
    { "nik": "1", "name": "ABIYYU" },
    { "nik": "2","name":"ADHIKA"}
];

const unselected_employees = getUnselectedEmployee(employees, selected_employees)

console.log(unselected_employees);
