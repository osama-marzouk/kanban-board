// first thing you should make محاكاة for local storage
const addBtn1 = document.getElementById("add-btn1");
const addBtn2 = document.getElementById("add-btn2");
const addBtn3 = document.getElementById("add-btn3");

const tasksList1 = document.getElementById('tasks-list1')
const tasksList2 = document.getElementById('tasks-list2')
const tasksList3 = document.getElementById('tasks-list3')
/*let tasks = [
    {   id: 1, items:[
            {id:Date.now(), content:"column1in1"},
            {id:Date.now(), content:"column1in2"}
        ]
    },
    {
        id: 2, items: [
            {id:Date.now(), content:"column2in1"},
            {id:Date.now(), content:"column2in2"}
        ]
    }, 
    {
        id: 3, items: [
            {id:Date.now(), content:"column3in1"},
            {id:Date.now(), content:"column3in2"}
        ]
    }
];*/
let tasks = JSON.parse(localStorage.getItem("kanban-data"))

window.onload = function showUi(){

    if(!tasks){
        return tasks = [
            {   id: 1, items:[
                
            ]
            },
            {
                id: 2, items: [
                    
                ]
            }, 
            {
                id: 3, items: [
                    
                ]
            }
            ]
    }
    tasks[0].items.forEach(task => {
        const li = document.createElement("li");
        li.setAttribute("draggable", "true");
        li.innerHTML = `<input type="text" data-id="${task.id}" readOnly value="${task.content}" placeholder="new task"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="remove-svg"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="edit-svg">
        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>`
        tasksList1.appendChild(li)
    })
    tasks[1].items.forEach(task => {
        const li = document.createElement("li");
        li.setAttribute("draggable", "true");
        li.innerHTML = `<input type="text" data-id="${task.id}" readOnly value="${task.content}" placeholder="new task"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="remove-svg"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="edit-svg">
        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>`
        tasksList2.appendChild(li)
    })
    tasks[2].items.forEach(task => {
        const li = document.createElement("li");
        li.setAttribute("draggable", "true");
        li.innerHTML = `<input type="text" data-id="${task.id}" readOnly value="${task.content}" placeholder="new task"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="remove-svg"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="edit-svg">
        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>`
        tasksList3.appendChild(li)
    })
    removeTask()
    editTask() 
    dragStart()
}

function createTask(e){
    const li = document.createElement("li");
    li.setAttribute("draggable", "true");
    li.innerHTML = `<input type="text" placeholder="new task"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="remove-svg"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="edit-svg">
    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>`
    
    let input;
    if(e.target.id == "add-btn1"){
        tasksList1.appendChild(li)
        input = tasksList1.lastChild.firstChild;
        if(input){
            input.focus()
        }                  // return keyword make break from function
    }else if(e.target.id == "add-btn2"){
        tasksList2.appendChild(li)
        input = tasksList2.lastChild.firstChild;
        if(input){
            input.focus()
        } 
    }else if(e.target.id == "add-btn3"){
        tasksList3.appendChild(li)
        input = tasksList3.lastChild.firstChild;
        if(input){
            input.focus()
        } 
    }
    addTask(e, input)

}

function addTask(e, input){
    input.onchange =  () => {
        input.setAttribute("readOnly", "true")
        let task = {
            id: Date.now(),
            content: input.value
        }
        input.setAttribute("data-id", task.id)
        if(e.target.id == "add-btn1"){
            tasks[0].items.push(task)
        }else if(e.target.id == "add-btn2"){
            tasks[1].items.push(task)
        }else if(e.target.id == "add-btn3"){
            tasks[2].items.push(task)
        }
        localStorage.setItem("kanban-data", JSON.stringify(tasks))
        
    }

    removeTask()
    editTask()
    dragStart()
}

function removeTask(){
    const removeSvgs = document.querySelectorAll('.remove-svg');
    removeSvgs.forEach(removeSvg => {
        removeSvg.addEventListener('click', () => {
            if(removeSvg.parentNode.parentNode == tasksList1){
                let column1 = tasks[0].items.filter((task) => {
                    return removeSvg.parentNode.firstChild.dataset.id != task.id;
                })
                tasks[0].items = column1;
            }
            if(removeSvg.parentNode.parentNode == tasksList2){
                const column2 = tasks[1].items.filter((task) => {
                    return removeSvg.parentNode.firstChild.dataset.id != task.id;
                })
                tasks[1].items = column2;
            }
            if(removeSvg.parentNode.parentNode == tasksList3){
                const column3 = tasks[2].items.filter((task) => {
                    return removeSvg.parentNode.firstChild.dataset.id != task.id;
                })
                tasks[2].items = column3;
            }
            removeSvg.parentNode.remove()
            localStorage.setItem("kanban-data", JSON.stringify(tasks))
        })
    })
}

function editTask(){
    const editSvgs = document.querySelectorAll('.edit-svg');
    editSvgs.forEach(editSvg => {
        editSvg.addEventListener('click', () => {
            editSvg.parentNode.firstChild.readOnly = false;
            editSvg.parentNode.firstChild.focus()
            editSvg.parentNode.firstChild.select()
            editSvg.parentNode.firstChild.onblur = function(){
                if(editSvg.parentNode.parentNode == tasksList1){
                    let editedTask = tasks[0].items.find((task) => {
                        return editSvg.parentNode.firstChild.dataset.id == task.id;
                    })
                    editedTask.content = editSvg.parentNode.firstChild.value;
                }
                if(editSvg.parentNode.parentNode == tasksList2){
                    let editedTask = tasks[1].items.find((task) => {
                        return editSvg.parentNode.firstChild.dataset.id == task.id;
                    })
                    editedTask.content = editSvg.parentNode.firstChild.value;
                }
                if(editSvg.parentNode.parentNode == tasksList3){
                    let editedTask = tasks[2].items.find((task) => {
                        return editSvg.parentNode.firstChild.dataset.id == task.id;
                    })
                    editedTask.content = editSvg.parentNode.firstChild.value;
                }
                localStorage.setItem("kanban-data", JSON.stringify(tasks))
            }
        })
    })
}

// drag & drop -------------------------------------------------------
let draggedEle;
let parent;

tasksList1.ondragover = function(){
    event.preventDefault();
    tasksList1.classList.add("drop");
}
tasksList2.ondragover = function(){
    event.preventDefault();
    tasksList2.classList.add("drop");
}
tasksList3.ondragover = function(){
    event.preventDefault();
    tasksList3.classList.add("drop");
}

tasksList1.ondragleave = function(){
    tasksList1.classList.remove("drop");
}
tasksList2.ondragleave = function(){
    tasksList2.classList.remove("drop");
}
tasksList3.ondragleave = function(){
    tasksList3.classList.remove("drop");
}

tasksList1.ondrop = function(e){
    e.preventDefault();
    tasksList1.classList.remove("drop");
    if(parent != tasksList1){
        tasksList1.appendChild(draggedEle);
    }
    
   
    
    if(parent == tasksList2){
        let selectedTask = tasks[1].items.find(task => {
            return draggedEle.firstChild.dataset.id == task.id; // you should use return
        })
        let col2 = tasks[1].items.filter(task => {
            return draggedEle.firstChild.dataset.id != task.id; //you should use return
        })
        tasks[1].items = col2;
        tasks[0].items.push(selectedTask)
    }
    if(parent == tasksList3){
        let selectedTask = tasks[2].items.find(task => {
            return draggedEle.firstChild.dataset.id == task.id; // you should use return
        })
        let col3 = tasks[2].items.filter(task => {
            return draggedEle.firstChild.dataset.id != task.id; //you should use return
        })
        tasks[2].items = col3;
        tasks[0].items.push(selectedTask)
    }
    localStorage.setItem("kanban-data", JSON.stringify(tasks))  
}
tasksList2.ondrop = function(e){
    e.preventDefault();
    tasksList2.classList.remove("drop");
    if(parent != tasksList2){
        tasksList2.appendChild(draggedEle);
    }
    if(parent == tasksList1){
        let selectedTask = tasks[0].items.find(task => {
            return draggedEle.firstChild.dataset.id == task.id; // you should use return
        })
        
        let col1 = tasks[0].items.filter(task => {
            return draggedEle.firstChild.dataset.id != task.id; //you should use return
        })
        tasks[0].items = col1;
        tasks[1].items.push(selectedTask)
    }
    if(parent == tasksList3){
        let selectedTask = tasks[2].items.find(task => {
            return draggedEle.firstChild.dataset.id == task.id; // you should use return
        })
        let col3 = tasks[2].items.filter(task => {
            return draggedEle.firstChild.dataset.id != task.id; //you should use return
        })
        tasks[2].items = col3;
        tasks[1].items.push(selectedTask)
    }
    localStorage.setItem("kanban-data", JSON.stringify(tasks))
}
tasksList3.ondrop = function(e){
    e.preventDefault();
    tasksList3.classList.remove("drop");
    if(parent != tasksList3){
        tasksList3.appendChild(draggedEle);
    }
    if(parent == tasksList2){
        let selectedTask = tasks[1].items.find(task => {
            return draggedEle.firstChild.dataset.id == task.id; // you should use return
        })
        let col2 = tasks[1].items.filter(task => {
            return draggedEle.firstChild.dataset.id != task.id; //you should use return
        })
        tasks[1].items = col2;
        tasks[2].items.push(selectedTask)
    }
    if(parent == tasksList1){
        let selectedTask = tasks[0].items.find(task => {
            return draggedEle.firstChild.dataset.id == task.id; // you should use return
        })
        let col1 = tasks[0].items.filter(task => {
            return draggedEle.firstChild.dataset.id != task.id; //you should use return
        })
        tasks[0].items = col1;
        tasks[2].items.push(selectedTask)
    }
    localStorage.setItem("kanban-data", JSON.stringify(tasks))
}

function dragStart(){
    let lis = document.querySelectorAll("li");
    lis.forEach(li => {
        li.ondragstart = function (){
            draggedEle = li;
            parent = li.parentNode;
        }
    })
}
// touch drag and drop


addBtn1.addEventListener('click', createTask) 
addBtn2.addEventListener('click', createTask) 
addBtn3.addEventListener('click', createTask)