import React from 'react';
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div>
            <Link to='/pizza'>
                <button>Create Order</button>
            </Link>
        </div>
    )
}