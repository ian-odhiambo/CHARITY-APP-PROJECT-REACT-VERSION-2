import React from 'react'

const Dashboard = () => {
  return (
    <main className="mb-6">
      <div className="inline-block text-xl p-3 px-8 font-bold">Welcome User</div>

      <div className="flex justify-between gap-6">
        <div className="w-1/4 bg-teal-600 text-white flex flex-col items-center justify-center gap-6 min-h[200px]">
          <h3>70</h3>
          <p>Users</p>
        </div>

        <div className="w-1/4 bg-teal-600 text-white flex flex-col items-center justify-center gap-6 min-h[200px]">
          <h3>70</h3>
          <p>Users</p>
        </div>

        <div className="w-1/4 bg-teal-600 text-white flex flex-col items-center justify-center gap-6 min-h[200px]">
          <h3>70</h3>
          <p>Users</p>
        </div>

        <div className="w-1/4 bg-teal-600 text-white flex flex-col items-center justify-center gap-6 min-h[200px]">
          <h3>70</h3>
          <p>Users</p>
        </div>
      </div>

      <section id="system-users">
        <h2 className="font-bold text-center">System Users</h2>
        <div>
          <table className="w-full">
            <thead className="bg-teal-500 text-white">
              <th className="px-1 py-3">#</th>
              <th className="text-left p-1">First Name</th>
              <th className="text-left p-1">Surname</th>
              <th className="text-left p-1">Email</th>
              <th className="text-left p-1">Username</th>
              <th className="text-left p-1">Phone</th>
              <th className="text-left p-1">DoB</th>
              <th className="text-left p-1">Gender</th>
            </thead>

            <tbody>
              <tr className="odd:hover:bg-gray-200">
                <td className="text-left p-1">1</td>
                <td className="text-left p-1">John</td>
                <td className="text-left p-1">Wick</td>
                <td className="text-left p-1">john@wick.com</td>
                <td className="text-left p-1">johnwick</td>
                <td className="text-left p-1">+254712345678</td>
                <td className="text-left p-1">07/07/1970</td>
                <td className="text-left p-1">Male</td>
              </tr>

              <tr className="odd:hover:bg-gray-200">
                <td className="text-left p-1">2</td>
                <td className="text-left p-1">Jane</td>
                <td className="text-left p-1">Smith</td>
                <td className="text-left p-1">jane@smith.com</td>
                <td className="text-left p-1">janesmith</td>
                <td className="text-left p-1">+254723456789</td>
                <td className="text-left p-1">15/03/1985</td>
                <td className="text-left p-1">Female</td>
              </tr>

              <tr className="odd:hover:bg-gray-200">
                <td className="text-left p-1">3</td>
                <td className="text-left p-1">Michael</td>
                <td className="text-left p-1">Johnson</td>
                <td className="text-left p-1">michael@johnson.com</td>
                <td className="text-left p-1">michaelj</td>
                <td className="text-left p-1">+254734567890</td>
                <td className="text-left p-1">22/11/1992</td>
                <td className="text-left p-1">Male</td>
              </tr>

              <tr className="odd:hover:bg-gray-200">
                <td className="text-left p-1">4</td>
                <td className="text-left p-1">Sarah</td>
                <td className="text-left p-1">Williams</td>
                <td className="text-left p-1">sarah@williams.com</td>
                <td className="text-left p-1">sarahw</td>
                <td className="text-left p-1">+254745678901</td>
                <td className="text-left p-1">08/09/1988</td>
                <td className="text-left p-1">Female</td>
              </tr>

              <tr className="odd:hover:bg-gray-200">
                <td className="text-left p-1">5</td>
                <td className="text-left p-1">David</td>
                <td className="text-left p-1">Brown</td>
                <td className="text-left p-1">david@brown.com</td>
                <td className="text-left p-1">davidbrown</td>
                <td className="text-left p-1">+254756789012</td>
                <td className="text-left p-1">14/06/1995</td>
                <td className="text-left p-1">Male</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Dashboard