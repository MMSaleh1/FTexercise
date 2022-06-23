const https = require("node:https");

/**
 * @description  function to retrieve Json data from the given url list
 * @param {array<string>} urls   list of urls to retrieve the data from.
 * @return list of the successfully retrieved Json objects
 */

const requestMultipleUrls = async function (urls) {
  if (!Array.isArray(urls)) throw new TypeError("Expect Parameter to be Array");
  const responses = await Promise.allSettled(
    urls.map((url) => {
      return httpsGetRequest(url);
    })
  );
  return responses;
};
const httpsGetRequest = async (url) => {
  return new Promise((resolve, reject) => {
    const body = [];
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(res);
      }
      res.on("error", (error) => {
        reject(error);
      });
      res.on("data", (data) => body.push(data));
      res.on("end", () => {
        resolve({ data: JSON.parse(Buffer.concat(body)), url });
      });
    });
  });
};

module.exports = {
  requestMultipleUrls,
};
