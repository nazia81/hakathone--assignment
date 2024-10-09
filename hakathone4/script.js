var form = document.getElementById("resume-form");
var resumedisplayelement = document.getElementById("resume-display");
// handle form submission
form.addEventListener("submit", function (Event) {
    Event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("tel").value;
    var education = document.getElementById("education").value;
    var workexperiance = document.getElementById("work experiance").value;
    var skills = document.getElementById("skills").value;
    var resumehtml = "\n    <h><b>editable resume</b></h>\n    <h3> personal information </h3>\n    <p><b> name:</b><span contenteditable=\"true\" >".concat(name, "</span></p>\n    <p><b> email:</b><span contenteditable=\"true\" >").concat(email, "</span></p>\n    <p><b> phone:</b><span contenteditable=\"true\" >").concat(phone, "</span></p>\n\n    <h3> education</h3>\n    <P contenteditable=\"true\">").concat(education, "</p>\n\n   <h3> work experiance</h3>\n    <P contenteditable=\"true\">").concat(workexperiance, "</p>\n\n   <h3> skills</h3>\n    <P contenteditable=\"true\">").concat(skills, "</p>\n");
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumehtml;
    }
    else {
        console.error("resume display element is missing");
    }
});
