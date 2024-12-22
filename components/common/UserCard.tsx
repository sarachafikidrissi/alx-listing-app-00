import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-700">@{username}</p>
            <p className="text-gray-600">{email}</p>
            <p className="text-gray-500">Phone: {phone}</p>
            <p className="text-gray-500">Website: <a href={`https://${website}`} className="text-blue-500">{website}</a></p>
            <div className="mt-4">
                <h3 className="font-semibold">Address:</h3>
                <p>{address.street}, {address.suite}</p>
                <p>{address.city}, {address.zipcode}</p>
                <p>Geo: {address.geo.lat}, {address.geo.lng}</p>
            </div>
            <div className="mt-4">
                <h3 className="font-semibold">Company:</h3>
                <p>{company.name}</p>
                <p>{company.catchPhrase}</p>
            </div>
        </div>
    )
}


export default UserCard;