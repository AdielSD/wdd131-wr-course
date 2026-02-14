    // year in footer
    const currentyear = new Date().getFullYear();
    
    const lastModified = document.lastModified;
    
    document.getElementById ('currentyear').textContent = currentyear;
    
    document.getElementById('lastModified').textContent = "Last modification: " + document.lastModified;

    // Product list
    const products = [
      { id: "fc-1888", name: "Flux Capacitor" },
      { id: "fc-2050", name: "Power Laces" },
      { id: "fs-1987", name: "Time Circuits" },
      { id: "ac-2000", name: "Low Voltage Adapter" },
      { id: "jj-1969", name: "Warp Equalizer" }
    ];

    const productSelect = document.getElementById("productName");
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });