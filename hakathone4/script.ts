const form =document.getElementById ("resume-form") as HTMLFormElement
const resumedisplayelement=document.getElementById("resume-display") as HTMLDivElement
// handle form submission
form.addEventListener ("submit",(Event:Event) =>
{
    Event.preventDefault();
    const name=(document.getElementById(`name`)as HTMLInputElement).value
    const email=(document.getElementById(`email`)as HTMLInputElement).value
    const phone=(document.getElementById(`tel`)as HTMLInputElement).value
    const education=(document.getElementById(`education`)as HTMLInputElement).value
    const workexperiance=(document.getElementById(`work experiance`)as HTMLInputElement).value
    const skills=(document.getElementById(`skills`)as HTMLInputElement).value

    const resumehtml =`
    <h><b>editable resume</b></h>
    <h3> personal information </h3>
    <p><b> name:</b><span contenteditable="true" >${name}</span></p>
    <p><b> email:</b><span contenteditable="true" >${email}</span></p>
    <p><b> phone:</b><span contenteditable="true" >${phone}</span></p>

    <h3> education</h3>
    <P contenteditable="true">${education}</p>

   <h3> work experiance</h3>
    <P contenteditable="true">${workexperiance}</p>

   <h3> skills</h3>
    <P contenteditable="true">${skills}</p>
`;
if (resumedisplayelement){
    resumedisplayelement.innerHTML=resumehtml;
}else{
    console.error(`resume display element is missing`)
}

})