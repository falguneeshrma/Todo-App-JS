let todo = [];

let req = prompt("What can I do?");

while(true){
    if (req == "quit"){
        console.log("quitting app");
        break;
    }

    if (req == "list"){
        console.log("------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);  
        } 
        console.log("------------");
    }
    
    else if(req == "add"){
        let task = prompt("Enter the task you would like to add: ")
        todo.push(task);
        console.log("Task added"); 
    }
    
    else if(req == "delete"){
        let idx = prompt("Please enter the task index: ");
        todo.splice(idx, 1);
        console.log("Task deleted");
    }

    else{
        console.log("Enter a valid request.")
    }

    req = prompt("What can I do?");
}

