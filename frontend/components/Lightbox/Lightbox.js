
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJsImage";

export default function UseLightbox(props) {
  const {open, close, slides, index} = props
  console.log(slides)
  return (
    <Lightbox
      open={open}
      close={close}
      slides={slides}
      index={index}
      render={{ slide: NextJsImage }}
    />
  )
}
