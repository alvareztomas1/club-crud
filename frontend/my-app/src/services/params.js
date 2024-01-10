export default function paramSearch(param){
	const selectedParam = new URLSearchParams(location.search).get(param);
	return selectedParam;
}