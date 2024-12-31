import * as Yup from "yup";

export const companyValidationSchema = Yup.object({
  title: Yup.string().required("Model is required"),
  
  year: Yup.number()
    .typeError("Price must be a valid number")
    .positive("Price must be a positive number")
    .required("Price is required"),
  
  image: Yup.mixed()
    .required("Image is required")
    .test("fileSize", "File size must be less than 2MB", (value: any) =>
      value ? value.size <= 2 * 1024 * 1024 : false
    ),
});
