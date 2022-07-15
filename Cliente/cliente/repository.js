








// const { google } = require("googleapis");

// const oAuth2Client = new google.auth.OAuth2(
//   "594237670914-njgjdb5uv0stjm49r0vpspfnjq7ec4e4.apps.googleusercontent.com",
//   "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",
//   "http://localhost"
// );

// oAuth2Client.setCredentials({
//   access_token:
//     "ya29.A0AVA9y1uVpMOm_fivmdTwH_hn0D0ScwnA3cWCZcuw-hyBuSQSconRiutqnOP_ccNqNes5oF53OoEo27VOwgZkTYC1OIzW9oPeZdDHoql85bV-scbCBpptR9kX0mosFKohV1_DNGmux3x6GWSwTIIb8xHVLX_oYUNnWUtBVEFTQVRBU0ZRRl91NjFWeW9Kd3pBaDViR1lHZU52WnA5MDcxdw0163",
//   refresh_token:
//     "1//0haZwYL-nefHTCgYIARAAGBESNwF-L9Ir6cWbsQoHeqO_XSpUzktTrCmg9jsRC-C_GkndfYT8zfHCIH_PPm4L-dhQVMrrCqu2NQE",
//   scope: "https://www.googleapis.com/auth/spreadsheets",
//   token_type: "Bearer",
//   expiry_date: 1657243500780,
// });

// const sheets = google.sheets({ version: "v4", auth: oAuth2Client });

// async function read() {
//   const response = await sheets.spreadsheets.values.get({
//     spreadsheetId: "1S5UetEE0VnMuKOg1yXqZWbB3lwMgDKqD9Y9suiCwoc0",
//     range: "Products!A2:F",
//   });

//   const rows = response.data.values;
//   const products = rows.map((row) => ({
//     id: +row[0],
//     name: row[1],
//     price: +row[2],
//     image: row[3],
//     stock: +row[4],
//     category: row[5],
//   }));

//   return products;
// }

// async function write(products) {
//   let values = products.map((p) => [
//     p.id,
//     p.name,
//     p.price,
//     p.image,
//     p.stock,
//     p.category,
//   ]);

//   const resource = {
//     values,
//   };
//   const result = await sheets.spreadsheets.values.update({
//     spreadsheetId: "1S5UetEE0VnMuKOg1yXqZWbB3lwMgDKqD9Y9suiCwoc0",
//     range: "Products!A2:F",
//     valueInputOption: "RAW",
//     resource,
//   });
// }

// async function writeOrders(orders) {
//   let values = orders.map((order) => [
//     order.date,
//     order.preferenceId,
//     order.shipping.name,
//     order.shipping.email,
//     JSON.stringify(order.items),
//     JSON.stringify(order.shipping),
//     order.status,
//   ]);

//   const resource = {
//     values,
//   };
//   const result = await sheets.spreadsheets.values.update({
//     spreadsheetId: "1S5UetEE0VnMuKOg1yXqZWbB3lwMgDKqD9Y9suiCwoc0",
//     range: "Orders!A2:G",
//     valueInputOption: "RAW",
//     resource,
//   });
// }

// async function readOrders() {
//   const response = await sheets.spreadsheets.values.get({
//     spreadsheetId: "1S5UetEE0VnMuKOg1yXqZWbB3lwMgDKqD9Y9suiCwoc0",
//     range: "Orders!A2:G",
//   });

//   const rows = response.data.values || [];
//   const orders = rows.map((row) => ({
//     date: row[0],
//     preferenceId: row[1],
//     name: row[2],
//     email: row[3],
//     items: JSON.parse(row[4]),
//     shipping: JSON.parse(row[5]),
//     status: row[6],
//   }));

//   return orders;
// }

// async function updateOrderByPreferenceId(preferenceId, status) {
//   const orders = await readOrders();
//   const order = orders.find((o) => o.preferenceId === preferenceId);
//   order.status = status;
//   await writeOrders(orders);
// }

// module.exports = {
//   read,
//   write,
//   writeOrders,
//   updateOrderByPreferenceId,
//   readOrders,
// };
