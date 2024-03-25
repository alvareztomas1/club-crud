///<reference types="cypress" />

describe("delete a team", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");

		cy.intercept("GET", "http://localhost:8080/teams", {
			fixture: "teams.json"
		}).as("getTeams");

		cy.intercept("DELETE", "http://localhost:8080/delete/57", {
			fixture: "delete-team.json"
		}).as("deleteTeam");
	});

	it("verifies deleting a team", () => {


		cy.intercept("GET", "http://localhost:8080/restore-database", {
			fixture: "teams-backup.json"
		}).as("getRestoredDatabase");

		cy.get("#show-57-modal-button").click();
		cy.get("#57-delete-button").click();

		
		cy.get("#show-57-modal-button").should("not.exist");
		cy.get("#ARS-57-logo").should("not.exist");
		cy.get("#ARS-57-name").should("not.exist");
		cy.get("#57-info-button").should("not.exist");
		cy.get("#57-edit-button").should("not.exist");
        
		cy.get("#restore-button").click();

		cy.get("#toast").should("be.visible");
		cy.get("#toast").should("have.class", "toast align-items-center text-bg-success border-0");
                    
		cy.get("#show-57-modal-button").should("exist");
		cy.get("#ARS-57-logo").should("exist");
		cy.get("#ARS-57-name").should("exist");
		cy.get("#57-info-button").should("exist");
		cy.get("#57-edit-button").should("exist");
		cy.get("#toast").should("not.exist");

	});
});