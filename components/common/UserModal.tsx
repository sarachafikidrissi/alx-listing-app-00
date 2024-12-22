import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: "",
            },
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: "",
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            address: {
                ...prevUser.address,
                [name]: value,
            },
        }));
    };

    const handleGeoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            address: {
                ...prevUser.address,
                geo: {
                    ...prevUser.address.geo,
                    [name]: value,
                },
            },
        }));
    };

    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            company: {
                ...prevUser.company,
                [name]: value,
            },
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md h-screen overflow-y-scroll">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter name"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter username"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter phone number"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            value={user.website}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter website"
                        />
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-800">Address</h3>
                        <div>
                            <label htmlFor="street" className="block text-gray-700 font-medium mb-2">Street</label>
                            <input
                                type="text"
                                id="street"
                                name="street"
                                value={user.address.street}
                                onChange={handleAddressChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter street"
                            />
                        </div>

                        <div>
                            <label htmlFor="suite" className="block text-gray-700 font-medium mb-2">Suite</label>
                            <input
                                type="text"
                                id="suite"
                                name="suite"
                                value={user.address.suite}
                                onChange={handleAddressChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter suite"
                            />
                        </div>

                        <div>
                            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={user.address.city}
                                onChange={handleAddressChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter city"
                            />
                        </div>

                        <div>
                            <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-2">Zipcode</label>
                            <input
                                type="text"
                                id="zipcode"
                                name="zipcode"
                                value={user.address.zipcode}
                                onChange={handleAddressChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter zipcode"
                            />
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-gray-700">Geo</h4>
                            <div>
                                <label htmlFor="lat" className="block text-gray-700 font-medium mb-2">Latitude</label>
                                <input
                                    type="text"
                                    id="lat"
                                    name="lat"
                                    value={user.address.geo.lat}
                                    onChange={handleGeoChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter latitude"
                                />
                            </div>

                            <div>
                                <label htmlFor="lng" className="block text-gray-700 font-medium mb-2">Longitude</label>
                                <input
                                    type="text"
                                    id="lng"
                                    name="lng"
                                    value={user.address.geo.lng}
                                    onChange={handleGeoChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter longitude"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-800">Company</h3>
                        <div>
                            <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">Company Name</label>
                            <input
                                type="text"
                                id="companyName"
                                name="name"
                                value={user.company.name}
                                onChange={handleCompanyChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter company name"
                            />
                        </div>

                        <div>
                            <label htmlFor="catchPhrase" className="block text-gray-700 font-medium mb-2">Catch Phrase</label>
                            <input
                                type="text"
                                id="catchPhrase"
                                name="catchPhrase"
                                value={user.company.catchPhrase}
                                onChange={handleCompanyChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter company catchphrase"
                            />
                        </div>

                        <div>
                            <label htmlFor="bs" className="block text-gray-700 font-medium mb-2">BS</label>
                            <input
                                type="text"
                                id="bs"
                                name="bs"
                                value={user.company.bs}
                                onChange={handleCompanyChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter BS"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;
