document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-nav .nav-link").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
});

const reflections = [
  { 
    date: "Sunday – 12/10/2025", 
    title: "Introduction to Project Management",
    text: "I learned what project management is and why it matters for achieving goals within time, cost, and resource limits. I also understood key attributes like uniqueness, temporariness, and stakeholders.",
    pdf: "lectures/lecture-01-2025-10-12.pdf" 
  },
  { 
    date: "Tuesday – 14/10/2025", 
    title: "Project Management Fundamentals",
    text: "I explored key knowledge areas and what makes projects successful. The course project expectations became clearer.",
    pdf: "lectures/lecture-02-2025-10-14.pdf" 
  },
  { 
    date: "Thursday – 16/10/2025", 
    title: "Project Management Knowledge Areas",
    text: "I learned about the ten knowledge areas and how they connect together. Coordination and communication across areas are essential for success.",
    pdf: "lectures/lecture-03-2025-10-16.pdf" 
  },
  { 
    date: "Sunday – 19/10/2025", 
    title: "Program and Portfolio Management",
    text: "I understood how programs and portfolios relate to projects and the project manager’s leadership role with stakeholders, sponsors, and teams.",
    pdf: "lectures/lecture-04-2025-10-19.pdf" 
  },
  { 
    date: "Tuesday – 21/10/2025", 
    title: "Systems Approach & Organizational Culture",
    text: "I learned how culture and management style affect project success or failure using systems thinking and organizational frames.",
    pdf: "lectures/lecture-05-2025-10-21.pdf" 
  },
  { 
    date: "Thursday – 23/10/2025", 
    title: "Waterfall Model",
    text: "I understood the Waterfall phases and its linear nature, including where it lacks flexibility.",
    pdf: "lectures/lecture-06-2025-10-23.pdf" 
  },
  { 
    date: "Sunday – 26/10/2025", 
    title: "Agile Methodology",
    text: "I learned how Agile uses iteration and customer involvement to improve flexibility compared to Waterfall.",
    pdf: "lectures/lecture-07-2025-10-26.pdf" 
  },
  { 
    date: "Thursday – 30/10/2025", 
    title: "PERT & CPM",
    text: "I learned how PERT/CPM help schedule tasks, identify sequences, and estimate project duration.",
    pdf: "lectures/lecture-09-2025-10-30.pdf" 
  },
  { 
    date: "Sunday – 09/11/2025", 
    title: "Critical Path Method",
    text: "I learned critical activities and float, which improved my scheduling and risk analysis skills.",
    pdf: "lectures/lecture-10-2025-11-09.pdf" 
  },
  { 
    date: "Tuesday – 11/11/2025", 
    title: "Agile Overview & Scrum Basics",
    text: "I learned about the core concepts of Agile and Scrum, and their real-world applications in project management.",
    pdf: "lectures/lecture-11-2025-11-11.pdf" 
  },
  { 
    date: "Thursday – 13/11/2025", 
    title: "Agile: Advantages & Limitations",
    text: "I explored the benefits and limitations of Agile in various project management contexts.",
    pdf: "lectures/lecture-12-2025-11-13.pdf" 
  },
  { 
    date: "Sunday – 16/11/2025", 
    title: "Real-World Project Impact",
    text: "I learned about the real-world impact of projects, especially how they affect organizations and stakeholders.",
    pdf: "lectures/lecture-13-2025-11-16.pdf" 
  },
  { 
    date: "Thursday – 20/11/2025", 
    title: "Course Wrap-Up & Learning Summary",
    text: "I summarized the key concepts learned during the course and understood the practical applications of the methodologies.",
    pdf: "lectures/lecture-14-2025-11-20.pdf" 
  },
  { 
    date: "Sunday – 25/11/2025", 
    title: "Project Management Tools",
    text: "I learned about various tools that can assist in managing projects more effectively.",
    pdf: "lectures/lecture-16-2025-11-25.pdf" 
  },
  { 
    date: "Tuesday – 27/11/2025", 
    title: "Advanced Project Management Techniques",
    text: "I explored advanced techniques that can optimize project management, such as resource leveling and risk management.",
    pdf: "lectures/lecture-17-2025-11-27.pdf" 
  },
  { 
    date: "Monday – 02/12/2025", 
    title: "Lecture Reflection (PDF)",
    text: "Reflecting on everything learned so far and how it applies to both theoretical and practical aspects.",
    pdf: "lectures/lecture-19-2025-12-02.pdf" 
  },
  { 
    date: "Thursday – 04/12/2025", 
    title: "Lecture Reflection (PDF)",
    text: "A detailed review of the concepts and methodologies taught throughout the course.",
    pdf: "lectures/lecture-20-2025-12-04.pdf" 
  },
  { 
    date: "Sunday – 07/12/2025", 
    title: "Lecture Reflection (PDF)",
    text: "Additional reflections on the topics covered, including Agile and PERT.",
    pdf: "lectures/lecture-21-2025-12-07.pdf" 
  },
  { 
    date: "Tuesday – 09/12/2025", 
    title: "Lecture Reflection (PDF)",
    text: "Another round of reflections based on new insights and learning.",
    pdf: "lectures/lecture-22-2025-12-09.pdf" 
  },
  { 
    date: "Thursday – 11/12/2025", 
    title: "Lecture Reflection (PDF)",
    text: "Final reflections and conclusions about the course.",
    pdf: "lectures/lecture-23-2025-12-11.pdf" 
  },
  { 
    date: "Saturday – 12/12/2025", 
    title: "Lecture Reflection (PDF)",
    text: "Overall course reflections and insights about project management and its future applications.",
    pdf: "lectures/lecture-24-2025.pdf" 
  },
  { 
    date: "Wednesday – 18/12/2025", 
    title: "Lecture Reflection (PDF)",
    text: "A review of the final lecture and its content.",
    pdf: "lectures/lecture-26-2025-12-18.pdf" 
  }
];


document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("reflectionList");
  if (!list) return;

  list.innerHTML = reflections.map(r => `
    <div class="card card-dark text-white mb-3">
      <div class="card-body">
        <div class="small text-muted-soft">${r.date}</div>
        <h5 class="mt-2 mb-2">${r.title}</h5>
        <p class="mb-0 text-muted-soft">${r.text}</p>
        <a class="btn btn-outline-light mt-3" href="${r.pdf}" target="_blank">Open PDF</a>
      </div>
    </div>
  `).join("");
});



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("[name='name']").value.trim();
    alert(`Thanks, ${name || "friend"}! Your message was received (demo).`);
    form.reset();
  });
});
