import React, { useState, useEffect } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      }).catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);


  return (
    <main>
      <div className="bg-blue-300/10 block text-lg font-bold text-center py-4">
        Welcome User
      </div>

      <section id="system-users" className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4 text-center">System Users</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">id</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">username</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">email</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr className="hover:bg-gray-50" key={user.id}>
                  <td className="px-4 py-2 text-sm text-gray-900">{user.id}</td>
                  <td className="px-4 py-2 text-sm text-gray-900">{user.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-900">{user.username}</td>
                  <td className="px-4 py-2 text-sm text-gray-900">{user.email}</td>
                  <td className="px-4 py-2">
                    <button className="p-1 bg-transparent cursor-pointer inline-flex items-center justify-center hover:bg-gray-100 rounded border-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default User;