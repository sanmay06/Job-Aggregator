import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import api from '../API';
import { useAuth } from '../Authorize';
import PriceSlider from '../components/Slider';

function Profiles() {
    const params = useParams();
    const [sites, setsites] = useState([]);
    const [msg, setmsg] = useState("");
    const [name, setname] = useState("");
    const [site, setsite] = useState("");
    const [columns, setColumns] = useState([]);
    const [min, setmin] = useState();
    const [max, setmax] = useState();
    const [location, setlocation] = useState(null);
    const [web, setweb] = useState(true);
    //console.log(params.id);
    const { user } = useAuth(); 

    function sitesDeal(site) {
        if(sites.includes(site))
            setsites((prev)=>prev.filter(s => s !== site));
        else
            setsites((prev)=>[...prev,site]);
    }

    useEffect(() => {
      api.get(`/profile/${params.id}?user=${user}`)
      .then( (response)=>{
        console.log(response.data)
        if(response.data.msg==="found"){
            const profile_data = response.data.profile_data;
            setColumns(profile_data.column)
            setname(profile_data.name)
            setsite(profile_data.search)
            setsites(profile_data.sites)
            setlocation(profile_data.location)
            //console.log(typeof(profile_data.max))
            setmax((profile_data.max))
            setmin((profile_data.min))
            //console.log(min,max)
        }
      }).catch(e=>console.log(e))
    }, []);

    useEffect(() => {
        if(sites.length >= 2)
            setweb(false);
        else{
            setweb(true);
            if(columns.includes('website'))
                update("website")
        }
    }, [sites]);

    function update(s) {
        if (columns.includes(s)) {
            setColumns(prev => prev.filter(item => item !== s));
        } else {
            setColumns(prev => [...prev, s]);
        }
        console.log(columns);
    }

    function submit(e) {
        e.preventDefault();
        api.post(`/profile/${params}`, {'name':name,'search':site, 'sites': sites, 'columns': columns,'user':user,'min':min,'max':max,'location':location})
        .then((response) => setmsg(response.data.msg)).catch((e)=>console.log(e))
    }

    return (
        <section>
            <NavBar home={false}/>
            <form  onSubmit={(e)=>submit(e)} >
                Enter the name for the profile:
                <input type='text' name='name' value={name} onChange={(e)=> setname(e.target.value)  } required/><br/>
                Enter the field you are searching for:
                <input type='text' name='search' value={site} onChange={(e) => setsite(e.target.value)} required/><br />
                Enter the sites you want to search in:
                <input type='text' value={sites}readOnly />
                <button onClick={(e) => {e.preventDefault();  sitesDeal('Internshala')}} >internshaala</button>
                <button onClick={(e) => {e.preventDefault();  sitesDeal('Adzuna')}} >Adzuna</button>                
                <button onClick={(e) => {e.preventDefault();  sitesDeal('TimesJobs')}} >Times job</button>
                <button onClick={(e) => {e.preventDefault();  sitesDeal('JobRapido')}} >Job Rapido</button>
                <br/>
                Enter the fields to display:
                <input type='text' value={columns}readOnly />
                <button onClick={(e) => {e.preventDefault();  update('Title')}} >Title</button>
                <button onClick={(e) => {e.preventDefault();  update('Company')}} >Company</button>
                <button onClick={(e) => {e.preventDefault();  update('Salary')}} >Salary</button>
                <button onClick={(e) => {e.preventDefault();  update('Location')}} >Location</button>
                <button onClick={(e) => {e.preventDefault();  update('website')}} hidden={web}>Website</button>
                <PriceSlider min = {setmin} max = {setmax} minval={min} maxval={max}/>
                Enter the location to search:
                <input type="button" value={location} onChange={(e)=> setlocation(e.target.value)} />
                <input type ='submit' value={"Submit"}/>
                <div>{msg}</div>
            </form>
        </section>
    )
}

export default Profiles;