import { Preview } from './components';
import { useFormFieldFileInputPreview } from './hooks';

const FormFieldFileInputPreview = ({
	type,
	fileDetailsList,
	setFileDetailsList,
	updateFieldValues,
	...props
}) => {
	const { deleteFileDetails } = useFormFieldFileInputPreview(
		fileDetailsList,
		setFileDetailsList,
		updateFieldValues
	);

	return (
		<Preview
			type={type}
			fileDetailsList={fileDetailsList}
			onDelete={deleteFileDetails}
			{...props}
		/>
	);
};

export default FormFieldFileInputPreview;
