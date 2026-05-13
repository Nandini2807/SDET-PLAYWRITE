//3. Exhaustiveness Checking (The never Type)
// Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
// Task:
// Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
// Write a function handleTask(status: TaskStatus) using a switch statement.
// In the default case, assign the status to a variable of type never.
// The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.


type TaskStatus= 'Open' | 'InProgress' | 'Closed';
function handleTask(status : TaskStatus): string {
 switch(status){
 case 'Open':
    return "Task is open";
        case 'InProgress':
            return "Task is currently in progress";
            case 'Closed':
                return "task is closed";
                default:
                    const exhaustiveCheck : never = status;
                    return exhaustiveCheck;

 }
}
console.log(handleTask('Open'));
console.log(handleTask('InProgress'));
console.log(handleTask('Closed'));