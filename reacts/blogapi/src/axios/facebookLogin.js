import axios from 'axios';
import { useHistory } from 'react-router-dom';

const facebookLogin = (accesstoken) => {
	console.log(accesstoken);
	axios
		.post('http://127.0.0.1:8000/auth/convert-token', {
			token: accesstoken,
			backend: 'facebook',
			grant_type: 'convert_token',
			client_id: 'uBq1Dus7io1iUz5b0U4IsgmzZxfVzN4xF4fUnhwf',
			client_secret:
				'NR96Vya3u03FIW6mNwigBgVPRrkxWNm66t9F6wR6iD5TPbX9spADpNfIhfZ0pQVLNSc7MkpsHKRODpB4jUYBRlBGUunXsDNDhKhX3uwqFP09gkn9tvqo4hfptkv16JP0',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default facebookLogin;
