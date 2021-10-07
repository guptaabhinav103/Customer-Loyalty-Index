import React from 'react'

function Data() {
    // const [contact, setContact] = useState(null);
    // componentDidMount() {
    //     console.log('mounted');
    //     db.collection('students')
    //     .get().then(snapshot => {console.log(snapshot)})
    //     .catch(error => console.log(error))
    // }
    return (
        <div className="table-container">
            <div class="table-title">
                <h3>Data Table</h3>
            </div>
            <table class="table-fill">
                <thead>
                    <tr>
                        <th class="text-left">UserName</th>
                        <th class="text-left">Coins</th>
                    </tr>
                </thead>
                <tbody class="table-hover">
                    <tr>
                        <td class="text-left">raj</td>
                        <td class="text-left">100</td>
                    </tr>
                    <tr>
                        <td class="text-left">abhinav</td>
                        <td class="text-left">100</td>
                    </tr>
                    <tr>
                        <td class="text-left">vishal</td>
                        <td class="text-left">50</td>
                    </tr>
                    {/*<tr>
                        <td class="text-left">User 3 </td>
                        <td class="text-left">coins</td>
                    </tr>
                    <tr>
                        <td class="text-left">User 4 </td>
                        <td class="text-left">coins</td>
                    </tr>
                    <tr>
                        <td class="text-left">User 5 </td>
                        <td class="text-left">coins</td>
                    </tr>
                    <tr>
                        <td class="text-left">User 6 </td>
                        <td class="text-left">coins</td>
                    </tr> */}

                </tbody>
            </table>
        </div>
    )
}

export default Data
