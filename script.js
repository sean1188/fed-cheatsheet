let form

window.onload = () => {
  // Access form via document object
  form = document.forms.formName;

  // Add options to select element 
  const content = [
    "Default Option",
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
  ]
  for (option of content) {
    let optionOb = document.createElement('option');
    optionOb.value = content.indexOf(option);
    optionOb.innerHTML = option;
    form.dropdown1.add(optionOb);
  }
}

// Called when form is updated
function updateForm() {

}