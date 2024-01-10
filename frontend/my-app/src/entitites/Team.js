export default class Team {
	constructor(
		id,
		name,
		tla,
		crestUrl,
		address,
		phone,
		website,
		email,
		founded,
		venue,
	) {
		this.id = id;
		this.name = name;
		this.nameAbbreviation = tla;
		this.logo = crestUrl;
		this.address = address;
		this.phone = phone;
		this.website = website;
		this.email = email;
		this.founded = founded;
		this.stadium = venue;
	}
}