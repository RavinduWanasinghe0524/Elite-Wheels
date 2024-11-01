// Sample car data
const cars = [
    { make: 'Mercedes', model: 'E-Class', year: 2022, price: 53999, image: 'Img/ME.webp', description: 'The Mercedes E-Class is a luxury sedan known for its smooth ride, advanced safety features, and sophisticated design.' },
    { make: 'BMW', model: 'i4', year: 2023, price: 75999, image: 'Img/i4.avif', description: 'The BMW i4 is an all-electric sedan with sporty handling and a range of up to 300 miles, offering an exhilarating yet sustainable drive.' },
    { make: 'Audi', model: 'e-tron', year: 2023, price: 65999, image: 'Img/A E.avif', description: 'The Audi e-tron is a luxury electric SUV that combines Audi’s elegance with modern electric technology, providing a comfortable and eco-friendly ride.' },
    { make: 'Mercedes', model: 'GLA', year: 2022, price: 49999, image: 'Img/GLA.avif', description: 'The Mercedes GLA is a compact SUV with luxury interiors, smooth handling, and the latest safety features, making it an ideal urban choice.' },
    { make: 'Honda', model: 'CR-V', year: 2024, price: 32999, image: 'Img/CRV.avif', description: 'The Honda CR-V is a reliable and spacious SUV with impressive fuel efficiency and a reputation for durability, ideal for families and adventurers alike.' },
    { make: 'Toyota', model: 'Highlander', year: 2023, price: 41999, image: 'Img/Hi.avif', description: 'The Toyota Highlander is a mid-size SUV that offers ample seating, a smooth ride, and reliable performance for both city and off-road adventures.' },
    { make: 'Ford', model: 'Explorer', year: 2024, price: 42999, image: 'Img/FE.avif', description: 'The Ford Explorer is a rugged SUV with powerful engine options, versatile seating, and modern tech features, perfect for both daily commutes and road trips.' },
    { make: 'Nissan', model: 'Maxima', year: 2023, price: 35999, image: 'Img/NM.avif', description: 'The Nissan Maxima is a sleek sedan with a powerful V6 engine and premium interior, providing a luxurious and engaging driving experience.' },
    { make: 'Jeep', model: 'Grand Cherokee', year: 2024, price: 47999, image: 'Img/JG.avif', description: 'The Jeep Grand Cherokee is a capable SUV that combines off-road readiness with advanced technology and a comfortable cabin.' },
    { make: 'Porsche', model: 'Cayenne', year: 2024, price: 89999, image: 'Img/PC.avif', description: 'The Porsche Cayenne is a luxury SUV with sports car performance, featuring precise handling and powerful engines for a thrilling drive.' },
    { make: 'Lexus', model: 'NX', year: 2023, price: 44999, image: 'Img/LN.avif', description: 'The Lexus NX is a compact luxury SUV known for its comfortable ride, upscale interior, and advanced safety features.' },
    { make: 'Chevrolet', model: 'Blazer', year: 2024, price: 39999, image: 'Img/CV.avif', description: 'The Chevrolet Blazer is a mid-size SUV with sporty design, modern technology, and a comfortable interior, suitable for everyday driving.' },
    { make: 'Tesla', model: 'Model Y', year: 2023, price: 53999, image: 'Img/TY.avif', description: 'The Tesla Model Y is a compact electric SUV with spacious seating, impressive range, and Tesla’s signature tech features.' },
    { make: 'BMW', model: 'X3', year: 2022, price: 49999, image: 'Img/X3.avif', description: 'The BMW X3 is a luxury compact SUV with dynamic handling and an upscale cabin, offering a balance of comfort and performance.' },
    { make: 'Audi', model: 'Q5', year: 2023, price: 57999, image: 'Img/Q5.avif', description: 'The Audi Q5 is a versatile luxury SUV that blends high-tech features with refined comfort and a powerful engine.' },
    { make: 'Honda', model: 'Pilot', year: 2023, price: 37999, image: 'Img/HP.webp', description: 'The Honda Pilot is a spacious SUV with three rows of seating, ideal for larger families and comfortable long trips.' },
    { make: 'Toyota', model: 'Corolla Cross', year: 2023, price: 26999, image: 'Img/TC.avif', description: 'The Toyota Corolla Cross is a compact SUV that combines fuel efficiency with a practical design, perfect for city driving.' },
    { make: 'Ford', model: 'Edge', year: 2023, price: 33999, image: 'Img/FED.avif', description: 'The Ford Edge is a mid-size SUV that offers a smooth ride, ample space, and the latest Ford technology for an enjoyable driving experience.' },
    { make: 'Nissan', model: 'Pathfinder', year: 2024, price: 38999, image: 'Img/NPa.avif', description: 'The Nissan Pathfinder is a capable SUV with rugged styling and three-row seating, designed for family adventures and daily comfort.' },
    { make: 'Tesla', model: 'Model S', year: 2024, price: 94999, image: 'Img/T S.avif', description: 'The Tesla Model S is a luxury electric sedan with a high range and rapid acceleration, offering one of the best driving experiences for electric vehicles.' },
];

// Function to display car data
function displayCars() {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';

    // Get filter values
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const makeFilter = document.getElementById('makeFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;

    // Filter cars based on user input
    const filteredCars = cars.filter(car => {
        const matchesSearch = car.make.toLowerCase().includes(searchTerm) || car.model.toLowerCase().includes(searchTerm);
        const matchesMake = makeFilter === 'all' || car.make === makeFilter;
        const matchesPrice = priceFilter === 'all' || (priceFilter === '30000' && car.price <= 30000) ||
            (priceFilter === '50000' && car.price <= 50000) ||
            (priceFilter === '80000' && car.price <= 80000) ||
            (priceFilter === '100000' && car.price <= 100000);
        const matchesYear = yearFilter === 'all' || car.year.toString() === yearFilter;

        return matchesSearch && matchesMake && matchesPrice && matchesYear;
    });

    // Display filtered cars
    filteredCars.forEach((car) => {
        const carDiv = document.createElement('div');
        carDiv.className = 'car';
        carDiv.innerHTML = `
            <img src="${car.image}" alt="${car.make} ${car.model}">
            <h3>${car.make} ${car.model}</h3>
            <p>Year: ${car.year}</p>
            <p>Price: $${car.price}</p>
            <button onclick="openModal('${car.make} ${car.model}', '${car.description}')">View Details</button>
        `;
        carList.appendChild(carDiv);
    });


    // Show message if no cars found
    if (filteredCars.length === 0) {
        carList.innerHTML = `<p class=nocar>No cars found matching your criteria.</p>`;
    }
}

// Open modal for car details
function openModal(title, description) {
    const modal = document.getElementById('car-modal');
    const modalTitle = document.getElementById('modal-car-title');
    const modalDescription = document.getElementById('modal-car-description');

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = 'flex';
}

// Close modal
document.querySelector('.close').onclick = function() {
    document.getElementById('car-modal').style.display = 'none';
}

// Filter event listeners
document.getElementById('searchBar').addEventListener('input', displayCars);
document.getElementById('makeFilter').addEventListener('change', displayCars);
document.getElementById('priceFilter').addEventListener('change', displayCars);
document.getElementById('yearFilter').addEventListener('change', displayCars);

// Initial call to display cars
displayCars();
