export async function handleRestoreDatabase(fetchData, mapData, dispatch, navigate) {
	try {
		const restoredDatabase = await fetchData();
		const mappedRestoredDatabase = mapData(restoredDatabase);
		dispatch({ type: "SUCCESS", payload: mappedRestoredDatabase });
		navigate("/?showToast=true&type=success&message=Database restored successfully");
	} catch (e) {
		dispatch({ type: "FAILURE", payload: e });

	}
}