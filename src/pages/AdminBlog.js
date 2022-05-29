import React, { useEffect, useState } from "react";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import { Col, Row } from "react-bootstrap";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Editor } from "@tinymce/tinymce-react";
import Toast from "../utils/Toast";
import AdminLayout from "../layouts/AdminLayout";
import Button from "../shared/Button";
import slugify from "slugify";

const AdminBlog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ploading, setPloading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: "",
    slug: "",
    description: "",
    body: "",
    imageRef: "",
    createdAt: Timestamp.now().toDate(),
    isFeatured: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const handleBodyChange = (text) => {
    setFormData({ ...formData, body: text });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.author ||
      !formData.image ||
      !formData.description ||
      !formData.body
    ) {
      Toast("Please fill all the fields", "info");
      return;
    }

    setLoading(true);
    const slug = slugify(formData.title, { lower: true });
    const imageRef = `/articles/${Date.now()}${formData.image.name}`;
    const storageRef = ref(storage, imageRef);

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articlesRef = collection(db, "articles");
          addDoc(articlesRef, {
            title: formData.title,
            author: formData.author,
            imageUrl: url,
            slug: slug,
            description: formData.description,
            body: formData.body,
            imageRef,
            createdAt: Timestamp.now().toDate(),
            isFeatured: false,
          })
            .then(() => {
              Toast("Article added successfully", "success");
              setLoading(false);
              setFormData({
                ...formData,
                title: "",
                author: "",
                description: "",
                body: "",
              });
            })
            .catch((err) => {
              Toast("Error adding article", "error");
            });
        });
      }
    );
  };

  const handleFeatured = async (value, id) => {
    const articleRef = doc(db, "articles", id);
    try {
      await updateDoc(articleRef, {
        isFeatured: value,
      });
      // Toast("success", "success");
    } catch (error) {
      Toast("error", "error");
    }
  };

  useEffect(() => {
    setPloading(true);
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setArticles(articles);
      setPloading(false);
    });
    return () => unsubscribe();
  }, []);

  if (ploading) return <div className='spinner2'></div>;
  const { SearchBar } = Search;
  const sizePerPage = 10;
  const pageOptions = {
    sizePerPage: sizePerPage,
    totalSize: articles?.length,
    custom: true,
  };

  const defaultSorted = [
    {
      dataField: "id", // if dataField is not match to any column you defined, it will be ignored.
      order: "desc", // desc or asc
    },
  ];

  const articlesListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      formatter: (article) => <>{article.id}</>,
    },
    {
      dataField: "title",
      text: "Title",
      formatter: (cellContent, article) => (
        <>
          <span>{article.title}</span>
        </>
      ),
    },
    {
      dataField: "isFeatured",
      text: "Featured",
      sort: true,
      formatter: (cellContent, article) => (
        <div
          role='button'
          onClick={() => handleFeatured(!article.isFeatured, article.id)}
        >
          {article.isFeatured ? (
            <span className='badge bg-success'>featured</span>
          ) : (
            <span className='badge bg-secondary'>not-featured</span>
          )}
        </div>
      ),
    },
    {
      dataField: "description",
      text: "Description",
      sort: true,
      formatter: (cellContent, article) => (
        <>
          <span className='text-secondary'>{article.description}</span>
        </>
      ),
    },
  ];

  const keyField = "id";
  return (
    <AdminLayout>
      <form className='p-2' onSubmit={handlePublish}>
        <p className='text-secondary text-center'>
          Article date is automatically set to todays date
        </p>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='title' className='form-label'>
            Enter Article title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            className='form-control'
            value={formData.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='author' className='form-label'>
            Enter Article author name
          </label>
          <input
            type='text'
            name='author'
            id='author'
            placeholder='Author'
            className='form-control'
            value={formData.author}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='mb-3 form-group w-50'>
          <label htmlFor='image' className='form-label'>
            Select Article display image
          </label>
          <input
            type='file'
            name='image'
            id='image'
            accept='image/*'
            className='form-control'
            onChange={(e) => handleImageChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <textarea
            name='description'
            id='text'
            cols='60'
            rows='5'
            placeholder='Preview text'
            className='bg-light form-control'
            value={formData.description}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className='w-75'>
          <Editor
            apiKey='3i6uyqg8xp5acqtlcd6i6liqcwdfae67pkhixi393epj5ef1'
            textareaName='content'
            value={formData.body}
            init={{
              height: 300,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(text) => handleBodyChange(text)}
          />
        </div>
        <div className='mt-3'>
          <Button title='submit' primary disabled={loading} loading={loading} />
        </div>
      </form>
      <div className='mt-5'>
        <p className='text-secondary text-center'>
          Set articles you want to be featured on the home slides (you can only
          have two at a time)
        </p>
        <PaginationProvider
          pagination={paginationFactory(pageOptions)}
          keyField={keyField}
          columns={articlesListColumns}
          data={articles}
        >
          {({ paginationProps, paginationTableProps }) => {
            return (
              <ToolkitProvider
                keyField={keyField}
                data={articles}
                columns={articlesListColumns}
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
                          "table align-middle table-nowrap table-hover table-light"
                        }
                        bordered={false}
                        striped={false}
                        responsive
                      />
                      {!articles.length ? (
                        <p>You currently do not have any article</p>
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
    </AdminLayout>
  );
};

export default AdminBlog;
