import { IImage } from "../../../types/image";

function Image({ imageSrc, className }: IImage) {
  return <img className={`${className} `} src={imageSrc} alt={imageSrc} />;
}

export default Image;
