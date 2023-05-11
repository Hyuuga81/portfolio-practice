const projects = document.querySelectorAll(".project");

for (const project of projects) {
  project.addEventListener("mouseover", function() {
    const glide = project.querySelector(".glide");
if (glide.classList.contains("hide")) {
      glide.classList.remove("hide");
    }
  });

  project.addEventListener("mouseout", function() {
    const glide = project.querySelector(".glide");
      
    if (!glide.classList.contains("hide")) {
      glide.classList.add("hide");
    }
  
});
}

// MODAL
const modal = document.querySelector(".modal");
const moreInfo = document.querySelectorAll(".more-info");
const heading = document.querySelector(".heading");
const details = document.querySelector(".details");
const tools = document.querySelector(".tools");

moreInfo.forEach(item => {
  item.addEventListener("click", function () {
    if (item.classList.contains("sticky")) {
      if (modal.classList.contains("hide")) {
        modal.classList.remove("hide");
        heading.innerText = "Sticky Notes App";
        details.innerText = `
                          Using the sticky notes app, you can make several sticky notes and delete them as you see fit. And when you leave the app it saves your changes.  
                          `;
        tools.innerText = `Tools used: React, JSX, CSS.`;
      }
      
    } else if (item.classList.contains("name-tag")) {
      modal.classList.remove("hide");
      heading.innerText = "Name Tag Generator";
      details.innerText = `
                          The name tag generator allows you to make a name tag by simply entering the name you want in the input. You can also delete name tags individually. Your changes are saved until your next visit.   
                          `;
      tools.innerText = `Tools used: React, JSX, CSS.`;
    } else if (item.classList.contains("github")) {
      modal.classList.remove("hide");
      heading.innerText = "Github Repo Gallery";
      details.innerText = `
                          Using the sticky notes app, you can make several sticky notes and delete them as you see fit. And when you leave the app and come back it remembers your notes.  
                          `;
      tools.innerText = `Tools used: JavaScript, HTML, CSS.`;
    } else if (item.classList.contains("guess")) {
      modal.classList.remove("hide");
      heading.innerText = "Guess The Word Game";
      details.innerText = `
                          This game allows you to guess a word one letter at a time. The input checks that you follow the rules such as adding one letter at a time. You get 8 tries and when you win you are congratulated. Give it a try.   
                          `;
      tools.innerText = `Tools used: JavaScript, HTML, CSS, APIs.`;
    } else if (item.classList.contains("unplugged")) {
      modal.classList.remove("hide");
      heading.innerText = "Unplugged";
      details.innerText = `
                          An information site for a technology free retreat. Despite the retreat being tech-free, the site is completely responsive and uses forms and iframes to help gather and provide information to all potential visitors. 
                          `;
      tools.innerText = `Tools used: HTML, CSS.`;
    } else if (item.classList.contains("sunnyside")) {
      modal.classList.remove("hide");
      heading.innerText = "Sunnyside Creative Agency";
      details.innerText = `
                          This full service creative agency's site includes a uniquely shaped drop-down menu, is fully responsive and is full of bright and geometric imagery that leaves a lasting impression on visitors.  
                          `;
      tools.innerText = `Tools used: JavaScript, HTML, CSS.`;
    }

  })
});

const xmark = document.querySelector(".modal-contents button");

xmark.addEventListener("click", function() {
  modal.classList.add("hide");
});


