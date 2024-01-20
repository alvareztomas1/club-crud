describe("team info route", () => {

	beforeEach(() => {
		cy.visit("http://localhost:3000/info/ARS/57");
		cy.intercept("GET", "http://localhost:8080/info/ARS/57",{
			fixture: "arsenal.json"
		}).as("getArsenalData");
	});

	it("verifies navigatin to the correct url with team info button", () => {
		cy.url().should("eq", "http://localhost:3000/info/ARS/57");

		cy.fixture("arsenal.json").then((teamInfo)=> {
			cy.get("#contact").should("be.visible");
			cy.get("#team-details").should("be.visible");

			cy.get("#team-name").should("have.text", teamInfo.name);
			cy.get("#phone").should("have.text", teamInfo.phone);
			cy.get("#website").should("have.text", teamInfo.website);
			cy.get("#email").should("have.text", teamInfo.email);
			cy.get("#stadium").should("have.text", `Stadium: ${teamInfo.venue}`);
			cy.get("#foundedYear").should("have.text", `Founded year: ${teamInfo.founded}`);
			cy.get("#address").should("have.text", `Address: ${teamInfo.address}`);

			cy.get(".team-info-logo").invoke("prop", "src").then((src) => {
				expect(src).to.equal(teamInfo.crestUrl);
			});

		});

	});

	it("verifies operation buttons", () => {
		cy.fixture("arsenal.json").then((teamInfo)=> {
			cy.get("#back-button").invoke("prop", "href").then((href) => {
				expect(href).to.equal("http://localhost:3000/");
			});
			cy.get("#edit-button").invoke("prop", "href").then((href) => {
				expect(href).to.equal(`http://localhost:3000/edit/${teamInfo.tla}/${teamInfo.id}`);
			});
			cy.get(`#show-${teamInfo.id}-modal-button`).click();
			cy.get(`#${teamInfo.id}-modal`).should("be.visible");
            
			cy.get(`#${teamInfo.id}-delete-button`).invoke("prop", "href").then((href) => {
				expect(href).to.equal(`http://localhost:3000/delete-team/${teamInfo.id}`);
			});

			cy.get("body").click("topRight");
			cy.get(`#${teamInfo.id}-modal`).should("not.exist");
		});

	});

});