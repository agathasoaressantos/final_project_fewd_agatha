let submissionButton = document.getElementById('submit')

 const submission = (event) => {
    event.preventDefault()
    let firstName = document.getElementById('firstname').value    
    let text = document.getElementById('text')
    if ( firstName.value == null) {
        alert('Please let me know your name')       
    } else {
        text.innerText=`Thank you for your submission`
    }
}

submissionButton.addEventListener('click', submission)


// This functionality was copied from this resource: "https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}