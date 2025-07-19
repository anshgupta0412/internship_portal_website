document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Internship Box Click Handling
    const internshipBoxes = document.querySelectorAll('.internship-box');

    internshipBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const expandedDetails = this.querySelector('.internship-expanded-details');

            // Toggle the display of the expanded details
            if (expandedDetails.style.display === 'none' || expandedDetails.style.display === '') {
                expandedDetails.style.display = 'block';
            } else {
                expandedDetails.style.display = 'none';
            }
        });
    });
    const form = document.getElementById("applicationForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent normal submission
  
      const selectedMethod = document.getElementById("methodSelect").value;
  
      if (selectedMethod === "Paid") {
        // Redirect to payment gateway (replace with real one later)
        window.location.href = "https://your-payment-gateway.com"; // Use your actual payment gateway link
      } else if (selectedMethod === "Free") {
        alert("Your application has been submitted successfully!");
        // Optionally reset the form
        form.reset();
        document.getElementById("applicationFormModal").style.display = "none";
      }
    });
        //reveal animation
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

      window.addEventListener("scroll", reveal);
});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    //reveal animation
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

      window.addEventListener("scroll", reveal);
});
// Testimonials Slider (Basic - Needs Enhancement for Autoplay)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {  // Check if the element exists
        let testimonials = Array.from(testimonialSlider.children);  // Convert to array for easier manipulation
        let currentIndex = 0;

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }

        // Initially show the first testimonial
        showTestimonial(currentIndex);

        // Simple manual navigation buttons (optional)
        // You could add buttons to manually navigate to previous/next testimonials

        // For automatic sliding, uncomment this:
        // setInterval(nextTestimonial, 5000);  // Change testimonial every 5 seconds
    }
    // FAQ Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems) {  // Check if the element exists
        accordionItems.forEach(item => {
            const button = item.querySelector('button');
            const content = item.querySelector('.accordion-content');

            button.addEventListener('click', () => {
                const expanded = button.getAttribute('aria-expanded') === 'true';

                button.setAttribute('aria-expanded', !expanded);
                content.style.height = expanded ? '0px' : `${content.scrollHeight}px`;
            });
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scrolling to sections
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
    
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        //reveal animation
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
    
            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 150;
    
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }
    
          window.addEventListener("scroll", reveal);
    });
        // JavaScript Functions for Modal
        function openForm(internshipType) {
            document.getElementById('applicationFormModal').style.display = "block";
            document.getElementById('internshipType').value = internshipType; // Store internship type
        }
    
        function closeForm() {
            document.getElementById('applicationFormModal').style.display = "none";
        }
    
        // Close the modal if the user clicks outside of the modal
        window.onclick = function(event) {
            var modal = document.getElementById('applicationFormModal');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling to sections
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
        
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
                // Internship Box Click Handling
            const internshipBoxes = document.querySelectorAll('.internship-box');
        
            internshipBoxes.forEach(box => {
                box.addEventListener('click', function() {
                    const expandedDetails = this.querySelector('.internship-expanded-details');
        
                    // Toggle the display of the expanded details
                    if (expandedDetails.style.display === 'none' || expandedDetails.style.display === '') {
                        expandedDetails.style.display = 'block';
                    } else {
                        expandedDetails.style.display = 'none';
                    }
                });
            });
        
                //reveal animation
            function reveal() {
                var reveals = document.querySelectorAll(".reveal");
        
                for (var i = 0; i < reveals.length; i++) {
                  var windowHeight = window.innerHeight;
                  var elementTop = reveals[i].getBoundingClientRect().top;
                  var elementVisible = 150;
        
                  if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                  } else {
                    reveals[i].classList.remove("active");
                  }
                }
              }
        
              window.addEventListener("scroll", reveal);
        });
        // JavaScript Functions for Modal
            function openForm(internshipType) {
                document.getElementById('applicationFormModal').style.display = "block";
                document.getElementById('internshipType').value = internshipType; // Store internship type
            }
        
            function closeForm() {
                document.getElementById('applicationFormModal').style.display = "none";
            }
        
            // Close the modal if the user clicks outside of the modal
            window.onclick = function(event) {
                var modal = document.getElementById('applicationFormModal');
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
         document.addEventListener('DOMContentLoaded', function() {
                const industrySelect = document.getElementById('industrySelect');
        
                industrySelect.addEventListener('change', function() {
                    const selectedIndustry = this.value;
        
                    if (selectedIndustry) {
                        const targetSectionId = selectedIndustry === 'design' ? 'design' : 'software';  // Correct logic
        
                        const targetSection = document.getElementById(targetSectionId);
        
                        if (targetSection) {
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });
            const form = document.getElementById('resumeForm');
const previewContainer = document.getElementById('resumePreviewContainer');
const previewFrame = document.getElementById('resumePreview');

form.resumeFile.addEventListener('change', function () {
  const file = this.files[0];
  if (file && file.type === 'application/pdf') {
    previewFrame.src = URL.createObjectURL(file);
    previewContainer.style.display = 'block';
  } else {
    previewContainer.style.display = 'none';
  }
});

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const fullname = form.fullname.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const summary = form.summary.value;
  const file = form.resumeFile.files[0];

  if (!file || !fullname || !email || !phone || !summary) {
    alert("All fields are required.");
    return;
  }

  const fileName = `${fullname}_${Date.now()}_${file.name}`;
  const storageRef = storage.ref(`resumes/${fileName}`);

  try {
    const snapshot = await storageRef.put(file);
    const resumeURL = await snapshot.ref.getDownloadURL();

    await db.collection("resumes").add({
      fullname,
      email,
      phone,
      summary,
      resumeURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert("Resume uploaded successfully!");
    form.reset();
    previewContainer.style.display = 'none';
  } catch (error) {
    console.error("Upload failed", error);
    alert("Upload failed. Try again.");
  }
});

  // Internship data mapping
  const internshipInfo = {
    backend: {
      title: "Backend Developer Internship",
      description: "You'll work on backend systems using Node.js, Python, or Java, managing databases and building APIs."
    },
    frontend: {
      title: "Frontend Developer Internship",
      description: "Focus on user interfaces with HTML, CSS, JS, and frameworks like React or Angular."
    },
    mobile: {
      title: "Mobile App Developer Internship",
      description: "Build native apps using Swift or Kotlin, with a focus on UI/UX and deployment."
    },
    qa: {
      title: "QA Tester Internship",
      description: "Test mobile/web applications, write test cases, and ensure product quality before launch."
    },
    social: {
      title: "Social Media Manager Internship",
      description: "Manage platforms, schedule posts, and analyze engagement for growth strategies."
    },
    search: {
      title: "Search Engine Optimization Internship",
      description: "Work on SEO strategies, keyword research, and content optimization for better rankings."
    },
    content: {
      title: "Content Writer Internship",
      description: "Write blog posts, web content, and marketing copy tailored for digital platforms."
    },
    creator: {
      title: "Content Creator Internship",
      description: "Develop visual and video content for social media platforms using creative tools."
    }
  };

  // Open modal and populate content
  document.querySelectorAll(".about-button").forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.preventDefault();
      const parent = this.closest(".internship-box");
      const key = parent.getAttribute("data-internship");
      const info = internshipInfo[key];
      if (info) {
        document.getElementById("aboutTitle").innerText = info.title;
        document.getElementById("aboutDescription").innerText = info.description;
        document.getElementById("aboutModal").style.display = "flex";
      }
    });
  });

  // Close modal
  function closeAboutModal() {
    document.getElementById("aboutModal").style.display = "none";
  }

  //API (FRONTEND)
  //request to realtime internship
  fetch('https://your-backend.com/api/internships')  // <-- Ask your backend friend for this URL
  .then(response => response.json())
  .then(data => {
    showLiveInternships(data);
  })
  .catch(error => {
    console.error('Error fetching real-time internships:', error);
  });

function showLiveInternships(internships) {
  const container = document.getElementById('internship-list');
  container.innerHTML = '';

  internships.forEach(internship => {
    const card = document.createElement('div');
    card.classList.add('internship-card');
    card.innerHTML = `
      <h3>${internship.title}</h3>
      <p><strong>Company:</strong> ${internship.company}</p>
      <p><strong>Location:</strong> ${internship.location}</p>
      <p><strong>Duration:</strong> ${internship.duration || 'Not Specified'}</p>
      <a href="${internship.link}" target="_blank">Apply Now</a>
    `;
    container.appendChild(card);
  });
}

// FOR BACKEND
const axios = require('axios');

app.get('/api/internships', async (req, res) => {
  try {
    const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
      params: { query: 'internship', page: '1' },
      headers: {
        'X-RapidAPI-Key': 'YOUR_API_KEY',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    });

    const internships = response.data.data.map(job => ({
      title: job.job_title,
      company: job.employer_name,
      location: job.job_city,
      duration: 'N/A',
      link: job.job_apply_link
    }));

    res.json(internships);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching internships');
  }
});


