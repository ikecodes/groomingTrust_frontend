import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import Layout from '../layouts/Layout';
import ImageGallery from 'react-image-gallery';
import colors from '../constants/colors';
import { IoMdTrash } from 'react-icons/io';
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {
  Search,
} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { Col, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import DeleteModal from '../utils/DeleteModal';

const GalleryC = () => {
  const admin = localStorage.getItem('admin');
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [deleteid, setDeleteid] = useState(null);
  const [deleteref, setDeleteref] = useState('');
  const [imageref, setImageref] = useState('');
  const IMAGES = gallery.map((item) => {
    return {
      original: item?.imageUrl,
      thumbnail: item?.imageUrl,
      description: item?.caption,
    };
  });

  useEffect(() => {
    setLoading(true);
    const galleryRef = collection(db, 'gallery');
    const q = query(galleryRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const gallery = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setGallery(gallery);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const { SearchBar } = Search;
  const sizePerPage = 10;
  const pageOptions = {
    sizePerPage: sizePerPage,
    totalSize: gallery?.length, // replace later with size(users),
    custom: true,
  };

  const defaultSorted = [
    {
      dataField: 'id', // if dataField is not match to any column you defined, it will be ignored.
      order: 'desc', // desc or asc
    },
  ];

  const galleryListColumns = [
    {
      text: 'id',
      dataField: 'id',
      sort: true,
      hidden: true,
      formatter: (gallery) => <>{gallery.id}</>,
    },
    {
      dataField: 'caption',
      text: 'Captions',
      formatter: (cellContent, gallery) => (
        <>
          <span>{gallery.caption}</span>
        </>
      ),
    },
    {
      dataField: 'imageUrl',
      text: 'Thumbnail',
      formatter: (cellContent, application) => (
        <>
          <img src={application.imageUrl} alt='' height={50} width={50} />
        </>
      ),
    },
    {
      dataField: 'delete',
      text: 'Delete',
      sort: true,
      formatter: (cellContent, gallery) => (
        <div className='text-center text-danger pe-auto'>
          <IoMdTrash
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setModalShow(true);
              setDeleteid(gallery.id);
              setDeleteref('gallery');
              setImageref(gallery.imageRef);
            }}
          />
        </div>
      ),
    },
  ];

  const keyField = 'id';
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='gallery'>
      <div
        style={{
          display: 'block',
          minHeight: '1px',
          width: '100%',
          overflow: 'auto',
          textAlign: 'center',
          background: `${colors.grey}`,
        }}
      >
        {IMAGES.length > 0 && (
          <ImageGallery
            items={IMAGES}
            thumbnailPosition='top'
            showPlayButton={false}
            showBullets={true}
            showIndex={true}
          />
        )}
      </div>
      {admin && (
        <div className='w-75 mt-5' style={{ fontSize: '0.8rem' }}>
          {/* <h4 className='text-capitalize'>Applications list</h4> */}
          <div>
            <PaginationProvider
              pagination={paginationFactory(pageOptions)}
              keyField={keyField}
              columns={galleryListColumns}
              data={gallery}
            >
              {({ paginationProps, paginationTableProps }) => {
                return (
                  <ToolkitProvider
                    keyField={keyField}
                    data={gallery}
                    columns={galleryListColumns}
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
                          {!gallery.length ? ( // Shows when there are no applications
                            <p>You currently do not have any image</p>
                          ) : null}

                          <DeleteModal // This is a modal for deleting messages
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            deleteid={deleteid}
                            deleteref={deleteref}
                            imageref={imageref}
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
      )}
    </Layout>
  );
};

export default GalleryC;
