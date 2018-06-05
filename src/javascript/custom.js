/*
 * BIO MODAL
 */
// Get the modal
var modalBio = document.getElementById('modalBio');

// Open Modal
var modalBioOpen = document.getElementsByClassName('modalBioOpen');
for (var i = 0; i < modalBioOpen.length; ++i) {
    modalBioOpen[i].onclick = function(e) {
        document.getElementById('modalBioImg').src = e.target.parentNode.childNodes[0].src;
        document.getElementById('modalBioName').innerText = e.target.parentNode.childNodes[1].innerText;
        document.getElementById('modalBioTitle').innerText = e.target.parentNode.childNodes[2].innerText;
        document.getElementById('modalBioBio').innerText = e.target.parentNode.getAttribute('bio');
        modalBio.style.display = 'block';
    }
}

// Close the Modal
document.getElementById('modalBioClose').onclick = function() {
    modalBio.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalBio) {
        modalBio.style.display = 'none';
    }
}
