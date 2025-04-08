



const newBookFields = [
  {
    label: "Title",
    type: "text",
    name: "title",
    placeholder: "book tittile",
    required: true,
   
  },
  {
    label: "Author",
    type: "text",
    name: "author",
    placeholder: "Author Name",
    required: true,
  },
  {
    label: "ISBN",
    type: "number",
    name: "isbn",
    placeholder: "Enter isbn number",
    required: true,
  },
  {
    label: "Genre",
    type: "text",
    name: "genre",
    placeholder: "enter genre",
  },
  {
    label: "Publish Year",
    type: "number",
    name: "publishedDate",
    placeholder: "enter publish",
    max: new Date().getFullYear(),
    min: 1500,
  },
  {
    label: "Small Description",
    type: "text",
    name: "smallDescription",
    placeholder: "enter Small Summary",
  },
  {
    label: "Description",
    type: "text",
    name: "description",
    placeholder: " Enter Book Description ",
    as: "textarea",
  },
  {
    label: "Quantity",
    type: "number",
    name: "stockQuantity",
    placeholder: " Enter Quantity ",
    min: 1,
  },
];
export default newBookFields;
