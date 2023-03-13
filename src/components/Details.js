import React, { useEffect, useState } from 'react' 
import './Details.css' 

const Details = () => {  
    const [tenants, setTenants] = useState(Array(20).fill(null).map((_, index) => ({ id: index + 1, checkIn: null, checkOut: null, messAvailable: false })));

    const handleCheckIn = (tenantId) => { 
    const updatedTenants = [...tenants];
    const tenantIndex = updatedTenants.findIndex(tenant => tenant.id === tenantId);
    updatedTenants[tenantIndex].checkIn = new Date();
    setTenants(updatedTenants);
    };

    const handleCheckOut = (tenantId) => {
    const updatedTenants = [...tenants];
    const tenantIndex = updatedTenants.findIndex(tenant => tenant.id === tenantId);
    updatedTenants[tenantIndex].checkOut = new Date();
    setTenants(updatedTenants);
    };

    const handleMessAvailability = (tenantId) => {
    const updatedTenants = [...tenants];
    const tenantIndex = updatedTenants.findIndex(tenant => tenant.id === tenantId);
    updatedTenants[tenantIndex].messAvailable = !updatedTenants[tenantIndex].messAvailable;
    setTenants(updatedTenants);
    };

    const numCheckedIn = tenants.filter(tenant => tenant.checkIn !== null).length;
    const numCheckedOut = tenants.filter(tenant => tenant.checkOut !== null).length;
    const numMessAvailable = tenants.filter(tenant => tenant.messAvailable).length;

    return (
    <div className="check-in-tracker-container">
        <h2 className="check-in-tracker-title" style={{color:"purple"}}>Check-in/out for Tenant</h2>
        <table className="check-in-tracker-table">
        <thead>
            <tr>
            <th>Tenant</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Mess Availability</th>
            </tr>
        </thead>
        <tbody>
            {tenants.map(tenant => (
            <tr key={tenant.id}>
                <td className="check-in-tracker-tenant">{`Tenant ${tenant.id}`}</td>
                <td className="check-in-tracker-checkin">{tenant.checkIn ? tenant.checkIn.toLocaleTimeString() : <button className="check-in-tracker-btn" onClick={() => handleCheckIn(tenant.id)}>Check-in</button>}</td>
                <td className="check-in-tracker-checkout">{tenant.checkOut ? tenant.checkOut.toLocaleTimeString() : <button className="check-in-tracker-btn" onClick={() => handleCheckOut(tenant.id)}>Check-out</button>}</td>
                <td className="check-in-tracker-mess">{tenant.messAvailable ? <span>Mess Available</span> : <button className="check-in-tracker-btn" onClick={() => handleMessAvailability(tenant.id)}>Mess Not Available</button>}</td>
            </tr>
            ))}
        </tbody>
        </table>
        <h4 className="check-in-tracker-title" style={{color:"purple"}}> Summary/Dashboard </h4>
        <div className="check-in-tracker-summary">
        <p className="check-in-tracker-summary-item">Checked-in: {numCheckedIn}</p>
        <p className="check-in-tracker-summary-item">Checked-out: {numCheckedOut}</p>
        <p className="check-in-tracker-summary-item">Mess available: {numMessAvailable}</p>
        </div>
    </div>
    );
};

export default Details 






















