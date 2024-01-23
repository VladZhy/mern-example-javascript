import { StyledPreviewImage } from './style';

const PreviewImage = ({ ...props }) => {
	return <StyledPreviewImage alt="Preview" {...props} />;
};

export default PreviewImage;
