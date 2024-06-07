import React from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Book Title</th>
                                            <th scope="col">Author</th>
                                            <th scope="col">Published Year</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">The Alchemist</td>
                                            <td>Poulo Coelho</td>
                                            <td>2001</td>
                                            <td>259</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Mathilukal</td>
                                            <td>Vaikkom Muhammed Basheer</td>
                                            <td>1997</td>
                                            <td>219</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">The Alchemist</td>
                                            <td>Poulo Coelho</td>
                                            <td>2001</td>
                                            <td>259</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Mathilukal</td>
                                            <td>Vaikkom Muhammed Basheer</td>
                                            <td>1997</td>
                                            <td>219</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">The Alchemist</td>
                                            <td>Poulo Coelho</td>
                                            <td>2001</td>
                                            <td>259</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Mathilukal</td>
                                            <td>Vaikkom Muhammed Basheer</td>
                                            <td>1997</td>
                                            <td>219</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">The Alchemist</td>
                                            <td>Poulo Coelho</td>
                                            <td>2001</td>
                                            <td>259</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Mathilukal</td>
                                            <td>Vaikkom Muhammed Basheer</td>
                                            <td>1997</td>
                                            <td>219</td>
                                        </tr>
                                        
                                        
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall