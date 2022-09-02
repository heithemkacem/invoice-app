import Link from "next/link";
import { useRouter } from "next/router";

const url =
  "mongodb+srv://heithemkacem:yMlJPDZetw7WAsgU@cluster0.okjmu.mongodb.net/invoices?retryWrites=true&w=majority";

export async function getStaticProps() {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();
  const invoicesCollection = db.collection("invoices");
  const invoices = await invoicesCollection.find().toArray();
  client.close();
  return {
    props: {
      invoices: invoices.map((invoice) => ({
        id: invoice._id.toString(),
        senderStreet: invoice.senderStreet,
        senderCity: invoice.senderCity,
        senderPostal: invoice.senderPostal,
        senderCountry: invoice.senderCountry,
        clientName: invoice.clientName,
        clientEmail: invoice.clientEmail,
        clientStreet: invoice.clientStreet,
        clientCity: invoice.clientCity,
        clientPostal: invoice.clientPostal,
        clientCountry: invoice.clientCountry,
        createdAt: invoice.createdAt,
        paymentTerms: invoice.paymentTerms,
        description: invoice.description,
        status: invoice.status,
        items: invoice.items,
        totalAmount: invoice.totalAmount,
      })),
    },
    revalidate: 1,
  };
}
const Home = () => {
  const router = useRouter();
  const navigatePage = () => {
    router.push("/add-new");
  };
  return (
    <div className="main__container">
      <div className="invoice__header">
        <div className="invoice__header__logo">
          <h3>Invoices</h3>
          <p>There a total of 7 invoices</p>
        </div>
        <button className="btn" onClick={navigatePage}>
          Add New
        </button>
      </div>
      <div className="invoice__container">
        <Link href={`/invoices/id`} passRef>
          <div className="invoice__item">
            <div>
              <h5 className="invoice__id">TRSD5G</h5>
            </div>
            <div>
              <h6 className="invoice__client">Jhon doa</h6>
            </div>
            <div>
              <p className="invoice__created">2589-855-5855</p>
            </div>
            <div>
              <h3 className="invoice__total">128785</h3>
            </div>
            <div>
              <button className="pending__status">Pending</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
