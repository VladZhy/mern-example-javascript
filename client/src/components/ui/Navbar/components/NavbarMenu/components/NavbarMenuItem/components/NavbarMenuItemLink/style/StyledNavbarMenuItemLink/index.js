import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbarMenuItemLink = styled(Link)`
	display: inline-block;
	border-radius: 0.3125em;
	padding: 0.875em 1.375em;
	font-weight: 500;
	text-decoration: none;
	color: black;
	transition: 0.3s;

	@media screen and (max-width: 768px) {
		width: 100%;
		border-radius: 0;
		padding: 1em 0;
	}
`;

export default StyledNavbarMenuItemLink;
