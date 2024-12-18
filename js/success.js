function validateForm() {
  // Get form fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const image = document.getElementById("imageUpload").value;
  const message = document.getElementById("msg").value;

  // Check if all fields are filled
  if (!username || !password || !email || !phone || !image || !message) {
    alert("Please fill in all required fields.");
    return false; // Prevent form submission
  }

  // If all fields are filled, proceed to submit and open in a new tab
  return true;
}
