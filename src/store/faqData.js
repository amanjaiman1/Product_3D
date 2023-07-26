import color from "./../assets/faq Icons/color.webp";
import logo from "./../assets/faq Icons/logo.webp";
import feature from "./../assets/faq Icons/feature.webp";
import additional from "./../assets/faq Icons/additional.webp";
import cost from "./../assets/faq Icons/cost.webp";
import download from "./../assets/faq Icons/download.webp";
import maximum from "./../assets/faq Icons/maximum.webp";
import preview from "./../assets/faq Icons/preview.webp";
import remove from "./../assets/faq Icons/remove.webp";
import restriction from "./../assets/faq Icons/restriction.webp";
const questionsAnswers = [
  {
    id: 1,
    icon: color,
    question: "How many colors available?",
    answer:
      "This customisation application offers a diverse range of t-shirt colours to cater to various styles and the depending moods of the user",
  },
  {
    id: 2,
    icon: logo,
    question: "Can I personalise my t-shirt?",
    answer:
      "Certainly, this application allows for seamless personalisation by enabling the upload of custom logos or images onto the t-shirt design",
  },
  {
    id: 3,
    icon: feature,
    question: "What is need for Unsplash integration ?",

    answer: `The Unsplash integration feature harnesses the power of Unsplash technology, generating unique images that for t-shirt as logos or designs`,
  },
  {
    id: 4,
    icon: remove,
    question: "Can I remove applied logos?",

    answer:
      "Yes, users have the freedom to remove any logos or images that have been applied to the t-shirt by simply clicking the remove button.",
  },
  {
    id: 5,
    icon: download,
    question: " Can I download my designs?",

    answer:
      "Absolutely, users can preserve their masterpiece by downloading the completed t-shirt design as an image file, or you can share it.",
  },

  {
    id: 6,
    icon: maximum,
    question: "Any limit to logos or images?",

    answer:
      "No specific limit is mentioned regarding the number of logos or images that can be uploaded, thus allowing users to personalise their t-shirts freely",
  },

  {
    id: 7,
    icon: preview,
    question: " Can I preview the t-shirt?",

    answer:
      "The availability of a preview feature is not specified in the provided information. It is advisable to explore the application to determine if such a feature exists.",
  },

  {
    id: 8,
    icon: restriction,
    question: "Any restrictions on the file format?",

    answer:
      "The information does not mention any restrictions on file format or size. Users can likely upload logos or images in common formats such as JPEG or PNG",
  },
  {
    id: 9,
    icon: additional,
    question: "Any additional customisation options ?",

    answer:
      "Aside from color selection, image upload, Unsplash integration, removal and downloading options, no other specific options are mentioned. ",
  },
];

export default questionsAnswers;
