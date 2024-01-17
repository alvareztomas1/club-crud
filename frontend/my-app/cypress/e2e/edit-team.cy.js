///<reference types="cypress" />
import "cypress-file-upload";


describe("edit team page", () => {
	beforeEach(() => {
		cy.visit("localhost:3000/edit/ARS/57");

		cy.intercept("GET", "http://localhost:8080/teams", {
			fixture: "teams.json"
		}).as("getTeamsList");

		cy.wait("@getTeamsList");
	});

	describe("form validation", () => {

		it("verifies placeholders have team information", () => {
			cy.fixture("arsenal.json").then((teamInfo) => {
				cy.url().should("eq", "http://localhost:3000/edit/ARS/57");

				cy.get("#name").invoke("prop", "placeholder").then((placeholder) => {
					expect(placeholder).to.equal(teamInfo.name);
				});
				cy.get("#nameAbbreviation").invoke("prop", "placeholder").then((placeholder) => {
					expect(placeholder).to.equal(teamInfo.tla);
				});
				cy.get("#website").invoke("prop", "placeholder").then((placeholder) => {
					expect(placeholder).to.equal(teamInfo.website);
				});
				cy.get("#phone").invoke("prop", "placeholder").then((placeholder) => {
					expect(placeholder).to.equal(teamInfo.phone);
				});
				cy.get("#founded-year").invoke("prop", "placeholder").then((placeholder) => {
					expect(placeholder).to.equal(`${teamInfo.founded}`);
				});
				cy.get("#address").invoke("prop", "placeholder").then((placeholder) => {
					expect(placeholder).to.equal(teamInfo.address);
				});
				cy.get("#stadium").invoke("prop", "placeholder").then((placeholder) => {
					expect(placeholder).to.equal(teamInfo.venue);
				});
				cy.get("#email").invoke("prop", "placeholder").then((placeholder) => {
					expect(placeholder).to.equal(teamInfo.email);
				});



			});
			

		});
		it("verifies entering invalid inputs", () => {
			cy.get(".invalid-feedback").should("not.be.visible");

			cy.get("#name").should("have.class", "form-control is-");
			cy.get("#nameAbbreviation").should("have.class", "form-control is-");
			cy.get("#website").should("have.class", "form-control is-");
			cy.get("#phone").should("have.class", "form-control is-");
			cy.get("#founded-year").should("have.class", "form-control is-");
			cy.get("#address").should("have.class", "form-control is-");
			cy.get("#stadium").should("have.class", "form-control is-");
			cy.get("#email").should("have.class", "form-control is-");

			cy.get("#name").type("#-.32-");
			cy.get("#nameAbbreviation").type("asd");
			cy.get("#website").type("#aSDLASKD123");
			cy.get("#phone").type("#aSDLASKD123");
			cy.get("#founded-year").type("#0000");
			cy.get("#address").type("#aSDLASKD123-");
			cy.get("#stadium").type("#aSDLASKD123-");
			cy.get("#email").type("aSDLASKD123");

			cy.get("#confirm-edit-button").click();
			cy.get(".invalid-feedback").should("be.visible");

			cy.get("#name-feedback").invoke("text").should("eq", "Please enter a valid club name. It must be between 3 and 30 characters.");
			cy.get("#name").should("have.class", "form-control is-invalid");

			cy.get("#name-abbreviation-feedback").invoke("text").should("eq", "Please enter a valid shortname. It must be a three capital letters.");
			cy.get("#name").should("have.class", "form-control is-invalid");

			cy.get("#website-feedback").invoke("text").should("eq", "Please enter a valid website. It must match the example.");
			cy.get("#website").should("have.class", "form-control is-invalid");

			cy.get("#phone-feedback").invoke("text").should("eq", "Please enter a valid phone number. It must follow the international format.");
			cy.get("#phone").should("have.class", "form-control is-invalid");
		    
			cy.get("#address-feedback").invoke("text").should("eq", "Please enter a valid address. The valid special characters are: - , . ’ °.");
			cy.get("#address").should("have.class", "form-control is-invalid");

			cy.get("#stadium-feedback").invoke("text").should("eq", "Please enter a valid stadium name. It must be between 3 and 30 characters and not contain special characters.");
			cy.get("#stadium").should("have.class", "form-control is-invalid");

			cy.get("#email-feedback").invoke("text").should("eq", "Please enter a valid email. It must follow the generic format.");
			cy.get("#email").should("have.class", "form-control is-invalid");
		});
		it("verifies entering valid inputs", () => {
			cy.get("#name").type("#asdaslñ");
			cy.get("#confirm-edit-button").click();


			cy.get("#nameAbbreviation").should("have.class", "form-control is-valid");
			cy.get("#name-abbreviation-feedback").should("not.be.visible");

			cy.get("#website").should("have.class", "form-control is-valid");
			cy.get("#website-feedback").should("not.be.visible");

			cy.get("#phone").should("have.class", "form-control is-valid");
			cy.get("#phone-feedback").should("not.be.visible");

			cy.get("#founded-year").should("have.class", "form-control is-valid");
			cy.get("#founded-year-feedback").should("not.be.visible");

			cy.get("#address").should("have.class", "form-control is-valid");
			cy.get("#address-feedback").should("not.be.visible");

			cy.get("#stadium").should("have.class", "form-control is-valid");
			cy.get("#stadium-feedback").should("not.be.visible");

			cy.get("#email").should("have.class", "form-control is-valid");
			cy.get("#email-feedback").should("not.be.visible");

			cy.get("#name").clear();
			cy.get("#name").type("Arsenal");
			cy.get("#nameAbbreviation").type("#asdaslñ");

			cy.get("#confirm-edit-button").click();

			cy.get("#name").should("have.class", "form-control is-valid");
			cy.get("#name-feedback").should("not.be.visible");



		});
		
	});

	describe("editing a team works propietley", () => {
		
		it("verifies sending the form's inputs clicking edit team button", () => {

			let newData = {
				name: "Arsenal",
				tla: "ASD",
				website: "www.arsenal.com",
				phone: "+44 (020) 11111111",
				founded: "1999",
				address: "new address 1500",
				venue: "new stadium",
				email: "newemail@gmail.com",
				crestUrl: null
			};

			cy.get("#name").clear().type(newData.name);
			cy.get("#nameAbbreviation").clear().type(newData.tla);
			cy.get("#website").clear().type(newData.website);
			cy.get("#phone").clear().type(newData.phone);
			cy.get("#founded-year").clear().type(newData.founded);
			cy.get("#address").clear().type(newData.address);
			cy.get("#stadium").clear().type(newData.venue);
			cy.get("#email").clear().type(newData.email);

			cy.fixture("Boca_escudo.png").then((content) => {
				const logo = {
					fileContent: content,
					fileName: "Boca_escudo.png",
					mimeType: "image/png",
				};

				cy.get("#logo").attachFile(logo);
				newData.crestUrl = logo;
			});

			cy.fixture("edited-teams.json").then((editedTeamsList) => {
				cy.intercept("POST", "http://localhost:8080/edit/ARS/57", (req) => {
					const formData = req.body;
					
					expect(formData).to.include(newData.name);
					expect(formData).to.include(newData.address);
					expect(formData).to.include(newData.website);
					expect(formData).to.include(newData.tla);
					expect(formData).to.include(newData.email);
					expect(formData).to.include(newData.founded);
					expect(formData).to.include(newData.phone);
					expect(formData).to.include(newData.venue);
					expect(formData).to.include(newData.crestUrl.fileContent);


					req.reply(editedTeamsList);
				});
			});

			cy.get("#confirm-edit-button").click();

		});

		it("verifies using the received teams list after edit a team on the home page", () => {

			cy.fixture("teams.json").then((firstTeamsList) => {
				cy.fixture("edited-teams.json").then((editedTeamsList) => {
					cy.intercept("POST", "http://localhost:8080/edit/ARS/57", (req) => {
						
						cy.url().then((url) => {
							expect(decodeURIComponent(url)).to.equal("http://localhost:3000/?showToast=true&type=primary&message=Team edited successfully");
						});
	
						cy.get("#toast").should("be.visible");
						cy.get("#toast").should("have.class", "toast align-items-center text-bg-primary border-0");
						cy.get("#toast").should("not.exist");
						
						cy.get(".team-name").eq(0).should("have.text", editedTeamsList[0].name);
						cy.get(".team-name").eq(0).should("not.have.text", firstTeamsList[0].name);
						
						cy.get(".logo").invoke("prop", "src").then((src) => {
							expect(src).to.equal(editedTeamsList[0].crestUrl);
							expect(src).to.not.equal(firstTeamsList[0].crestUrl);

						});
						cy.get(`#${firstTeamsList[0].id}-info-button`).invoke("prop", "href").then((href) => {
							expect(href).to.equal(`http://localhost:3000/info/${editedTeamsList[0].tla}/${editedTeamsList[0].id}`);
						});
	
			
						req.reply(editedTeamsList);
					});
				});
	
			});
	
			cy.get("#confirm-edit-button").click();
		});
	});
	

});