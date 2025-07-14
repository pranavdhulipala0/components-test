export {};
// import FormBuilder from "./FormBuilder";
// import { ResponsiveLayout } from "../layout";
// const FormBuilderReference: React.FC = () => {
//   const [formData, setFormData] = useState<Record<string, any>>({});
//   const [customErrors, setCustomErrors] = useState<string[]>([]);
//   const axiosPrivate = useAxiosPrivate();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axiosPrivate.get("/leads");
//         console.log(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);
//   useEffect(()=>{
//     console.log(formData);
//   },[formData])
//   const fields= [
//     {
//       label: "Full Name",
//       name: "full_name",
//       type: "input-box",
//       props: {
//         label: "Full Name",
//         placeholder: "Enter your full name",
//         mandatory: true,
//       },
//     },
//     {
//       label: "Email",
//       name: "email",
//       type: "input-box",
//       props: {
//         label: "Email",
//         placeholder: "Enter your email",
//         keyboardType: "email-address",
//         mandatory: true,
//       },
//     },
//     {
//       label: "Date of Birth",
//       name: "dob",
//       type: "datepicker",
//       props: {
//         label: "Date of Birth",
//         placeholder: "Select date of birth",
//         mandatory: true,
//       },
//     },
//     {
//       label: "Gender",
//       name: "gender",
//       type: "radio-input",
//       props: {
//         label: "Select Gender",
//         options: [
//           { label: "Male", value: "male" },
//           { label: "Female", value: "female" },
//         ],
//         mandatory: true,
//       },
//     },
//     {
//       label: "Hobbies",
//       name: "hobbies",
//       type: "dropdown",
//       props: {
//         label: "Select Hobbies",
//         items: [
//           { label: "Reading", value: "reading" },
//           { label: "Music", value: "music" },
//           { label: "Sports", value: "sports" },
//         ],
//       },
//     },
//     {
//       label: "Skills",
//       name: "skills",
//       type: "multi-select-box",
//       sectionBreak: true,
//       props: {
//         label: "Select Skills",
//         items: [
//           { label: "React", value: "react" },
//           { label: "Node.js", value: "node" },
//           { label: "Python", value: "python" },
//         ],
//       },
//     },
//   ];
//   const handleSubmit = () => {
//     console.log("Form submitted with data:", formData);
//     alert("Form submitted successfully!");
//   };
//   const handleCancel = () => {
//     console.log("Form cancelled");
//   };
//   return (
//     <ResponsiveLayout
//     title={"Form Builder"}
//     showBack >
//     <div style={{ padding: 20 }}>
//       <FormBuilder
//         fields={fields}
//         formData={formData}
//         setFormData={setFormData}
//         customErrors={customErrors}
//         setCustomErrors={setCustomErrors}
//         functions={{
//           submit: { label: "Submit", function: handleSubmit },
//           cancel: { label: "Cancel", function: handleCancel },
//         }}
//         inputColumns={2} 
//       />
//     </div>
//     </ResponsiveLayout>
//   );
// };
// export default FormBuilderReference;
