import React from "react";
import Loading from "../Loading";
import restoreDataBaseHook from "../../hooks/restoreDatabaseHook";
import { getRestoredDatabase } from "../../api/teams";
import mapTeamsList from "../../mapper/mapper";


const RestoreDatabase = () => {

	restoreDataBaseHook(getRestoredDatabase, mapTeamsList);

	return (
		<Loading loading={true}/>
	);
};

export default RestoreDatabase;