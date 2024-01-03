export const useAuth = async (url, options) => {
	const token = useCookie("XSRF-TOKEN");

	let headers = {};
  

	if (token.value) {
		headers = {
			"X-XSRF-TOKEN": token.value,
		};
	}

	if(process.server) {
		headers = {
			...headers,
			...useRequestHeaders(['refers', 'cookie'])
		};
	}

	return await useFetch("http://localhost:8000" + url, {
		credentials: "include",
		...options,
		headers: {
			...headers,
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	}, {server : true});
};
