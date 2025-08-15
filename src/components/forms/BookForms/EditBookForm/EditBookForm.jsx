import { useEffect, useState } from "react";
import useForm from "../../../../hooks/useForm";
import { FaBookOpen } from "react-icons/fa";
import {
  Button,
  Card,
  Col,
  Form,
  FormCheck,
  FormGroup,
  Image,
  Row,
  Stack,
} from "react-bootstrap";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import CustomInput from "../../../CustomInput";
import { motion } from "framer-motion";
import editBookFields from "../../../../assets/InputFileds/editBookInputField";
import { useSelector } from "react-redux";
import { deletBook, updateBook } from "../../../../services/BookApi";

const EditBookForm = () => {
  const { handleOnChange, form, setForm } = useForm({});
  const [img, setImg] = useState();
  const { _id } = useParams();
  const navigate = useNavigate();
  const [publistDate, setPublishDate] = useState("");
  const [imageToDelete, setImageToDelete] = useState([]);
  const { bookList } = useSelector((state) => state.bookInfo);

  let newBook = bookList?.find((book) => book._id === _id);
  const handleOnChangeToDeleteImage = (e) => {
    const { checked, value } = e.target;
    checked === true
      ? setImageToDelete([...imageToDelete, value])
      : setImageToDelete(imageToDelete?.filter((img) => img !== value));
  };
  useEffect(() => {
    if (!newBook?._id) {
      navigate("/user/admin-book-table");
    } else {
      setForm(newBook);

      const formattedDate = new Date(newBook?.publishedDate)
        .toISOString()
        .split("T")[0];
      setPublishDate(formattedDate);
    }
  }, []);
  console.log(form);
  const formdata = new FormData();

  const handleOnFileChange = (e) => {
    const { files } = e.target;
    setImg(files);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const {
      isbn,
      slug,
      updatedBy,
      lastUpdatedBy,
      __v,
      updatedAt,
      createdBy,
      createdAt,
      ...rest
    } = form;

    for (let key in rest) {
      console.log("this code is setting key to formdata running");
      formdata.append(key, rest[key]);
    }

    if (img?.length) {
      for (let index = 0; index < img.length; index++) {
        formdata.append("images", img[index]);
      }
    }
    if (imageToDelete.length) {
      if (imageToDelete.includes(form.imageUrl)) {
        return alert("You cannot delete the thumbnail");
      }
      formdata.append("imageToDelete", imageToDelete);
    }
    // call api one fordata is available

    const result = await updateBook(formdata);

    for (let key in rest) {
      console.log("this code is setting key to formdata running");
      formdata.delete(key);
    }
    formdata.delete("images");
    formdata.delete("imageToDelete");
    navigate("/user/admin-book-table");
  };
  const handleOnDeleteBook = async (_id) => {
    confirm(
      "Are you sure you want to delete this book? This action cannot be undone."
    );
    if (window.confirm == true) {
      console.log(_id);
      const { status } = await deletBook(_id);
      if (status === "success") {
        navigate("/user/admin-book-table");
      }
    }
  };

  return (
    <div>
      <h2 className="px-3 text-dark">
        <FaBookOpen></FaBookOpen> EDIT BOOK FORM
      </h2>

      <div>
        <hr />
      </div>
      <Row className="">
        <Col className="px-2 ">
          {" "}
          <Link className="text-primary" to="/user/admin-book-table">
            <IoArrowBackOutline className=""></IoArrowBackOutline>Go Back
          </Link>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <div
            style={{ width: "" }}
            className="d-flex  justify-content-center shadow "
            animate={{
              scale: [0, 1],

              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.3, 1],

              repeatDelay: 1,
            }}
          >
            <Card className="px-2 py-2">
              <Form onSubmit={handleOnSubmit}>
                <Stack gap={1} className=" ">
                  {editBookFields.map((item) => {
                    console.log(item);
                    return (
                      <CustomInput
                        className={` px-3`}
                        key={item.name}
                        {...item}
                        value={
                          item.name === "publishedDate"
                            ? publistDate
                            : form[item.name]
                        }
                        onChange={handleOnChange}
                      ></CustomInput>
                    );
                  })}
                  <Row className=" d-flex flex-nowrap gap-2 imgscroll overflow-auto  ">
                    {newBook?.imageList?.map((url, i) => {
                      return (
                        <Col key={i} className="mt-3 ">
                          <FormGroup className="d-flex gap-1">
                            <FormCheck
                              type="radio"
                              name={"imageUrl"}
                              value={url ?? ""}
                              checked={url == form.imageUrl ? true : false}
                              onChange={handleOnChange}
                            ></FormCheck>
                            <Form.Label>Make Thumbnail</Form.Label>
                          </FormGroup>
                          <FormGroup className="d-flex gap-1">
                            <FormCheck
                              type="checkBox"
                              name={"delete"}
                              value={url}
                              onChange={handleOnChangeToDeleteImage}
                            ></FormCheck>
                            <Form.Label>Delete</Form.Label>
                          </FormGroup>
                          <div
                            className="  gap-1"
                            style={{
                              overflow: "auto",
                            }}
                          >
                            <Image
                              thumbnail
                              style={{
                                maxheight: "30vh",
                                display: "inline-block",
                                width: "100%",
                                objectPosition: "center",
                                padding: "5px",
                              }}
                              src={url}
                            />
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                  <Row className="d-flex gap-2">
                    <Col md={4}>
                      {" "}
                      <Form.Label className="fw-bolder  ">
                        Choose files
                        <span className="text-danger fw-bolder ">*</span>
                      </Form.Label>
                      <Form.Control
                        name="images"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleOnFileChange}
                      />
                    </Col>
                    <Col md={3} className="my-1">
                      <Form.Label className="fw-bolder">
                        CAROUSEL
                        <span className="text-danger fw-bolder ">*</span>
                      </Form.Label>
                      <Form.Switch
                        className="d-flex align-items-center"
                        type="switch"
                        id="custom-switch"
                        name="Carousel"
                        onChange={handleOnChange}
                        value={form.Carousel}
                        checked={form.Carousel == "Yes" ? true : false}
                        label={
                          <span className="mx-3">
                            {form.Carousel == "Yes" ? "YES" : "No"}
                          </span>
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Label className="fw-bolder">
                        Status <span className="text-danger fw-bolder ">*</span>
                      </Form.Label>
                      <Form.Switch
                        className="d-flex align-items-center"
                        type="switch"
                        id="custom-switch"
                        name="status"
                        onChange={handleOnChange}
                        value={form.status}
                        checked={form.status == "active" ? true : false}
                        label={
                          <span className="mx-3">
                            {form?.status ? form.status : "InActive"}
                          </span>
                        }
                      />
                    </Col>
                  </Row>

                  <Button variant={"warning"} type="submit">
                    Update
                  </Button>
                </Stack>
              </Form>
              <div className=" d-grid mt-2">
                <Button
                  onClick={() => handleOnDeleteBook(_id)}
                  variant="danger"
                  type="submit"
                >
                  Delete This Book
                </Button>
              </div>
            </Card>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <motion.div>
            <div>
              <strong>Last updated by</strong>:{form?.createdBy?.name || "N/A"}
            </div>
            <div>
              <strong>Added by by</strong>:{form?.lastUpdatedBy?.name || "N/A"}
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default EditBookForm;
