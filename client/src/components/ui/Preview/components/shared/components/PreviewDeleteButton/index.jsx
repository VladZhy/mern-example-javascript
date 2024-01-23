import { StyledPreviewDeleteButton } from './style';
import { PreviewDeleteButtonIcon } from './icons';
import './styles.css';

const PreviewDeleteButton = ({ ...props }) => {
	return (
		<StyledPreviewDeleteButton {...props}>
			<PreviewDeleteButtonIcon
				alt="Delete"
				title="Delete"
				className="preview-delete-button__icon"
			/>
		</StyledPreviewDeleteButton>
	);
};

export default PreviewDeleteButton;
