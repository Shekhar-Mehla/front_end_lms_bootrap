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
import { updateBook } from "../../../../services/BookApi";

const EditBookForm = () => {
  const { handleOnChange, form, setForm } = useForm({});
  const [img, setImg] = useState();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [publistDate, setPublishDate] = useState("");
  const [thumbnail, setThumbanil] = useState("");

  const { bookList } = useSelector((state) => state.bookInfo);

  let newBook = bookList?.find((book) => book.slug == slug);

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

  const formdata = new FormData();

  const handleOnFileChange = (e) => {
    const { files } = e.target;
    setImg(files);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    for (let key in form) {
      formdata.append(key, form[key]);
    }

    if (img.length) {
      for (let index = 0; index < img.length; index++) {
        formdata.append("images", img[index]);
      }
    }
    // call api one fordata is available
    const result = await updateBook(formdata);

    formdata.delete("images");
  };

  return (
    <div>
      <h2 className="px-3 text-dark">
        <FaBookOpen></FaBookOpen> EDIT BOOK FORM{" "}
      </h2>

      <div>
        <hr />
      </div>
      <Row>
        <Col md={6} className="px-2 d-flex flex-wrap ">
          {" "}
          <Link className="text-primary" to="/user/admin-book-table">
            <IoArrowBackOutline className=""></IoArrowBackOutline>Go Back
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <motion.div
            style={{ width: "" }}
            className="d-flex justify-content-center shadow "
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
            <div>
              <img src="" alt="" />
            </div>
            <form onSubmit={handleOnSubmit} className="card px-5 py-3">
              <Stack gap={1} className=" ">
                {editBookFields.map((item) => {
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
                <Row className="d-flex px-2 overflow-auto">
                  {newBook?.imageList?.map((url, i) => {
                    console.log(url);
                    console.log(form.imageUrl);
                    return (
                      <Col key={i} className="mt-3" style={{ width: "250px" }}>
                        <FormGroup className="d-flex gap-1">
                          <FormCheck
                            type="radio"
                            name={"imageUrl"}
                            value={url}
                            checked={url == form.imageUrl ? true : false}
                            onChange={handleOnChange}
                          ></FormCheck>
                          <Form.Label>Make Thumbnail</Form.Label>
                        </FormGroup>
                        <Image
                          thumbnail
                          style={{ objectFit: "center", width: "100%" }}
                          src={url}
                        />
                      </Col>
                    );
                  })}
                </Row>
                <Row className="d-flex gap-2">
                  <Col md={6} sm={6}>
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
                      required
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

                <Button varient={"primary"} type="submit">
                  Update
                </Button>
              </Stack>
            </form>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default EditBookForm;
