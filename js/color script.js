let selectedTd;
let table = document.querySelector('.tableWrapper')
table.onclick = function(event) {
    let td = event.target.closest('td');

    if (!td) return;

    if (!table.contains(td)) return;

    highlight(td);
};

function highlight(td) {
    selectedTd = td;
    selectedTd.classList.toggle('active');
}


