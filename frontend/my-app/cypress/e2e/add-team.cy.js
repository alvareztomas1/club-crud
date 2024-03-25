///<reference types="cypress" />
import "cypress-file-upload";

describe("add team", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/add-team");

		cy.fixture("Boca_escudo.png").then((content) => {
			const logo = {
				fileContent: content,
				fileName: "Boca_escudo.png",
				mimeType: "image/png",
			};

			cy.get("#logo").attachFile(logo);
		});

	});
	describe("form validation", () => {
		it("verifies placeholders have the correct info", () => {
			cy.fixture("arsenal.json").then((teamInfo) => {
    
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
			cy.get("#email").type("aSDL@ASKD123");
			

			cy.get("#add-team-button").click();
			cy.get(".invalid-feedback").should("be.visible");

			cy.get("#name-feedback").invoke("text").should("eq", "Please enter a valid club name. It must be between 3 and 30 characters.");
			cy.get("#name").should("have.class", "form-control is-invalid");

			cy.get("#name-abbreviation-feedback").invoke("text").should("eq", "Please enter a valid shortname. It must be a three capital letters.");
			cy.get("#name").should("have.class", "form-control is-invalid");

			cy.get("#website-feedback").invoke("text").should("eq", "Please enter a valid website. It must match the example.");
			cy.get("#website").should("have.class", "form-control is-invalid");

			cy.get("#phone-feedback").invoke("text").should("eq", "Please enter a valid phone number. It must follow the international format.");
			cy.get("#phone").should("have.class", "form-control is-invalid");
  
			cy.get("#address-feedback").invoke("text").should("eq", "Please enter a valid address. It must be between 5 and 35 characters. The valid special characters are: - , . ’ °.");
			cy.get("#address").should("have.class", "form-control is-invalid");

			cy.get("#stadium-feedback").invoke("text").should("eq", "Please enter a valid stadium name. It must be between 3 and 30 characters and not contain special characters.");
			cy.get("#stadium").should("have.class", "form-control is-invalid");

			cy.get("#email-feedback").invoke("text").should("eq", "Please enter a valid email. It must follow the generic format.");
			cy.get("#email").should("have.class", "form-control is-invalid");
		});
		it("verifies entering valid inputs", () => {
			cy.get("#name").type("#3-3Boca#-#");
			cy.get("#nameAbbreviation").type("BOC");
			cy.get("#stadium").type("La Bombonera");

			cy.get("#email").type("boca@club.com");
			cy.get("#founded-year").type("1915");
			cy.get("#address").type("Brandsen 805");



			cy.get("#website").type("www.boca.com");


			cy.get("#add-team-button").click();


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

			cy.get("#add-team-button").click();

			cy.get("#name").should("have.class", "form-control is-valid");
			cy.get("#name-feedback").should("not.be.visible");



		});
	});
	
	describe("adding a team works propietley", () => {

		it("verifies sending the form's inputs clicking edit team button", () => {

			let newData = {
				name: "New Team",
				tla: "NEW",
				website: "www.newteam.com",
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
				newData.crestUrl = logo;
			});

			cy.fixture("new-teams.json").then((editedTeamsList) => {
				cy.intercept("POST", "http://localhost:8080/add-team", (req) => {
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
				}).as("addNewTeam");
			});

			cy.get("#add-team-button").click();

		});

		it("verifies using the received teams list after edit a team on the home page", () => {

			cy.fixture("new-team.json").then((newTeam) => {
				cy.fixture("new-teams.json").then((newTeamsList) => {
					cy.intercept("GET", `http://localhost:8080/info/${newTeam.tla}/${newTeam.id}`, {
						fixture: "new-team.json"
					}).as("getEditedTeam");
					cy.intercept("POST", "http://localhost:8080/add-team", (req) => {

						cy.url().then((url) => {
							expect(decodeURIComponent(url)).to.equal("http://localhost:3000/?showToast=true&type=success&message=Team added successfully");
						});

						cy.get("#toast").should("be.visible");
						cy.get("#toast").should("have.class", "toast align-items-center text-bg-success border-0");
						cy.get("#toast").should("not.exist");

						cy.get(`#${newTeam.tla}-${newTeam.id}-name`).should("have.text", newTeam.name);

						cy.get(`#${newTeam.tla}-${newTeam.id}-logo`).invoke("prop", "src").then((src) => {
							expect(src).to.equal(newTeam.crestUrl);

						});
						cy.get(`#${newTeam.id}-info-button`).invoke("prop", "href").then((href) => {
							expect(href).to.equal(`http://localhost:3000/info/${newTeam.tla}/${newTeam.id}`);
						});


					
						req.reply(newTeamsList);
					});

					cy.get("#name").type("Boca");
					cy.get("#nameAbbreviation").type("BOC");
					cy.get("#stadium").type("La Bombonera");

					cy.get("#email").type("boca@club.com");
					cy.get("#founded-year").type("1915");
					cy.get("#address").type("Brandsen 805");

					cy.get("#add-team-button").click();
					cy.get(`#${newTeam.id}-info-button`).click();

					cy.url().should("eq", `http://localhost:3000/info/${newTeam.tla}/${newTeam.id}`);

					cy.get("#team-name").should("have.text", newTeam.name);
					cy.get(".team-info-logo").invoke("prop", "src").then((logo) => {
						expect(logo).to.equal(newTeam.crestUrl);
					});
					cy.get("#phone").should("have.text", newTeam.phone);
					cy.get("#email").should("have.text", newTeam.email);
					cy.get("#foundedYear").should("have.text", `Founded year: ${newTeam.founded}`);
					cy.get("#website").should("have.text", newTeam.website);
					cy.get("#stadium").should("have.text",`Stadium: ${newTeam.venue}`);
					cy.get("#address").should("have.text",`Address: ${newTeam.address}`);

				});
			});
				

			
		});
	});

});