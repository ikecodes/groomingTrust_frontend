import React, { useEffect, useState } from 'react';
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
import { Col, Row } from 'react-bootstrap';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setMessages(messages);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className='spinner2'></div>;

  const { SearchBar } = Search;
  const sizePerPage = 10;
  const pageOptions = {
    sizePerPage: sizePerPage,
    totalSize: messages?.length, // replace later with size(users),
    custom: true,
  };

  const defaultSorted = [
    {
      dataField: 'id', // if dataField is not match to any column you defined, it will be ignored.
      order: 'desc', // desc or asc
    },
  ];

  const messageListColumns = [
    {
      text: 'id',
      dataField: 'id',
      sort: true,
      hidden: true,
      formatter: (message) => <>{message.id}</>,
    },
    {
      dataField: 'fullName',
      text: 'Full Name',
      formatter: (cellContent, message) => (
        <>
          <span>{message.fullName}</span>
        </>
      ),
    },
    {
      dataField: 'email',
      text: 'Email',
      sort: true,
    },
    {
      dataField: 'message',
      text: 'Message',
      sort: true,
      formatter: (cellContent, message) => (
        <>
          <span className='text-secondary'>{message.message}</span>
        </>
      ),
    },
    {
      dataField: 'delete',
      text: 'Delete',
      sort: true,
      formatter: (cellContent, application) => (
        <div className='text-center text-danger pe-auto'>
          <IoMdTrash size={20} style={{ cursor: 'pointer' }} />
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
            columns={messageListColumns}
            data={messages}
          >
            {({ paginationProps, paginationTableProps }) => {
              return (
                <ToolkitProvider
                  keyField={keyField}
                  data={messages}
                  columns={messageListColumns}
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
                        {!messages.length ? (
                          <p>You currently do not have any applications</p>
                        ) : null}
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

export default AdminMessages;
