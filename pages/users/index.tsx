import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import React, { use, useState } from "react";


const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [newUser, setNewUser] = useState<UserData | null>(null);

    const handleAddUser = (user: UserData) => {
        setNewUser(user);
    };
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">Users</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-700 px-4 py-2 rounded-full text-white"
                    >
                        Add User
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                    {users?.map(({ name, email, phone, address, username, website, company }: UserProps, key: number) => (
                        <UserCard name={name} email={email} phone={phone} address={address} username={username} website={website} company={company} key={key} />
                        //   <div key={user.id} className="p-4 border rounded-lg">
                        //     <h3 className="text-xl font-semibold">{user.name}</h3>
                        //     <p>{user.email}</p>
                        //     <p>{user.phone}</p>
                        //   </div>
                    ))}
                    {isModalOpen && (
                        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
                    )}


                </div>
            </main>


        </div>
    )



}
export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return {
        props: {
            users
        }
    }
}

export default Users;