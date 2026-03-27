
import { useState, useEffect } from 'react';


function UserData() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/users') //useEffectacts as a promise.
            .then(response => response.json())
            .then(users => setUsers(users))
            .catch(error => console.log(error))
        console.log("User Data from db.json", users)

    }, []);

    console.log("User Data", users)
   // console.log("User name from db.json", users[0].name)
   console.log("User name from db.json", users.map(users => users.name))


    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default UserData;