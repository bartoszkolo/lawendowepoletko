import { onRequest, onRequestPost } from "../functions/api/lead.js";

export default {
  async fetch(request) {
    if (request.method === "POST") {
      return onRequestPost({ request, env: process.env });
    }

    return onRequest();
  },
};
