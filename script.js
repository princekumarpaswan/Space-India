// https://isro.vercel.app/api/centres

let centerData = async () => {
    const response = await fetch(`https://isro.vercel.app/api/centres`)
    const data = await response.json()
    const centre = data.centres
    document.getElementById("myInput").style.display = "block"
    show(centre)

}

centerData()

// Space craft 

const space = async () => {
    const response = await fetch(`https://isro.vercel.app/api/spacecrafts`)
    const data = await response.json()
    const centre = data.spacecrafts
    showSpace(centre)
}

// Rocket

const rocket = async () => {
    const response = await fetch(`https://isro.vercel.app/api/launchers`)
    const data = await response.json()
    const centre = data.launchers
    showRoket(centre)
}

// Search Satellites

const satellites = async () => {
    const response = await fetch(`https://isro.vercel.app/api/customer_satellites`)
    const data = await response.json()
    const centre = data.customer_satellites
    document.getElementById("myInput").style.display = "block"
    showSat(centre)
}

// show satellites
function showSat(data) {
    let tab = `<tr>
    <th>Satellites	</th>
    <th>Country</th>
    <th>Launch Date</th>
    <th>Mass</th>
    <th>Launcher</th>
   </tr>`

    for (const r of data) {
        tab = tab + `<tr> 
            <td>${r.id} </td>
            <td>${r.country}</td>
            <td>${r.launch_date}</td> 
            <td>${r.mass}</td>
            <td>${r.launcher}</td>           
            </tr>`
    }
    document.getElementById("mytable").innerHTML = tab

}




// Showing rocket data
function showRoket(data) {
    let tab = `<tr>
    <th>ID</th>
  
   </tr>`

    for (const r of data) {
        tab = tab + `<tr> 
            <td>${r.id} </td>        
            </tr>`
    }
    document.getElementById("mytable").innerHTML = tab
    document.getElementById("myInput").style.display = "none"

}


// showing space data 

function showSpace(data) {
    let tab = `<tr>
    <th>ID</th>
    <th>Name</th>
   </tr>`

    for (const r of data) {
        tab = tab + `<tr> 
            <td>${r.id} </td>
            <td>${r.name}</td>          
            </tr>`
    }
    document.getElementById("mytable").innerHTML = tab
    document.getElementById("myInput").style.display = "none"

}

// showing centre data
function show(data) {
    let tab = `<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Place</th>
    <th>State</th>
   </tr>`

    for (const r of data) {
        tab = tab + `<tr> 
            <td>${r.id} </td>
            <td>${r.name}</td>
            <td>${r.Place}</td> 
            <td>${r.State}</td>          
            </tr>`
    }
    document.getElementById("mytable").innerHTML = tab

}


// serch function
const search = () => {

    let filter = document.getElementById("myInput").value.toUpperCase();
    let myTable = document.getElementById('mytable');
    let tr = myTable.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")
        if (td.length > 4) {
            td = tr[i].getElementsByTagName("td")[1]
        } else {
            td = tr[i].getElementsByTagName("td")[3]
        }

        if (td) {

            let textvalue = td.textContent || td.innerHTML;

            if (textvalue.toUpperCase().indexOf(filter) > -1) {

                tr[i].style.display = "";

            } else {

                tr[i].style.display = "none";
            }
        }
    }
}

// scroll effect

const scrollToBottom = () => {
    window.scrollTo(0, 600)

}