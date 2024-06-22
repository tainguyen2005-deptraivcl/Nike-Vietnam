document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("productModal");
    const closeBtn = document.querySelector(".modal .close");

    document.querySelectorAll(".buy-now").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            const productItem = this.closest(".product.item");
            const imgSrc = productItem.querySelector(".product-thumb img").src;
            const name = productItem.querySelector(".product-name").textContent;
            const category = productItem.querySelector(".product-cat").textContent;
            const price = productItem.querySelector(".product-price").textContent;
            const sizes = Array.from(productItem.querySelectorAll("select option")).map(option => option.value);

            document.getElementById("modalImage").src = imgSrc;
            document.getElementById("modalName").textContent = name;
            document.getElementById("modalCategory").textContent = category;
            document.getElementById("modalPrice").textContent = price;

            const sizeSelect = document.getElementById("modalSize");
            sizeSelect.innerHTML = "";
            sizes.forEach(size => {
                const option = document.createElement("option");
                option.value = size;
                option.textContent = size;
                sizeSelect.appendChild(option);
            });

            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
