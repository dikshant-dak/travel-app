import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '@/components/Header';

const DeleteUser = () => {
    const [userIdToDelete, setUserIdToDelete] = useState('');

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8005/customers/${userIdToDelete}`);
            setDeletionStatus('User deleted successfully.');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center items-center p-10">

                <h2 className="text-2xl">Delete User</h2>
                <div className="flex p-5">

                <label>
                    User ID:
                    <input className="w-40 h-10 border border-solid border-gray-400 focus:border-blue-500 focus:outline-none ml-2 rounded-lg"
                        type="text"
                        value={userIdToDelete}
                        onChange={(e) => setUserIdToDelete(e.target.value)}
                    />
                </label>
                </div>
                <Link href="/auth/users">

                    <button className="ml-2 w-32 h-10 bg-[#FF385C] text-white md:hover:cursor-pointer hover:opacity-80 rounded-lg p-2" onClick={handleDelete}>
                        Delete
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default DeleteUser;
