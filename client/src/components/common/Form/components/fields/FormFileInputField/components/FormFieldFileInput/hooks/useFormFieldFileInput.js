import { useCallback, useState } from 'react';
import { useFormikContext } from 'formik';

const useFormFieldFileInput = (fieldName) => {
  const [fileDetailsList, setFileDetailsList] = useState([]);
  const { setFieldValue } = useFormikContext();

  const updateFieldValues = useCallback(
    (newFileDetailsList) => {
      const fieldValues = getFieldValues(newFileDetailsList);

      setFieldValue(fieldName, fieldValues);
    },
    [setFieldValue, fieldName]
  );

  return { fileDetailsList, setFileDetailsList, updateFieldValues };
};

export default useFormFieldFileInput;

function getFieldValues(fileDetailsList) {
  return fileDetailsList.map((fileDetailsList) => fileDetailsList.file);
}
