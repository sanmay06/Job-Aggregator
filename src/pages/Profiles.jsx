import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';

function Profiles() {
    const params = useParams();
    const [sites, setsites] = useState([]);
    const [columns, setColumns] = useState([]);
    console.log(params);

    function sitesDeal(site) {
        if(sites.includes(site))
            setsites((prev)=>prev.filter(s => s !== site));
        else
            setsites((prev)=>[...prev,site]);
    }

    function update(s) {
        if (columns.includes(s)) {
            setColumns(prev => prev.filter(item => item !== s));
        } else {
            setColumns(prev => [...prev, s]);
        }
        console.log(columns);
    }

    return (
        <section>
            <NavBar />
            <form>
                Enter the field you are searching for:
                <input type='text' required/><br />
                Enter the sites you want to search in:
                <input type='text' value={sites}readOnly />
                <button onClick={(e) => {e.preventDefault();  sitesDeal('internshaala')}} >internshaala</button>
                <button onClick={(e) => {e.preventDefault();  sitesDeal('LinkedIn')}} >LinkedIn</button>
                <button >someother</button>
                <br/>
                Enter the fields to display:
                <input type='text' value={columns}readOnly />
                <button onClick={(e) => {e.preventDefault();  update('Title')}} >Title</button>
                <button onClick={(e) => {e.preventDefault();  update('Company')}} >Company</button>
                <button onClick={(e) => {e.preventDefault();  update('Salary')}} >Salary</button>
                <button onClick={(e) => {e.preventDefault();  update('Location')}} >Location</button>
                
            </form>
        </section>
    )
}

export default Profiles;