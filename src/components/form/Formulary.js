import React from 'react';
import './style.css'

export default function Formulary({data, onChange,event}) {
    return (
    
        <form onSubmit={event} className="form-app element-block element-hide">
            <h3 className="title-form mb-4">Signing</h3>
            <div className="form-group">
                <input name='email' onChange={onChange} type="text"  className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input name='pass' onChange={onChange} type="password" className="form-control" placeholder="Pass" />
            </div>
        
            <div className="form-group">
                <button className="btn btn-form">Login</button>
            </div>
        </form>

    );
}
