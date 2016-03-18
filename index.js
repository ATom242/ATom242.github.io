

function kosbies_face_event_handler() {
    alert("ouch")
}


function on_doc_ready() {
    $(".kosbiesface").click(kosbies_face_event_handler)
}

$(document).ready(on_doc_ready)