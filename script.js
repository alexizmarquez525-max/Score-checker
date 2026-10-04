// Function that evaluates the student's score
function evaluateScore(score) {

    // Check for invalid values
    if (score === "" || score === null || isNaN(score)) {
        return {
            remark: "Invalid score",
            className: "invalid"
        };
    }

    score = Number(score);

    // Check for negative scores
    if (score < 0) {
        return {
            remark: "Invalid score",
            className: "invalid"
        };
    }

    // Check for scores beyond 100
    if (score > 100) {
        return {
            remark: "Invalid score",
            className: "invalid"
        };
    }

    // Zero is a valid numeric score, but the result is Failed
    if (score >= 90) {
        return {
            remark: "Excellent",
            className: "excellent"
        };
    } 
    else if (score >= 75) {
        return {
            remark: "Passed",
            className: "passed"
        };
    } 
    else {
        return {
            remark: "Failed",
            className: "failed"
        };
    }
}


// Main program
function startProgram() {

    // Welcome message
    alert("Welcome to the Student Score Checker!");

    // Ask for the student's name
    let name = prompt("Please enter your name:");

    // Validate empty name
    if (name === null || name.trim() === "") {
        document.getElementById("result").innerHTML = `
            <p class="invalid">
                Invalid input: Please enter your name.
            </p>
        `;
        return;
    }

    // Ask for the student's score
    let score = prompt("Please enter your score (0-100):");

    // Confirm if the user wants to continue
    let proceed = confirm(
        "Hello, " + name.trim() + "!\n\n" +
        "You entered a score of: " + score + "\n\n" +
        "Do you want to continue?"
    );

    // If user chooses Cancel
    if (!proceed) {
        document.getElementById("result").innerHTML = `
            <p>
                No problem, <strong>${name.trim()}</strong>!
                <br>
                You chose not to continue.
            </p>
        `;
        return;
    }

    // Evaluate the score
    let result = evaluateScore(score);

    // Display the final result
    document.getElementById("result").innerHTML = `
        <p>
            Hello, <strong>${name.trim()}</strong>!
            <br><br>
            Score: <strong>${score}</strong>
            <br>
            Remark:
            <span class="${result.className}">
                ${result.remark}
            </span>
        </p>
    `;
}
