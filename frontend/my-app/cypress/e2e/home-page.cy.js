///<reference types="cypress" />


describe("home page", () => {
	beforeEach(() => {
		cy.visit("localhost:3000");
		cy.intercept("GET", "http://localhost:8080/teams", {
			fixture: "teams.json"
		}).as("getTeamsList");
		cy.wait("@getTeamsList");

	});



	it("verifies team title and amount of teams with each buttons", () => {
		cy.get("#loading").should("be.visible");

		cy.fixture("teams.json").then((teamsList) => {
			cy.get("#loading").should("not.be.visible");
			cy.get("title").should("have.text", " Club CRUD Web ");
			cy.get("#title").should("have.text", "Club Crud Web");
			cy.get(".team").should("have.length", teamsList.length);
			cy.get(".team-buttons").should("have.length", teamsList.length);
		});
	});
	it("verifies each team has correct logo and name", () => {
		cy.fixture("teams.json").then((teamsList) => {
			teamsList.forEach((team, index) => {
				cy.get(".logo").eq(index).invoke("prop", "src").then((source) => {
					expect(source).to.equal(team.crestUrl);
				});

				cy.get(".team-name").eq(index).should("have.text", team.name);
			});
		});
	});
	it("verifies team info and team edit buttons have correct href", () => {
		cy.fixture("teams.json").then((teamsList) => {

			teamsList.forEach((team) => {

				cy.get(`#${team.id}-info-button`).invoke("prop", "href").then((href) => {
					expect(href).to.equal(`http://localhost:3000/info/${team.tla}/${team.id}`);
				});
				cy.get(`#${team.id}-edit-button`).invoke("prop", "href").then((href) => {
					expect(href).to.equal(`http://localhost:3000/edit/${team.tla}/${team.id}`);
				});
			});
		});
	});
	it("verifies modals have correct href and are being opened and closed with each buttons ", () => {
		cy.fixture("teams.json").then((teamsList) => {

			teamsList.forEach((team) => {
				cy.get(`#show-${team.id}-modal-button`).click();
				cy.get(`#${team.id}-modal`).should("be.visible");
				cy.get(`#${team.id}-delete-button`).invoke("prop", "href").then((href) => {
					expect(href).to.equal(`http://localhost:3000/delete-team/${team.id}`);
				});
				cy.get("body").click("topRight");
				cy.get(`#${team.id}-modal`).should("not.exist");

			});
		});
	});




});
