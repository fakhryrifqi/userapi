fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
    return data.json()
}).then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.username}</td>
        <td>${values.email}</td>
        <td onclick='detailAddress(${values.id})' style='cursor:pointer'>${values.address.city}</td>
        <td>${values.phone}</td>
        <td>${values.website}</td>
        <td onclick='detailCompany(${values.id})' style='cursor:pointer'>${values.company.name}</td>
        </tr>`
    })
    document.getElementById("table_data").innerHTML = tableData
})

function detailAddress(id){
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("detail_data").innerHTML = '';
            document.getElementById("detail_data").insertAdjacentHTML('beforeend', `
                <center>
                    <ul style="list-style-type:none">
                        <li>Street      : ${data.address.street}</li>
                        <li>Suite       : ${data.address.suite}</li>
                        <li>City        : ${data.address.city}</li>
                        <li>Zipcode     : ${data.address.zipcode}</li>
                        <li>Latitude    : ${data.address.geo.lat}</li>
                        <li>Longitude   : ${data.address.geo.lng}</li>
                    </ul>
                </center>
            `)
    })
}

function detailCompany(id){
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("detail_data").innerHTML = '';
            document.getElementById("detail_data").insertAdjacentHTML('beforeend', `
                <center>
                    <ul style="list-style-type:none">
                        <li>Company Name    : ${data.company.name}</li>
                        <li>Catch Phrase    : ${data.company.catchPhrase}</li>
                        <li>BS              : ${data.company.bs}</li>
                    </ul>
                </center>
            `)
    })
}