document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const numberInput = document.getElementById("number");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value;
        const number = numberInput.value;

        const employeeData = {
            id: getUniqueId(),
            name: name,
            number: number
        };

        saveEmployeeData(employeeData);

        // Redirecionar de volta à página de listagem de funcionários após o envio
        window.location.href = "../funcionarios/index.html";
    });

    function getUniqueId() {
        // Simulação de geração de ID único
        return Date.now();
    }

    function saveEmployeeData(data) {
        // Simulação de armazenamento dos dados
        const storedData = JSON.parse(localStorage.getItem("employeeData")) || [];
        storedData.push(data);
        localStorage.setItem("employeeData", JSON.stringify(storedData));
    }
});