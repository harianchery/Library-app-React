import React from 'react'
import Navbar from './Navbar'

const AddBook = () => {
  return (
    <div>
        <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Book Title</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Category</label>
                                    <select name="" id="" className="form-control">
                                        <option value="Science">Science</option>
                                        <option value="Fiction">Fiction</option>
                                        <option value="Horror">Horror</option>
                                    </select>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Publish Year</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Author</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Description</label>
                                    <textarea name="" id="" className="form-control"></textarea>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Distributor</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Publisher</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Price</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Edition</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success">Add New</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  )
}

export default AddBook