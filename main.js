const salesByWeek = [{
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    }
]

// =========================== Practice: CAR SALES ==================
/*
Practice: Car Sales
Randall has come back with a new job for you. Each week, he wants to see a report of how many cars each salesperson sells for that week. Here's his requirements to display for each sale.

1. Display the first and last name of the sales agent.
2. Display all keys and values for the car sold.
3. Display the gross profit made on the sale.
*/

const salesContainer = document.querySelector("#sales-week");

const searchDiv = document.createElement("div");
const searchInput = document.createElement("input");
searchInput.id = "searchInput";
searchInput.placeholder = "Search an agent";

const searchLabel = document.createElement("label");
searchLabel.textContent = "Search: ";

searchDiv.appendChild(searchLabel);
searchDiv.appendChild(searchInput);
salesContainer.appendChild(searchDiv);

const agentSection = document.createElement("section");
salesContainer.appendChild(agentSection);

salesByWeek.forEach(saleObj => {
    const agentDiv = document.createElement("div");
    const agentHead = document.createElement("h1");
    agentHead.textContent = `${saleObj.sales_agent.first_name} ${saleObj.sales_agent.last_name}`;
    agentDiv.appendChild(agentHead);

    for (const vehicleInfo of Object.entries(saleObj.vehicle)) {
        const agentP = document.createElement("div");
        agentP.textContent = `${vehicleInfo[0]}: ${vehicleInfo[1]}`;
        agentDiv.appendChild(agentP);
    }

    const agentGross = document.createElement("h3");
    agentGross.textContent = `Profit: $${saleObj.gross_profit}`;
    agentDiv.appendChild(agentGross);
    agentSection.appendChild(agentDiv);
})

const searchInputEvent = document.querySelector("#searchInput");
console.log(searchInputEvent)
searchInputEvent.addEventListener("keypress", event => {
    if (event.charCode === 13) {
        const searchTerm = event.target.value;
        agentSection.innerHTML = '';
        salesByWeek.forEach(saleObj => {
            const saleArrayValues = Object.values(saleObj.sales_agent);
            const matchSearch = saleArrayValues.filter(value => {
                return value.toLowerCase().includes(searchTerm.toLowerCase());
            })
            console.log(matchSearch);
            
            if(matchSearch.length == 1){
 
                agentSection.innerHTML += `
                <h3>${saleObj.sales_agent.first_name} ${saleObj.sales_agent.last_name}</h3>
                <div>${saleObj.sales_agent.email}</div>
                <div>${saleObj.sales_agent.mobile}</div>
                `
            }
        })
    }
})