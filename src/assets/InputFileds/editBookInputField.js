// author
// :
// "Mark Lee"
// createdAt
// :
// "2025-03-27T01:58:34.571Z"
// createdBy
// :
// {name: 'Admin User', adminId: '507f1f77bcf86cd799439013'}
// description
// :
// "A step-by-step guide to becoming a successful digital nomad, offering insights into the best tools, strategies, and destinations for remote workers."
// genre
// :
// "Business"
// imageList
// :
// (2) ['https://via.placeholder.com/300x400.png?text=Digital+Nomad+1', 'https://via.placeholder.com/300x400.png?text=Digital+Nomad+2']
// imageUrl
// :
// "https://via.placeholder.com/300x400.png?text=Digital+Nomad"
// isbn
// :
// "978-1-234-56789-2"
// lastUpdatedBy
// :
// {name: 'Admin User', adminId: '507f1f77bcf86cd799439014'}
// publishedDate
// :
// "2023-08-22T00:00:00.000Z"
// slug
// :
// "digital-nomad"
// smallDescription
// :
// "The ultimate guide to working remotely from anywhere."
// status
// :
// "active"
// stockQuantity
// :
// 20
// title
// :
// "Digital Nomad"
// updatedAt
// :
// "2025-03-27T01:58:34.571Z"
// updatedBy
// :
// null
// __v
// :
// 0
// _id
// :
// "67e4b0ca3b1835e3068ad0ec"

const editBookFields = [
  {
    label: "Title",
    type: "text",
    name: "title",

    required: true,
  },
  {
    label: "Slug",
    type: "text",
    name: "slug",
    disable: true,
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
    type: "text",
    name: "isbn",
    disable: true,
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
export default editBookFields;
