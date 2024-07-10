
import React from 'react'
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchAllDetails } from '@/app/lib/data';

export const metadata: Metadata = {
    title: 'Customer',
};

async function page() {
    const customers = await fetchAllDetails();
    return (
        <>
            <CustomersTable customers={customers} />
        </>
    )
}

export default page