/* eslint-disable @typescript-eslint/camelcase */
import { GoogleSpreadsheet } from 'google-spreadsheet';

const sheetsApi = async (): Promise<GoogleSpreadsheet> => {
  const {
    REACT_APP_SHEETS_ID,
    REACT_APP_SHEETS_CLIENT_EMAIL,
    REACT_APP_SHEETS_PRIVATE_KEY,
  } = process.env;

  if (!REACT_APP_SHEETS_ID) throw new Error('Spreadsheet: ID not declared');

  const docSheets = new GoogleSpreadsheet(REACT_APP_SHEETS_ID);

  if (!REACT_APP_SHEETS_CLIENT_EMAIL)
    throw new Error('Spreadsheet: client_email not declared');

  if (!REACT_APP_SHEETS_PRIVATE_KEY)
    throw new Error('Spreadsheet: private_key not declared');

  await docSheets.useServiceAccountAuth({
    client_email: REACT_APP_SHEETS_CLIENT_EMAIL,
    private_key: REACT_APP_SHEETS_PRIVATE_KEY,
  });

  await docSheets.loadInfo();

  return docSheets;
};

export default sheetsApi;
