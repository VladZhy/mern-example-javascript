import { PreviewDeleteButton, PreviewErrorIcon } from './components';
import { StyledPreviewErrorContainer } from './style';
import './styles.css';

const PreviewError = ({ type, errorMessage, onDelete, ...props }) => {
	return (
		<StyledPreviewErrorContainer {...props}>
			<PreviewDeleteButton onClick={onDelete} />
			<PreviewErrorIcon type={type} />
			<p className="preview-error__message">{errorMessage}</p>
		</StyledPreviewErrorContainer>
	);
};

export default PreviewError;
