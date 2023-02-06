fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
    return data.json()
}).then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
        <td>${values.id}</td>
        <td>${values.company.name}</td>
        <td>${values.company.catchPhrase}</td>
        <td>${values.company.bs}</td>
        </tr>`
    })
    document.getElementById("table_info_company").innerHTML = tableData
})