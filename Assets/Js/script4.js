document.addEventListener("DOMContentLoaded", function () {
  var tickets = [
    {
      from: "chișinău",
      to: "barcelona",
      date: "2023-04-03",
      class: "econom",
      price: 200,
    },
    {
      from: "chișinău",
      to: "barcelona",
      date: "2023-04-05",
      date1: "2023-04-12",
      class: "econom",
      price: 350,
    },
    {
      from: "chișinău",
      to: "paris",
      date: "2023-04-07",
      class: "business",
      price: 150,
    },
    {
      from: "chișinău",
      to: "paris",
      date: "2023-04-09",
      date1: "2023-04-16",
      class: "business",
      price: 280,
    },
    {
      from: "chișinău",
      to: "tokyo",
      date: "2023-04-11",
      class: "econom",
      price: 200,
    },
    {
      from: "chișinău",
      to: "tokyo",
      date: "2023-04-13",
      date1: "2023-04-20",
      class: "econom",
      price: 380,
    },
    {
      from: "chișinău",
      to: "madrid",
      date: "2023-04-15",
      class: "business",
      price: 170,
    },
    {
      from: "chișinău",
      to: "madrid",
      date: "2023-04-17",
      date1: "2023-04-24",
      class: "business",
      price: 320,
    },
    {
      from: "chișinău",
      to: "london",
      date: "2023-04-19",
      class: "econom",
      price: 220,
    },
    {
      from: "chișinău",
      to: "london",
      date: "2023-04-21",
      date1: "2023-04-28",
      class: "econom",
      price: 400,
    },
    {
      from: "chișinău",
      to: "rome",
      date: "2023-04-23",
      class: "business",
      price: 180,
    },
    {
      from: "chișinău",
      to: "rome",
      date: "2023-04-25",
      date1: "2023-05-02",
      class: "business",
      price: 330,
    },
    {
      from: "chișinău",
      to: "berlin",
      date: "2023-04-27",
      class: "econom",
      price: 210,
    },
    {
      from: "chișinău",
      to: "berlin",
      date: "2023-04-29",
      date1: "2023-05-06",
      class: "econom",
      price: 380,
    },
    {
      from: "chișinău",
      to: "new york",
      date: "2023-05-01",
      class: "business",
      price: 300,
    },
    {
      from: "chișinău",
      to: "new york",
      date: "2023-05-03",
      date1: "2023-05-10",
      class: "business",
      price: 550,
    },
  ];

  function displayTickets(ticketList) {
    var ticketsList = document.querySelector(".tickets-list");
    ticketsList.innerHTML = "";
    if (ticketList.length === 0) {
      ticketsList.innerHTML =
        '<div class="ticket-item">Niciun bilet găsit pentru criteriile selectate.</div>';
    } else {
      ticketList.forEach((ticket) => {
        var ticketItem = document.createElement("div");
        ticketItem.className = "row ticket-item d-flex";
        ticketItem.innerHTML = `
            <span class="col-lg-3">${capitalizeFirstLetter(
              ticket.from
            )} <strong>→</strong> ${capitalizeFirstLetter(ticket.to)}</span>
            <span class="col-lg-2">${capitalizeFirstLetter(
              ticket.class
            )} class</span>
            <span class="col-lg-3">Pornire: ${ticket.date}</span>
            ${
              ticket.date1
                ? `<span class="col-lg-3">Întoarcere: ${ticket.date1}</span>`
                : ""
            }
            <span class="col-auto flex-grow-1 d-flex justify-content-end"><strong>${
              ticket.price
            }$</strong></span>
        `;
        ticketsList.appendChild(ticketItem);
      });
    }
  }

  displayTickets(tickets);

  function normalizeString(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "")
      .toLowerCase();
  }

  document
    .querySelector(".search-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var departureLocation = normalizeString(
        document.getElementById("departureLocation").value
      );
      var destinationLocation = normalizeString(
        document.getElementById("destinationLocation").value
      );
      var departureDate = document.getElementById("departureDate").value;
      var returnDate = document.getElementById("returnDate").value;
      var tripType = document.querySelector(
        'input[name="tripType"]:checked'
      ).value;
      var travelClass = document
        .getElementById("classSelect")
        .value.toLowerCase();

      if (!departureLocation || !destinationLocation || !departureDate) {
        alert("Toate câmpurile sunt obligatorii!");
        return;
      }

      var filteredTickets = tickets.filter((ticket) => {
        if (tripType === "roundTrip") {
          return (
            normalizeString(ticket.from) === departureLocation &&
            normalizeString(ticket.to) === destinationLocation &&
            ticket.date === departureDate &&
            ticket.date1 === returnDate &&
            ticket.class === travelClass
          );
        } else {
          return (
            normalizeString(ticket.from) === departureLocation &&
            normalizeString(ticket.to) === destinationLocation &&
            ticket.date === departureDate &&
            ticket.class === travelClass
          );
        }
      });

      displayTickets(filteredTickets);
    });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  document.querySelectorAll('input[name="tripType"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
      var returnDate = document.getElementById("returnDate");
      if (event.target.value === "roundTrip") {
        returnDate.disabled = false;
      } else {
        returnDate.disabled = true;
        returnDate.value = "";
      }
    });
  });
});

function goToLoginPage() {
  window.location.href = "logare.html";
}
