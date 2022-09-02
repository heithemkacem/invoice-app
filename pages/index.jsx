import Link from "next/link";
import { useRouter } from "next/router";

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
              <button>Pending</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
