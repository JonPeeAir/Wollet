import * as dotenv from "dotenv";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  Configuration,
  PlaidApi,
  PlaidEnvironments,
  Products,
  CountryCode,
} from "plaid";

dotenv.config();

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SANDBOX_SECRET,
    },
  },
});

const client = new PlaidApi(configuration);

export default async function(req: VercelRequest, res: VercelResponse) {
  const configs = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: "user-id",
    },
    client_name: "Wollet",
    products: [Products.Auth, Products.Transactions],
    country_codes: [CountryCode.Us, CountryCode.Ca],
    language: "en",
  };

  const createTokenResponse = await client.linkTokenCreate(configs);
  res.json(createTokenResponse.data);
}
