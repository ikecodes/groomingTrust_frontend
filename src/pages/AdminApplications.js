import React, { useState, useEffect } from 'react';
import { IoMdTrash } from 'react-icons/io';
import AdminLayout from '../layouts/AdminLayout';
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {
  Search,
} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import DeleteModal from '../utils/DeleteModal';
import { Col, Row } from 'react-bootstrap';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    const applicationsRef = collection(db, 'applications');
    const q = query(applicationsRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const applications = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setApplications(applications);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  if (loading) return <div className='spinner2'></div>;

  const { SearchBar } = Search;
  const sizePerPage = 10;
  const pageOptions = {
    sizePerPage: sizePerPage,
    totalSize: applications?.length, // replace later with size(users),
    custom: true,
  };

  const defaultSorted = [
    {
      dataField: 'id', // if dataField is not match to any column you defined, it will be ignored.
      order: 'desc', // desc or asc
    },
  ];

  // const selectRow = {
  //   mode: 'checkbox',
  // };

  const applicationListColumns = [
    {
      text: 'id',
      dataField: 'id',
      sort: true,
      hidden: true,
      formatter: (application) => <>{application.id}</>,
    },
    {
      dataField: 'title',
      text: 'Title',
      formatter: (cellContent, application) => (
        <>
          <span>{application.title}</span>
        </>
      ),
    },
    {
      dataField: 'fullName',
      text: 'Full Name',
      formatter: (cellContent, application) => (
        <>
          <span>{application.fullName}</span>
        </>
      ),
    },
    {
      dataField: 'email',
      text: 'Email',
      sort: true,
      formatter: (cellContent, application) => (
        <>
          <span className='mb-1'>{application.email}</span>
        </>
      ),
    },
    {
      dataField: 'dob',
      text: 'D.O.B',
      sort: true,
      formatter: (cellContent, application) => (
        <>
          <span className='mb-1 text-nowrap'>{application.dob}</span>
        </>
      ),
    },
    {
      dataField: 'phone',
      text: 'Phone',
      sort: true,
      formatter: (cellContent, application) => (
        <>
          <span className='mb-1 text-nowrap'>{application.phone}</span>
        </>
      ),
    },
    {
      dataField: 'reason',
      text: 'Reason',
      sort: true,
      formatter: (cellContent, application) => (
        <>
          <span className='text-secondary'>{application.reason}</span>
        </>
      ),
    },
    {
      dataField: 'delete',
      text: 'Delete',
      sort: true,
      formatter: (cellContent, application) => (
        <div className='text-center text-danger pe-auto'>
          <IoMdTrash
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={() => setModalShow(true)}
          />
        </div>
      ),
    },
  ];

  const keyField = 'id';

  return (
    <AdminLayout>
      <div className='w-75' style={{ fontSize: '0.8rem' }}>
        <h4 className='text-capitalize'>Applications list</h4>
        <div>
          <PaginationProvider
            pagination={paginationFactory(pageOptions)}
            keyField={keyField}
            columns={applicationListColumns}
            data={applications}
          >
            {({ paginationProps, paginationTableProps }) => {
              return (
                <ToolkitProvider
                  keyField={keyField}
                  data={applications}
                  columns={applicationListColumns}
                  bootstrap4
                  search
                >
                  {(toolkitProps) => (
                    <>
                      <div className='row mb-2'>
                        <div className='col-lg-6'>
                          <div className='search-box ms-2 mb-2 d-inline-block'>
                            <div className='position-relative'>
                              <SearchBar {...toolkitProps.searchProps} />
                              <i className='bx bx-search-alt search-icon' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='table-responsive'>
                        <BootstrapTable
                          keyField={keyField}
                          {...toolkitProps.baseProps}
                          {...paginationTableProps}
                          // selectRow={selectRow}
                          defaultSorted={defaultSorted}
                          classes={
                            'table align-middle table-nowrap table-hover'
                          }
                          bordered={false}
                          striped={false}
                          responsive
                        />
                        {!applications.length ? ( // Shows when there are no applications
                          <p>You currently do not have any applications</p>
                        ) : null}

                        <DeleteModal // This is a modal for deleting messages
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                      <Row className='align-items-md-center mt-30'>
                        <Col className='pagination pagination-rounded justify-content-end mb-2'>
                          <PaginationListStandalone {...paginationProps} />
                        </Col>
                      </Row>
                    </>
                  )}
                </ToolkitProvider>
              );
            }}
          </PaginationProvider>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminApplications;
