const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");

const { expect } = chai;

chai.use(chaiHttp);
const token = "wwdewfre4";
const moduleId = "b4182605-7840-11ec-a5a7-0ad7b1b44f95";
const roleId = "0973c796-6b58-4742-a2e4-de9a275e8ec3";

describe("Positive test case for  Admin Role", () => {
  /*
   * Test the /GET route to get All Licensed Modules
   */
  it("It should GET All Entity Roles", (done) => {
    chai
      .request(server)
      .get(`/api/timesheet/admin/role?moduleId=${moduleId}`)
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(200);
        expect(res.body.payLoad.entityRoles.length).to.not.equal(0);
        done();
      });
  });

  it("It should  get Entity Roles and Role Details", (done) => {
    chai
      .request(server)
      .get(`/api/timesheet/admin/role?moduleId=${moduleId}&roleId=${roleId}`)
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(200);
        expect(res.body.payLoad.entityRoles.length).to.not.equal(0);
        expect(res.body.payLoad.role.roleId).to.equal(roleId);
        done();
      });
  });

  it("It should  get All Roles", (done) => {
    chai
      .request(server)
      .get(`/api/timesheet/admin/role/allroles?moduleId=${moduleId}`)
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(200);
        expect(res.body.payLoad.length).to.not.equal(0);
        done();
      });
  });

  it("It should Create a Role ", (done) => {
    chai
      .request(server)
      .post("/api/timesheet/admin/role")
      .set("Authorization", token)
      .send({
        roleName: "save_test_6",
        roleDesc: "sde",
        twoFactorAuth: "Y",
        roleEntityRights: [
          { entityRightsId: "e10d5ebd-7855-11ec-a5a7-0ad7b1b44f95" },
          { entityRightsId: "e10d59fc-7855-11ec-a5a7-0ad7b1b44f95" },
        ],
        moduleId: "b4182605-7840-11ec-a5a7-0ad7b1b44f95",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(201);
        done();
      });
  });

  it("It should Update a Role ", (done) => {
    chai
      .request(server)
      .put("/api/timesheet/admin/role")
      .set("Authorization", token)
      .send({
        roleName: "SAve",
        roleDesc: "abc",
        twoFactorAuth: "N",
        roleEntityRights: [
          { entityRightsId: "e10d5ebd-7855-11ec-a5a7-0ad7b1b44f95" },
          { entityRightsId: "e10d59fc-7855-11ec-a5a7-0ad7b1b44f95" },
        ],
        moduleId: "b4182605-7840-11ec-a5a7-0ad7b1b44f95",
        roleId: "0973c796-6b58-4742-a2e4-de9a275e8ec3",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(201);
        done();
      });
  });

  it("It should Delete a Role ", (done) => {
    chai
      .request(server)
      .put("/api/timesheet/admin/role/deleterole")
      .set("Authorization", token)
      .send({
        moduleId:"b4182605-7840-11ec-a5a7-0ad7b1b44f95",
        roleId: "2ec23e10-5416-4f0b-a1c2-1f6e29d407b3",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(200);
        done();
      });
  });
});

describe("Negative test case for  Admin Role", () => {
  it("It should not get Entity Roles", (done) => {
    chai
      .request(server)
      .get("/api/timesheet/admin/role?moduleId=")
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(200);
        expect(res.body.payLoad.entityRoles.length).to.equal(0);
        done();
      });
  });

  it("It should not get All Roles", (done) => {
    chai
      .request(server)
      .get(`/api/timesheet/admin/role/allroles?moduleId=`)
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(200);
        expect(res.body.payLoad.length).to.equal(0);
        done();
      });
  });

  it("It should not Create a Role,Role Entity Rights are required", (done) => {
    chai
      .request(server)
      .post("/api/timesheet/admin/role")
      .set("Authorization", token)
      .send({
        roleName: "save_test_2",
        roleDesc: "sde",
        twoFactorAuth: "Y",
        moduleId: "b4182605-7840-11ec-a5a7-0ad7b1b44f95",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });

  it("It should not Create a Role,Role Name is required", (done) => {
    chai
      .request(server)
      .post("/api/timesheet/admin/role")
      .set("Authorization", token)
      .send({
        roleDesc: "sde",
        twoFactorAuth: "Y",
        roleEntityRights: [
          { entityRightsId: "e10d5ebd-7855-11ec-a5a7-0ad7b1b44f95" },
          { entityRightsId: "e10d59fc-7855-11ec-a5a7-0ad7b1b44f95" },
        ],
        moduleId: "b4182605-7840-11ec-a5a7-0ad7b1b44f95",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });

  it("It should not Create a Role,Role Description is required", (done) => {
    chai
      .request(server)
      .post("/api/timesheet/admin/role")
      .set("Authorization", token)
      .send({
        roleName: "save_test_3",
        twoFactorAuth: "Y",
        roleEntityRights: [
          { entityRightsId: "e10d5ebd-7855-11ec-a5a7-0ad7b1b44f95" },
          { entityRightsId: "e10d59fc-7855-11ec-a5a7-0ad7b1b44f95" },
        ],
        moduleId: "b4182605-7840-11ec-a5a7-0ad7b1b44f95",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });

  it("Duplicate Role Name", (done) => {
    chai
      .request(server)
      .post("/api/timesheet/admin/role")
      .set("Authorization", token)
      .send({
        roleName: "Admin",
        roleDesc: "ASDFG",
        twoFactorAuth: "Y",
        roleEntityRights: [
          { entityRightsId: "e10d5ebd-7855-11ec-a5a7-0ad7b1b44f95" },
          { entityRightsId: "e10d59fc-7855-11ec-a5a7-0ad7b1b44f95" },
        ],
        moduleId: "b4182605-7840-11ec-a5a7-0ad7b1b44f95",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        done();
      });
  });

  it("Cannot Update Role,Role description is required", (done) => {
    chai
      .request(server)
      .put("/api/timesheet/admin/role")
      .set("Authorization", token)
      .send({
        roleName: "SAve",
        twoFactorAuth: "N",
        roleEntityRights: [
          { entityRightsId: "e10d5ebd-7855-11ec-a5a7-0ad7b1b44f95" },
          { entityRightsId: "e10d59fc-7855-11ec-a5a7-0ad7b1b44f95" },
        ],
        moduleId: "b4182605-7840-11ec-a5a7-0ad7b1b44f95",
        roleId: "0973c796-6b58-4742-a2e4-de9a275e8ec3",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });

  it("Cannot Update Role,Role Name is required", (done) => {
    chai
      .request(server)
      .put("/api/timesheet/admin/role")
      .set("Authorization", token)
      .send({
        roleDesc:'wfe',
        twoFactorAuth: "N",
        roleEntityRights: [
          { entityRightsId: "e10d5ebd-7855-11ec-a5a7-0ad7b1b44f95" },
          { entityRightsId: "e10d59fc-7855-11ec-a5a7-0ad7b1b44f95" },
        ],
        moduleId: "b4182605-7840-11ec-a5a7-0ad7b1b44f95",
        roleId: "0973c796-6b58-4742-a2e4-de9a275e8ec3",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });

  it("Cannot Update Role,Role Entity Rights are required", (done) => {
    chai
      .request(server)
      .put("/api/timesheet/admin/role")
      .set("Authorization", token)
      .send({
        roleName:'SAve',
        roleDesc:'wfe',
        twoFactorAuth: "N",
        moduleId: "b4182605-7840-11ec-a5a7-0ad7b1b44f95",
        roleId: "0973c796-6b58-4742-a2e4-de9a275e8ec3",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });

  it("Cannot Update Role,Role Name already Exist", (done) => {
    chai
      .request(server)
      .put("/api/timesheet/admin/role")
      .set("Authorization", token)
      .send({
        roleName:"Admin",
        roleDesc:'Admin',
        twoFactorAuth: "N",
        roleEntityRights: [
          { entityRightsId: "e10d5ebd-7855-11ec-a5a7-0ad7b1b44f95" },
          { entityRightsId: "e10d59fc-7855-11ec-a5a7-0ad7b1b44f95" },
        ],
        moduleId: "b4182605-7840-11ec-a5a7-0ad7b1b44f95",
        roleId: "0973c796-6b58-4742-a2e4-de9a275e8ec3",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        done();
      });
  });

  it("Cannot Update Role,Role Id Not Exists", (done) => {
    chai
      .request(server)
      .put("/api/timesheet/admin/role")
      .set("Authorization", token)
      .send({
        roleName:"AdminNone",
        roleDesc:'Admin',
        twoFactorAuth: "N",
        roleEntityRights: [
          { entityRightsId: "e10d5ebd-7855-11ec-a5a7-0ad7b1b44f95" },
          { entityRightsId: "e10d59fc-7855-11ec-a5a7-0ad7b1b44f95" },
        ],
        moduleId: "b4182605-7840-11ec-a5a7-0ad7b1b44f95",
        roleId: "testing",
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(201);
        expect(res.body.payLoad.affectedRows).to.equal(0);
        done();
      });
  });

  it("Delete Role Failed, Role Id Required ", (done) => {
    chai
      .request(server)
      .put("/api/timesheet/admin/role/deleterole")
      .set("Authorization", token)
      .send({
        moduleId:"b4182605-7840-11ec-a5a7-0ad7b1b44f95"
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });

  it("Delete Role Failed, Role is linked to employee ", (done) => {
    chai
      .request(server)
      .put("/api/timesheet/admin/role/deleterole")
      .set("Authorization", token)
      .send({
        moduleId:"b4182605-7840-11ec-a5a7-0ad7b1b44f95",
        roleId:"dbea54cc-785b-11ec-a5a7-0ad7b1b44f95"
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("DeleteConstraintError");
        done();
      });
  });

});
