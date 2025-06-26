// Get type from URL
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");

// Data for each service
const servicesData = {
  plumber: {
    name: "Plumber",
    image: "images/plumber.webp",
    description: "Need help fixing leaks, installing faucets, or repairing pipes? Our expert plumbers are just a click away.",
    professionals: ["Ramesh Patel", "Amit Sharma", "Jaspreet Singh"]
  },
  electrician: {
    name: "Electrician",
    image: "images/electrician.jpeg",
    description: "From fixing switches to full wiring jobs, our certified electricians ensure your safety and power needs.",
    professionals: ["Sandeep Verma", "Priya Chauhan", "Kunal Joshi"]
  },
  carpenter: {
    name: "Carpenter",
    image: "images/carpenter.jpeg",
    description: "Custom furniture, repairs, or fittings — our skilled carpenters handle woodwork with precision.",
    professionals: ["Mohit Yadav", "Deepak Bansal", "Ravi Thakur"]
  },
  massage: {
    name: "Massage Therapy",
    image: "images/massage therapy.jpg",
    description: "Relax and rejuvenate with certified massage therapists who bring wellness to your home.",
    professionals: ["Anjali Mehta", "Neha Kapoor", "Sunil Kumar"]
  }
};

// Render service data
const container = document.getElementById("service-detail");
const service = servicesData[type];

if (service) {
  container.innerHTML = `
    <div style="text-align:center; padding: 40px;">
      <h2>${service.name}</h2>
      <img src="${service.image}" alt="${service.name}" style="max-width:400px; border-radius:10px; margin:20px 0;">
      <p style="font-size:18px; max-width:700px; margin:0 auto 30px;">${service.description}</p>
      <h3>Available Professionals:</h3>
      <ul style="list-style:none; font-size:16px;">
        ${service.professionals.map(name => `<li>👨‍🔧 ${name}</li>`).join('')}
      </ul>
    </div>
  `;
} else {
  container.innerHTML = `<p style="text-align:center; padding:50px;">Service not found. Please try again.</p>`;
}
