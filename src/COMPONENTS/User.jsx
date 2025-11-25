import React from "react";

const User = () => {
  return (
    <main>
      <div className="bg-blue-300/10 block text-lg font-bold text-center">
        Welcome User
      </div>

      <section id="system-users" className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4 text-center">System Users</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  id
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  username
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  email
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody
              className="bg-white divide-y divide-gray-100 text-sm text-gray-600"
              id="tbody"
            ></tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default User;
