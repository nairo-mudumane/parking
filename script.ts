interface IVeichle {
  name: string;
  plate: string;
  entrance: Date;
}

(() => {
  const $ = (query: string): HTMLInputElement | null =>
    document.querySelector(query);

  function courtyard() {
    function read() {}

    function add(vehicle: IVeichle) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${vehicle.name}</td>
        <td>${vehicle.plate}</td>
        <td>${vehicle.entrance}</td>
        <td>
        <button class="delete" data-plate="${vehicle.name}">X</button>
        </td>
        `;

      $("#list")?.appendChild(row);
    }

    function remove() {}

    function save() {}

    function render() {}

    return { read, add, remove, save, render };
  }

  $("#submit")?.addEventListener("click", () => {
    const name = $("#name")?.value;
    const plate = $("#plate")?.value;

    if (!name || !plate) {
      alert("Please fill all the fields");
      return;
    }

    courtyard().add({ name, plate, entrance: new Date() });
  });
})();
