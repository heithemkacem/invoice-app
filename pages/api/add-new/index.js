import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://heithemkacem:yMlJPDZetw7WAsgU@cluster0.okjmu.mongodb.net/invoices?retryWrites=true&w=majority";

async function handler(req, res) {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });

  if (req.method === "POST") {
    const invoice = {
      senderAddress: {
        street: req.body.senderStreet,
        city: req.body.senderCity,
        postalCode: req.body.senderPostalCode,
        country: req.body.senderCountry,
      },
      clientName: req.body.clientName,
      clientEmail: req.body.clientEmail,
      clientAddress: {
        street: req.body.clientStreet,
        city: req.body.clientCity,
        postalCode: req.body.clientPostalCode,
        country: req.body.clientCountry,
      },
      createdAt: req.body.createdAt,
      paymentDue: req.body.createdAt,
      paymentTerms: req.body.paymentTerms,
      description: req.body.description,
      status: req.body.status,
      items: req.body.items,
      total: req.body.total,
    };

    const db = client.db();
    const collection = db.collection("allInvoices");
    await collection.insertOne(invoice);

    res.status(200).json({ message: "Invoice added successfully" });

    client.close();
  }
}

export default handler;
