function accordionClick(target) {
    console.log("open");
    console.log(target);

    const sections = document.getElementsByClassName("accordion-section");
    for(let i = 0; i < sections.length; i++){
        sections[i].style.contentVisibility = "hidden";
    } 

    const section = document.getElementById(target);
    section.style.contentVisibility = "visible";

    // if (section.style.display === "none") {
    //     section.style.display = "block";
    //   } else {
    //     section.style.display = "none";
    //   }
    // }
}