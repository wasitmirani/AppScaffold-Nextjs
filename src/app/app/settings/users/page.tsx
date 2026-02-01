import Breadcrumb from "../../../components/Breadcrumb";
import React from 'react';
import UserTable from "./partials/UserTable";
const UserPage: React.FC = () => {
    return (

        <>
        
          <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
               
                <Breadcrumb items={[{ label: 'Settings', link: '/' }, { label: 'Users' }]} current="Users" />

                <div className="btn-list">
                    <button className="btn btn-white btn-wave">
                        <i className="ri-filter-3-line align-middle me-1 lh-1"></i> Filter
                    </button>
                    <button className="btn btn-primary btn-wave me-0">
                        <i className="ri-share-forward-line me-1"></i> Share
                    </button>
                </div>
            </div>   

            {/* Row Started */}
            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex flex-wrap gap-1 project-list-main">
                                    <a href="#" className="btn btn-primary me-2"><i className="ri-add-line me-1 fw-medium align-middle"></i>New Project</a>
                                    {/* <select className="form-control">
                                        <option value="">Sort By</option>
                                        <option value="Newest">Newest</option>
                                        <option value="Date Added">Date Added</option>
                                        <option value="Type">Type</option>
                                        <option value="A - Z">A - Z</option>
                                    </select> */}
                                </div>
                                <div className="avatar-list-stacked">
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="/assets/images/faces/1.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="/assets/images/faces/2.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="/assets/images/faces/8.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="/assets/images/faces/12.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="/assets/images/faces/10.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="/assets/images/faces/4.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="/assets/images/faces/5.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="/assets/images/faces/13.jpg" alt="img" />
                                    </span>
                                    <a className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                                        +8
                                    </a>
                                </div>
                                <div className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search Project" aria-label="Search" />
                                    <button className="btn btn-light" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End Row */}

            {/*  Start::row-2  */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card custom-card overflow-hidden">
                                <div className="card-body p-0">
                                        <UserTable />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  End::row-2 */}
        </>
    );

};



export default UserPage;