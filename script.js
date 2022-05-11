"use strict";
(() => {
    var _a;
    const $ = (query) => document.querySelector(query);
    function courtyard() {
        function read() { }
        function add(vehicle) {
            var _a;
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${vehicle.name}</td>
        <td>${vehicle.plate}</td>
        <td>${vehicle.entrance}</td>
        <td>
        <button class="delete" data-plate="${vehicle.name}">X</button>
        </td>
        `;
            (_a = $("#list")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        }
        function remove() { }
        function save() { }
        function render() { }
        return { read, add, remove, save, render };
    }
    (_a = $("#submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const name = (_a = $("#name")) === null || _a === void 0 ? void 0 : _a.value;
        const plate = (_b = $("#plate")) === null || _b === void 0 ? void 0 : _b.value;
        if (!name || !plate) {
            alert("Please fill all the fields");
            return;
        }
        courtyard().add({ name, plate, entrance: new Date() });
    });
})();
