
let tasks=[]

export const handler = async (event) => {
    console.log(JSON.stringify(event,null,2));

    const field=event.fieldName;
    const args=event.arguments;

    if(field==="getTasks"){
        return tasks;
    }

    if(field==="addTask"){
        const task={
            id: Date.now().toString(),
            title: args.title,
            completed: false
        };
        tasks.push(task);
        return task;
    }
    throw new Error("Unknown field: "+field);
}
