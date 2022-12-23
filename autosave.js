// This section of code is the "Form Controller"        
form.on('change', (changed) => {
    console.log('Data was changed!', changed);
		// Save the form data in the local storage
		// Set the has_unsaved_changes flag to 1
});


Formio.createForm(document.getElementById('formio'), 'https://examples.form.io/example', {
  hooks: {
    beforeSubmit: (submission, next) => {
      localStorage.setItem('currentData', JSON.stringify(submission.data);
      next();
    }
  }
}).then(function(form) {
  var currentData = localStorage.getItem('currentData');
  if (currentData) {
    form.submission = {data: JSON.parse(currentData)};
  }

  form.on('submitDone', function() {
    localStorage.removeItem('currentData');
  });
});

<formio
  [form]="formDefinition"
  (change)="onChange($event)"
></formio>

// Subscribe for the change event. This event will be emitted whenever a value in the form is altered.
// Access the all the form field values and save it in local storage. Set the flag to 1.
// Set a 30 seconds timer and call the function to save the data in local storage to the database.