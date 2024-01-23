import { StyledPreviewErrorIcon } from './style';
import { CiImageOff } from 'react-icons/ci';

const PreviewError = ({ type, ...props }) => {
	return (
		<StyledPreviewErrorIcon {...props}>
			{type === 'image' ? <CiImageOff /> : null}
		</StyledPreviewErrorIcon>
	);
};

export default PreviewError;
