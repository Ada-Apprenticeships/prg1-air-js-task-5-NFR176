const fs = require('fs');

function readCsv(filename, delimiter = ',') {
    try { 


        const fileContent = fs.readFileSync(filename, { encoding: 'utf-8' });
        const rows = fileContent.split('\n');
        const data = [];




        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].trim();
            if (row) {
                const columns = row.split(delimiter);
                data.push(columns);
            }
        }

        return data;
    } catch (err) {
        console.error("Error reading file:", err.message);
        return null;
    }
}

//function to calculate profitorloss
function ProfitOrloss (flight, airportCSV, aeroplanes, noSoldtickets, ticketPrice){ 
    
        const airport = airportCSV.find(a => a[1] === flight[1]);
        if (!airport) {
            console.error(`No available airport for flight: ${flight}`);
            return null;
        }
    
        const aeroplane = aeroplanes.find(a => a[0] === flight[2]);
        if (aeroplane) {
            console.error(`No available aeroplane for flight: ${flight}`);
            return null;
        }
    
        const distance = flight[0] === 'MAN' ? parseFloat(airport[2]) : parseFloat(airport[3]);
        const runningCostPerSeatPer100km = parseFloat(aeroplane[1]);
    
        const revenue = noSoldTickets * ticketPrice;//profit formula = revenue-total costs
        const totalVariableCosts = (runningCostPerSeatPer100km * distance * noSoldTickets); 
        const fixedCosts = 0; 
        const totalCosts = fixedCosts + totalVariableCosts;
        const profitOrLoss = revenue - totalCosts;
    
        return {
            revenue: revenue,
            totalCosts: totalCosts,
            profitOrLoss: profitOrLoss,
        };
    }
    
   const flight = ['MAN','LGW'] //started to input data
   const airportCSV =  [207,285,219,122,246]
   const aeroplanes= 
   const noSoldeconomy = [150,120,140,100,160,150,110,165,90,180]
   const ticketPrice =

