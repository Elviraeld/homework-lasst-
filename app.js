let list = document.querySelector("ul");
function newStudent(student){
    let name = document.createElement("li");
    name.innerText = student;
    list.append(name);
}
newStudent("Elvira Eldarova")
newStudent("Aysha Qacarova")
newStudent("Adila Aliyeva")