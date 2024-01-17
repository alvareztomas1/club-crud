import React from "react";
import Loading from "../Loading";
import restoreDataBaseHook from "../../hooks/restoreDatabaseHook";



const RestoreDatabase = () => {

	restoreDataBaseHook();

	return (
		<Loading loading={true}/>
	);
};

export default RestoreDatabase;