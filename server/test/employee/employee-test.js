const chai = require("chai");
const chaiHttP = require("chai-http");
const server = require("../../app");

const { expect } = chai;

chai.use(chaiHttP);

const token = "dummy";
const employeeId = "16097f33-342b-11ed-bc9e-0a621a0f48af";

describe("Positive test case for Employee", () => {
  it("It should get Employee Basic Details", (done) => {
    chai
      .request(server)
      .get(
        `/api/lakshmi_developers/admin/employee/basic-details?employeeId=${employeeId}`
      )
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(200);
        expect(res.body.payLoad.lenght).to.not.equal(0);
        done();
      });
  });

  it("It should get Employee Compensation", (done) => {
    chai
      .request(server)
      .get(
        `/api/lakshmi_developers/admin/employee/compensation?employeeId=${employeeId}`
      )
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(200);
        expect(res.body.payLoad.lenght).to.not.equal(0);
        done();
      });
  });

  it("It should get Employee Performance", (done) => {
    chai
      .request(server)
      .get(
        `/api/lakshmi_developers/admin/employee/performance?employeeId=${employeeId}`
      )
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(200);
        expect(res.body.payLoad.lenght).to.not.equal(0);
        done();
      });
  });

  it("It should get Employee Previous Experience", (done) => {
    chai
      .request(server)
      .get(
        `/api/lakshmi_developers/admin/employee/previous-experience?employeeId=${employeeId}`
      )
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(200);
        expect(res.body.payLoad.lenght).to.not.equal(0);
        done();
      });
  });

  it("It should get Employee Personal Details", (done) => {
    chai
      .request(server)
      .get(
        `/api/lakshmi_developers/admin/employee/personal-details?employeeId=${employeeId}`
      )
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(200);
        expect(res.body.payLoad.lenght).to.not.equal(0);
        done();
      });
  });
});

describe("Negative test cases for Employee", () => {
  it("It throw error for Employee Basic Details", (done) => {
    chai
      .request(server)
      .get(`/api/lakshmi_developers/admin/employee/basic-details?employeeId=`)
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });

  it("It throw error for Employee Compensation", (done) => {
    chai
      .request(server)
      .get(`/api/lakshmi_developers/admin/employee/compensation?employeeId=`)
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });

  it("It throw error for Employee Performance", (done) => {
    chai
      .request(server)
      .get(`/api/lakshmi_developers/admin/employee/performance?employeeId=`)
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });

  it("It throw error for Employee Previous Experience", (done) => {
    chai
      .request(server)
      .get(
        `/api/lakshmi_developers/admin/employee/previous-experience?employeeId=`
      )
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });

  it("It throw error for Employee Personal Details", (done) => {
    chai
      .request(server)
      .get(
        `/api/lakshmi_developers/admin/employee/personal-details?employeeId=`
      )
      .set("Authorization", token)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.status).to.equal(404);
        expect(res.body.errorCode).to.equal("ValidationError");
        done();
      });
  });
});
