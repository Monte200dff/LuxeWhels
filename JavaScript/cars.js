const carInventory = [
    { id: 1, brand: "BMW", model: "M5F90", body: "Sedan", year: 2024, price: 110000, img: "Pictures/m5f90.jpeg" },
    { id: 2, brand: "Mercedes-Benz", model: "E-Class", body: "Sedan", year: 2023, price: 75000, img: "Pictures/eclass.avif" },
    { id: 3, brand: "Toyota", model: "Camry", body: "Sedan", year: 2025, price: 35000, img: "Pictures/camry.avif" },
    { id: 4, brand: "Tesla", model: "Model 3", body: "Sedan", year: 2024, price: 45000, img: "Pictures/model3.jpg" },
    { id: 5, brand: "Audi", model: "A6", body: "Sedan", year: 2024, price: 60000, img: "Pictures/audia6.avif" },
    { id: 6, brand: "BMW", model: "X7", body: "SUV", year: 2024, price: 105000, img: "Pictures/bmwx7.avif" },
    { id: 7, brand: "Mercedes-Benz", model: "G-Class", body: "SUV", year: 2024, price: 200000, img: "Pictures/Mercedes-Benz G-Class.jpg" },
    { id: 8, brand: "Tesla", model: "Model X", body: "SUV", year: 2024, price: 85000, img: "Pictures/Tesla Model X.avif" },
    { id: 9, brand: "Porsche", model: "911 Carrera", body: "Coupe", year: 2024, price: 120000, img: "Pictures/Porsche 911 Carrera.jpg" },
    { id: 10, brand: "Toyota", model: "RAV4", body: "SUV", year: 2024, price: 32000, img: "Pictures/Toyota RAV4.png" },
    { id: 11, brand: "Volvo", model: "FH16", body: "Truck", year: 2024, price: 195000, img: "Pictures/volvofh.jpg" },
    { id: 12, brand: "Scania", model: "S730", body: "Truck", year: 2023, price: 205000, img: "Pictures/scanias730.jpg" },
    { id: 13, brand: "Mercedes-Benz", model: "Actros", body: "Truck", year: 2024, price: 185000, img: "Pictures/Mercedes-Benz Actros.jpg" },
    { id: 14, brand: "MAN", model: "TGX", body: "Truck", year: 2024, price: 350000, img: "Pictures/MAN TGX.avif" },
    { id: 15, brand: "DAF", model: "XG+", body: "Truck", year: 2024, price: 360000, img: "Pictures/DAF XG+.jpg" },
    { id: 16, brand:"Iveco", model:"S Way", body:"Truck",year: 2019, price:78000, img: "Pictures/iveco s way.jpg"}
];

const selectPrice = document.getElementById("select_price");
const selectModel = document.getElementById("select_model");
const selectBody = document.getElementById("select_body");
const productDiv = document.querySelector(".product-div");

function showCars() {
    const selectedPrice = selectPrice.value;
    const selectedBody = selectBody.value.toLowerCase();
    const selectedModel = selectModel.value.toLowerCase();

    const filteredCars = carInventory.filter((prod) => {
        // 1. Մոդելի ֆիլտր (համեմատում ենք փոքրատառերով)
        const matchModel = selectedModel === "" || prod.brand.toLowerCase() === selectedModel;

        // 2. Թափքի ֆիլտր
        const matchBody = selectedBody === "" || prod.body.toLowerCase() === selectedBody;

        // 3. Գնի ֆիլտր
        let matchPrice = true;
        if (selectedPrice === "low") {
            matchPrice = prod.price < 50000;
        } else if (selectedPrice.includes("-")) {
            const [min, max] = selectedPrice.split("-").map(Number);
            matchPrice = prod.price >= min && prod.price <= max;
        } else if (selectedPrice === "300000+") {
            matchPrice = prod.price >= 300000;
        }

        return matchModel && matchBody && matchPrice;
    });

    // Նկարում ենք արդյունքը
    productDiv.innerHTML = filteredCars.map(cars => `
        <article class="cars_card">
            <img src="${cars.img}" style="width: 95%; height: 150px; object-fit: cover;">  
            <h2>${cars.brand} ${cars.model}</h2>
            <h3>${cars.year} թ.</h3>
            <h3>$${cars.price.toLocaleString()}</h3>
            <button class="buyBtn">BUY</button>
        </article>
    `).join("");
}

// Լսում ենք փոփոխությունները
selectModel.addEventListener("change", showCars);
selectBody.addEventListener("change", showCars);
selectPrice.addEventListener("change", showCars);

// Առաջին անգամ կանչում ենք, որպեսզի բոլորը երևան
showCars();