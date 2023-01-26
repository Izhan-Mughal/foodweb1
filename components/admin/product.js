const Product = () => {


    return (
        <div className="card">
            <div className="card-header">
                <h3 className="mb-0">Your Products <a href="">Add New</a> </h3>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1357</td>
                                <td>March 45, 2020</td>
                                <td>Processing</td>
                                <td>$125.00 for 2 item</td>
                                <td><a href="#" className="btn-small d-block">View</a></td>
                            </tr>
                            <tr>
                                <td>#2468</td>
                                <td>June 29, 2020</td>
                                <td>Completed</td>
                                <td>$364.00 for 5 item</td>
                                <td><a href="#" className="btn-small d-block">View</a></td>
                            </tr>
                            <tr>
                                <td>#2366</td>
                                <td>August 02, 2020</td>
                                <td>Completed</td>
                                <td>$280.00 for 3 item</td>
                                <td><a href="#" className="btn-small d-block">View</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Product;