import './App.css';
import BannerSection from './BannerSection';
import CollectionList from './CollectionList';
import Header from './header/HeaderNavbar'; // Make sure to check case sensitivity in the path
import products from './data/products.json'; // Adjust the path to your product.json

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <CollectionList collectionTitle="Best Sellers" products={products} />
      <CollectionList collectionTitle="Beverages" products={products} />
    </div>
  );
}

export default App;