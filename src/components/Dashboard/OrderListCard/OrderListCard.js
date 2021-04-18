import React from 'react';

const OrderListCard = () => {
    return (
        <table className="table">
            <thead >
                <tr>
                    <th className="text-secondary">Sr. No</th>
                    <th className="text-secondary">E-mail</th>
                    <th className="text-secondary">Service</th>
                    <th className="text-secondary">Pay With</th>
                    <th className="text-secondary">Status</th>
                </tr>
            </thead>
        </table>
    );
};

export default OrderListCard;