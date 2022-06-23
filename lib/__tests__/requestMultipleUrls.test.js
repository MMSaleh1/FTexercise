const { requestMultipleUrls } = require("../requestMultipleUrls");
describe("Testing requestMultipleUrls function", () => {
  it("should throw if Parameter is not Array", async () => {
    requestMultipleUrls("test").catch((err) => {
      expect(err.message).toEqual("Expect Parameter to be Array");
    });
  });
  it("should request data from the urls", async () => {
    const urls = [
      "https://ft-tech-test-example.s3.amazonaws.com/ftse-fsi.json",
      "https://ft-tech-test-example.s3.amazonaws.com/gbp-hkd.json",
      "https://ft-tech-test-example.s3.amazonaws.com/gbp-usd.json",
      "wrongURl.com",
      "NotWorking.net",
      "FakerURL.org",
    ];
    const result = await requestMultipleUrls(urls);
    expect(result.length).toEqual(6);
    expect(result.map((r) => r.status)).toEqual([
      "fulfilled",
      "fulfilled",
      "fulfilled",
      "rejected",
      "rejected",
      "rejected",
    ]);
  });
});
