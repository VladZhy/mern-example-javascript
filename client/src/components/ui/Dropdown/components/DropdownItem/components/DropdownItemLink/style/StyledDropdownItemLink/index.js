import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDropdownItemLink = styled(Link)`
	display: inline-block;
	font-weight: 500;
	text-decoration: none;
	color: black;
	transition: 0.3s;
	margin-right: 0;
	padding: 1em 3.125em 1em 1.875em;
	width: 100%;

	&:hover {
		background-color: black;
		color: white;
		opacity: 1;
	}
`;

export default StyledDropdownItemLink;
