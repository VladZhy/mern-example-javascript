import { PreviewDeleteButton, PreviewImage } from './components';
import { StyledPreviewFileContainer } from './style';

const PreviewFile = ({ type, file, onDelete, ...props }) => {
	return (
		<StyledPreviewFileContainer {...props}>
			<PreviewDeleteButton onClick={onDelete} />
			{type === 'image' ? <PreviewImage src={file} /> : null}
		</StyledPreviewFileContainer>
	);
};

export default PreviewFile;
