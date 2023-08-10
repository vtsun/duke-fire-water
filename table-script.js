const data = [
    { title: 'Watershed‐scale vegetation, water quantity, and water quality responses to wildfire in the southern Appalachian mountain region, United States', authors: 'Caldwell, P.V., Elliott, K.J., Liu, N., Vose, J.M., Zietlow, D.R. and Knoepp, J.D.', year: '2020', citation: 'Caldwell, P.V., Elliott, K.J., Liu, N., Vose, J.M., Zietlow, D.R. and Knoepp, J.D., 2020. Watershed‐scale vegetation, water quantity, and water quality responses to wildfire in the southern Appalachian mountain region, United States. Hydrological Processes, 34(26), pp.5188-5209.', },
    { title: 'Modeling Post‐Wildfire Hydrologic Response: Review and Future Directions for Applications of Physically Based Distributed Simulation', authors: 'Ebel, B.A., Shephard, Z.M., Walvoord, M.A., Murphy, S.F., Partridge, T.F. and Perkins, K.S.', year: '2023', citation: "Ebel, B.A., Shephard, Z.M., Walvoord, M.A., Murphy, S.F., Partridge, T.F. and Perkins, K.S., 2023. Modeling Post‐Wildfire Hydrologic Response: Review and Future Directions for Applications of Physically Based Distributed Simulation. Earth's Future, 11(2), p.e2022EF003038." },
    { title: "Burned forests impact water supplies", authors: "Hallema, D.W., Sun, G., Caldwell, P.V., Norman, S.P., Cohen, E.C., Liu, Y., Bladon, K.D. and McNulty, S.G.", year: "2018", citation: "Hallema, D.W., Sun, G., Caldwell, P.V., Norman, S.P., Cohen, E.C., Liu, Y., Bladon, K.D. and McNulty, S.G., 2018. Burned forests impact water supplies. Nature communications, 9(1), p.1307." },
    { title: "Wildfire effects on water quality in forest catchments: A review with implications for water supply", authors: "Smith, H.G., Sheridan, G.J., Lane, P.N., Nyman, P. and Haydon, S.", year: "2011", citation: "Smith, H.G., Sheridan, G.J., Lane, P.N., Nyman, P. and Haydon, S., 2011. Wildfire effects on water quality in forest catchments: A review with implications for water supply. Journal of Hydrology, 396(1-2), pp.170-192." },
    { title: "Wildfire induces changes in receiving waters: A review with considerations for water quality management", authors: "Paul, M.J., LeDuc, S.D., Lassiter, M.G., Moorhead, L.C., Noyes, P.D. and Leibowitz, S.G.", year: "2022", citation: "Paul, M.J., LeDuc, S.D., Lassiter, M.G., Moorhead, L.C., Noyes, P.D. and Leibowitz, S.G., 2022. Wildfire induces changes in receiving waters: A review with considerations for water quality management. Water Resources Research, 58(9), p.e2021WR030699." },
    { title: "PFHydro: A new watershed-scale model for post-fire runoff simulation", authors: "Wang, J., Stern, M.A., King, V.M., Alpers, C.N., Quinn, N.W., Flint, A.L. and Flint, L.E.", year: "2020", citation: "Wang, J., Stern, M.A., King, V.M., Alpers, C.N., Quinn, N.W., Flint, A.L. and Flint, L.E., 2020. PFHydro: A new watershed-scale model for post-fire runoff simulation. Environmental Modelling & Software, 123, p.104555." },
    { title: "Economic Analysis of Wildfire Impacts to Water Quality: a Review", authors: "Wibbenmeyer, M., Sloggy, M.R. and Sánchez, J.J.", year: "2023", citation: "Wibbenmeyer, M., Sloggy, M.R. and Sánchez, J.J., 2023. Economic Analysis of Wildfire Impacts to Water Quality: a Review. Journal of Forestry, p.fvad012." },
    { title: "Wildfire and the future of water supply", authors: "Bladon, K.D., Emelko, M.B., Silins, U. and Stone, M.", year: "2014", citation: "Bladon, K.D., Emelko, M.B., Silins, U. and Stone, M., 2014. Wildfire and the future of water supply. Environ. Sci. Technol. 2014, 48, 16, 8936–8943." },
    { title: "Planning for an uncertain future: Restoration to mitigate water scarcity and sustain carbon sequestration", authors: "Brantley, S.T., Vose, J.M., Wear, D.N. and Band, L.", year: "2017", citation: "Brantley, S.T., Vose, J.M., Wear, D.N. and Band, L., 2017. Planning for an uncertain future: Restoration to mitigate water scarcity and sustain carbon sequestration. Ecological restoration and management of longleaf pine forests, pp.291-310." },
    { title: "Forested watersheds provide the highest water quality among all land cover types, but the benefit of this ecosystem service depends on landscape context", authors: "Caldwell, P.V., Martin, K.L., Vose, J.M., Baker, J.S., Warziniack, T.W., Costanza, J.K., Frey, G.E., Nehra, A. and Mihiar, C.M.", year: "2023", citation: "Caldwell, P.V., Martin, K.L., Vose, J.M., Baker, J.S., Warziniack, T.W., Costanza, J.K., Frey, G.E., Nehra, A. and Mihiar, C.M., 2023. Forested watersheds provide the highest water quality among all land cover types, but the benefit of this ecosystem service depends on landscape context. Science of The Total Environment, 882, p.163550." },
    { title: "Southern Forest Outlook: Water", authors: "Caldwell, P., J. Vose and others", year: "2023", citation: "Caldwell, P., J. Vose and others. 2023. Southern Forest Outlook: Water. SRS GTR (In review)." },
    { title: "Wildfires are Threatening Municipal Water Supplies", authors: "Chow, A.T.S., Karanfil, T. and Dahlgren, R.A.", year: "2021", citation: "Chow, A.T.S., Karanfil, T. and Dahlgren, R.A., 2021. Wildfires are Threatening Municipa l Water Supplies. Eos Science News by AGU." },
    { title: "Modeling soil erosion and sediment transport from fires in forested watersheds of the South Carolina Piedmont", authors: "Crumbley, T., Ge Sun, Steve McNulty", year: "2007", citation: "Crumbley, T., Ge Sun, Steve McNulty. 2007. Modeling soil erosion and sediment transport from fires in forested watersheds of the South Carolina Piedmont" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },
    { title: "", authors: "", year: "", citation: "" },

];

function populateTable() {
    const tableBody = document.getElementById('tableBody');

    data.forEach(item => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);


        cell1.textContent = item.title;
        cell2.textContent = item.authors;
        cell3.textContent = item.year;
        cell4.textContent = item.citation;

    });
}

function initializeDataTables() {
    $('#referenceTable').DataTable({
        searching: true,
        paging: true,
        ordering: true,
        info: true,
    });
}

function onPageLoad() {
    populateTable();
    initializeDataTables();
}

document.addEventListener('DOMContentLoaded', onPageLoad);