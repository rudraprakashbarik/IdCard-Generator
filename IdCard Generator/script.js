document.getElementById('downloadBtn').addEventListener('click', function() {
  generatePDF();
});

function generatePreview() {
  var name = document.getElementById('name').value;
  var college = document.getElementById('college').value;
  var gender = document.getElementById('gender').value;
  var mobile = document.getElementById('mobile').value;
  var department = document.getElementById('department').value;
  var roll = document.getElementById('roll').value;
  var image = document.getElementById('image').files[0];

  var reader = new FileReader();
  reader.onload = function(e) {
      var preview = document.getElementById('preview');
      preview.innerHTML = `
          <img src="${e.target.result}" alt="Student Image">
          <div>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>College:</strong> ${college}</p>
              <p><strong>Gender:</strong> ${gender}</p>
              <p><strong>Mobile:</strong> ${mobile}</p>
              <p><strong>Department:</strong> ${department}</p>
              <p><strong>Roll Number:</strong> ${roll}</p>
          </div>
      `;
  }
  reader.readAsDataURL(image);
}