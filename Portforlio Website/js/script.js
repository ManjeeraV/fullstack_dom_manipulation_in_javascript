// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() {
  // Write your code here
  var textHTML = '';
  for(var i=0;i<projects.length;i++){
    textHTML = textHTML + '<div class="card"><img id="img" src='+projects[i].image+'> ' +
    '<span>' + projects[i].title + '</span><span>' + projects[i].description + '</span></div>';
  }
  document.getElementById("projects").innerHTML = textHTML;

  //Additional logic to overwrite the About Me content using DOM 
  
  //below select the first tag element with section class
  const divElement = document.querySelector('.section');
  const paraElement= divElement.querySelector('p');
  paraElement.style.textAlign='center';
  paraElement.textContent = "Welcome to my Portfolio Website that demonstrated DOM Manipulation in Javascript";
}

// This function should return the projectId of the new project
function newProjectId(){
  // Write code to create and return new Project Id
  var currentProjectCount= 0;
  currentProjectCount = projects.length;
  currentProjectCount++
  return currentProjectCount;
}

function saveNewProject() {

  // Write your code here
  // Get the new project details by using the DOM elements
  var newTitle = document.getElementById("title").value;
  var newDesc= document.getElementById("desc").value;
  var newImage= document.getElementById("image").value;

  // Create the new projectId by calling the newProjectId() function
  var newProjId = newProjectId();

  // Create a new project object
  var newProjectObj = {
    "id":newProjId,
    "title":newTitle,
    "description":newDesc,
    "image":newImage
  };
  projects.push(newProjectObj);
  // Add the new project object to the projects array 
  

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}
loadProjects();