
import React from 'react'
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchAllDetails } from '@/app/lib/data';
import { FormattedCustomersTable } from '@/app/lib/definitions';

export const metadata: Metadata = {
    title: 'Customer',
};

async function page() {
    const customers = await fetchAllDetails();
    // customers.map((val)=>console.log(val.total_invoices)
    const formattedCustomers: FormattedCustomersTable[] = customers.map((customer) => ({
        id: String(customer.id),
        name: String(customer.name),
        email: String(customer.email), // Populate with actual data
        image_url: String(customer.image_url), // Populate with actual data
        total_paid: String(customer.total_paid), // Populate with actual data
        total_pending: String(customer.total_pending), // Populate with actual data
        total_invoices: Number(customer.total_invoices), // Populate with actual data
    }));

    return (
        <>
            <CustomersTable customers={formattedCustomers} />
        </>
    )
}

export default page