// Coffee Recommendation Logic

document.getElementById("submit").addEventListener("click", function() {
    // Get user answers
    const strength = document.querySelector('input[name="strength"]:checked')?.value;
    const milk = document.querySelector('input[name="milk"]:checked')?.value;
    const sweetness = document.querySelector('input[name="sweetness"]:checked')?.value;

    // Check if all questions are answered
    if (!strength || !milk || !sweetness) {
        alert("Please answer all questions!");
        return;
    }

    // Determine coffee recommendation
    let coffeeRecommendation = getCoffeeRecommendation(strength, milk, sweetness);

    // Display result
    document.getElementById("coffee-type").textContent = coffeeRecommendation;
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
});

document.getElementById("retry").addEventListener("click", function() {
    // Reset quiz and show it again
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    clearForm();
});

function getCoffeeRecommendation(strength, milk, sweetness) {
    if (strength === "strong" && milk === "none" && sweetness === "no") {
        return "Espresso";
    } else if (strength === "strong" && milk === "little" && sweetness === "no") {
        return "Macchiato";
    } else if (strength === "medium" && milk === "lot" && sweetness === "yes") {
        return "Latte";
    } else if (strength === "light" && milk === "lot" && sweetness === "yes") {
        return "Cappuccino";
    } else if (strength === "medium" && milk === "little" && sweetness === "no") {
        return "Americano";
    } else {
        return "Flat White";
    }
}

function clearForm() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
}
