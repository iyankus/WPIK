// MAILING
function sendMail() {
    var cname = document.getElementById('cname').value;
    var cemail = document.getElementById('cemail').value;
    var cproject = document.getElementById('cproject').value;
    var cmessage = document.getElementById('cmessage').value;

    if (cname === "" || cemail === "" || cproject === "" || cmessage === "") {
        alert("Please fill in before sending.");
        return;
    }

    var templateParams = {
        cname: cname,
        cemail: cemail,
        cproject: cproject,
        cmessage: cmessage
    };

    const serviceID = "service_yxero94";
    const templateID = "template_77949i9";

    emailjs.send(serviceID, templateID, templateParams)
        .then((res) => {
            document.getElementById('cname').value = "";
            document.getElementById('cemail').value = "";
            document.getElementById('cproject').value = "";
            document.getElementById('cmessage').value = "";

            console.log(res);
            alert('SUCCESS!');
        })
        .catch((err) => console.log(err));
}
